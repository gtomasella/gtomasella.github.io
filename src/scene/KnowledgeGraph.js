import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

const VERT = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vec3 p = position;
    float ph = aSeed * 6.2831853;
    p.x += sin(uTime * 0.50 + ph) * 0.05;
    p.y += cos(uTime * 0.45 + ph * 1.3) * 0.05;
    p.z += sin(uTime * 0.40 + ph * 0.7) * 0.05;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * uPixelRatio * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.5, 0.12, d);
    vec3 col = vColor * (0.55 + 0.9 * core);
    gl_FragColor = vec4(col, alpha);
  }
`;

/**
 * Hero stage: an interactive force-laid-out knowledge graph built from content.graph.
 * Nodes = GPU points (soft additive glow), edges = additive line segments,
 * labels = CSS2D DOM. Hover highlights a node + its edges; OrbitControls drives rotation.
 */
export class KnowledgeGraph {
  constructor(graphData) {
    this.object3d = new THREE.Group();
    this.nodes = [];
    this.basePos = [];
    this.edges = [];
    this.hovered = -1;
    this._proj = new THREE.Vector3();
    this._build(graphData);
  }

  _build(data) {
    const palette = data.categories;
    const cats = ['manager', 'techlead', 'ai'];
    const source = data.nodes.map((n) => ({ ...n }));
    for (let i = 0; i < 14; i++) source.push({ filler: true, cat: cats[i % 3] });

    const N = source.length;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const seeds = new Float32Array(N);
    const GA = Math.PI * (3 - Math.sqrt(5));
    const c = new THREE.Color();

    for (let i = 0; i < N; i++) {
      const n = source[i];
      n._idx = i;
      const y = 1 - (i / (N - 1)) * 2;
      const rr = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * GA;
      const radius = 2.6 * (0.8 + ((i * 13) % 5) * 0.05);
      const pos = new THREE.Vector3(Math.cos(th) * rr * radius, y * radius, Math.sin(th) * rr * radius);
      this.basePos.push(pos);
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
      c.set(palette[n.cat] || '#9fb4ff');
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = n.filler ? 7 : n.hub ? 24 : 13;
      seeds[i] = Math.random();
      this.nodes.push(n);
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
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(pg, this.material);
    this.object3d.add(this.points);

    // Edges via k-nearest-neighbours for an organic, connected mesh.
    const seen = new Set();
    for (let i = 0; i < N; i++) {
      const dists = [];
      for (let j = 0; j < N; j++) if (j !== i) dists.push([this.basePos[i].distanceToSquared(this.basePos[j]), j]);
      dists.sort((a, b) => a[0] - b[0]);
      const k = source[i].hub ? 3 : 2;
      for (let m = 0; m < k; m++) {
        const j = dists[m][1];
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(key)) {
          seen.add(key);
          this.edges.push([i, j]);
        }
      }
    }

    const E = this.edges.length;
    const ePos = new Float32Array(E * 2 * 3);
    const eCol = new Float32Array(E * 2 * 3);
    const ca = new THREE.Color();
    const cb = new THREE.Color();
    for (let e = 0; e < E; e++) {
      const [a, b] = this.edges[e];
      const pa = this.basePos[a];
      const pb = this.basePos[b];
      ePos.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], e * 6);
      ca.set(palette[source[a].cat] || '#9fb4ff').multiplyScalar(0.45);
      cb.set(palette[source[b].cat] || '#9fb4ff').multiplyScalar(0.45);
      eCol.set([ca.r, ca.g, ca.b, cb.r, cb.g, cb.b], e * 6);
    }
    this.edgeBaseColors = eCol.slice();
    this.edgeColors = eCol;
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(ePos, 3));
    lg.setAttribute('color', new THREE.BufferAttribute(eCol, 3));
    this.lineGeo = lg;
    this.lines = new THREE.LineSegments(
      lg,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.object3d.add(this.lines);

    // DOM labels for named nodes (filler/density nodes stay unlabeled).
    for (const n of this.nodes) {
      if (n.filler || !n.label) continue;
      const el = document.createElement('div');
      el.className = 'kg-label' + (n.hub ? ' kg-label--hub' : '');
      el.textContent = n.label;
      const obj = new CSS2DObject(el);
      obj.position.copy(this.basePos[n._idx]);
      this.object3d.add(obj);
      n._label = { el, obj };
    }
  }

  _applyHover() {
    const c = this.edgeColors;
    const base = this.edgeBaseColors;
    for (let e = 0; e < this.edges.length; e++) {
      const [a, b] = this.edges[e];
      const on = a === this.hovered || b === this.hovered;
      for (let k = 0; k < 2; k++) {
        const idx = (e * 2 + k) * 3;
        if (on) {
          c[idx] = 0.0;
          c[idx + 1] = 0.83;
          c[idx + 2] = 1.0;
        } else {
          c[idx] = base[idx];
          c[idx + 1] = base[idx + 1];
          c[idx + 2] = base[idx + 2];
        }
      }
    }
    this.lineGeo.attributes.color.needsUpdate = true;

    const s = this.pointGeo.attributes.aSize.array;
    const sb = this.sizesBase;
    for (let i = 0; i < s.length; i++) s[i] = i === this.hovered ? sb[i] * 1.7 : sb[i];
    this.pointGeo.attributes.aSize.needsUpdate = true;

    for (const n of this.nodes) {
      if (n._label) n._label.el.classList.toggle('kg-label--hover', n._idx === this.hovered);
    }
  }

  update(t, dt, mgr) {
    this.material.uniforms.uTime.value = t;
    const cam = mgr.camera;
    const p = mgr.pointer;
    let best = 0.07;
    let hi = -1;
    for (const n of this.nodes) {
      if (n.filler) continue;
      const v = this._proj.copy(this.basePos[n._idx]).project(cam);
      const behind = v.z > 1;
      if (n._label) {
        const front = THREE.MathUtils.clamp(1 - (v.z * 0.5 + 0.5), 0, 1);
        n._label.el.style.opacity = (0.22 + 0.62 * front).toFixed(2);
      }
      if (!behind) {
        const d = Math.hypot(v.x - p.x, v.y - p.y);
        if (d < best) {
          best = d;
          hi = n._idx;
        }
      }
    }
    if (hi !== this.hovered) {
      this.hovered = hi;
      this._applyHover();
    }
  }
}
