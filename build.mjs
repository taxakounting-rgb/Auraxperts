// Builds the static HTML pages from /src.  Run:  node build.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { SITE } from "./src/config.mjs";
import { layout } from "./src/layout.mjs";
import home from "./src/pages/home.mjs";
import blog, { postPages } from "./src/pages/blog.mjs";
import { about, services, contact, notFound } from "./src/pages/other.mjs";

const pages = [home, about, services, blog, ...postPages, contact, notFound];

for (const p of pages) {
  mkdirSync(dirname(p.out), { recursive: true });
  writeFileSync(p.out, layout({ ...p, body: p.body() }));
  console.log("built", p.out);
}

// sitemap.xml + robots.txt
const urls = pages.filter((p) => p.path !== "/404")
  .map((p) => `  <url><loc>${SITE.url}${p.path === "/" ? "/" : p.path}</loc></url>`).join("\n");
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log("built sitemap.xml, robots.txt");
