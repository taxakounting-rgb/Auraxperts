import { SITE } from "../config.mjs";
import { icon, pageHero, ctaBlock, waLink, telLink, WA_SVG } from "../layout.mjs";

const FAQS = [
  ["General", "What does AuraXperts do?", "We're a digital marketing and web development agency. We build websites and online stores, design brands, manage social media, run SEO and paid advertising campaigns, and develop custom software and automations — everything a business needs to grow online, handled by one team."],
  ["General", "Do you work with small businesses and startups?", "Yes. A large part of our work is with startups and small to medium businesses. We offer flexible packages and can start with a single service, then grow the partnership as your business grows."],
  ["General", "Do you work with clients outside my city or country?", "Absolutely. We work remotely with clients in different cities and countries, communicating through WhatsApp, email and video calls. Distance has never been a barrier to great results."],
  ["Services", "Will my website be mobile-friendly and SEO-ready?", "Yes. Every website we build is fully responsive, fast-loading and built with SEO best practices from day one — clean structure, proper headings, meta tags, image optimisation and analytics setup."],
  ["Services", "Can I update my website myself after it's built?", "Yes. We can build on an easy content management system such as WordPress or Shopify, and we'll walk your team through updating text, images, blog posts and products. If you'd prefer, we can also handle updates for you."],
  ["Services", "Do you offer monthly marketing packages?", "Yes. We offer monthly plans for SEO, social media management and paid advertising. Each plan includes clear deliverables and regular reports so you can see exactly what's been done and what results it produced."],
  ["Services", "Can you redesign my existing website?", "Definitely. We'll review your current site, keep what's working, and redesign the rest for better looks, speed and conversions — while protecting your existing search rankings during the move."],
  ["Services", "Do you create content and graphics for social media?", "Yes. We plan content calendars, design posts, carousels and reels, write captions and can manage comments and messages. All content follows your brand guidelines so your feed looks consistent."],
  ["Pricing", "How much do your services cost?", "Every business is different, so we prepare a custom quote after understanding your goals, scope and timeline. Our pricing is always transparent: you'll receive a written proposal with exactly what's included before any work begins."],
  ["Pricing", "How do payments work?", "For most projects we take an advance to begin, with the remaining balance tied to clear milestones. Monthly services are billed at the start of each month. We'll agree the payment schedule with you upfront."],
  ["Pricing", "Is the first consultation really free?", "Yes. The first consultation is completely free with no obligation. We'll discuss your business, answer your questions and suggest the best approach — whether or not you decide to work with us."],
  ["Process", "How long does it take to build a website?", "A standard business website usually takes 2–4 weeks, depending on the number of pages, features and how quickly content is ready. E-commerce stores and custom web applications take longer. You'll get a clear timeline in your proposal."],
  ["Process", "When will I start seeing results from SEO or ads?", "Paid ads can start bringing traffic and inquiries within days of launch, then improve as we optimise. SEO is a long-term investment: early improvements often appear within weeks, while significant growth usually builds over three to six months."],
  ["Process", "What do you need from me to get started?", "Just a short conversation about your business and goals. After that, we'll guide you on what's needed — such as logo files, content, product details or access to existing accounts — and make the process as easy as possible."],
  ["Support", "Do you provide support after the project is finished?", "Yes. We offer ongoing maintenance, updates and support plans, and we're always available for questions. Many clients continue working with us on marketing and improvements after launch."],
  ["Support", "Who owns the website and designs when the project is done?", "You do. Once the project is complete and paid for, you own your website, content and brand assets. We'll hand over all relevant files and account access."],
];

const cats = [...new Set(FAQS.map((f) => f[0]))];
const catIcon = { General: "help", Services: "layers", Pricing: "wallet", Process: "clock", Support: "headset" };

export default {
  path: "/faq",
  out: "faq.html",
  active: "/faq",
  title: "FAQs",
  description: "Answers to common questions about AuraXperts services, pricing, timelines, process and support.",
  body: () => `
${pageHero({
    eyebrow: "Help centre",
    title: "Frequently asked <span class='text-3d'>questions.</span>",
    text: "Everything you need to know about working with us. Can't find an answer? Message us anytime.",
    crumbs: [["/faq", "FAQs"]],
    extra: `<label class="faq-search"><span class="sr-only">Search questions</span>${icon("search")}<input type="search" id="faqSearch" placeholder="Search questions — e.g. price, SEO, website…" autocomplete="off" /></label>`,
  })}

<section class="section">
  <div class="container faq-layout">
    <div>
      <div class="filter-bar" role="toolbar" aria-label="Filter questions by topic">
        <button class="filter-chip active" data-faq-filter="all">All</button>
        ${cats.map((c) => `<button class="filter-chip" data-faq-filter="${c}">${icon(catIcon[c])}${c}</button>`).join("")}
      </div>
      <div class="faq-list" id="faqList">
        ${FAQS.map(([c, q, a]) => `
        <details class="faq-item" data-cat="${c}">
          <summary><span class="faq-cat">${icon(catIcon[c])}</span><span class="faq-q">${q}</span><span class="faq-toggle" aria-hidden="true"></span></summary>
          <div class="faq-a"><p>${a}</p></div>
        </details>`).join("")}
      </div>
      <p class="empty-note" id="faqEmpty" hidden>No questions match your search. Try another word, or <a href="/contact">ask us directly</a>.</p>
    </div>

    <aside class="faq-side">
      <div class="side-card side-dark">
        <span class="icon3d">${icon("chat")}</span>
        <h3>Still have questions?</h3>
        <p>Our team is happy to help — usually within a few hours.</p>
        <a href="${waLink("Hi AuraXperts, I have a question.")}" target="_blank" rel="noopener" class="btn btn-white btn-block">${WA_SVG} WhatsApp us</a>
        <a href="${telLink()}" class="btn btn-glass btn-block">${icon("phone")} ${SITE.phone}</a>
        <a href="mailto:${SITE.email}" class="side-mail">${icon("mail")} ${SITE.email}</a>
      </div>
    </aside>
  </div>
</section>
${ctaBlock()}
`,
};

export const notFound = {
  path: "/404",
  out: "404.html",
  active: "",
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  body: () => `
${pageHero({ eyebrow: "Error 404", title: "This page drifted <span class='text-3d'>into space.</span>", text: "The page you're looking for doesn't exist or has moved.", extra: `<div class="hero-actions"><a href="/" class="btn btn-white btn-lg">Back to home ${icon("arrow")}</a><a href="/contact" class="btn btn-glass btn-lg">Contact us</a></div>` })}
`,
};
