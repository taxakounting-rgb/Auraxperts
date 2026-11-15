import { SITE, SERVICES } from "../config.mjs";
import { SORTED_POSTS } from "../posts.mjs";
import { icon, ctaBlock, waLink, orbs, postCard, sectionHead, WA_SVG } from "../layout.mjs";

const steps = [
  ["Discover", "We dig into your business, audience, competitors and goals before suggesting anything."],
  ["Strategise", "A clear roadmap with scope, timeline, budget and the KPIs we'll be measured on."],
  ["Design", "Wireframes, visuals and content shaped around how your customers think and decide."],
  ["Build", "Clean, fast development and campaign setup — with progress shared every step."],
  ["Launch", "Thorough testing across devices, then a smooth go-live and full handover."],
  ["Grow", "We measure, optimise and scale what works, and support you long after launch."],
];

const industries = [
  ["store", "E-Commerce & Retail"], ["home", "Real Estate"], ["cpu", "Tech & SaaS"],
  ["heart", "Healthcare & Clinics"], ["utensils", "Restaurants & Food"], ["book", "Education"],
  ["briefcase", "Professional Services"], ["plane", "Travel & Hospitality"], ["sparkle", "Beauty & Fashion"],
  ["users", "Startups & SMEs"],
];

const why = [
  ["users", "One team, every skill", "Strategy, design, development and marketing under one roof — no juggling freelancers."],
  ["tag", "Transparent pricing", "Clear, written quotes before we start. No surprise charges, ever."],
  ["chart", "Data-driven decisions", "Every recommendation is backed by analytics, not guesswork."],
  ["bolt", "Fast, reliable delivery", "Agile sprints with regular updates so you always know where things stand."],
  ["headset", "A real point of contact", "One dedicated person who knows your project inside out."],
  ["shield", "Long-term partnership", "Ongoing support, maintenance and growth advice after launch."],
];

const tech = ["WordPress", "Shopify", "WooCommerce", "React", "Next.js", "Node.js", "Laravel", "Figma",
  "Google Ads", "Meta Ads", "Google Analytics 4", "Search Console", "Canva", "Adobe Creative Suite", "Webflow", "HubSpot"];

const cubeFaces = [
  ["front", "search", "SEO"], ["back", "code", "Web"], ["right", "share", "Social"],
  ["left", "target", "Ads"], ["top", "sparkle", "Brand"], ["bottom", "cart", "Stores"],
];

const bento = (s, i) => {
  const wide = i === 0 || i === 5;
  return `
  <article class="bento-card tilt reveal ${wide ? "wide" : ""}">
    <span class="icon3d">${icon(s.icon)}</span>
    <h3>${s.name}</h3>
    <p>${wide ? s.long : s.blurb}</p>
    ${wide ? `<ul class="mini-ticks">${s.points.slice(0, 4).map((p) => `<li>${icon("check")}${p}</li>`).join("")}</ul>` : ""}
    <a href="/services#${s.id}" class="link-arrow">Explore ${icon("arrow")}</a>
    <span class="bento-no">${String(i + 1).padStart(2, "0")}</span>
  </article>`;
};

