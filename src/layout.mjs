import { SITE, CATEGORY_STYLE } from "./config.mjs";
import { fmtDate, readMins } from "./posts.mjs";

// ---------- Icons ----------
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/>',
  sparkle: '<path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.5 8.5 0 1 1 21 11.5Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 16 0M17 4a4 4 0 0 1 0 8M23 21a8 8 0 0 0-5-7.4"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
  headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  lightbulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z"/><path d="M12 15 9 12a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
  store: '<path d="M3 9 4.5 4h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-7h6v7"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 12 5.5 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2Z"/><circle cx="4" cy="4" r="2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
  wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
};
export const icon = (name, cls = "") =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

export const WA_SVG = '<svg class="wa-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.2 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2Zm5.6 13.7c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .1-1.7-.1-2.9-1.1-4.8-4-5-4.2-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.3.5-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.2 1.4Z"/></svg>';

export const waLink = (msg = "Hi AuraXperts, I'd like to discuss a project.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
export const telLink = () => `tel:${SITE.phone.replace(/\s/g, "")}`;

export const SOCIAL_LABEL = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn" };
export const socialList = () => Object.entries(SITE.social).filter(([, v]) => v);
export const handleOf = (url) => "@" + url.replace(/\/+$/, "").split("/").pop();
export const socialIcons = (cls = "socials") => {
  const items = socialList().map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener" aria-label="${SOCIAL_LABEL[k]}" class="soc soc-${k}">${icon(k)}</a>`).join("");
  return items ? `<div class="${cls}">${items}</div>` : "";
};

// Decorative 3D spheres
export const orbs = (list) => list.map(([cls]) => `<span class="orb ${cls}" aria-hidden="true"></span>`).join("");

const NAV = [
  ["/", "Home"], ["/about", "About"], ["/services", "Services"],
  ["/blog", "Blog"], ["/faq", "FAQs"], ["/contact", "Contact"],
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function header(active) {
  const links = NAV.map(([href, label]) =>
    `<a href="${href}"${href === active ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("");
  return `
<header class="site-header" id="top">
  <div class="container">
    <div class="nav-shell">
      <a href="/" class="brand" aria-label="${SITE.name} home"><img src="/assets/logo-640.png" alt="${SITE.name}" width="170" height="37" /></a>
      <nav class="main-nav" id="mainNav" aria-label="Main">
        ${links}
        <a href="/contact" class="btn btn-primary btn-sm nav-cta">Let's Talk ${icon("arrowUpRight")}</a>
      </nav>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="footer-glow" aria-hidden="true"></div>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="footer-logo"><img src="/assets/logo-640.png" alt="${SITE.name}" width="160" height="35" loading="lazy" /></a>
        <p>A digital marketing &amp; web development agency helping ambitious businesses look great, get found and grow online.</p>
        ${socialIcons("socials socials-dark")}
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/services#digital-marketing">SEO &amp; Digital Marketing</a></li>
          <li><a href="/services#social-media">Social Media Marketing</a></li>
          <li><a href="/services#web-development">Web Development</a></li>
          <li><a href="/services#ecommerce">E-Commerce</a></li>
          <li><a href="/services#branding">Branding &amp; Design</a></li>
          <li><a href="/services#paid-ads">Paid Advertising</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <ul class="footer-contact">
          ${SITE.address ? `<li>${icon("pin")}<span>${SITE.address}</span></li>` : ""}
          <li>${icon("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${icon("phone")}<a href="${telLink()}">${SITE.phone}</a></li>
          <li>${icon("chat")}<a href="${waLink()}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
          <li>${icon("clock")}<span>${SITE.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span data-year>2026</span> ${SITE.name}. All rights reserved.</p>
      <a href="#top" class="to-top" aria-label="Back to top">${icon("up")}</a>
    </div>
  </div>
</footer>
<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WA_SVG}</a>`;
}

export function pageHero({ eyebrow, title, text = "", crumbs = [], extra = "" }) {
  const bc = [["/", "Home"], ...crumbs];
  return `
<section class="page-hero dark">
  <div class="grid-floor" aria-hidden="true"></div>
  ${orbs([["orb-lg ph-o1"], ["orb-sm ph-o2"], ["orb-xs ph-o3"]])}
  <div class="container page-hero-inner">
    <nav class="crumbs" aria-label="Breadcrumb">${bc.map(([h, l], i) => i === bc.length - 1 && crumbs.length ? `<span>${l}</span>` : `<a href="${h}">${l}</a>`).join(`<i>/</i>`)}</nav>
    ${eyebrow ? `<span class="eyebrow eyebrow-light">${eyebrow}</span>` : ""}
    <h1>${title}</h1>
    ${text ? `<p class="page-hero-text">${text}</p>` : ""}
    ${extra}
  </div>
</section>`;
}

export function ctaBlock({ title = "Ready to grow your business?", text = "Book a free consultation and get a clear, honest plan for your website and marketing." } = {}) {
  return `
<section class="cta-section">
  <div class="container">
    <div class="cta-card dark reveal">
      ${orbs([["orb-md cta-o1"], ["orb-sm cta-o2"], ["orb-xs cta-o3"]])}
      <div class="cta-ring" aria-hidden="true"></div>
      <div class="cta-copy">
        <span class="eyebrow eyebrow-light">Let's work together</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <div class="cta-actions">
        <a href="/contact" class="btn btn-white btn-lg">Start a Project ${icon("arrow")}</a>
        <a href="${waLink()}" target="_blank" rel="noopener" class="btn btn-glass btn-lg">${WA_SVG} WhatsApp Us</a>
      </div>
    </div>
  </div>
</section>`;
}

export const postCover = (p, extra = "") => {
  const st = CATEGORY_STYLE[p.tag] || { icon: "book", cover: "cv-1" };
  return `<div class="cover ${st.cover} ${extra}" aria-hidden="true"><span class="cover-orb"></span><span class="cover-orb two"></span><span class="icon3d icon3d-xl">${icon(st.icon)}</span></div>`;
};

export const postCard = (p) => `
  <article class="post-card tilt reveal" data-cat="${p.tag}">
    <a href="/blog/${p.slug}" class="post-cover-link" tabindex="-1" aria-hidden="true">${postCover(p)}</a>
    <div class="post-body">
      <div class="post-meta-top"><span class="tag">${p.tag}</span><span class="date">${icon("calendar")} ${fmtDate(p.date)}</span></div>
      <h3><a href="/blog/${p.slug}">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <div class="post-foot">
        <span>${icon("clock")} ${readMins(p.content)} min read</span>
        <a href="/blog/${p.slug}" class="link-arrow">Read article ${icon("arrow")}</a>
      </div>
    </div>
  </article>`;

export const sectionHead = ({ eyebrow, title, text = "", align = "center", aside = "" }) => `
  <div class="section-head ${align === "split" ? "split" : align === "left" ? "left" : ""} reveal">
    <div>
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
      <h2>${title}</h2>
      ${text && align !== "split" ? `<p>${text}</p>` : ""}
    </div>
    ${align === "split" ? `<div class="section-aside">${text ? `<p>${text}</p>` : ""}${aside}</div>` : ""}
  </div>`;

export function layout({ path, title, description, active, body, extraHead = "" }) {
  const fullTitle = path === "/" ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`;
  const canonical = SITE.url + (path === "/" ? "" : path);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${SITE.name}" />
<meta property="og:title" content="${esc(fullTitle)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE.url}/assets/icon-512.png" />
<meta name="theme-color" content="#0d0930" />
<link rel="icon" type="image/png" href="/assets/favicon.png" />
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/css/style.css" />
${extraHead}
</head>
<body>
${header(active)}
<main>
${body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}
