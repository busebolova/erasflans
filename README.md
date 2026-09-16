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
