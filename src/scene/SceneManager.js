import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

/**
 * Owns the single renderer, camera and animation loop for the whole site.
 * Stages/systems are added via add() and receive update(time, dt, manager) each frame.
 * Keeping ONE renderer + camera is the key to performance across the scroll journey.
 */
export class SceneManager {
  constructor(container, { reducedMotion = false } = {}) {
    this.container = container;
    this.reduced = reducedMotion;
    this.systems = [];
    this.pointer = new THREE.Vector2(-10, -10);
    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x060b16, 1);
    container.appendChild(this.renderer.domElement);

    // CSS2D layer for crisp DOM labels positioned in 3D space.
    this.labelRenderer = new CSS2DRenderer();
    Object.assign(this.labelRenderer.domElement.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      pointerEvents: 'none',
    });
    container.appendChild(this.labelRenderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, 7.5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.5;
    this.controls.autoRotate = !this.reduced;
    this.controls.autoRotateSpeed = 0.45;

    this.renderer.domElement.addEventListener('pointermove', (e) => {
      const r = this.renderer.domElement.getBoundingClientRect();
      this.pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      this.pointer.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    });
    window.addEventListener('resize', () => this.resize());

    this.resize();
    this.renderer.setAnimationLoop(() => this.tick());
  }

  add(system) {
    this.systems.push(system);
    if (system.object3d) this.scene.add(system.object3d);
  }

  resize() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h);
    this.labelRenderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  tick() {
    const dt = this.clock.getDelta();
    const t = this.clock.elapsedTime;
    this.controls.update();
    for (const s of this.systems) s.update?.(t, dt, this);
    this.renderer.render(this.scene, this.camera);
    this.labelRenderer.render(this.scene, this.camera);
  }
}
