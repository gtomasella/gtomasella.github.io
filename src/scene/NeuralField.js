import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { dispersedCloud, fibonacciSphere, sampleText } from './shapes.js';

const VERT = /* glsl */ `
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion;
  varying vec3 vColor;
  varying float vFade;
  // Continuous colour flow that also CYCLES between palettes over time.
  // ph = per-particle flow phase, pt = slow palette-cycle phase.
  vec3 paletteFlow(float ph, float pt) {
    vec3 A0 = vec3(0.89, 0.70, 0.235); vec3 A1 = vec3(0.82, 0.50, 0.18);  vec3 A2 = vec3(0.91, 0.92, 0.86); // Ember
    vec3 B0 = vec3(0.94, 0.81, 0.48);  vec3 B1 = vec3(0.78, 0.42, 0.16);  vec3 B2 = vec3(0.95, 0.93, 0.87); // Brass
    vec3 C0 = vec3(1.0, 0.78, 0.34);   vec3 C1 = vec3(0.71, 0.38, 0.11);  vec3 C2 = vec3(0.93, 0.90, 0.84); // Signal
    float k = fract(pt) * 3.0;
    vec3 c0, c1, c2;
    if (k < 1.0)      { float f = k;        c0 = mix(A0, B0, f); c1 = mix(A1, B1, f); c2 = mix(A2, B2, f); }
    else if (k < 2.0) { float f = k - 1.0;  c0 = mix(B0, C0, f); c1 = mix(B1, C1, f); c2 = mix(B2, C2, f); }
    else              { float f = k - 2.0;  c0 = mix(C0, A0, f); c1 = mix(C1, A1, f); c2 = mix(C2, A2, f); }
    float seg = fract(ph) * 3.0;
    if (seg < 1.0) return mix(c0, c1, seg);
    if (seg < 2.0) return mix(c1, c2, seg - 1.0);
    return mix(c2, c0, seg - 2.0);
  }
  void main() {
    vColor = paletteFlow(aSeed * 0.7 + uTime * 0.05 * uMotion, uTime * 0.02 * uMotion);
    vec3 p = position;
    float ph = aSeed * 6.2831853;
    p.x += sin(uTime * 0.45 + ph) * 0.04 * uMotion;
    p.y += cos(uTime * 0.40 + ph * 1.3) * 0.04 * uMotion;
    p.z += sin(uTime * 0.35 + ph * 0.7) * 0.04 * uMotion;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float depth = -mv.z;
    vFade = smoothstep(15.0, 4.0, depth);
    gl_PointSize = aSize * uPixelRatio * (9.0 / depth);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.5, 0.12, d);
    vec3 col = vColor * (0.5 + core);
    gl_FragColor = vec4(col, alpha * mix(0.25, 1.0, vFade) * uOpacity);
  }
`;

/**
 * The persistent point field for the whole journey.
 * Morph targets (this.shapes), in order:
 *   0 DISPERSED  — scattered opening cloud (no labels)
 *   1 NEURAL     — a layered NEURAL NETWORK: nodes in columns, connections made of particles.
 *                  This is the protagonist: labels are spread across the network and highlight on hover.
 *   2 GT         — the hero image, "GT"
 *   3 BUILD      — "LET'S BUILD" payoff
 * The labelled concept hubs are placed at network NODES (one per layer position), so their
 * labels are distributed across the whole structure — not clustered in one spot.
 */
export class NeuralField {
  constructor(graphData, { count = 1900, reducedMotion = false } = {}) {
    this.object3d = new THREE.Group();
    this.count = count;
    this.nodes = graphData.nodes;
    this.NH = this.nodes.length;
    this.hovered = -1;
    this.labelStrength = 0;
    this.introFactor = 1;
    this._proj = new THREE.Vector3();
    this._build(graphData, reducedMotion);
  }

