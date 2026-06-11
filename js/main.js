import { animate, createTimeline, stagger, utils } from './vendor/anime.esm.min.js';

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- helpers ---------- */
function splitChars(el) {
    const text = el.childNodes[0].textContent; // first text node only (underline span stays)
    el.setAttribute('aria-label', text);
    const frag = document.createDocumentFragment();
    [...text].forEach(ch => {
        const s = document.createElement('span');
        s.className = 'char';
        s.textContent = ch === ' ' ? ' ' : ch;
        frag.appendChild(s);
    });
    el.childNodes[0].replaceWith(frag);
    return el.querySelectorAll('.char');
}

/* ---------- background video: play once, freeze on last frame ---------- */
const video = document.querySelector('.page-bg video');
video.loop = false;
video.addEventListener('ended', () => {
    if (video.duration) video.currentTime = Math.max(0, video.duration - 0.05);
});

let nameFadeArmed = true;
video.addEventListener('timeupdate', () => {
    if (!nameFadeArmed || !video.duration) return;
    if (video.currentTime >= video.duration - 3) {
        nameFadeArmed = false;
        document.body.classList.add('hide-hero-name');
    }
});

/* ---------- hero entrance timeline ---------- */
const heroTitle = document.querySelector('.hero-title');
let heroPlayed = false;

function runHeroTimeline() {
    if (heroPlayed) return;
    heroPlayed = true;

    if (REDUCED) return; // elements are visible by default now

    const titleChars = [];
    heroTitle.querySelectorAll('span').forEach(word => {
        titleChars.push(...splitChars(word));
    });

    utils.set('.hero-image-wrapper', { opacity: 0, scale: 0.9 });
    utils.set(titleChars, { opacity: 0, translateY: 50 });
    utils.set('.hero-subtitle, .hero-tagline, .button-group, .scroll-indicator', { opacity: 0, translateY: 24 });

    const tl = createTimeline({ defaults: { ease: 'outExpo', duration: 900 } });
    tl.add(titleChars, { opacity: 1, translateY: 0, delay: stagger(45), duration: 1100, ease: 'outBack' }, 600)
      .add('.hero-image-wrapper', { opacity: 1, scale: 1, duration: 1400, ease: 'outElastic(1, .6)' }, 1400)
      .add('.hero-subtitle', { opacity: 1, translateY: 0 }, '-=900')
      .add('.hero-tagline', { opacity: 1, translateY: 0 }, '-=700')
      .add('.button-group', { opacity: 1, translateY: 0 }, '-=700')
      .add('.scroll-indicator', { opacity: 1, translateY: 0 }, '-=600');
}

function startPlayback() {
    runHeroTimeline();
    try { video.currentTime = 0; } catch (e) {}
    const p = video.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
}

if (video.readyState >= 2) {
    startPlayback();
} else {
    video.addEventListener('canplay', startPlayback, { once: true });
    setTimeout(() => { runHeroTimeline(); }, 2500); // fallback if video is slow
}

/* ---------- scroll reveals ---------- */
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -100px 0px' };

function onEnter(el, fn) {
    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            fn(el);
            obs.unobserve(el);
        }
    }, observerOptions);
    obs.observe(el);
}

if (!REDUCED) {
    // Section titles: letter stagger + underline draw
    document.querySelectorAll('.section-title').forEach(title => {
        const chars = splitChars(title);
        const underline = title.querySelector('.title-underline');
        utils.set(chars, { opacity: 0, translateY: 30 });
        onEnter(title, () => {
            animate(chars, { opacity: 1, translateY: 0, delay: stagger(25), duration: 800, ease: 'outExpo' });
            if (underline) animate(underline, { scaleX: [0, 1], duration: 900, delay: 300, ease: 'outQuart' });
        });
    });

    // Grid cards: per-grid stagger
    document.querySelectorAll('.pillars-grid, .experience-grid, .projects-grid, .metrics-grid').forEach(grid => {
        const items = Array.from(grid.children);
        utils.set(items, { opacity: 0, translateY: 50 });
        onEnter(grid, () => {
            animate(items, { opacity: 1, translateY: 0, delay: stagger(120), duration: 900, ease: 'outExpo' });
        });
    });

    // Education timeline: alternate slide-in
    document.querySelectorAll('.education-item').forEach((item, i) => {
        utils.set(item, { opacity: 0, translateX: i % 2 === 0 ? -40 : 40 });
        onEnter(item, () => {
            animate(item, { opacity: 1, translateX: 0, duration: 800, ease: 'outExpo' });
        });
    });

    // Contact block
    document.querySelectorAll('.contact-email, .contact-links, .footer-text').forEach(el => {
        utils.set(el, { opacity: 0, translateY: 24 });
        onEnter(el, () => animate(el, { opacity: 1, translateY: 0, duration: 800, ease: 'outExpo' }));
    });
}

/* ---------- metric counters ---------- */
document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (REDUCED) { el.textContent = target.toLocaleString('en-US'); return; }
    onEnter(el, () => {
        const counter = { value: 0 };
        animate(counter, {
            value: target,
            duration: 1800,
            ease: 'outExpo',
            onUpdate: () => { el.textContent = Math.floor(counter.value).toLocaleString('en-US'); },
            onComplete: () => { el.textContent = target.toLocaleString('en-US'); }
        });
    });
});

/* ---------- hover micro-interactions ---------- */
if (!REDUCED && window.matchMedia('(pointer: fine)').matches) {
    // Magnetic buttons
    document.querySelectorAll('.btn, .contact-link').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            animate(btn, {
                x: (e.clientX - r.left - r.width / 2) * 0.25,
                y: (e.clientY - r.top - r.height / 2) * 0.25,
                duration: 200, ease: 'outQuad'
            });
        });
        btn.addEventListener('mouseleave', () => {
            animate(btn, { x: 0, y: 0, duration: 700, ease: 'outElastic(1, .45)' });
        });
    });

    // Pillar icon pop on card hover
    document.querySelectorAll('.pillar').forEach(card => {
        const icon = card.querySelector('.pillar-icon');
        card.addEventListener('mouseenter', () => {
            animate(icon, { scale: [1, 1.2, 1], rotate: [0, -8, 0], duration: 600, ease: 'outQuad' });
        });
    });
}

/* ---------- custom cursor ---------- */
if (!REDUCED && window.matchMedia('(pointer: fine)').matches) {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mx = -100, my = -100, rx = -100, ry = -100;

    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    (function cursorLoop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
        requestAnimationFrame(cursorLoop);
    })();

    document.querySelectorAll('a, .btn, .pillar, .experience-card, .project-card, .metric').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });
}

/* ---------- scroll progress bar ---------- */
const progressBar = document.querySelector('.scroll-progress .bar');
function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
