import { SERVICES } from "../config.mjs";
import { icon, pageHero, ctaBlock, orbs } from "../layout.mjs";

const chipNav = `
<div class="svc-nav">
  ${SERVICES.map((s) => `<a href="#${s.id}">${icon(s.icon)}${s.short}</a>`).join("")}
</div>`;

export default {
  path: "/services",
  out: "services.html",
  active: "/services",
  title: "Services",
  description: "Digital marketing, SEO, social media, web development, UI/UX, e-commerce, branding, paid ads and custom software services by AuraXperts.",
  body: () => `
${pageHero({ eyebrow: "Our services", title: "Digital services built for <span class='text-3d'>real growth.</span>", text: "Eight service lines, one accountable team. Every engagement is planned around clear goals, honest reporting and measurable results.", crumbs: [["/services", "Services"]], extra: chipNav })}

<section class="section svc-section">
  <div class="container svc-list">
    ${SERVICES.map((s, i) => `
    <article class="svc-row reveal ${i % 2 ? "flip" : ""}" id="${s.id}">
      <div class="svc-visual cv-${(i % 6) + 1}" aria-hidden="true">
        <span class="cover-orb"></span><span class="cover-orb two"></span>
        <span class="icon3d icon3d-xxl">${icon(s.icon)}</span>
        <span class="svc-big-no">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="svc-copy">
        <span class="eyebrow">Service ${String(i + 1).padStart(2, "0")}</span>
        <h2>${s.name}</h2>
        <p class="svc-blurb">${s.blurb}</p>
        <p>${s.long}</p>
        <ul class="feature-list">${s.points.map((p) => `<li>${icon("check")}${p}</li>`).join("")}</ul>
        <div class="svc-actions">
          <a href="/contact?service=${encodeURIComponent(s.name)}" class="btn btn-primary">Get a quote ${icon("arrow")}</a>
          <a href="/faq" class="link-arrow">Read FAQs ${icon("arrow")}</a>
        </div>
      </div>
    </article>`).join("")}
  </div>
</section>

${ctaBlock({ title: "Not sure which service you need?", text: "Tell us what you want to achieve and we'll recommend the right mix of services for your goals and budget." })}
`,
};
