# AuraXperts Website

Multi-page static website for AuraXperts — Digital Marketing & Web Development Agency.
Plain HTML/CSS/JS, no framework. Deploys on Vercel with zero configuration.

## Pages
Home · About · Services · Blog (3 articles) · Contact + FAQs · 404

## Editing
1. Contact details, services and blog list: `src/config.mjs`
2. Page content: `src/pages/*.mjs`, header/footer: `src/layout.mjs`
3. Design: `assets/css/style.css`
4. Rebuild the HTML files:

   ```bash
   node build.mjs
   ```
5. Commit and push — Vercel redeploys automatically.

## Deploy
vercel.com → Add New → Project → import this repo → Deploy. No settings needed.
