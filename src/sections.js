/**
 * Builds the scrollable DOM sections from content. Pure content -> DOM (no 3D here),
 * so editing copy means editing content/content.en.json — never this file.
 * Each section is a large, quiet petroleum panel (no numbering, no HUD chrome): the
 * title carries the section, with a short gold accent rule. Headlines are serif (Newsreader).
 */
import portrait from './assets/portrait.png';

export function buildSections(content, mount) {
  const { identity, hats, amplifier, experience, projects, contact } = content;
  const li = (arr) => arr.map((d) => `<li>${d}</li>`).join('');

  const frame = (id, lead, body, extra = '') => `
    <section class="panel ${extra}" id="${id}">
      <div class="frame" data-reveal>
        <div class="frame__body">
          <div class="frame__lead">${lead}</div>
          <div class="frame__content">${body}</div>
        </div>
      </div>
    </section>`;

  const hero = frame(
    'hero',
    `<p class="role-line" data-hero>${identity.roles.join(' · ')}</p>
     <h1 class="hero__name" data-hero>${identity.name}</h1>
     <p class="hero__tagline" data-hero>${identity.tagline}</p>`,
    `<ul class="hero__meta" data-hero>${identity.kicker
      .split(' · ')
      .map((d) => `<li>${d}</li>`)
      .join('')}</ul>`,
    'panel--hero'
  );

  const hatsSec = frame(
    'hats',
    `<h2 class="frame__title">Two hats,<br />one throughline</h2>
     <p class="frame__intro">I run the data, its quality and governance, and lead how it gets engineered and shipped with AI.</p>`,
    `<div class="hats">
       <div class="hat"><h3>${hats.manager.label}</h3><ul>${li(hats.manager.disciplines)}</ul></div>
       <div class="hat"><h3>${hats.techLead.label}</h3><ul>${li(hats.techLead.disciplines)}</ul></div>
     </div>`
  );

  const amplifySec = frame(
    'amplify',
    `<h2 class="frame__title">I amplify every layer with AI &amp; agents</h2>
     <p class="frame__intro">Governance, quality and engineering, each one multiplied by agents that read, audit and build.</p>`,
    `<div class="cards">${amplifier
      .map((a) => `<div class="card"><span class="card__tag">${a.branch}</span><p>${a.message}</p></div>`)
      .join('')}</div>`
  );

  const workSec = frame(
    'work',
    `<h2 class="frame__title">Where I've led</h2>
     <p class="frame__intro">From founding a governance practice across LatAm to architecting multi-terabyte data platforms.</p>`,
    `<div class="rows">${experience
      .map(
        (e) =>
          `<div class="row"><div class="row__meta"><span class="row__company">${e.company}</span><span class="row__dates">${e.dates}</span></div><div class="row__body"><h3>${e.role}</h3><p>${e.summary}</p></div></div>`
      )
      .join('')}</div>`
  );

  const projSec = frame(
    'projects',
    `<h2 class="frame__title">Things I've built</h2>
     <p class="frame__intro">Agents, retrieval and data quality, running in production. Scroll to step through them.</p>`,
    `<div class="proj-stage">${projects
      .map(
        (p, i) =>
          `<a class="proj" href="${p.link}" target="_blank" rel="noopener"><span class="proj__num">0${i + 1} / 0${projects.length}</span><h3>${p.title}</h3><p>${p.description}</p><span class="proj__tech">${p.tech}</span><span class="proj__link">View on GitHub →</span><span class="sr-only"> (opens in new tab)</span></a>`
      )
      .join('')}</div>`
  );

  const contactSec = frame(
    'contact',
    `<div class="portrait"><img src="${portrait}" alt="Guido Tomasella" loading="lazy" /></div>`,
    `<h2 class="contact__headline">${contact.headline}</h2>
     <a class="contact__email" href="mailto:${contact.email}">${contact.email}</a>
     <div class="contact__links">${contact.links
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}<span class="sr-only"> (opens in new tab)</span></a>`)
      .join('')}</div>
     <button class="contact__top" type="button"><span aria-hidden="true">↑ </span>Back to the start</button>`,
    'panel--contact'
  );

  mount.innerHTML = `
    <section class="panel panel--intro" id="intro" aria-hidden="true"></section>
    ${hero}${hatsSec}${amplifySec}${workSec}${projSec}${contactSec}`;
}
