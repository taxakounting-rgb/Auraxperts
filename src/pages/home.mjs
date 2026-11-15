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

// ---------- Hero: isometric "growth staircase" (generated SVG) ----------
const STAGES = [
  { icon: "sparkle", label: "Brand", title: "Build a brand people remember", text: "Logo, identity and messaging that make your business look established and trustworthy from day one." },
  { icon: "code", label: "Website", title: "Launch a website that converts", text: "A fast, mobile-first website that explains what you do and turns visitors into real inquiries." },
  { icon: "search", label: "SEO", title: "Get found on Google", text: "Rank for the searches your customers already make — so they find you, not your competitors." },
  { icon: "target", label: "Social", title: "Reach the right audience", text: "Scroll-stopping content and targeted Meta & Google ads that bring the right people to your door." },
  { icon: "rocket", label: "Growth", title: "Grow with every month", text: "We track every lead and sale, double down on what works and keep your business climbing." },
];

const ICON_PATHS = {
  sparkle: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2Z"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="M12 15 9 12a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
};

function growthSvg() {
  const C = 0.866, W = 62, G = 80, H = [64, 108, 152, 198, 248];
  const P = (x, y, z) => [+((x - y) * C).toFixed(1), +((x + y) * 0.5 - z).toFixed(1)];
  const poly = (pts) => pts.map((p) => p.join(",")).join(" ");
  const bars = H.map((h, i) => {
    const x = i * G, y = -i * G;
    const top = [P(x, y, h), P(x + W, y, h), P(x + W, y + W, h), P(x, y + W, h)];
    const left = [P(x, y + W, 0), P(x + W, y + W, 0), P(x + W, y + W, h), P(x, y + W, h)];
    const right = [P(x + W, y, 0), P(x + W, y + W, 0), P(x + W, y + W, h), P(x + W, y, h)];
    const [cx, cy] = P(x + W / 2, y + W / 2, h);
    const [lx, ly] = P(x + 8, y + W, 18);
    const T = 50;
    return `
      <g class="bar${i === 0 ? " on" : ""}" data-i="${i}">
        <polygon class="f-left" points="${poly(left)}"/>
        <polygon class="f-right" points="${poly(right)}"/>
        <polygon class="f-top" points="${poly(top)}"/>
        <text class="f-num" transform="matrix(${C},0.5,0,1,${lx},${ly})">0${i + 1}</text>
        <ellipse class="t-shadow" cx="${cx}" cy="${cy + 2}" rx="20" ry="9"/>
        <g class="tile" style="transform-origin:${cx}px ${cy - 46}px">
          <g class="tile-float">
            <rect x="${cx - T / 2}" y="${cy - 46 - T / 2}" width="${T}" height="${T}" rx="15" class="t-base"/>
            <rect x="${cx - T / 2}" y="${cy - 52 - T / 2}" width="${T}" height="${T}" rx="15" class="t-face"/>
            <svg x="${cx - 13}" y="${cy - 65}" width="26" height="26" viewBox="0 0 24 24" class="t-ico">${ICON_PATHS[STAGES[i].icon]}</svg>
          </g>
        </g>
        <text class="f-label" x="${cx}" y="${P(x + W, y + W, 0)[1] + 30}" text-anchor="middle">${STAGES[i].label}</text>
      </g>`;
  }).join("");
  const floor = [P(-36, -4 * G - 36, 0), P(4 * G + W + 36, -4 * G - 36, 0), P(4 * G + W + 36, W + 36, 0), P(-36, W + 36, 0)];
  const path = H.map((h, i) => P(i * G + W / 2, -i * G + W / 2, h)).map(([x, y]) => [x, y - 46]);
  return `
  <svg class="growth-svg" viewBox="-110 -340 820 470" role="img" aria-label="Five steps of growth: Brand, Website, SEO, Social and Ads, Growth">
    <defs>
      <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8c8ff"/><stop offset="1" stop-color="#9b6bff"/></linearGradient>
      <linearGradient id="gTopOn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f0abfc"/></linearGradient>
      <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c4dff"/><stop offset="1" stop-color="#3b1da8"/></linearGradient>
      <linearGradient id="gLeftOn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b47cff"/><stop offset="1" stop-color="#6233ea"/></linearGradient>
      <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b26c9"/><stop offset="1" stop-color="#1d0f6b"/></linearGradient>
      <linearGradient id="gRightOn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c4dff"/><stop offset="1" stop-color="#3b1da8"/></linearGradient>
      <linearGradient id="gTile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a37bff"/><stop offset=".5" stop-color="#6233ea"/><stop offset="1" stop-color="#2a1a86"/></linearGradient>
      <linearGradient id="gTileOn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0abfc"/><stop offset=".5" stop-color="#a855f7"/><stop offset="1" stop-color="#6233ea"/></linearGradient>
      <linearGradient id="gFloor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9b6bff" stop-opacity=".25"/><stop offset="1" stop-color="#9b6bff" stop-opacity=".04"/></linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <polygon class="floor" points="${poly(floor)}"/>
    <polyline class="trend" points="${path.map((p) => p.join(",")).join(" ")}"/>
    ${bars}
  </svg>`;
}

