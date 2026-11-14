import { SITE, SERVICES, POSTS } from "../config.mjs";
import { icon, ctaBand, waLink } from "../layout.mjs";
import { postCard } from "./blog.mjs";

const steps = [
  ["Discovery & Research", "We learn your business, audience, competitors and goals before suggesting anything."],
  ["Strategy & Planning", "A clear roadmap with timelines, deliverables, budget and the KPIs we'll be measured on."],
  ["Design & Development", "We design and build — sharing progress regularly so you can give feedback early."],
  ["Testing & Quality", "Every page, form, campaign and tracking tag is tested across devices before launch."],
  ["Launch & Delivery", "We go live smoothly, hand over access and walk your team through everything."],
  ["Optimise & Support", "We monitor results, improve what's working and stay with you for ongoing support."],
];

const industries = [
  ["store", "E-Commerce & Retail", "Online stores, D2C brands, marketplaces"],
  ["home", "Real Estate", "Agencies, developers, property portals"],
  ["cpu", "Technology & SaaS", "Startups, software and IT companies"],
  ["heart", "Healthcare", "Clinics, doctors, wellness brands"],
  ["utensils", "Food & Restaurants", "Restaurants, cafés, cloud kitchens"],
  ["book", "Education", "Schools, academies, online courses"],
  ["briefcase", "Professional Services", "Consultants, law & accounting firms"],
  ["plane", "Travel & Hospitality", "Hotels, tour operators, travel agents"],
];

const why = [
  ["users", "One Expert Team", "Strategy, design, development and marketing under one roof."],
  ["tag", "Transparent Pricing", "Clear quotes before we start. No hidden charges."],
  ["headset", "Dedicated Support", "A single point of contact who knows your project."],
  ["bolt", "Fast Turnaround", "Agile workflow with regular updates and on-time delivery."],
  ["shield", "Secure & Reliable", "Best practices for security, backups and uptime."],
  ["chart", "Data-Driven", "Decisions based on analytics, not guesswork."],
  ["lightbulb", "Creative Thinking", "Fresh ideas that help your brand stand out."],
  ["rocket", "Built to Scale", "Solutions that grow as your business grows."],
];

const tech = ["WordPress", "Shopify", "WooCommerce", "React", "Next.js", "Node.js", "Laravel", "Figma",
  "Google Ads", "Meta Ads", "Google Analytics", "Search Console", "Canva", "Adobe Suite", "Webflow", "HubSpot"];

const highlights = [
  ["layers", "8", "Service Lines"],
  ["users", "1", "Dedicated Team"],
  ["clock", "24h", "Response Time"],
  ["sparkle", "100%", "Custom Work"],
  ["chat", "Free", "Consultation"],
  ["headset", "Ongoing", "Support"],
];