export default {
  path: "/",
  out: "index.html",
  active: "/",
  title: "Home",
  description: "AuraXperts is a digital marketing and web development agency offering SEO, social media marketing, websites, e-commerce, branding and paid ads for growing businesses.",
  body: () => `
<section class="hero dark">
  <div class="grid-floor" aria-hidden="true"></div>
  <div class="hero-glow g1" aria-hidden="true"></div>
  <div class="hero-glow g2" aria-hidden="true"></div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <span class="eyebrow eyebrow-light"><span class="dot-live"></span> Digital Marketing &amp; Web Development Agency</span>
      <h1>We turn brands into <span class="text-3d">digital&nbsp;magnets.</span></h1>
      <p class="hero-lead">Websites that convert, marketing that performs and branding people remember — planned, built and grown by one expert team.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-primary btn-lg">Start Your Project ${icon("arrow")}</a>
        <a href="/services" class="btn btn-glass btn-lg">Explore Services</a>
      </div>
      <ul class="hero-points">
        <li>${icon("check")} Free consultation</li>
        <li>${icon("check")} Transparent pricing</li>
        <li>${icon("check")} Reply within 24 hours</li>
      </ul>
    </div>

    <div class="hero-scene" aria-hidden="true">
      <div class="scene-ring"><span></span></div>
      <div class="cube-wrap">
        <div class="cube">
          ${cubeFaces.map(([f, ic, label]) => `<div class="face ${f}">${icon(ic)}<b>${label}</b></div>`).join("")}
        </div>
      </div>
      <div class="cube-shadow"></div>
      ${orbs([["orb-lg hs-o1"], ["orb-md hs-o2"], ["orb-sm hs-o3"], ["orb-xs hs-o4"]])}
      <div class="glass-chip chip-1"><span class="icon3d icon3d-sm">${icon("chart")}</span><div><b>Rank higher</b><small>SEO that compounds</small></div></div>
      <div class="glass-chip chip-2"><span class="icon3d icon3d-sm">${icon("target")}</span><div><b>More leads</b><small>Ads that are tracked</small></div></div>
    </div>
  </div>
</section>

<div class="ribbons" aria-hidden="true">
  <div class="ribbon r1"><div class="ribbon-track">${Array(2).fill(SERVICES.map((s) => `<span>${s.short}</span><i>✦</i>`).join("")).join("")}</div></div>
  <div class="ribbon r2"><div class="ribbon-track rev">${Array(2).fill(["Strategy", "Design", "Development", "Marketing", "Growth", "Support", "Analytics", "Creativity"].map((s) => `<span>${s}</span><i>✦</i>`).join("")).join("")}</div></div>
</div>

<section class="section section-tint" id="services">
  <div class="container">
    ${sectionHead({ eyebrow: "What we do", title: "Everything your brand needs to <span class='grad-text'>grow online</span>", text: "Eight specialised services, one accountable team. Pick a single service or let us run your complete digital presence.", align: "split", aside: `<a href="/services" class="btn btn-outline">View all services ${icon("arrow")}</a>` })}
    <div class="bento">
      ${SERVICES.map(bento).join("")}
      <a href="/contact" class="bento-card bento-cta wide dark tilt reveal">
        ${orbs([["orb-sm bc-o1"], ["orb-xs bc-o2"]])}
        <span class="eyebrow eyebrow-light">Not sure where to start?</span>
        <h3>Get a free growth plan for your business</h3>
        <span class="btn btn-white">Book a free call ${icon("arrow")}</span>
      </a>
    </div>
  </div>
</section>

<section class="section dark process-section" id="process">
  <div class="grid-floor faint" aria-hidden="true"></div>
  <div class="container">
    ${sectionHead({ eyebrow: "How we work", title: "A clear process from idea to growth", text: "No black boxes. You'll always know what we're doing, why, and what comes next." })}
    <div class="process">
      ${steps.map(([t, d], i) => `
      <div class="process-step reveal">
        <span class="num-3d">${String(i + 1).padStart(2, "0")}</span>
        <h3>${t}</h3>
        <p>${d}</p>
      </div>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="why">
  <div class="container why-layout">
    <div class="iso-wrap reveal" aria-hidden="true">
      <div class="iso">
        <div class="iso-layer l3"><span>${icon("chart")} Growth</span></div>
        <div class="iso-layer l2"><span>${icon("code")} Build</span></div>
        <div class="iso-layer l1"><span>${icon("lightbulb")} Strategy</span></div>
      </div>
      ${orbs([["orb-md iso-o1"], ["orb-xs iso-o2"]])}
    </div>
    <div>
      ${sectionHead({ eyebrow: `Why ${SITE.name}`, title: "Built on strategy. Driven by results.", text: "We combine creative thinking with technical skill and honest communication — so the work looks great and actually moves your numbers.", align: "left" })}
      <div class="why-list">
        ${why.map(([i, t, d]) => `<div class="why-item reveal"><span class="icon3d icon3d-sm">${icon(i)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section section-tint" id="industries">
  <div class="container">
    ${sectionHead({ eyebrow: "Industries", title: "Experience across many industries", text: "Every industry has its own customers and challenges. We tailor strategy and design to yours." })}
    <div class="chip-cloud reveal">
      ${industries.map(([i, t]) => `<span class="ind-chip">${icon(i)}${t}</span>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="insights">
  <div class="container">
    ${sectionHead({ eyebrow: "From the blog", title: "Latest insights &amp; guides", text: "Practical, in-depth articles on websites, SEO, social media and growing your business online.", align: "split", aside: `<a href="/blog" class="btn btn-outline">Read the blog ${icon("arrow")}</a>` })}
    <div class="blog-grid">${SORTED_POSTS.slice(0, 3).map(postCard).join("")}</div>
  </div>
</section>

<section class="tech-strip">
  <div class="container"><p class="tech-label">Tools &amp; platforms we work with</p></div>
  <div class="marquee"><div class="marquee-track">${[...tech, ...tech].map((t) => `<span>${t}</span>`).join("")}</div></div>
</section>

${ctaBlock({ title: "Let's build something your customers remember.", text: "Tell us about your goals. We'll reply within 24 hours with honest advice and a clear plan — no obligation." })}
`,
};
