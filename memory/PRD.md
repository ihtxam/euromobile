# Euro Mobile & Computer — Landing Page Redesign

## Original Problem Statement
Redesign the homepage of Euro Mobile & Computer (https://euromobilecomputer.co.uk/), a mobile & computer repair shop in Burnley, UK. Requirements: respect brand colors, make it clean/less noisy, and tech-oriented. Key differentiated service: mail-in repair flow — customer sends device photos + details, receives a payment link, pays in advance, device is repaired and posted back across the UK.

## Stack
React (CRA) + FastAPI + MongoDB. (User asked for Next.js; built on the supported React stack with identical clean, tech-oriented result.)

## Brand
- Primary: Royal Blue `#1E22A8`, Accent: Yellow `#FFD400`, base `#FAFAFA`/white.
- Typography: Outfit (headings), IBM Plex Sans (body). Swiss / high-contrast, sharp edges.

## User Personas
- Local Burnley/Lancashire customer needing in-store mobile/PC repair.
- Remote UK customer using the mail-in repair-by-post service.

## Core Requirements (static)
- Clean, modern, tech-oriented marketing landing page respecting brand colors.
- Showcase services: Mobile Repairs & Unlocking, PC/Laptop Repairs, Data Recovery.
- Explain mail-in process; build trust; capture repair requests.

## Implemented (2026-06-18)
- Sticky glass navbar, split hero with rotating headline + floating badges, brands marquee.
- Services bento grid, "How it works" 4-step mail-in flow, dark trust/stats section.
- Working "Request a Repair" form (name, email, phone, device type/model, issue, up to 4 photo uploads as base64) -> POST `/api/repair-requests`, persisted in MongoDB; success state + toasts.
- Footer with contact/location. Framer-motion scroll reveals. All data-testid attributes present.
- Tested: 100% backend (pytest) + 100% frontend (Playwright). No open bugs.

## Implemented (2026-06-19)
- Updated experience to **22 years**; added animated count-up stats (Counter.jsx): 22+ years, 75,000+ devices fixed, 38,000+ happy customers, 24/7 support.
- **7 SEO service pages** at `/services/:slug` (mobile-phone-repair, iphone-repair, samsung-galaxy-repair, laptop-pc-repair, tablet-ipad-repair, data-recovery, phone-unlocking) with per-page title/meta/canonical + JSON-LD (Service + FAQPage) structured data, FAQ accordion, related services. Linked from Services section + footer.
- **Floating widget** (WhatsApp / Call / Get-a-quote) + **quote popup modal** posting to `/api/repair-requests` (openable globally via `open-quote` window event).
- Dedicated **Data Recovery section** (cards, hard drives/USB, laptops/PCs, mobiles, water-damaged devices).
- Real contact details wired everywhere: **60 Keirby Walk, Burnley, BB11 2DE**, phone **01282 761818**, WhatsApp wa.me/441282761818, Google Map embed in footer. Email made optional server-side.
- Tested: 100% backend + 100% frontend (iteration_2). No open bugs.

## Implemented (2026-06-20)
- **Top announcement bar** (TopBar.jsx) with live open/closed status — pulsing green dot when open, amber when closed, computed from UK time (Mon–Sat 10am–6pm) — plus WhatsApp + phone quick links. Now includes a **live countdown** ("Opens in Xh Ym Zs" within 12h, else "Opens <Day> at 10:00").
- Updated **WhatsApp number** to +44 786 94 92 537 (wa.me/447869492537) across TopBar and floating widget.
- Footer: **"Get directions"** links (next to address and a full-width button under the Google Map) → Google Maps directions to the shop. Footer credit: **"Website designed in Switzerland by WebPrintMedia.swiss"** (linked).
- **Local SEO area pages**: 15 nearby-town pages at `/areas/:slug` (Nelson, Brierfield, Padiham, Hapton, Colne, Accrington, Great Harwood, Whalley, Rawtenstall, Clitheroe, Barnoldswick, Bacup, Todmorden, Blackburn, Darwen) — each with localized H1/meta/canonical + LocalBusiness JSON-LD, services grid, nearby-area links and quote CTA.
- Homepage **"Areas we cover"** section + footer area links; service pages now include an **"Areas we serve"** block and a local-area FAQ.
- **sitemap.xml + robots.txt** added (lists all service + area URLs).
- Tested: 100% frontend (iteration_3), no open bugs. Backend unchanged (5/5 in iteration_2).

## Backlog / Next Tasks
- P1: Integrate real payment-link generation (Stripe) triggered after admin reviews a request.
- P1: Admin dashboard to view/manage incoming repair requests and update status.
- P2: Server-side email validation (EmailStr), photo size limits / object storage instead of base64, rate limiting/spam protection on public POST.
- P2: Dedicated contact section + Google Maps embed; email/SMS notification on new request.