  _build(data, reducedMotion) {
    const palette = data.categories;
    const cats = ['manager', 'techlead', 'ai'];
    const N = this.count;
    const NH = this.NH;

    // Hub particle indices spread evenly across the array (so hubs are distributed in EVERY shape).
    this.hubIndices = [];
    for (let i = 0; i < NH; i++) this.hubIndices.push(Math.min(N - 1, Math.floor((i + 0.5) * (N / NH))));
    const hubSet = new Set(this.hubIndices);
    const hubOf = {};
    this.hubIndices.forEach((pi, i) => (hubOf[pi] = i));

    // Morph targets. NEURAL is built with knowledge of the hub indices so hubs land on nodes.
    const neural = this._buildNeural(N, NH, hubSet);
    const dispersed = dispersedCloud(N, 7);
    // BURST = the dispersed cloud pushed radially outward, so the intro "explosion" blasts straight from the centre.
    const burst = new Float32Array(dispersed.length);
    for (let i = 0; i < burst.length; i++) burst[i] = dispersed[i] * 2.0;
    this.shapes = [
      dispersed, // 0 DISPERSED
      neural, // 1 NEURAL
      sampleText('GT', N, { fontSize: 280 }), // 2 GT
      sampleText("LET'S BUILD", N, { fontSize: 150 }), // 3 BUILD
      burst, // 4 BURST (radial blast)
      fibonacciSphere(N, 3.2), // 5 SPHERE (well-defined)
      fibonacciSphere(N, 0.05), // 6 POINT (collapsed to a dot)
    ];

    const positions = new Float32Array(this.shapes[0]); // start dispersed
    const colors = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const seeds = new Float32Array(N);
    const c = new THREE.Color();
    for (let p = 0; p < N; p++) {
      const isHub = hubSet.has(p);
      const cat = isHub ? this.nodes[hubOf[p]].cat : cats[p % 3];
      c.set(palette[cat] || '#9fb4ff');
      if (!isHub) c.multiplyScalar(0.85);
      colors[p * 3] = c.r;
      colors[p * 3 + 1] = c.g;
      colors[p * 3 + 2] = c.b;
      sizes[p] = isHub ? 26 : 6.5;
      seeds[p] = Math.random();
    }
    this.sizesBase = sizes.slice();

    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pg.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    pg.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    pg.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    this.pointGeo = pg;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uMotion: { value: reducedMotion ? 0 : 1 },
        uOpacity: { value: 1 },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(pg, this.material);
    this.object3d.add(this.points);

    // Edges (hub index pairs) come from the network layer structure, built in _buildNeural.
    const E = this.edges.length;
    this.edgePos = new Float32Array(E * 2 * 3);
    const eCol = new Float32Array(E * 2 * 3);
    const ca = new THREE.Color();
    const cb = new THREE.Color();
    for (let e = 0; e < E; e++) {
      const [a, b] = this.edges[e];
      ca.set(palette[this.nodes[a].cat] || '#9fb4ff').multiplyScalar(0.55);
      cb.set(palette[this.nodes[b].cat] || '#9fb4ff').multiplyScalar(0.55);
      eCol.set([ca.r, ca.g, ca.b, cb.r, cb.g, cb.b], e * 6);
    }
    this.edgeBaseColors = eCol.slice();
    this.edgeColors = eCol;
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(this.edgePos, 3));
    lg.setAttribute('color', new THREE.BufferAttribute(eCol, 3));
    this.lineGeo = lg;
    this.lines = new THREE.LineSegments(
      lg,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    this.object3d.add(this.lines);

    // One CSS2D label per concept hub.
    this.labels = [];
    for (let i = 0; i < NH; i++) {
      const el = document.createElement('div');
      el.className = 'kg-label' + (this.nodes[i].hub ? ' kg-label--hub' : '');
      el.textContent = this.nodes[i].label;
      const obj = new CSS2DObject(el);
      this.object3d.add(obj);
      this.labels.push({ el, obj });
    }
  }

  // Build the layered neural-network target: node columns + particle connection strands.
  // Hubs (concept i) sit on node anchor i, so labels spread across all layers.
  _buildNeural(N, NH, hubSet) {
    const layerSizes = [4, 6, 5, 3];
    const xs = [-2.9, -0.97, 0.97, 2.9];
    const anchors = [];
    const layerAnchors = [];
    for (let li = 0; li < layerSizes.length; li++) {
      const n = layerSizes[li];
      const arr = [];
      for (let k = 0; k < n; k++) {
        const y = n === 1 ? 0 : (k / (n - 1) - 0.5) * 4.4;
        arr.push(anchors.length);
        anchors.push({ x: xs[li], y, z: (Math.random() - 0.5) * 0.5 });
      }
      layerAnchors.push(arr);
    }

    // Connections between consecutive layers (each node to its 2 nearest in the next layer).
    const anchorEdges = [];
    for (let li = 0; li < layerAnchors.length - 1; li++) {
      for (const a of layerAnchors[li]) {
        const next = layerAnchors[li + 1]
          .map((b) => [Math.abs(anchors[a].y - anchors[b].y), b])
          .sort((u, v) => u[0] - v[0]);
        for (let m = 0; m < Math.min(2, next.length); m++) anchorEdges.push([a, next[m][1]]);
      }
    }
    // Drawn hub edges = anchor edges whose endpoints are both hubs (hub i == anchor i).
    this.edges = anchorEdges.filter(([a, b]) => a < NH && b < NH);

    const out = new Float32Array(N * 3);
    const place = (idx, a, j) => {
      out[idx * 3] = a.x + (Math.random() - 0.5) * j;
      out[idx * 3 + 1] = a.y + (Math.random() - 0.5) * j;
      out[idx * 3 + 2] = a.z + (Math.random() - 0.5) * j;
    };
    // Hub particles sit exactly on their node anchor.
    for (let i = 0; i < NH; i++) place(this.hubIndices[i], anchors[i % anchors.length], 0.14);
    // Filler particles: half cluster at nodes, half ride along connections (the "wires").
    for (let p = 0; p < N; p++) {
      if (hubSet.has(p)) continue;
      if (Math.random() < 0.5) {
        place(p, anchors[(Math.random() * anchors.length) | 0], 0.32);
      } else {
        const e = anchorEdges[(Math.random() * anchorEdges.length) | 0];
        const A = anchors[e[0]];
        const B = anchors[e[1]];
        const t = Math.random();
        out[p * 3] = A.x + (B.x - A.x) * t + (Math.random() - 0.5) * 0.12;
        out[p * 3 + 1] = A.y + (B.y - A.y) * t + (Math.random() - 0.5) * 0.12;
        out[p * 3 + 2] = A.z + (B.z - A.z) * t + (Math.random() - 0.5) * 0.12;
      }
    }
    return out;
  }

