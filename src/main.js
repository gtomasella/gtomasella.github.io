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

const SHAPE = { DISPERSED: 0, NEURAL: 1, GT: 2, BUILD: 3, BURST: 4 };
const smooth = (e0, e1, x) => {
  const t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1);
  return t * t * (3 - 2 * t);
};

if (reduced) {
  // Accessible static path: skip the scroll journey, show the GT hero directly.
  field.introFactor = 1;
  field.labelStrength = 0.3;
  field.setSegment(SHAPE.GT, SHAPE.GT, 0);
  const intro = document.getElementById('intro');
  if (intro) intro.style.display = 'none';
  gsap.set(['.topbar', '#hero [data-hero]', '.scrollcue'], { opacity: 1, y: 0 });
} else {
  // Field fades in from black while it sits dispersed.
  field.introFactor = 0;
  gsap.to(field, { introFactor: 1, duration: 1.6, ease: 'power2.out' });

  // Chrome stays hidden over the textless dispersed opening.
  gsap.set('.topbar', { opacity: 0, y: -12 });
  gsap.set('#hero .frame', { autoAlpha: 0 }); // hidden until its discrete snap, so it never peeks

  // INTRO journey (scroll-driven): the camera winds up — a slow spin that accelerates while it
  // zooms toward the centre — until it "explodes" the field outward, then zooms back out as the
  // neural network forms, and finally GT.
  ScrollTrigger.create({
    trigger: '#intro',
    start: 'top top',
    end: 'bottom center',
    scrub: 1,
    onUpdate: (self) => {
      const p = self.progress;

      // Particles: hold dispersed while the camera winds up -> blast outward -> collapse to the
      // network -> form GT.
      if (p < 0.42) field.setSegment(SHAPE.DISPERSED, SHAPE.DISPERSED, 0);
      else if (p < 0.52) field.setSegment(SHAPE.DISPERSED, SHAPE.BURST, (p - 0.42) / 0.1);
      else if (p < 0.78) field.setSegment(SHAPE.BURST, SHAPE.NEURAL, (p - 0.52) / 0.26);
      else field.setSegment(SHAPE.NEURAL, SHAPE.GT, (p - 0.78) / 0.22);

      // Spin accelerates then settles to exactly 3 full turns by the time the network forms, so GT
      // lands facing front. (smoothstep = slow -> fast -> settle, peaking around the blast.)
      const wind = Math.min(p / 0.78, 1);
      field.object3d.rotation.y = smooth(0, 1, wind) * Math.PI * 6;

      // Zoom pushes in toward the blast, then pulls back out as the network resolves.
      const zoomIn = smooth(0, 0.5, p);
      const zoomOut = smooth(0.52, 0.72, p);
      stage.camera.zoom = 1 + 1.5 * zoomIn - 1.5 * zoomOut;
      stage.camera.updateProjectionMatrix();

      // Labels read once the network has formed, recede as GT takes over.
      const formed = smooth(0.58, 0.76, p);
      const toGT = smooth(0.82, 0.98, p);
      field.labelStrength = formed * (1 - 0.7 * toGT);
    },
    onLeave: () => gsap.to(field, { labelStrength: 0.3, duration: 0.6 }), // secondary from the hero on
    onEnterBack: () => gsap.killTweensOf(field, 'labelStrength'),
  });

  // Top bar resolves in as we approach the hero (the hero frame is revealed on its snap, below).
  gsap.to('.topbar', { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '#hero', start: 'top 85%' } });

  // Contact payoff: GT -> "LET'S BUILD" (completes as the contact section snaps to the top).
  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top bottom',
    end: 'top top',
    scrub: 1,
    onUpdate: (self) => field.setSegment(SHAPE.GT, SHAPE.BUILD, self.progress),
  });

  // Section reveals (hero + intro handled separately).
  gsap.utils.toArray('.panel:not(.panel--hero):not(.panel--intro) [data-reveal]').forEach((el) => {
    gsap.from(el, { y: 32, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
  });

  // ----- Discrete section stepper from the hero down -----
  // One gesture (wheel notch or arrow) advances one stop; each move is a SMOOTH animated
  // scroll, so the particle field keeps flowing as the page travels between sections.
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
      if (next < 0) {
        active = false; // hand control back to the continuous intro
        gsap.to('#hero .frame', { autoAlpha: 0, duration: 0.3 });
        gsap.to(window, { scrollTo: Math.max(0, topOf('#hero') - window.innerHeight * 0.75), duration: 0.7, ease: 'power2.inOut' });
        return;
      }
      if (next > stops.length - 1) return;
      step = next;
      applyStop();
    }

    const gesture = (dir) => {
      if (lock) return;
      lock = true;
      setTimeout(() => (lock = false), 300);
      move(dir);
    };

    // Engage the stepper while we're at/below the hero; release it back into the intro above.
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top center',
      end: 'bottom top',
      onEnter: () => {
        active = true;
        step = 0;
        lock = true;
        setTimeout(() => (lock = false), 600);
        // Snap to the hero with its frame still hidden, then reveal the WHOLE frame at once.
        gsap.to(window, {
          scrollTo: topOf('#hero'),
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to('#hero .frame', { autoAlpha: 1, duration: 0.4 });
            gsap.from('#hero [data-hero]', { y: 22, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', delay: 0.1 });
          },
        });
      },
      onEnterBack: () => { active = true; gsap.set('#hero .frame', { autoAlpha: 1 }); },
      onLeaveBack: () => { active = false; gsap.to('#hero .frame', { autoAlpha: 0, duration: 0.3 }); },
    });

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