export default {
  path: "/",
  out: "index.html",
  active: "/",
  title: "Home",
  description: "AuraXperts is a digital marketing and web development agency offering SEO, social media marketing, websites, e-commerce, branding and paid ads for growing businesses.",
  body: () => `
<section class="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-glow"></div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <span class="pill pill-dark">${icon("sparkle")} Digital Marketing • Web Development • Branding</span>
      <h1>Web Development &amp; Digital Marketing Agency for <span class="hl">Growing Businesses</span></h1>
      <p class="hero-lead">Websites, SEO, social media, paid ads and branding — planned, built and managed by one expert team, so your online presence works as hard as you do.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-white">Get Started Today ${icon("arrow")}</a>
        <a href="/services" class="btn btn-outline-light">Explore Services</a>
      </div>
      <ul class="hero-checks">
        <li>${icon("check")} Free consultation</li>
        <li>${icon("check")} Transparent pricing</li>
        <li>${icon("check")} Dedicated support</li>
      </ul>
    </div>
    <div class="hero-visual" aria-hidden="true">
      <div class="mock-card">
        <div class="mock-top"><span></span><span></span><span></span></div>
        <p class="mock-label">Website traffic</p>
        <p class="mock-value">Growing ${icon("chart")}</p>
        <div class="mock-bars"><i style="--h:30%"></i><i style="--h:42%"></i><i style="--h:38%"></i><i style="--h:55%"></i><i style="--h:63%"></i><i style="--h:72%"></i><i style="--h:88%"></i></div>
      </div>
      <div class="float-chip chip-a">${icon("search")}<div><b>SEO</b><span>Rank higher</span></div></div>
      <div class="float-chip chip-b">${icon("target")}<div><b>Ads</b><span>More leads</span></div></div>
      <div class="float-chip chip-c">${icon("code")}<div><b>Web</b><span>Fast &amp; modern</span></div></div>
    </div>
  </div>
</section>

<section class="highlights-wrap">
  <div class="container">
    <div class="highlights reveal">
      ${highlights.map(([i, v, l]) => `<div class="hl-item">${icon(i)}<b>${v}</b><span>${l}</span></div>`).join("")}
    </div>
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">Our Services</span>
      <h2>Comprehensive Digital Solutions</h2>
      <p>End-to-end services designed to help your business look great, get found and win more customers online.</p>
    </div>
    <div class="services-grid">
      ${SERVICES.map((s) => `
      <article class="service-card reveal">
        <div class="svc-icon">${icon(s.icon)}</div>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <ul class="ticks">${s.points.slice(0, 4).map((p) => `<li>${p}</li>`).join("")}</ul>
        <a href="/services#${s.id}" class="link-arrow">Learn more ${icon("arrow")}</a>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section section-soft" id="process">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">Our Process</span>
      <h2>How We Work</h2>
      <p>A proven, transparent process that keeps your project on time and on target.</p>
    </div>
    <div class="process-grid">
      ${steps.map(([t, d], i) => `
      <div class="process-card reveal">
        <span class="step-no">${String(i + 1).padStart(2, "0")}</span>
        <h3>${t}</h3>
        <p>${d}</p>
      </div>`).join("")}
    </div>
  </div>
</section>

<section class="section section-dark" id="industries">
  <div class="hero-grid-bg"></div>
  <div class="container">
    <div class="section-head reveal">
      <span class="pill pill-dark">Industries We Serve</span>
      <h2>Expertise Across Multiple Industries</h2>
      <p>Tailored digital solutions for businesses of every kind and size.</p>
    </div>
    <div class="industry-grid">
      ${industries.map(([i, t, d]) => `
      <div class="industry-card reveal">${icon(i)}<h3>${t}</h3><p>${d}</p></div>`).join("")}
    </div>
    <div class="center reveal"><a href="/contact" class="btn btn-white">Don't see your industry? Let's talk ${icon("arrow")}</a></div>
  </div>
</section>

<section class="section" id="why">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">Why Choose Us</span>
      <h2>Why Businesses Choose ${SITE.name}</h2>
      <p>We combine expertise, honesty and reliable delivery to create results you can measure.</p>
    </div>
    <div class="why-grid">
      ${why.map(([i, t, d]) => `<div class="why-card reveal"><div class="why-icon">${icon(i)}</div><h3>${t}</h3><p>${d}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="section section-soft" id="insights">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">From Our Blog</span>
      <h2>Latest Insights</h2>
      <p>Practical guides on web development, SEO and growing your business online.</p>
    </div>
    <div class="blog-grid">${POSTS.map(postCard).join("")}</div>
    <div class="center reveal"><a href="/blog" class="btn btn-primary">View All Articles ${icon("arrow")}</a></div>
  </div>
</section>

<section class="section tech-section">
  <div class="container">
    <div class="section-head reveal">
      <h2>Technologies &amp; Platforms We Use</h2>
      <p>Proven tools and platforms chosen to fit your goals and budget.</p>
    </div>
  </div>
  <div class="marquee" aria-label="Technologies">
    <div class="marquee-track">${[...tech, ...tech].map((t) => `<span>${t}</span>`).join("")}</div>
  </div>
</section>

${ctaBand({ title: "Ready to Transform Your Business?", text: "Book a free consultation and get a clear plan to grow your business online." })}
`,
};
