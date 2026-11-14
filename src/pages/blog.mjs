import { POSTS } from "../config.mjs";
import { icon, pageHero, ctaBand } from "../layout.mjs";

const COVER = {
  "Web Development": ["code", "cover-1"],
  "SEO": ["search", "cover-2"],
  "Social Media": ["share", "cover-3"],
};

export const postCard = (p) => {
  const [ic, cls] = COVER[p.tag] || ["book", "cover-1"];
  return `
  <article class="post-card reveal">
    <a href="/blog/${p.slug}" class="post-cover ${cls}" aria-hidden="true" tabindex="-1">${icon(ic)}</a>
    <div class="post-body">
      <span class="tag">${p.tag}</span>
      <h3><a href="/blog/${p.slug}">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <div class="post-meta">
        <span>${icon("user")} AuraXperts Team</span>
        <span>${icon("clock")} ${p.minutes} min read</span>
        <a href="/blog/${p.slug}" class="link-arrow">Read ${icon("arrow")}</a>
      </div>
    </div>
  </article>`;
};

const ARTICLES = {
  "website-checklist-small-business": `
<p>Your website is often the first impression a customer has of your business. Before spending money on ads or social media, make sure the site can actually turn visitors into enquiries. Use this checklist to find quick wins.</p>
<h2>1. It loads in under three seconds</h2>
<p>Most visitors leave if a page takes too long. Compress images, use modern formats like WebP, and choose good hosting. Test your site with Google PageSpeed Insights.</p>
<h2>2. It works perfectly on mobile</h2>
<p>The majority of traffic is mobile. Check that text is readable without zooming, buttons are easy to tap and nothing scrolls sideways.</p>
<h2>3. Visitors know what you do within five seconds</h2>
<p>Your headline should say who you help and how. Avoid vague slogans — be specific.</p>
<h2>4. There is a clear call to action</h2>
<p>Every page should guide visitors to one next step: call, WhatsApp, book a consultation or request a quote.</p>
<h2>5. Contact details are easy to find</h2>
<p>Put your phone number, email and WhatsApp in the header or footer, plus a simple contact form.</p>
<h2>6. It shows proof you can be trusted</h2>
<p>Real client reviews, project examples, certifications and logos of businesses you've worked with all build confidence.</p>
<h2>7. It uses HTTPS</h2>
<p>The padlock in the browser matters for trust and for Google rankings. Most modern hosts provide free SSL certificates.</p>
<h2>8. Basic SEO is in place</h2>
<p>Every page needs a unique title and meta description, one clear H1 heading and descriptive image alt text.</p>
<h2>9. Analytics is installed</h2>
<p>Set up Google Analytics and Google Search Console so you can see where visitors come from and what they do.</p>
<h2>10. Content is up to date</h2>
<p>Old prices, outdated services or a copyright year from years ago make a business look inactive. Review your content every quarter.</p>
<p><strong>Need help?</strong> We offer website reviews and can fix these issues for you — <a href="/contact">get in touch</a>.</p>`,

  "seo-basics-local-business": `
<p>Search engine optimisation can feel complicated, but local businesses can make real progress with a handful of consistent habits. Here's where to start.</p>
<h2>Claim your Google Business Profile</h2>
<p>This is the single most important step for local search. Add accurate hours, categories, photos, services and your website link. Keep it updated and post regularly.</p>
<h2>Collect and reply to reviews</h2>
<p>Ask happy customers to leave a review and reply to every one — positive or negative. Reviews influence both rankings and buying decisions.</p>
<h2>Keep your business details consistent</h2>
<p>Your name, address and phone number should be identical on your website, Google profile, social media and directories.</p>
<h2>Create a page for each service</h2>
<p>A single "Services" page rarely ranks well. Give each main service its own page that explains what you offer, who it's for and how to contact you.</p>
<h2>Target the words your customers use</h2>
<p>Think like a customer: "web design company in Lahore" or "best dentist near me". Use these phrases naturally in titles, headings and text.</p>
<h2>Make your site fast and mobile-friendly</h2>
<p>Google uses mobile performance as a ranking signal. A slow site loses both rankings and customers.</p>
<h2>Publish helpful content</h2>
<p>Answer the questions customers ask you every day. Each helpful article is another way for people to find you.</p>
<h2>Be patient and measure</h2>
<p>SEO compounds over months, not days. Track progress in Google Search Console and keep improving.</p>
<p>Want a local SEO plan for your business? <a href="/contact">Talk to our team</a>.</p>`,

  "social-media-content-plan": `
<p>Posting consistently is one of the hardest parts of social media marketing. The fix is to plan in batches. Here's a simple framework to plan a whole month in one afternoon.</p>
<h2>Step 1: Choose 4 content pillars</h2>
<p>Pick four themes that match your business, for example: <em>Educate</em> (tips), <em>Showcase</em> (your work or products), <em>Behind the scenes</em> and <em>Promote</em> (offers).</p>
<h2>Step 2: Decide your posting rhythm</h2>
<p>Three to five posts a week is realistic for most small businesses. Consistency matters more than volume.</p>
<h2>Step 3: Brainstorm ideas for each pillar</h2>
<p>Write five ideas per pillar. Look at customer questions, reviews, your best-selling products and seasonal events.</p>
<h2>Step 4: Map ideas onto a calendar</h2>
<p>Rotate the pillars through the week so your feed feels varied. Add key dates like sales, holidays and launches.</p>
<h2>Step 5: Design in batches with templates</h2>
<p>Create a few branded templates in your brand colours and fonts, then design all the posts in one session.</p>
<h2>Step 6: Write captions with a clear call to action</h2>
<p>Every caption should tell people what to do next: comment, save, visit the website or send a message.</p>
<h2>Step 7: Schedule and review</h2>
<p>Use Meta Business Suite or another scheduler. At the end of the month, check which posts performed best and do more of those.</p>
<p>Prefer to hand it over? Our team can plan, design and manage your social media — <a href="/contact">contact us</a>.</p>`,
};

export default {
  path: "/blog",
  out: "blog.html",
  active: "/blog",
  title: "Blog",
  description: "Practical guides from AuraXperts on web development, SEO, social media and growing your business online.",
  body: () => `
${pageHero({ badge: "Our Blog", title: "Insights &amp; Guides", text: "Practical, no-fluff advice on websites, SEO, social media and digital growth." })}
<section class="section">
  <div class="container">
    <div class="blog-grid">${POSTS.map(postCard).join("")}</div>
  </div>
</section>
${ctaBand()}
`,
};

export const postPages = POSTS.map((p) => ({
  path: `/blog/${p.slug}`,
  out: `blog/${p.slug}.html`,
  active: "/blog",
  title: p.title,
  description: p.excerpt,
  body: () => `
${pageHero({ badge: p.tag, title: p.title, text: `${icon("user")} AuraXperts Team &nbsp;·&nbsp; ${icon("clock")} ${p.minutes} min read` })}
<section class="section">
  <div class="container article-wrap">
    <article class="article">${ARTICLES[p.slug]}</article>
    <aside class="article-side">
      <div class="side-card">
        <h3>Need help with this?</h3>
        <p>Get a free consultation with our team.</p>
        <a href="/contact" class="btn btn-primary btn-block">Contact Us ${icon("arrow")}</a>
      </div>
      <div class="side-card">
        <h3>More articles</h3>
        <ul class="side-links">${POSTS.filter((x) => x.slug !== p.slug).map((x) => `<li><a href="/blog/${x.slug}">${x.title}</a></li>`).join("")}</ul>
      </div>
    </aside>
  </div>
</section>
${ctaBand()}
`,
}));
