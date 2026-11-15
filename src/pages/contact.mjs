import { SITE, SERVICES } from "../config.mjs";
import { icon, orbs, waLink, telLink, WA_SVG, socialList, SOCIAL_LABEL, handleOf, sectionHead } from "../layout.mjs";

const next = [
  ["send", "You send a message", "Use the form, WhatsApp, email or a call — whatever is easiest for you."],
  ["chat", "We reply within 24 hours", "A real person reads your message and replies with questions or a time to talk."],
  ["calendar", "Free consultation", "We discuss your goals, challenges and budget — no pressure, no jargon."],
  ["rocket", "Your plan & quote", "You receive a clear proposal with scope, timeline and transparent pricing."],
];

export default {
  path: "/contact",
  out: "contact.html",
  active: "/contact",
  title: "Contact Us",
  description: "Contact AuraXperts for a free consultation on websites, SEO, social media marketing, paid ads and branding. WhatsApp, call or email us.",
  body: () => `
<section class="contact-hero dark">
  <div class="grid-floor" aria-hidden="true"></div>
  ${orbs([["orb-lg ch-o1"], ["orb-md ch-o2"], ["orb-xs ch-o3"]])}
  <div class="container contact-grid">
    <div class="contact-intro">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><i>/</i><span>Contact</span></nav>
      <span class="eyebrow eyebrow-light"><span class="dot-live"></span> Usually replies within a few hours</span>
      <h1>Got an idea? <span class="text-3d">Let's make it real.</span></h1>
      <p class="hero-lead">Tell us about your business and what you want to achieve. Pick the channel you like best — we're quick on all of them.</p>

      <div class="channel-grid">
        <a href="${waLink()}" target="_blank" rel="noopener" class="channel ch-wa tilt">
          <span class="ch-icon">${WA_SVG}</span><b>WhatsApp</b><small>Fastest reply</small>
        </a>
        <a href="${telLink()}" class="channel ch-call tilt">
          <span class="ch-icon">${icon("phone")}</span><b>Call us</b><small>${SITE.phone}</small>
        </a>
        <a href="mailto:${SITE.email}" class="channel ch-mail tilt">
          <span class="ch-icon">${icon("mail")}</span><b>Email</b><small>${SITE.email}</small>
        </a>
        ${socialList().map(([k, u]) => `
        <a href="${u}" target="_blank" rel="noopener" class="channel ch-${k} tilt">
          <span class="ch-icon">${icon(k)}</span><b>${SOCIAL_LABEL[k]}</b><small>${handleOf(u)}</small>
        </a>`).join("")}
      </div>
    </div>

    <form class="contact-form" id="contactForm" data-email="${SITE.email}" data-wa="${SITE.whatsapp}" novalidate>
      <div class="form-head">
        <span class="icon3d">${icon("send")}</span>
        <div><h2>Start your project</h2><p>Takes less than a minute.</p></div>
      </div>
      <fieldset class="chip-field">
        <legend>What do you need help with?</legend>
        <div class="choice-chips">
          ${SERVICES.map((s) => `<label class="choice"><input type="checkbox" name="services" value="${s.name}" /><span>${icon(s.icon)}${s.short}</span></label>`).join("")}
        </div>
      </fieldset>
      <div class="form-row">
        <label class="field"><span>Your name</span><input name="name" required autocomplete="name" placeholder="e.g. Ali Khan" /></label>
        <label class="field"><span>Email</span><input name="email" type="email" required autocomplete="email" placeholder="you@company.com" /></label>
      </div>
      <label class="field"><span>Phone / WhatsApp <em>(optional)</em></span><input name="phone" type="tel" autocomplete="tel" placeholder="+92 3xx xxxxxxx" /></label>
      <label class="field"><span>Tell us about your project</span><textarea name="message" rows="4" required placeholder="Your business, goals and timeline…"></textarea></label>
      <p class="form-error" id="formError" role="alert" hidden>Please fill in your name, a valid email and a short message.</p>
      <div class="form-actions">
        <button class="btn btn-primary btn-lg" type="submit" data-via="whatsapp">${WA_SVG} Send on WhatsApp</button>
        <button class="btn btn-outline btn-lg" type="submit" data-via="email">${icon("mail")} Send by Email</button>
      </div>
      <p class="form-note">${icon("shield")} Your details are only used to reply to your inquiry.</p>
    </form>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: "What happens next", title: "From first message to clear plan" })}
    <ol class="journey">
      ${next.map(([i, t, d], n) => `
      <li class="journey-step reveal">
        <span class="journey-coin"><span class="icon3d">${icon(i)}</span><em>${n + 1}</em></span>
        <h3>${t}</h3>
        <p>${d}</p>
      </li>`).join("")}
    </ol>
  </div>
</section>

<section class="section section-tint compact">
  <div class="container info-strip">
    <div class="info-tile reveal"><span class="icon3d icon3d-sm">${icon("clock")}</span><div><b>Working hours</b><span>${SITE.hours}</span></div></div>
    <div class="info-tile reveal"><span class="icon3d icon3d-sm">${icon("users")}</span><div><b>Work with us remotely</b><span>WhatsApp, email and video calls — wherever you are.</span></div></div>
    <a href="/faq" class="info-tile info-link reveal"><span class="icon3d icon3d-sm">${icon("help")}</span><div><b>Have a quick question?</b><span>Browse our FAQs ${icon("arrow")}</span></div></a>
  </div>
</section>
`,
};
