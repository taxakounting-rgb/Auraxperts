import { SITE, SERVICES } from "../config.mjs";
import { icon, pageHero, ctaBlock, orbs, sectionHead, socialList, SOCIAL_LABEL, handleOf } from "../layout.mjs";

const values = [
  ["shield", "Honesty first", "Straight answers, realistic timelines and transparent pricing — even when it's not what you expected to hear."],
  ["sparkle", "Craft & quality", "We sweat the details. Every page, post and campaign is checked before it goes live."],
  ["users", "True partnership", "We treat your goals as our own and stay with you long after launch."],
  ["chart", "Measurable impact", "Success means growth you can see in your numbers — not just nice-looking work."],
];

const socialBlurb = {
  facebook: "Updates, client work, tips and announcements.",
  instagram: "Design inspiration, reels and behind-the-scenes.",
  linkedin: "Agency news and industry insights.",
};

export default {
  path: "/about",
  out: "about.html",
  active: "/about",
  title: "About Us",
  description: "Learn about AuraXperts — a digital agency helping businesses grow with websites, SEO, social media, paid ads and branding.",
  body: () => `
${pageHero({ eyebrow: "About us", title: "We help ambitious brands <span class='text-3d'>grow online.</span>", text: "AuraXperts brings strategy, design, development and marketing together — so everything you do online works toward one goal: growth.", crumbs: [["/about", "About"]] })}

<section class="section">
  <div class="container story">
    <div class="story-copy">
      ${sectionHead({ eyebrow: "Who we are", title: "A digital agency built around your growth", align: "left" })}
      <p class="lead reveal">${SITE.name} is a digital marketing and web development agency for businesses that want more than a pretty website. We build complete online presences that attract the right people, earn their trust and turn them into customers.</p>
      <p class="reveal">Our team covers SEO, social media, web and e-commerce development, UI/UX, branding, paid advertising and custom software. Because it all happens under one roof, your website, content and campaigns finally work together instead of pulling in different directions.</p>
      <p class="reveal">We believe in clear communication, honest advice and work we're proud to put our name on. Whether you're launching a new idea or scaling an established business, we'll treat your goals like our own.</p>
      <div class="story-actions reveal">
        <a href="/services" class="btn btn-primary">Explore our services ${icon("arrow")}</a>
        <a href="/contact" class="btn btn-outline">Contact us</a>
      </div>
    </div>
    <div class="story-visual reveal" aria-hidden="true">
      <div class="stack-cards">
        <div class="stack-card s1"><span class="icon3d">${icon("lightbulb")}</span><b>Strategy</b><small>Goals, research &amp; planning</small></div>
        <div class="stack-card s2"><span class="icon3d">${icon("pen")}</span><b>Design</b><small>Brand, UI &amp; content</small></div>
        <div class="stack-card s3"><span class="icon3d">${icon("rocket")}</span><b>Growth</b><small>SEO, ads &amp; social</small></div>
      </div>
      ${orbs([["orb-md st-o1"], ["orb-sm st-o2"]])}
    </div>
  </div>
</section>

<section class="section dark mv-section">
  <div class="grid-floor faint" aria-hidden="true"></div>
  <div class="container">
    ${sectionHead({ eyebrow: "Mission & vision", title: "Driven by purpose" })}
    <div class="mv-grid">
      <div class="mv-card tilt reveal"><span class="icon3d icon3d-lg">${icon("target")}</span><h3>Our Mission</h3><p>To help businesses of every size grow online with digital solutions that are effective, affordable and easy to understand — and to explain every step in plain language.</p></div>
      <div class="mv-card tilt reveal"><span class="icon3d icon3d-lg">${icon("eye")}</span><h3>Our Vision</h3><p>To be the most trusted growth partner for ambitious brands — known for quality work, honest advice and relationships that last for years, not projects.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: "Our values", title: "How we work with you" })}
    <div class="values-grid">
      ${values.map(([i, t, d], n) => `<div class="value-card tilt reveal"><span class="value-no">0${n + 1}</span><span class="icon3d">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="section section-tint">
  <div class="container">
    ${sectionHead({ eyebrow: "What we do", title: "Eight services. One team.", text: "Choose one service or combine several — they're designed to work together." })}
    <div class="service-pills reveal">
      ${SERVICES.map((s) => `<a href="/services#${s.id}" class="service-pill">${icon(s.icon)}<span>${s.name}</span>${icon("arrowUpRight")}</a>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="connect">
  <div class="container">
    ${sectionHead({ eyebrow: "Connect with us", title: "Follow AuraXperts", text: "See our latest work, tips and behind-the-scenes on social media." })}
    <div class="social-cards">
      ${socialList().map(([k, url]) => `
      <a href="${url}" target="_blank" rel="noopener" class="social-card sc-${k} tilt reveal">
        <span class="sc-icon">${icon(k)}</span>
        <div><b>${SOCIAL_LABEL[k]}</b><span class="sc-handle">${handleOf(url)}</span><small>${socialBlurb[k]}</small></div>
        <span class="sc-cta">Follow ${icon("arrowUpRight")}</span>
      </a>`).join("")}
    </div>
  </div>
</section>

${ctaBlock({ title: "Ready to work with us?", text: `Let's discuss how ${SITE.name} can help your business grow — the first consultation is free.` })}
`,
};
