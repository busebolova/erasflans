# Erasflans

Bilingual aluminium flange website. Turkish and English each have 42 server-rendered pages: homepage, 8 section pages, 14 product pages, 4 alloy pages and 15 industry pages.

## Run

npm install
npm run dev
npm run build

## Content and images

Product families, photographs and contact information were sourced from https://www.erflans.com/ on 2026-09-16 at the user's request. The brand is Erasflans; the source phone, email and address are retained intentionally. Product descriptions were rewritten in Turkish and English. Unverified company statistics, blanket pressure ratings and certification claims were not transferred.

Technical note: the source uses EN 1092-1 in its aluminium catalogue. EN 1092-4 is the aluminium alloy part of the series. The EN product page distinguishes dimensional requests from a claim of material compliance. Reference: https://knowledge.bsigroup.com/products/flanges-and-their-joints-circular-flanges-for-pipes-valves-fittings-and-accessories-pn-designated-aluminium-alloy-flanges

## SEO

Localized URLs, reciprocal hreflang, self canonicals, unique title/description, server-rendered copy, Organization/Product/BreadcrumbList structured data, sitemap and robots are implemented. No fictional prices or review ratings are supplied. The authoritative origin is lib/catalog.ts; change it to the confirmed custom domain when connected, then rebuild and publish. A private preview cannot be indexed by search engines. Public access, domain connection and Search Console submission are launch tasks.

## Interactions

Language switch retains the equivalent page. Contact actions open email, phone, WhatsApp or directions. Email is explicitly a mail-app handoff, not a backend form. The preloader has a CSS timeout fallback, session preference and reduced-motion handling. Hero video is desktop-only, respects save-data/reduced-motion preferences and has pause/play. Mobile displays the optimized poster.

## Validation

npx tsc --noEmit
node validate.mjs (development server at localhost:3001)
npm run build

The route check verifies all 84 pages, metadata uniqueness, HTML language, canonical, hreflang, JSON-LD, local links, images, root redirect and unknown-route 404. No browser visual QA or live Core Web Vitals measurement was performed.

## Visual refresh v3

Header uses sticky positioning at the top in desktop and mobile layouts. The preloader appears on first visit and reload, exits after 900 ms, and has a CSS failsafe.

New illustrative CNC footage: https://mixkit.co/free-stock-video/industrial-machine-working-2230/ (Mixkit Stock Video Free License, commercial use stated on item page). Downloaded from the item-linked https://assets.mixkit.co/videos/2230/2230-720.mp4, trimmed and compressed as cnc-motion-v3.mp4. Poster and detail stills derive from this footage. These are illustrative industry visuals, not claimed as footage of Erasflans facilities.

New image: public/images/flange-editorial-v3.webp, generated using the built-in imagegen tool. Prompt: Premium photorealistic 16:9 industrial brand scene, three machined silver aluminium flanges standing and overlapping on a graphite workbench, cool blue rim light, dark navy blurred workshop, flanges on the right, quiet left side, no text, logo or people. Illustrative brand scene, not a specific real factory.

Product catalogue photographs remain unchanged.
