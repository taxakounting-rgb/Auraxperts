// Builds the static HTML pages from /src.  Run:  node build.mjs
import { writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import { SITE } from "./src/config.mjs";
import { layout } from "./src/layout.mjs";
import home from "./src/pages/home.mjs";
import about from "./src/pages/about.mjs";
import services from "./src/pages/services.mjs";
import blog, { postPages } from "./src/pages/blog.mjs";
import contact from "./src/pages/contact.mjs";
import faq, { notFound } from "./src/pages/faq.mjs";

const pages = [home, about, services, blog, ...postPages, faq, contact, notFound];

if (existsSync("blog")) rmSync("blog", { recursive: true });
for (const p of pages) {
  mkdirSync(dirname(p.out), { recursive: true });
  writeFileSync(p.out, layout({ ...p, body: p.body() }));
  console.log("built", p.out);
}

const urls = pages.filter((p) => p.path !== "/404")
  .map((p) => `  <url><loc>${SITE.url}${p.path === "/" ? "/" : p.path}</loc></url>`).join("\n");
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log("built sitemap.xml, robots.txt");
