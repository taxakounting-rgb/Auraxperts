// ==========================================================
//  AURAXPERTS — SITE SETTINGS
//  Change details here, then run:  node build.mjs
// ==========================================================
export const SITE = {
  name: "AuraXperts",
  url: "https://auraxperts.vercel.app",
  tagline: "Digital Marketing & Web Development Agency",
  email: "auraxperts@gmail.com",
  phone: "+92 316 7449788",
  whatsapp: "923167449788",               // country code + number, digits only
  address: "",                            // office address (leave empty to hide)
  hours: "Mon – Sat, 10:00 AM – 7:00 PM (PKT)",
  social: {
    facebook: "https://www.facebook.com/auraxperts/",
    instagram: "https://www.instagram.com/theauraxperts/",
    linkedin: "",                         // add later
  },
};

export const SERVICES = [
  {
    id: "digital-marketing", icon: "search", name: "Digital Marketing & SEO", short: "SEO & Growth",
    blurb: "Get found on Google by the customers already searching for what you sell.",
    long: "We combine technical SEO, keyword strategy and genuinely useful content so your business shows up when customers search — and turns that attention into enquiries. Every month you get a clear report showing rankings, traffic and leads, explained in plain language.",
    points: ["Technical & on-page SEO", "Keyword & competitor research", "Local SEO & Google Business Profile", "Content strategy & copywriting", "Monthly performance reports"],
  },
  {
    id: "social-media", icon: "share", name: "Social Media Marketing", short: "Social Media",
    blurb: "Scroll-stopping content that builds an audience and brings in messages.",
    long: "From the content calendar to post design, captions, reels and community replies, we keep your brand active, consistent and recognisable on the platforms your customers actually use — and we track what drives real enquiries, not just likes.",
    points: ["Facebook, Instagram, TikTok & LinkedIn", "Monthly content calendars", "Post, carousel & reel design", "Community management", "Paid social campaigns"],
  },
  {
    id: "web-development", icon: "code", name: "Web Development", short: "Websites",
    blurb: "Fast, secure, mobile-first websites engineered to convert visitors.",
    long: "Business websites, landing pages and web applications built for speed, accessibility and conversions. We choose the right platform for your goals and budget — custom code, WordPress or a modern framework — and hand over a site your team can confidently manage.",
    points: ["Custom & WordPress websites", "High-converting landing pages", "Speed & Core Web Vitals optimisation", "Easy-to-edit CMS", "Hosting, maintenance & support"],
  },
  {
    id: "ui-ux-design", icon: "pen", name: "UI/UX Design", short: "UI/UX",
    blurb: "Interfaces that feel effortless — so users trust you and take action.",
    long: "We study how your users think and what they need, then design clear journeys and polished interfaces. You get clickable prototypes to test before development, and a design system that keeps everything consistent as you grow.",
    points: ["User research & journey mapping", "Wireframes & clickable prototypes", "Website & app UI design", "Design systems", "Usability reviews"],
  },
  {
    id: "ecommerce", icon: "cart", name: "E-Commerce Development", short: "E-Commerce",
    blurb: "Online stores built to sell — from product page to checkout.",
    long: "Shopify, WooCommerce and custom stores with smooth checkouts, local and international payment gateways, and the analytics you need to understand what sells. We optimise every step between first visit and completed order.",
    points: ["Shopify & WooCommerce stores", "Payment gateway integration", "Product catalogue setup", "Checkout optimisation", "Store SEO & analytics"],
  },
  {
    id: "branding", icon: "sparkle", name: "Branding & Graphic Design", short: "Branding",
    blurb: "Identities and creatives that make your brand instantly recognisable.",
    long: "A strong brand earns trust before you say a word. We craft logos, colour systems, typography and guidelines, then apply them across social media, print and presentations so you look consistent and professional everywhere.",
    points: ["Logo & brand identity", "Brand guidelines", "Social media creatives", "Brochures, flyers & banners", "Pitch decks & presentations"],
  },
  {
    id: "paid-ads", icon: "target", name: "Paid Advertising (PPC)", short: "Paid Ads",
    blurb: "Google & Meta campaigns that are tracked, tested and accountable.",
    long: "We set up proper conversion tracking first, then build, test and optimise campaigns on Google and Meta. Budgets go to the ads and audiences that produce enquiries and sales — and you see exactly where every rupee or dollar went.",
    points: ["Google Search & Display Ads", "Meta (Facebook & Instagram) Ads", "Conversion tracking setup", "A/B testing of ads & landing pages", "Transparent ROI reporting"],
  },
  {
    id: "software", icon: "cpu", name: "Custom Software & Automation", short: "Software",
    blurb: "Web apps, dashboards and automations tailored to your workflow.",
    long: "When off-the-shelf tools don't fit, we build custom web apps, internal dashboards and automations that remove repetitive work. The result: fewer errors, faster responses to customers and hours saved every week.",
    points: ["Custom web applications", "Business dashboards", "Workflow automation", "API & third-party integrations", "Ongoing support & updates"],
  },
];

export const CATEGORY_STYLE = {
  "Web Development": { icon: "code", cover: "cv-1" },
  "SEO": { icon: "search", cover: "cv-2" },
  "Social Media": { icon: "share", cover: "cv-3" },
  "Paid Ads": { icon: "target", cover: "cv-4" },
  "Branding": { icon: "sparkle", cover: "cv-5" },
  "E-Commerce": { icon: "cart", cover: "cv-6" },
  "UI/UX": { icon: "pen", cover: "cv-3" },
  "Automation": { icon: "cpu", cover: "cv-1" },
};
