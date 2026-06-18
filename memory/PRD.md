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
- Tested: 100% backend (pytest) + 100% frontend (Playwright e2e). No open bugs.

## Backlog / Next Tasks
- P1: Integrate real payment-link generation (Stripe) triggered after admin reviews a request.
- P1: Admin dashboard to view/manage incoming repair requests and update status.
- P2: Server-side email validation (EmailStr), photo size limits / object storage instead of base64, rate limiting/spam protection on public POST.
- P2: Dedicated contact section + Google Maps embed; email/SMS notification on new request.