  setSegment(a, b, t) {
    t = Math.min(Math.max(t, 0), 1);
    const A = this.shapes[a];
    const B = this.shapes[b];
    const pos = this.pointGeo.attributes.position.array;
    for (let k = 0; k < pos.length; k++) pos[k] = A[k] + (B[k] - A[k]) * t;
    this.pointGeo.attributes.position.needsUpdate = true;
  }

  onResize(mgr) {
    this.material.uniforms.uPixelRatio.value = mgr.renderer.getPixelRatio();
  }

  _applyHover() {
    const c = this.edgeColors;
    const base = this.edgeBaseColors;
    for (let e = 0; e < this.edges.length; e++) {
      const [a, b] = this.edges[e];
      const on = a === this.hovered || b === this.hovered;
      for (let k = 0; k < 2; k++) {
        const idx = (e * 2 + k) * 3;
        if (on) { c[idx] = 0.94; c[idx + 1] = 0.81; c[idx + 2] = 0.48; }
        else { c[idx] = base[idx]; c[idx + 1] = base[idx + 1]; c[idx + 2] = base[idx + 2]; }
      }
    }
    this.lineGeo.attributes.color.needsUpdate = true;
    const s = this.pointGeo.attributes.aSize.array;
    for (let i = 0; i < this.NH; i++) {
      const pi = this.hubIndices[i];
      s[pi] = i === this.hovered ? this.sizesBase[pi] * 1.9 : this.sizesBase[pi];
    }
    this.pointGeo.attributes.aSize.needsUpdate = true;
    for (let i = 0; i < this.NH; i++) this.labels[i].el.classList.toggle('kg-label--hover', i === this.hovered);
  }

  update(t, dt, mgr) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uOpacity.value = this.introFactor;

    const pos = this.pointGeo.attributes.position.array;
    const cam = mgr.camera;
    const vis = this.labelStrength * this.introFactor;
    const canHover = this.labelStrength > 0.4;

    let best = 0.08;
    let hi = -1;
    for (let i = 0; i < this.NH; i++) {
      const pi = this.hubIndices[i];
      const x = pos[pi * 3], y = pos[pi * 3 + 1], z = pos[pi * 3 + 2];
      const lab = this.labels[i];
      lab.obj.position.set(x, y, z);
      const v = this._proj.set(x, y, z).project(cam);
      const front = THREE.MathUtils.clamp(1 - (v.z * 0.5 + 0.5), 0, 1);
      lab.el.style.opacity = (vis * (0.5 + 0.5 * front)).toFixed(3);
      if (canHover && v.z <= 1) {
        const d = Math.hypot(v.x - mgr.pointer.x, v.y - mgr.pointer.y);
        if (d < best) { best = d; hi = i; }
      }
    }
    if (!canHover) hi = -1;
    if (hi !== this.hovered) { this.hovered = hi; this._applyHover(); }

    const ep = this.edgePos;
    for (let e = 0; e < this.edges.length; e++) {
      const [a, b] = this.edges[e];
      const pa = this.hubIndices[a];
      const pb = this.hubIndices[b];
      ep.set([pos[pa * 3], pos[pa * 3 + 1], pos[pa * 3 + 2], pos[pb * 3], pos[pb * 3 + 1], pos[pb * 3 + 2]], e * 6);
    }
    this.lineGeo.attributes.position.needsUpdate = true;
    this.lines.material.opacity = 0.6 * vis;
    this.lines.visible = vis > 0.01;
  }
}
