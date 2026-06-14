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
const container = document.getElementById('webgl');
const stage = new SceneManager(container, { reducedMotion: reduced });
stage.add(new KnowledgeGraph(content.graph));

// --- Hero intro (also proves the GSAP layer is wired) ---
if (!reduced) {
  gsap.from('[data-anim]', {
    y: 24,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.25,
  });
}
