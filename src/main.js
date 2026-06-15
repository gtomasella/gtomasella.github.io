import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import content from '../content/content.en.json';
import { SceneManager } from './scene/SceneManager.js';
import { NeuralField } from './scene/NeuralField.js';
import { buildSections } from './sections.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = window.matchMedia('(max-width: 700px)').matches;

// --- Content -> DOM (decoupled; edit content.en.json, not the code) ---
buildSections(content, document.getElementById('content'));

// --- WebGL stage + persistent point field ---
const stage = new SceneManager(document.getElementById('webgl'), { reducedMotion: reduced });
const field = new NeuralField(content.graph, { count: small ? 1000 : 1900, reducedMotion: reduced });
stage.add(field);

const SHAPE = { DISPERSED: 0, NEURAL: 1, GT: 2, BUILD: 3, BURST: 4, SPHERE: 5, POINT: 6 };
const smooth = (e0, e1, x) => {
  const t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1);
  return t * t * (3 - 2 * t);
};

// The #intro section only existed to give the old scroll-driven morph room; the intro is now an
// autoplay cinematic, so it's removed from the scroll flow in both paths.
const introEl = document.getElementById('intro');
if (introEl) introEl.style.display = 'none';

if (reduced) {
  // Accessible static path: skip the cinematic, show the GT hero directly.
  field.introFactor = 1;
  field.labelStrength = 0.3;
  field.setSegment(SHAPE.GT, SHAPE.GT, 0);
  gsap.set(['.topbar', '#hero .frame', '#hero [data-hero]', '.scrollcue'], { opacity: 1, y: 0, autoAlpha: 1 });
} else {
  // ===== Automatic cinematic intro (plays on load) =====
  // dispersed (2s lateral spin) -> overhead camera + 360 tumble while the cloud compresses into a
  // well-defined sphere -> the sphere shrinks to a point -> EXPLOSION (zoom in/out) -> the neural
  // network forms out of the blast -> it resolves into GT (the hero).
  let startStepper = () => {};

  // Chrome hidden + page locked on the hero while the intro plays.
  gsap.set(['.topbar', '#hero .frame', '#hero [data-hero]', '.scrollcue'], { autoAlpha: 0 });
  const lockScroll = (on) => {
    document.documentElement.style.overflow = on ? 'hidden' : '';
    document.body.style.overflow = on ? 'hidden' : '';
  };
  lockScroll(true);

  field.introFactor = 0;
  field.labelStrength = 0;
  field.setSegment(SHAPE.DISPERSED, SHAPE.DISPERSED, 0);
  gsap.to(field, { introFactor: 1, duration: 1.2, ease: 'power2.out' });

  stage.scripted = true; // the timeline owns the camera during the intro
  const cam = stage.camera;
  const rot = field.object3d.rotation;
  const seg = { a: 0, b: 0, c: 0, d: 0, e: 0 }; // per-stage morph progress

  let finished = false;
  const finishIntro = () => {
    if (finished) return;
    finished = true;
    stage.scripted = false;
    lockScroll(false);
    // Ease the auto-rotation back in so handing control to OrbitControls doesn't jerk the camera.
    stage.controls.autoRotateSpeed = 0;
    gsap.to(stage.controls, { autoRotateSpeed: 1.3, duration: 1.6, ease: 'power1.inOut' });
    startStepper();
  };

  const tl = gsap.timeline({ onComplete: finishIntro });

  // 1) Two seconds of lateral spin from the opening position (particles still dispersed).
  tl.to(rot, { y: '+=' + Math.PI * 1.6, duration: 2, ease: 'none' }, 0);

  // 2) Camera arcs from the front, up to an overhead vantage, and smoothly back to the front in ONE
  // continuous move (no stop/hold) so it never "cuts" when it changes direction.
  const camArc = { u: 0 };
  tl.to(camArc, {
    u: 1,
    duration: 3.8,
    ease: 'sine.inOut',
    onUpdate: () => {
      const elev = Math.sin(camArc.u * Math.PI) * 1.15; // 0 -> ~66deg overhead -> 0 (back to front)
      const R = 7.5;
      cam.position.set(0, R * Math.sin(elev), R * Math.cos(elev));
      cam.lookAt(0, 0, 0);
    },
  }, 2);

  // 3) The cloud compresses into a well-defined sphere while tumbling on every axis (seen from above).
  tl.to(seg, { a: 1, duration: 2.3, ease: 'power2.inOut', onUpdate: () => field.setSegment(SHAPE.DISPERSED, SHAPE.SPHERE, seg.a) }, 2.3);
  tl.to(rot, { y: '+=' + Math.PI * 3, x: '+=' + Math.PI * 1.2, duration: 2.5, ease: 'none' }, 2.3);

  // 4) The sphere shrinks to a single point (the camera is already arcing back to the front).
  tl.to(seg, { b: 1, duration: 1.0, ease: 'power2.in', onUpdate: () => field.setSegment(SHAPE.SPHERE, SHAPE.POINT, seg.b) }, 4.7);
  // Snap orientation to front while the field is a formless point (invisible), so GT lands facing us.
  tl.set(rot, { x: 0, y: 0, z: 0 }, 5.75);

  // 5) The point EXPLODES outward, punctuated by a quick zoom-in then zoom-out.
  tl.to(seg, { c: 1, duration: 0.5, ease: 'power2.out', onUpdate: () => field.setSegment(SHAPE.POINT, SHAPE.BURST, seg.c) }, 5.8);
  tl.to(cam, { zoom: 2.2, duration: 0.35, ease: 'power2.out', onUpdate: () => cam.updateProjectionMatrix() }, 5.7);
  tl.to(cam, { zoom: 1.0, duration: 0.7, ease: 'power2.inOut', onUpdate: () => cam.updateProjectionMatrix() }, 6.05);

  // 6) Out of the blast, the neural network forms (labels read).
  tl.to(seg, { d: 1, duration: 1.2, ease: 'power2.inOut', onUpdate: () => field.setSegment(SHAPE.BURST, SHAPE.NEURAL, seg.d) }, 6.3);
  tl.to(field, { labelStrength: 1, duration: 0.8 }, 6.6);

  // 7) The network resolves into GT — the hero — and the chrome resolves in.
  tl.to(seg, { e: 1, duration: 1.1, ease: 'power2.inOut', onUpdate: () => field.setSegment(SHAPE.NEURAL, SHAPE.GT, seg.e) }, 7.6);
  tl.to(field, { labelStrength: 0.3, duration: 0.8 }, 7.6);
  tl.to('.topbar', { autoAlpha: 1, duration: 0.6 }, 7.9);
  tl.add(() => {
    gsap.to('#hero .frame', { autoAlpha: 1, duration: 0.5 });
    gsap.fromTo('#hero [data-hero]', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out' });
  }, 8.1);
  tl.to('.scrollcue', { autoAlpha: 1, duration: 0.5 }, 8.5);

  // Let the user skip the cinematic with any gesture.
  const skip = () => { if (!finished) tl.progress(1); };
  window.addEventListener('wheel', skip, { passive: true });
  window.addEventListener('keydown', skip);
  window.addEventListener('click', skip);

  // Contact payoff: GT -> "LET'S BUILD" (completes as the contact section snaps to the top).
  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top bottom',
    end: 'top top',
    scrub: 1,
    onUpdate: (self) => field.setSegment(SHAPE.GT, SHAPE.BUILD, self.progress),
  });

  // Section reveals (hero is handled by the intro timeline).
  gsap.utils.toArray('.panel:not(.panel--hero) [data-reveal]').forEach((el) => {
    gsap.from(el, { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
  });

  // ----- Discrete section stepper from the hero down -----
  // One gesture (wheel notch or arrow) advances one stop; each move is a SMOOTH animated scroll,
  // so the particle field keeps flowing as the page travels between sections.
  // Project cards are in-place swaps (the screen holds); everything else is a scroll.
  if (!small) {
    const stageEl = document.querySelector('.proj-stage');
    const projCards = gsap.utils.toArray('.proj-stage .proj');
    if (stageEl && projCards.length) {
      stageEl.classList.add('proj-stage--pinned');
      gsap.set(projCards, { autoAlpha: 0 });
      gsap.set(projCards[0], { autoAlpha: 1, y: 0 });
    }

    const stops = [
      { sel: '#hero' },
      { sel: '#hats' },
      { sel: '#amplify' },
      { sel: '#work' },
      ...projCards.map((_, i) => ({ sel: '#projects', card: i })),
      { sel: '#contact' },
    ];

    let step = 0;
    let active = false;
    let lock = false;
    let curCard = 0;
    const topOf = (sel) => {
      const el = document.querySelector(sel);
      return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : 0;
    };

    function swapCard(i) {
      if (i === curCard || !projCards[i]) return;
      const dir = i > curCard ? 1 : -1;
      gsap.to(projCards[curCard], { autoAlpha: 0, y: -26 * dir, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(projCards[i], { autoAlpha: 0, y: 26 * dir }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      curCard = i;
    }

    function applyStop() {
      const s = stops[step];
      if (s.card !== undefined) {
        const target = topOf('#projects');
        if (Math.abs(window.scrollY - target) > 8) gsap.to(window, { scrollTo: target, duration: 0.25, ease: 'power2.out' });
        swapCard(s.card);
      } else {
        gsap.to(window, { scrollTo: topOf(s.sel), duration: 0.25, ease: 'power2.out' });
      }
    }

    function move(dir) {
      const next = step + dir;
      if (next < 0 || next > stops.length - 1) return; // clamp (hero is the top; no intro to return to)
      step = next;
      applyStop();
    }

    const gesture = (dir) => {
      if (lock) return;
      lock = true;
      setTimeout(() => (lock = false), 300);
      move(dir);
    };

    // Engaged by the intro timeline once the cinematic completes (or is skipped).
    startStepper = () => {
      active = true;
      step = 0;
      lock = true;
      setTimeout(() => (lock = false), 500);
    };

    window.addEventListener('wheel', (e) => {
      if (!active) return;
      e.preventDefault();
      gesture(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      if (!active) return;
      const down = e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ';
      const up = e.key === 'ArrowUp' || e.key === 'PageUp';
      if (!down && !up) return;
      e.preventDefault();
      gesture(down ? 1 : -1);
    });
  }

  // Hide the scroll cue once the journey begins.
  ScrollTrigger.create({
    start: 'top -8%',
    end: 'max',
    onToggle: (self) => gsap.to('.scrollcue', { opacity: self.isActive ? 0 : 1, duration: 0.4 }),
  });
}

// --- Loop: back to the start ---
document.querySelector('.contact__top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
});

// --- Custom cursor (dot tracks, ring trails) ---
const dot = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
if (window.matchMedia('(hover: hover)').matches && dot && ring) {
  let rx = 0, ry = 0, mx = 0, my = 0;
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx - 3.5}px, ${my - 3.5}px)`;
  });
  const loop = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener('pointerover', (e) => {
    if (e.target.closest('a, button')) ring.classList.add('is-hover');
  });
  document.addEventListener('pointerout', (e) => {
    if (e.target.closest('a, button')) ring.classList.remove('is-hover');
  });
}
