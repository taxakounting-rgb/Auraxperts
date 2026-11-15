import { SITE } from "../config.mjs";
import { SORTED_POSTS, fmtDate, readMins } from "../posts.mjs";
import { icon, pageHero, ctaBlock, postCard, postCover, socialList, SOCIAL_LABEL, handleOf, waLink, WA_SVG } from "../layout.mjs";

const cats = [...new Set(SORTED_POSTS.map((p) => p.tag))];

export default {
  path: "/blog",
  out: "blog.html",
  active: "/blog",
  title: "Blog",
  description: "In-depth guides from AuraXperts on web development, SEO, social media, paid ads, branding and growing your business online.",
  body: () => {
    const feat = SORTED_POSTS[0];
    return `
${pageHero({ eyebrow: "The AuraXperts blog", title: "Insights &amp; <span class='text-3d'>guides.</span>", text: "In-depth, practical articles on websites, SEO, social media, advertising and digital growth.", crumbs: [["/blog", "Blog"]] })}

<section class="section">
  <div class="container">
    <a href="/blog/${feat.slug}" class="featured-post tilt reveal">
      ${postCover(feat, "cover-feat")}
      <div class="featured-body">
        <span class="badge-new">Latest article</span>
        <div class="post-meta-top"><span class="tag">${feat.tag}</span><span class="date">${icon("calendar")} ${fmtDate(feat.date)}</span><span class="date">${icon("clock")} ${readMins(feat.content)} min read</span></div>
        <h2>${feat.title}</h2>
        <p>${feat.excerpt}</p>
        <span class="link-arrow">Read the full article ${icon("arrow")}</span>
      </div>
    </a>

    <div class="filter-bar reveal" role="toolbar" aria-label="Filter articles by category">
      <button class="filter-chip active" data-filter="all">All articles</button>
      ${cats.map((c) => `<button class="filter-chip" data-filter="${c}">${c}</button>`).join("")}
    </div>

    <div class="blog-grid" id="postGrid">${SORTED_POSTS.map((x, i) => i === 0 ? postCard(x).replace('class="post-card', 'data-featured hidden class="post-card') : postCard(x)).join("")}</div>
    <p class="empty-note" id="emptyNote" hidden>No articles in this category yet.</p>
  </div>
</section>
${ctaBlock()}
`;
  },
};

export const postPages = SORTED_POSTS.map((p) => {
  const related = [...SORTED_POSTS.filter((x) => x.slug !== p.slug && x.tag === p.tag), ...SORTED_POSTS.filter((x) => x.slug !== p.slug && x.tag !== p.tag)].slice(0, 3);
  const url = `${SITE.url}/blog/${p.slug}`;
  const meta = `<div class="hero-meta"><span>${icon("user")} AuraXperts Team</span><span>${icon("calendar")} ${fmtDate(p.date)}</span><span>${icon("clock")} ${readMins(p.content)} min read</span></div>`;
  return {
    path: `/blog/${p.slug}`,
    out: `blog/${p.slug}.html`,
    active: "/blog",
    title: p.title,
    description: p.excerpt,
    extraHead: `<meta property="article:published_time" content="${p.date}" />`,
    body: () => `
<div class="read-progress" aria-hidden="true"><span id="readBar"></span></div>
${pageHero({ eyebrow: p.tag, title: p.title, crumbs: [["/blog", "Blog"], ["", p.tag]], extra: meta })}

<section class="section article-section">
  <div class="container article-layout">
    <aside class="share-rail" aria-label="Share this article">
      <span>Share</span>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on Facebook">${icon("facebook")}</a>
      <a href="https://wa.me/?text=${encodeURIComponent(p.title + " " + url)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${WA_SVG}</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${icon("linkedin")}</a>
      <button type="button" data-copy="${url}" aria-label="Copy link">${icon("link")}</button>
    </aside>

    <article class="article">
      <p class="article-lead">${p.excerpt}</p>
      ${p.content}
      <div class="author-box">
        <img src="/assets/icon-512.png" alt="" width="56" height="56" loading="lazy" />
        <div><b>Written by the AuraXperts Team</b><p>Our strategists, designers and developers share what we learn from real client projects.</p></div>
      </div>
    </article>

    <aside class="article-side">
      <div class="side-card side-dark">
        <span class="icon3d">${icon("rocket")}</span>
        <h3>Need help with this?</h3>
        <p>Get a free consultation and an honest plan for your business.</p>
        <a href="/contact" class="btn btn-white btn-block">Talk to us ${icon("arrow")}</a>
        <a href="${waLink()}" target="_blank" rel="noopener" class="btn btn-glass btn-block">${WA_SVG} WhatsApp</a>
      </div>
      <div class="side-card">
        <h3>Follow us</h3>
        <div class="side-socials">
          ${socialList().map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" class="side-soc sc-${k}">${icon(k)}<span>${SOCIAL_LABEL[k]}<small>${handleOf(u)}</small></span></a>`).join("")}
        </div>
      </div>
    </aside>
  </div>
</section>

<section class="section section-tint">
  <div class="container">
    <div class="section-head split reveal"><div><span class="eyebrow">Keep reading</span><h2>Related articles</h2></div><div class="section-aside"><a href="/blog" class="btn btn-outline">All articles ${icon("arrow")}</a></div></div>
    <div class="blog-grid">${related.map(postCard).join("")}</div>
  </div>
</section>
${ctaBlock()}
`,
  };
});
