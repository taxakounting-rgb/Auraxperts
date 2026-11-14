// ==========================================================
//  AURAXPERTS — SITE SETTINGS
//  Change your contact details here, then run:  node build.mjs
// ==========================================================
export const SITE = {
  name: "AuraXperts",
  url: "https://auraxperts.vercel.app",
  tagline: "Digital Marketing & Web Development Agency",
  email: "auraxperts@gmail.com",           // business email
  phone: "+92 316 7449788",               // phone as shown on the site
  whatsapp: "923167449788",               // WhatsApp: country code + number, digits only
  address: "",                            // office address (leave empty to hide)
  social: {
    facebook: "",                         // full links, leave empty to hide
    instagram: "",
    linkedin: "",
  },
};

export const SERVICES = [
  {
    id: "digital-marketing", icon: "search", name: "Digital Marketing & SEO",
    short: "Full-funnel digital marketing that brings qualified leads, not just traffic.",
    long: "We combine search engine optimisation, content and data-driven strategy so the right people find you on Google — and turn into enquiries once they land on your site.",
    points: ["Technical & on-page SEO", "Keyword & competitor research", "Local SEO & Google Business Profile", "Content strategy & copywriting", "Monthly performance reporting"],
  },
  {
    id: "social-media", icon: "share", name: "Social Media Marketing",
    short: "Content, design and paid social that grows a real, engaged audience.",
    long: "From planning your content calendar to designing posts, writing captions and managing your community, we keep your brand active and consistent on the platforms your customers use.",
    points: ["Facebook, Instagram, TikTok & LinkedIn", "Monthly content calendars", "Post & reel design", "Community management", "Paid social campaigns"],
  },
  {
    id: "web-development", icon: "code", name: "Web Development",
    short: "Fast, secure and mobile-first websites built to convert visitors.",
    long: "Business websites, landing pages and web applications engineered for speed, accessibility and conversions — built on the platform that fits your goals and budget.",
    points: ["Custom & WordPress websites", "Landing pages that convert", "Speed & Core Web Vitals optimisation", "CMS so you can edit content", "Hosting, maintenance & support"],
  },
  {
    id: "ui-ux-design", icon: "pen", name: "UI/UX Design",
    short: "Research-led interface design that makes products easy to use and trust.",
    long: "We map how your users think, then design clean interfaces and smooth journeys — from wireframes to polished, developer-ready prototypes.",
    points: ["User research & journeys", "Wireframes & prototypes", "Website & app UI design", "Design systems", "Usability reviews"],
  },
  {
    id: "ecommerce", icon: "cart", name: "E-Commerce Development",
    short: "Online stores built to sell — from product page to checkout.",
    long: "Shopify, WooCommerce and custom stores with smooth checkouts, payment gateway integration and the analytics you need to grow sales.",
    points: ["Shopify & WooCommerce stores", "Payment gateway integration", "Product catalogue setup", "Checkout optimisation", "Store SEO & analytics"],
  },
  {
    id: "branding", icon: "sparkle", name: "Branding & Graphic Design",
    short: "Logos, identities and creatives that make your brand memorable.",
    long: "A strong brand builds trust before you say a word. We create identities and marketing material that look consistent everywhere your customers see you.",
    points: ["Logo & brand identity", "Brand guidelines", "Social media creatives", "Brochures, flyers & banners", "Pitch decks & presentations"],
  },
  {
    id: "paid-ads", icon: "target", name: "Paid Advertising (PPC)",
    short: "Google & Meta ad campaigns that are tracked, tested and optimised.",
    long: "We set up conversion tracking first, then build, test and optimise campaigns on Google and Meta so every rupee and dollar of ad spend is accountable.",
    points: ["Google Search & Display Ads", "Meta (Facebook & Instagram) Ads", "Conversion tracking setup", "A/B testing of ads & landing pages", "Clear ROI reporting"],
  },
  {
    id: "software", icon: "cpu", name: "Custom Software & Automation",
    short: "Web apps, dashboards and automations tailored to your workflows.",
    long: "When off-the-shelf tools don't fit, we build custom web apps, internal dashboards and automations that save your team hours every week.",
    points: ["Custom web applications", "Business dashboards", "Workflow automation", "API & third-party integrations", "Ongoing support & updates"],
  },
];

export const POSTS = [
  {
    slug: "website-checklist-small-business", tag: "Web Development", minutes: 4,
    title: "The 10-Point Website Checklist Every Small Business Needs",
    excerpt: "Before you spend on ads, make sure your website can turn visitors into customers. Here are ten things to check today.",
  },
  {
    slug: "seo-basics-local-business", tag: "SEO", minutes: 4,
    title: "SEO Basics: How Local Businesses Can Rank on Google",
    excerpt: "You don't need a huge budget to show up on Google. Start with these practical local SEO steps that compound over time.",
  },
  {
    slug: "social-media-content-plan", tag: "Social Media", minutes: 3,
    title: "How to Plan a Month of Social Media Content in One Afternoon",
    excerpt: "Consistency beats perfection. A simple framework to plan, design and schedule 30 days of posts without burning out.",
  },
];