const heroVisual = () => `
    <div class="growth tilt" data-tilt="4">
      <div class="growth-glow" aria-hidden="true"></div>
      <div class="toast" aria-hidden="true">
        <span class="toast-ic">${WA_SVG}</span>
        <div><b>New inquiry <small>just now</small></b><span>"Hi! I found you on Google — can I get a quote?"</span></div>
      </div>
      ${growthSvg()}
      <div class="stage-card" id="stageCard">
        <div class="stage-top">
          <span class="stage-step">Step <b id="stageNo">1</b> of ${STAGES.length}</span>
          <div class="stage-dots" role="tablist" aria-label="Growth steps">
            ${STAGES.map((st, i) => `<button type="button" role="tab" class="stage-dot${i === 0 ? " on" : ""}" aria-selected="${i === 0}" aria-label="Step ${i + 1}: ${st.label}" data-i="${i}" data-title="${st.title}" data-text="${st.text}"></button>`).join("")}
          </div>
        </div>
        <div class="stage-body">
          <span class="icon3d icon3d-sm" id="stageIcon">${STAGES.map((st, i) => `<span class="si${i === 0 ? " on" : ""}">${icon(st.icon)}</span>`).join("")}</span>
          <div><h3 id="stageTitle">${STAGES[0].title}</h3><p id="stageText">${STAGES[0].text}</p></div>
        </div>
        <div class="stage-progress"><span id="stageBar"></span></div>
      </div>
    </div>`;

const serviceCard = (s, i) => `
  <article class="svc-card tilt reveal">
    <div class="svc-card-top"><span class="icon3d">${icon(s.icon)}</span><span class="svc-card-no">${String(i + 1).padStart(2, "0")}</span></div>
    <h3>${s.name}</h3>
    <p>${s.blurb}</p>
    <ul class="mini-ticks">${s.points.slice(0, 3).map((p) => `<li>${icon("check")}${p}</li>`).join("")}</ul>
    <a href="/services#${s.id}" class="link-arrow">Explore service ${icon("arrow")}</a>
  </article>`;

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
      <h1>From first impression to <span class="text-3d">loyal customers.</span></h1>
      <p class="hero-lead">AuraXperts builds every step of your online growth — your brand, website, Google visibility, social media and ads — so the right people <strong>find you, trust you and choose you.</strong></p>
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

${heroVisual()}
  </div>
</section>

<div class="ribbons" aria-hidden="true">
  <div class="ribbon r1"><div class="ribbon-track">${Array(2).fill(SERVICES.map((s) => `<span>${s.short}</span><i>✦</i>`).join("")).join("")}</div></div>
  <div class="ribbon r2"><div class="ribbon-track rev">${Array(2).fill(["Strategy", "Design", "Development", "Marketing", "Growth", "Support", "Analytics", "Creativity"].map((s) => `<span>${s}</span><i>✦</i>`).join("")).join("")}</div></div>
</div>

<section class="section section-tint" id="services">
  <div class="container">
    ${sectionHead({ eyebrow: "What we do", title: "Everything your brand needs to <span class='grad-text'>grow online</span>", text: "Eight specialised services, one accountable team. Pick a single service or let us run your complete digital presence.", align: "split", aside: `<a href="/services" class="btn btn-outline">View all services ${icon("arrow")}</a>` })}
    <div class="svc-grid swipe-row" id="svcGrid">
      ${SERVICES.map(serviceCard).join("")}
    </div>
    <div class="swipe-hint" aria-hidden="true">${icon("arrow")} Swipe to see all 8 services</div>
    <a href="/contact" class="svc-banner dark tilt reveal" data-tilt="3">
      ${orbs([["orb-sm bc-o1"], ["orb-xs bc-o2"]])}
      <span class="icon3d icon3d-lg">${icon("lightbulb")}</span>
      <div><h3>Not sure where to start?</h3><p>Tell us about your business — we'll suggest the right mix of services for your goals and budget, free.</p></div>
      <span class="btn btn-white">Get a free growth plan ${icon("arrow")}</span>
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
    <div class="blog-grid swipe-row">${SORTED_POSTS.slice(0, 3).map(postCard).join("")}</div>
    <div class="swipe-hint" aria-hidden="true">${icon("arrow")} Swipe for more articles</div>
  </div>
</section>

<section class="tech-strip">
  <div class="container"><p class="tech-label">Tools &amp; platforms we work with</p></div>
  <div class="marquee"><div class="marquee-track">${[...tech, ...tech].map((t) => `<span>${t}</span>`).join("")}</div></div>
</section>

${ctaBlock({ title: "Let's build something your customers remember.", text: "Tell us about your goals. We'll reply within 24 hours with honest advice and a clear plan — no obligation." })}
`,
};
