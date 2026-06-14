import './style.css';
import gsap from 'gsap';
import content from '../content/content.en.json';
import { SceneManager } from './scene/SceneManager.js';
import { KnowledgeGraph } from './scene/KnowledgeGraph.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Content is decoupled: the DOM is filled from content.en.json, never hardcoded ---
const { identity } = content;
document.querySelector('.hero__kicker').textContent = identity.kicker;
document.querySelector('.hero__name').textContent = identity.name;
document.querySelector('.hero__tagline').textContent = identity.tagline;

// --- WebGL stage ---
const stage = new SceneManager(document.getElementById('webgl'), { reducedMotion: reduced });
const graph = new KnowledgeGraph(content.graph);
stage.add(graph);

// --- Cinematic intro: the graph assembles, text and chrome resolve in ---
if (!reduced) {
  graph.object3d.scale.setScalar(0.62);
  graph.object3d.rotation.y = -0.9;
  graph.material.uniforms.uOpacity.value = 0;
  graph.lines.material.opacity = 0;

  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .to(graph.object3d.scale, { x: 1, y: 1, z: 1, duration: 2.2 }, 0)
    .to(graph.object3d.rotation, { y: 0, duration: 2.6 }, 0)
    .to(graph.material.uniforms.uOpacity, { value: 1, duration: 1.8 }, 0.2)
    .to(graph.lines.material, { opacity: 0.6, duration: 1.8 }, 0.2)
    .from('.topbar', { y: -20, opacity: 0, duration: 1 }, 0.2)
    .from('[data-anim]', { y: 28, opacity: 0, duration: 1.1, stagger: 0.12 }, 0.5)
    .from('.scrollcue', { opacity: 0, duration: 1 }, 1.3);
}

// --- Custom cursor (a dot that tracks, a ring that trails) ---
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
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
  });
}
