/**
 * Builds the scrollable DOM sections from content. Pure content -> DOM (no 3D here),
 * so editing copy means editing content/content.en.json — never this file.
 */
export function buildSections(content, mount) {
  const { identity, hats, amplifier, experience, projects, contact } = content;

  const li = (arr) => arr.map((d) => `<li>${d}</li>`).join('');

  mount.innerHTML = `
    <section class="panel panel--intro" id="intro" aria-hidden="true"></section>

    <section class="panel panel--hero" id="hero">
      <div class="panel__inner">
        <p class="eyebrow eyebrow--accent" data-hero>${identity.kicker}</p>
        <h1 class="hero__name" data-hero>${identity.name}</h1>
        <p class="hero__tagline" data-hero>${identity.tagline}</p>
      </div>
    </section>

    <section class="panel" id="hats">
      <div class="panel__inner">
        <p class="eyebrow" data-reveal>Two hats, one throughline</p>
        <div class="hats">
          <div class="hat" data-reveal>
            <h2>${hats.manager.label}</h2>
            <ul>${li(hats.manager.disciplines)}</ul>
          </div>
          <div class="hat" data-reveal>
            <h2>${hats.techLead.label}</h2>
            <ul>${li(hats.techLead.disciplines)}</ul>
          </div>
        </div>
      </div>
    </section>

    <section class="panel" id="amplify">
      <div class="panel__inner">
        <p class="eyebrow" data-reveal>The throughline</p>
        <h2 class="section-title" data-reveal>I amplify every layer with AI &amp; agents</h2>
        <div class="cards">
          ${amplifier
            .map(
              (a) => `
            <div class="card" data-reveal>
              <span class="card__tag">${a.branch}</span>
              <p>${a.message}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="panel" id="work">
      <div class="panel__inner">
        <h2 class="eyebrow" data-reveal>Experience</h2>
        <div class="rows">
          ${experience
            .map(
              (e) => `
            <div class="row" data-reveal>
              <div class="row__meta">
                <span class="row__company">${e.company}</span>
                <span class="row__dates">${e.dates}</span>
              </div>
              <div class="row__body">
                <h3>${e.role}</h3>
                <p>${e.summary}</p>
              </div>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="panel" id="projects">
      <div class="panel__inner">
        <h2 class="eyebrow" data-reveal>Selected work</h2>
        <div class="proj-stage">
          ${projects
            .map(
              (p, i) => `
            <a class="proj" href="${p.link}" target="_blank" rel="noopener">
              <span class="proj__num">0${i + 1} / 0${projects.length}</span>
              <h3>${p.title}</h3>
              <p>${p.description}</p>
              <span class="proj__tech">${p.tech}</span>
              <span class="proj__link">View on GitHub →</span>
              <span class="sr-only"> (opens in new tab)</span>
            </a>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="panel panel--contact" id="contact">
      <div class="panel__inner panel__inner--center">
        <h2 class="contact__headline" data-reveal>${contact.headline}</h2>
        <a class="contact__email" href="mailto:${contact.email}" data-reveal>${contact.email}</a>
        <div class="contact__links" data-reveal>
          ${contact.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}<span class="sr-only"> (opens in new tab)</span></a>`).join('')}
        </div>
        <button class="contact__top" type="button" data-reveal><span aria-hidden="true">↑ </span>Back to the start</button>
      </div>
    </section>`;
}
