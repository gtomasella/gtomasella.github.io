import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

/**
 * Owns the single renderer, camera, post-processing and animation loop.
 * Bloom + fog + gradient background + dust give the premium, atmospheric look;
 * keeping ONE renderer/camera is what makes the (coming) scroll journey perform.
 */
export class SceneManager {
  constructor(container, { reducedMotion = false } = {}) {
    this.container = container;
    this.reduced = reducedMotion;
    this.systems = [];
    this.pointer = new THREE.Vector2(-10, -10);
    this._tx = 0;
    this._ty = 0;
    this._px = 0;
    this._py = 0;
    this.scripted = false; // when true, an external timeline owns the camera (intro cinematic)
    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    container.appendChild(this.renderer.domElement);

    this.labelRenderer = new CSS2DRenderer();
    Object.assign(this.labelRenderer.domElement.style, { position: 'absolute', top: '0', left: '0', pointerEvents: 'none' });
    container.appendChild(this.labelRenderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = this._gradientBackground();
    this.scene.fog = new THREE.FogExp2(0x0a1114, 0.05);

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, 7.5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    Object.assign(this.controls, {
      enableZoom: false,
      enablePan: false,
      enableDamping: true,
      dampingFactor: 0.1,
      rotateSpeed: 1.5,
      autoRotate: !this.reduced,
      autoRotateSpeed: 1.3,
    });

    this._addDust();
    this._addNebula();

    // Post-processing: subtle bloom for the signature glow.
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.5, 0.0);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.renderer.domElement.addEventListener('pointermove', (e) => {
      const r = this.renderer.domElement.getBoundingClientRect();
      this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
      this._px = this.pointer.x;
      this._py = this.pointer.y;
    });
    window.addEventListener('resize', () => this.resize());

    this.resize();
    this.renderer.setAnimationLoop(() => this.tick());
  }

  _gradientBackground() {
    const c = document.createElement('canvas');
    c.width = 4; c.height = 512;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#15242b');
    grad.addColorStop(0.45, '#0d161c');
    grad.addColorStop(1, '#070d11');
    g.fillStyle = grad;
    g.fillRect(0, 0, 4, 512);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _addDust() {
    const N = 520;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 6 + Math.random() * 9;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dust = new THREE.Points(
      g,
      new THREE.PointsMaterial({
        color: 0x5a4f37,
        size: 0.03,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    this.scene.add(this.dust);
  }

  // Slow, drifting glow clouds behind the field — a living "nebula" so the background isn't flat.
  _addNebula() {
    this.nebula = [];
    const make = (hex, x, y, z, scale, baseOpacity) => {
      const mat = new THREE.SpriteMaterial({
        map: this._radialTexture(hex),
        transparent: true,
        opacity: baseOpacity,
        depthWrite: false,
        depthTest: false,
        fog: false,
        blending: THREE.AdditiveBlending,
      });
      const s = new THREE.Sprite(mat);
      s.scale.set(scale, scale, 1);
      s.position.set(x, y, z);
      s.userData = { baseOpacity, x, y };
      this.scene.add(s);
      this.nebula.push(s);
    };
    make('#e3b23c', -3.2, 1.6, -9, 17, 0.12); // gold
    make('#2f6b6b', 4.2, -2.2, -11, 22, 0.09); // petrol-teal
  }

  _radialTexture(hex) {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const col = new THREE.Color(hex);
    const rgb = `${(col.r * 255) | 0}, ${(col.g * 255) | 0}, ${(col.b * 255) | 0}`;
    const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, `rgba(${rgb}, 1)`);
    grad.addColorStop(0.5, `rgba(${rgb}, 0.35)`);
    grad.addColorStop(1, `rgba(${rgb}, 0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  add(system) {
    this.systems.push(system);
    if (system.object3d) this.scene.add(system.object3d);
  }

  resize() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.bloom.setSize(w, h);
    this.labelRenderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    for (const s of this.systems) s.onResize?.(this);
  }

  tick() {
    const dt = this.clock.getDelta();
    const t = this.clock.elapsedTime;
    if (document.hidden) return; // don't render while the tab is backgrounded
    if (!this.scripted) {
      this.controls.update();
      if (!this.reduced) {
        // Lusion-style parallax: rotate the camera VIEW toward the pointer (NOT its position),
        // so the field never shrinks and OrbitControls' state isn't corrupted by feedback.
        this._tx += (this._px - this._tx) * 0.06;
        this._ty += (this._py - this._ty) * 0.06;
        this.camera.rotateY(this._tx * 0.1);
        this.camera.rotateX(-this._ty * 0.1);
      }
    }
    if (this.dust && !this.reduced) this.dust.rotation.y += dt * 0.01;
    if (this.nebula && !this.reduced) {
      for (let i = 0; i < this.nebula.length; i++) {
        const n = this.nebula[i];
        const ph = i * 2.1;
        n.material.opacity = n.userData.baseOpacity * (0.65 + 0.35 * Math.sin(t * 0.12 + ph));
        n.position.x = n.userData.x + Math.sin(t * 0.05 + ph) * 0.9;
        n.position.y = n.userData.y + Math.cos(t * 0.045 + ph) * 0.7;
      }
    }
    for (const s of this.systems) s.update?.(t, dt, this);
    this.composer.render();
    this.labelRenderer.render(this.scene, this.camera);
  }
}
