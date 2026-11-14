import { SITE, SERVICES } from "../config.mjs";
import { icon, pageHero, ctaBand, waLink } from "../layout.mjs";

const contactCard = () => `
<div class="contact-card reveal">
  <h3>Contact Information</h3>
  ${SITE.address ? `<div class="ci">${icon("pin")}<div><b>Address</b><span>${SITE.address}</span></div></div>` : ""}
  <div class="ci">${icon("mail")}<div><b>Email</b><a href="mailto:${SITE.email}">${SITE.email}</a></div></div>
  <div class="ci">${icon("phone")}<div><b>Phone &amp; WhatsApp</b><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a><a href="${waLink()}" target="_blank" rel="noopener">Chat on WhatsApp</a></div></div>
  <div class="ci">${icon("clock")}<div><b>Response Time</b><span>We reply to every enquiry within 24 hours.</span></div></div>
</div>`;

export const about = {
  path: "/about",
  out: "about.html",
  active: "/about",
  title: "About Us",
  description: "Learn about AuraXperts — a digital agency helping businesses grow with websites, SEO, social media, paid ads and branding.",
  body: () => `
${pageHero({ badge: "About Us", title: `About ${SITE.name}`, text: "Your trusted partner for complete digital growth." })}
<section class="section">
  <div class="container two-col">
    <div class="reveal">
      <span class="pill">Who We Are</span>
      <h2>A Digital Agency Built Around Your Growth</h2>
      <p>${SITE.name} is a digital marketing and web development agency that helps businesses build a strong, profitable presence online. We bring strategy, design, development and marketing together under one roof — so everything you do online works towards the same goal.</p>
      <p>Our services cover digital marketing &amp; SEO, social media marketing, web development, UI/UX design, e-commerce, branding, paid advertising and custom software.</p>
      <p>We are more than a service provider. We are a team of passionate professionals who care about clear communication, honest advice and results you can measure.</p>
      <a href="/services" class="btn btn-primary">Explore Our Services ${icon("arrow")}</a>
    </div>
    ${contactCard()}
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">Our Mission</span>
      <h2>Driven by Purpose</h2>
      <p>What we stand for, and what you can expect from us.</p>
    </div>
    <div class="mission-grid">
      <div class="mission-card reveal"><div class="why-icon">${icon("target")}</div><h3>Our Mission</h3><p>To help businesses of every size grow online with digital solutions that are effective, affordable and easy to understand.</p></div>
      <div class="mission-card reveal"><div class="why-icon">${icon("rocket")}</div><h3>Our Vision</h3><p>To be the most trusted growth partner for ambitious businesses — known for quality work, honest advice and long-term relationships.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <span class="pill">Our Values</span>
      <h2>How We Work With You</h2>
    </div>
    <div class="why-grid">
      <div class="why-card reveal"><div class="why-icon">${icon("shield")}</div><h3>Honesty</h3><p>Straight answers, realistic timelines and transparent pricing.</p></div>
      <div class="why-card reveal"><div class="why-icon">${icon("sparkle")}</div><h3>Quality</h3><p>Every detail checked before anything goes live.</p></div>
      <div class="why-card reveal"><div class="why-icon">${icon("users")}</div><h3>Partnership</h3><p>We treat your business goals as our own.</p></div>
      <div class="why-card reveal"><div class="why-icon">${icon("chart")}</div><h3>Results</h3><p>We measure success by the growth we create for you.</p></div>
    </div>
  </div>
</section>
${ctaBand({ title: "Ready to Work with Us?", text: `Let's discuss how ${SITE.name} can help grow your business.` })}
`,
};

export const services = {
  path: "/services",
  out: "services.html",
  active: "/services",
  title: "Services",
  description: "Digital marketing, SEO, social media, web development, UI/UX, e-commerce, branding, paid ads and custom software services by AuraXperts.",
  body: () => `
${pageHero({ badge: "Our Services", title: "Digital Services Built for Growth", text: "Eight service lines, one accountable team. Every engagement is planned around clear goals, honest reporting and measurable results." })}
<section class="section">
  <div class="container">
    <div class="services-grid services-grid-lg">
      ${SERVICES.map((s, i) => `
      <article class="service-card reveal">
        <div class="svc-cover cover-${(i % 4) + 1}">${icon(s.icon)}</div>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <a href="#${s.id}" class="link-arrow">Learn more ${icon("arrow")}</a>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container svc-details">
    ${SERVICES.map((s, i) => `
    <div class="svc-detail reveal" id="${s.id}">
      <div class="svc-detail-visual cover-${(i % 4) + 1}">${icon(s.icon)}</div>
      <div class="svc-detail-copy">
        <span class="pill">Service ${String(i + 1).padStart(2, "0")}</span>
        <h2>${s.name}</h2>
        <p>${s.long}</p>
        <ul class="ticks ticks-2">${s.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        <a href="/contact?service=${encodeURIComponent(s.name)}" class="btn btn-primary">Get a Quote ${icon("arrow")}</a>
      </div>
    </div>`).join("")}
  </div>
</section>
${ctaBand({ title: "Not Sure Which Service You Need?", text: "Tell us what you're trying to achieve and we'll recommend the right mix for your budget and goals.", button: "Talk to Us" })}
`,
};

const faqs = [
  ["How long does it take to build a website?", "A standard business website usually takes 2–4 weeks depending on the number of pages, features and how quickly content is ready. E-commerce and custom projects take longer — we'll give you a clear timeline before starting."],
  ["How much do your services cost?", "Every business is different, so we prepare a custom quote after understanding your goals. We offer packages for startups, small businesses and larger companies, and our pricing is always transparent."],
  ["Do you offer monthly marketing packages?", "Yes. We offer monthly plans for SEO, social media management and paid advertising, with regular reporting so you can see exactly what you're getting."],
  ["Will my website be mobile-friendly and SEO-ready?", "Yes. Every website we build is fully responsive, fast-loading and built with SEO best practices from day one."],
  ["Can I update the website myself?", "Yes. We can build on a content management system (like WordPress or Shopify) and show your team how to update text, images and products."],
  ["Do you work with clients outside my city or country?", "Absolutely. We work remotely with clients and communicate via WhatsApp, email and video calls."],
  ["What do you need from me to get started?", "Just a short conversation about your business and goals. We'll then send a proposal with scope, timeline and pricing."],
];

export const contact = {
  path: "/contact",
  out: "contact.html",
  active: "/contact",
  title: "Contact Us",
  description: "Contact AuraXperts for a free consultation on websites, SEO, social media marketing, paid ads and branding.",
  body: () => `
${pageHero({ badge: "Contact", title: "Let's Grow Your Business Together", text: "Tell us about your project and we'll get back to you within 24 hours." })}
<section class="section">
  <div class="container two-col contact-layout">
    <form class="contact-form reveal" id="contactForm" data-email="${SITE.email}" data-wa="${SITE.whatsapp}">
      <h3>Send us a message</h3>
      <div class="form-row">
        <label>Full name<input name="name" required autocomplete="name" placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required autocomplete="email" placeholder="you@company.com" /></label>
      </div>
      <div class="form-row">
        <label>Phone / WhatsApp<input name="phone" autocomplete="tel" placeholder="Optional" /></label>
        <label>Service
          <select name="service">${SERVICES.map((s) => `<option>${s.name}</option>`).join("")}<option>Other</option></select>
        </label>
      </div>
      <label>Message<textarea name="message" rows="5" required placeholder="Tell us about your project, goals and timeline"></textarea></label>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit" data-via="email">${icon("mail")} Send via Email</button>
        <button class="btn btn-wa" type="submit" data-via="whatsapp">${icon("chat")} Send via WhatsApp</button>
      </div>
      <p class="form-note">Choose how you'd like to send — your email app or WhatsApp will open with your message ready.</p>
    </form>
    ${contactCard()}
  </div>
</section>

<section class="section section-soft" id="faq">
  <div class="container narrow">
    <div class="section-head reveal">
      <span class="pill">FAQs</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq">
      ${faqs.map(([q, a]) => `<details class="reveal"><summary>${q}</summary><p>${a}</p></details>`).join("")}
    </div>
  </div>
</section>
`,
};

export const notFound = {
  path: "/404",
  out: "404.html",
  active: "",
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  body: () => `
${pageHero({ badge: "404", title: "Page Not Found", text: "Sorry, the page you're looking for doesn't exist or has moved." })}
<section class="section center"><a href="/" class="btn btn-primary">Back to Home ${icon("arrow")}</a></section>
`,
};
