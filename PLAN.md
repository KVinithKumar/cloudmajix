# CloudMajix — Website Implementation Plan

> Status: **DRAFT — waiting for approval.** Nothing is built yet.
> Domain: cloudmajix.ca · Email: support@cloudmajix.ca

---

## 1. Goal

A production-grade, highly animated marketing + portfolio site that wins freelance and
small-business clients across Canada. It should feel bold and Gen-Z (motion, gradients,
kinetic type) while still reading as a trustworthy, experienced service company.

No login, no dashboard. One working backend feature: the contact form saves leads to Supabase.

---

## 2. Stack (locked)

| Layer | Choice |
|---|---|
| Framework | Next.js (latest stable, App Router) + React |
| Language | TypeScript, `strict: true`, no `any` |
| Styling | Tailwind CSS |
| Data | Supabase Postgres (free tier), `leads` table only |
| Hosting | Vercel (free Hobby tier) |
| Fonts | `next/font` (self-hosted at build, no runtime Google calls) |
| Images | `next/image` everywhere |
| OG images | `next/og` (built into Next — no extra package) |

### Dependencies needing your approval

| Package | Why | Size impact |
|---|---|---|
| `framer-motion` (a.k.a. `motion`) | All scroll/hover/page animations, spring physics, text reveals | Loaded only in client components |
| `react-hook-form` | Contact form state (you asked for it) | small |
| `zod` | Validation, shared by client and server (you asked for it) | small |
| `@hookform/resolvers` | Glue between the two above | tiny |
| `@supabase/supabase-js` | Insert leads (you asked for Supabase) | server-side only |
| `lucide-react` | Icon set, tree-shaken per icon | tiny |
| `clsx` + `tailwind-merge` | Safe className merging in components | tiny |

Optional (say yes/no):
- `lenis` — buttery smooth scrolling (~3 KB). Nice "premium" feel; off when reduced-motion is set.

Explicitly **not** using: Three.js / WebGL, GSAP, UI kits, analytics trackers. They would
hurt the Lighthouse 90+ target. The "wow" effects are done with CSS, SVG and Framer Motion.

Dev-only, not saved to package.json: `npx lighthouse` to measure scores before handoff.

### Machine setup
Node.js is **not installed** on this Mac. Plan: `brew install node@22` (LTS). Needs your OK.

---

## 3. Design direction — "Northern Lights"

A dark-first theme inspired by the aurora borealis — a Canadian nod that also looks very Gen-Z.

- **Palette:** near-black `#07070C` base · aurora gradient violet `#7C3AED` → cyan `#22D3EE` →
  mint `#34D399` · acid-lime accent `#C6FF3D` for CTAs · soft white text. All text pairs checked
  for WCAG AA contrast.
- **Type:** *Space Grotesk* (display, huge kinetic headings) + *Inter* (body). Both via `next/font`.
- **Texture:** subtle film-grain noise, glassmorphism cards, thin gradient borders, grid lines.
- **Layout:** bento grids, oversized type, sticky sections, horizontal marquees.

### Motion system (the "crazy" part)

| Effect | Where |
|---|---|
| Animated aurora mesh background (CSS, GPU-only transforms) | Hero, CTA |
| Split-text / word-by-word heading reveal | Every page H1 |
| Rotating word in hero ("We build **websites / apps / games / AI agents**") | Home hero |
| Scroll-triggered fade/slide/scale reveals, staggered | All sections |
| Magnetic buttons (pull toward cursor) | Primary CTAs |
| Spotlight / cursor-glow on cards | Service + portfolio cards |
| 3D tilt on hover | Portfolio cards |
| Infinite tech-stack marquee (React, Next, Flutter, Unity, Python, OpenAI…) | Home |
| Animated counters (projects shipped, response time, etc.) | Home, About |
| Scroll-progress bar + scroll-linked parallax | Global, Home |
| Sticky "how it works" timeline that fills as you scroll | Home, service pages |
| Custom cursor follower (desktop + fine pointer only) | Global |
| Smooth page transitions | Route changes |
| Animated FAQ accordion (works as native `<details>` without JS) | FAQ |
| Hover-reveal mega-menu + full-screen animated mobile menu | Navbar |

**Guard rails so it stays production-grade:**
- Every effect respects `prefers-reduced-motion` (animations collapse to simple fades/none).
- Content is server-rendered; animation is progressive enhancement. With JS disabled, all copy,
  links, FAQ and the contact form still work.
- Only `transform`/`opacity` are animated (no layout thrash) → good CLS / INP.
- Heavy client components are lazy-loaded below the fold.

---

## 4. Services (data-driven — edit one file to change them)

All services live in `src/content/services.ts`. Add/remove an entry and the Services grid,
nav menu, service page, pricing table, sitemap, and contact-form dropdown all update.

1. **Full-Stack Web Development** — business sites, web apps, e-commerce, CMS
2. **Mobile App Development** — iOS/Android (React Native / Flutter), PWAs
3. **Game Development** — 2D/3D, mobile & web games, Unity/Godot, gamified apps
4. **AI Voice Calling** — AI receptionist, appointment booking, outbound calls
5. **AI Agents & Chatbots** — website chat, WhatsApp/SMS bots, internal workflow agents
6. **Payments & Bill Payment Systems** — payment gateway integration (Stripe, Moneris,
   Interac e-Transfer flows), invoicing, recurring billing, bill-pay portals
7. **AI / ML Solutions** — custom models, data pipelines, computer vision, LLM/RAG apps
8. **Cloud, DevOps & IT Support** — hosting, CI/CD, migrations, maintenance plans
9. **UI/UX & Branding** — product design, prototypes, design systems

Each service page (`/services/[slug]`, statically generated) has: hero, the problem, our
solution, feature grid, tech stack used, process timeline, related portfolio projects,
pricing hint ("from $X CAD"), service-specific FAQ, CTA.

---

## 5. Pages & routes

| Route | Contents |
|---|---|
| `/` | Hero (kinetic type + aurora), trust strip, services bento grid, stats counters, featured work, why CloudMajix, how it works (sticky timeline), tech marquee, testimonials (placeholder quotes marked `TODO`), FAQ preview, CTA |
| `/services` | Animated grid of all services with short details + filters (Build / AI / Business) |
| `/services/[slug]` | One page per service (9 pages, incl. `/services/ai-voice-calling` and `/services/website-development` as requested) |
| `/work` | **Portfolio** — filterable grid of your previous projects |
| `/work/[slug]` | Case study: client/problem, what we built, stack, results, screenshots |
| `/pricing` | Plans table per service (tabs), CAD pricing, "custom quote" option, pricing FAQ |
| `/about` | Story, Canadian-based, values, how we work, stats, CTA |
| `/contact` | Working form + support@cloudmajix.ca + response-time promise |
| `/faq` | 10+ real questions, grouped by topic, accordion |
| `/privacy`, `/terms` | Standard pages written for a Canadian business (PIPEDA wording) |
| `not-found` | Custom animated 404 |

Note: `/services/website-development` stays as the URL for web dev (as you specified); its
display name is "Full-Stack Web Development".

---

## 6. Project structure

```
src/
  app/
    layout.tsx              # fonts, metadata base, Navbar, Footer, motion providers
    page.tsx                # Home
    services/page.tsx
    services/[slug]/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    pricing/page.tsx
    about/page.tsx
    contact/page.tsx  + actions.ts (Server Action → Supabase)
    faq/page.tsx
    privacy/page.tsx
    terms/page.tsx
    not-found.tsx
    sitemap.ts  robots.ts  opengraph-image.tsx  icon.svg
  components/
    layout/   Navbar, MobileMenu, Footer, ScrollProgress, CustomCursor
    sections/ Hero, ServicesGrid, Stats, HowItWorks, Testimonials, FaqPreview, CtaSection, TechMarquee, FeaturedWork
    ui/       ServiceCard, ProjectCard, PricingTable, FaqAccordion, ContactForm, Button, MagneticButton, SpotlightCard, Badge
    motion/   Reveal, SplitText, RotatingWords, Counter, Parallax, Marquee
  content/    services.ts, projects.ts, pricing.ts, faqs.ts, testimonials.ts, site.ts
  lib/        supabase.ts (server client), validation.ts (zod schema), seo.ts (metadata helper), jsonld.ts, utils.ts
public/images/  portfolio screenshots, logo
supabase/schema.sql
.env.example  README.md
```

All copy lives in `src/content/*` so you can rewrite text later without touching components.

---

## 7. Contact form → Supabase

- Fields: name, business name, email, phone (optional, Canadian format hint), service
  (dropdown from `services.ts` + "Not sure yet"), budget range (optional), message.
- `react-hook-form` + `zod` on the client: inline errors under each field.
- Submitted via a **Next.js Server Action** that re-validates with the same zod schema, so the
  form also works **without JavaScript**, and the Supabase key is used only on the server.
- Honeypot field (hidden `website` input) + minimum time-to-submit check → bots silently dropped.
- Success and error states with animated feedback; `aria-live` for screen readers.
- Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (names as you specified).
- SQL (`supabase/schema.sql`, also in README):
  - `leads` table: `id uuid pk default gen_random_uuid()`, `name`, `business_name`, `email`,
    `phone`, `service`, `message`, `created_at timestamptz default now()` (+ length checks).
  - Row Level Security **on**; one policy: `anon` may **insert** only. Nobody can read leads
    with the public key — you read them in the Supabase dashboard.

---

## 8. SEO

- `generateMetadata` helper → unique title, description, canonical, Open Graph + Twitter card
  on every page; per-page OG images generated with `next/og`.
- `sitemap.xml` (includes every service + case study automatically) and `robots.txt`.
- JSON-LD: `LocalBusiness`/`ProfessionalService` on Home (areaServed: Canada), plus
  `Service` on service pages, `FAQPage` on FAQ, `BreadcrumbList` on inner pages.
- Semantic HTML: one `<h1>` per page, `header/nav/main/section/footer`, skip-to-content link.
- Canadian English throughout (organise, colour, behaviour, centre).

---

## 9. Quality gates (must pass before handoff)

1. `npm run lint` — zero errors/warnings.
2. `tsc --noEmit` — strict, no `any`.
3. `npm run build` — zero errors and zero warnings.
4. Lighthouse (mobile) on Home, a service page, Contact: Performance / Accessibility /
   SEO / Best Practices ≥ 90. I'll fix anything below.
5. Browser check at phone (375px), tablet (768px), desktop (1440px); no console errors.
6. JS-disabled check: content, nav, FAQ, contact form submission.
7. Contact form tested end-to-end against your Supabase project (once you give me keys in
   `.env.local` — never committed).

---

## 10. Phase-wise plan — who does what

**Legend:** 🤖 = I do it · 🙋 = you do it · ✅ = checkpoint where you review before I continue.
You don't need any coding knowledge. Wherever you have a step, I'll give you exact
click-by-click instructions at that moment.

### Phase 0 — Accounts & answers (🙋 ~45 minutes, can run while I build)
All free. Sign up with the same email for everything to keep it simple.

| Step | What | Why |
|---|---|---|
| 🙋 0.1 | Create a **GitHub** account (github.com) | Stores your website code; Vercel deploys from it |
| 🙋 0.2 | Create a **Vercel** account → "Continue with GitHub" (Hobby plan) | Free hosting |
| 🙋 0.3 | Create a **Supabase** account → new project, region **Canada (Central)** | Free database for contact-form leads. Save the database password in a password manager |
| 🙋 0.4 | Tell me **where you bought cloudmajix.ca** (GoDaddy, Namecheap, Cloudflare, etc.), or whether it's still unbought | Needed to point the domain at Vercel and set up email |
| 🙋 0.5 | Answer the questions in §11 (projects, prices, location, logo) | Real content instead of placeholders |

### Phase 1 — Foundation (🤖)
- Install Node.js 22 LTS on your Mac (🙋 you approve the install prompt).
- Create the Next.js project, Tailwind theme, fonts, lint/TypeScript strict config, git.
- 🙋 Your part: nothing beyond approving installs.

### Phase 2 — Look & feel (🤖 → ✅)
- Design system (colours, type, buttons, cards), motion primitives, Navbar, mobile menu,
  Footer, cursor, scroll progress, page transitions, and the **Home hero**.
- ✅ **Checkpoint 1:** I open the site in the browser pane here (or you open
  `http://localhost:3000`). You tell me: love it / change colours / more or less motion.
  Cheap to change now, expensive later.

### Phase 3 — All pages & content (🤖 → ✅)
- Every page from §5 with real Canadian-English copy, 9 service pages, portfolio, pricing,
  FAQ, About, Privacy, Terms, 404.
- ✅ **Checkpoint 2:** you read the copy and check the facts about *you* (experience, story,
  prices, projects). Send corrections in plain words — I edit.

### Phase 4 — Working contact form (🤖 + 🙋 10 minutes)
- 🤖 Build the form, server action, spam protection, and `supabase/schema.sql`.
- 🙋 In Supabase: SQL Editor → paste the SQL I give you → Run. (One click.)
- 🙋 In Supabase: Project Settings → API → copy **Project URL** and **anon public key** into
  the `.env.local` file I create for you (I'll show exactly where). Keys never go to GitHub.
- 🤖 + 🙋 Test together: submit the form → you see the lead in Supabase → Table Editor → `leads`.

### Phase 5 — SEO & quality check (🤖 → ✅)
- 🤖 Metadata, share images, sitemap, robots, structured data.
- 🤖 Lint, type check, `npm run build` with zero errors/warnings, Lighthouse ≥ 90,
  phone/tablet/desktop checks, JavaScript-off check. I fix everything I find.
- ✅ **Checkpoint 3:** 🙋 open the site on your own phone and tap around.

### Phase 6 — Go live on Vercel, free (🤖 + 🙋 ~20 minutes)
1. 🤖 Commit the code with git.
2. 🙋 On GitHub: create an empty **private** repository named `cloudmajix-website`.
3. 🤖 Push the code to it (🙋 you sign in to GitHub once when the login window pops up).
4. 🙋 On Vercel: **Add New → Project → Import** `cloudmajix-website` → paste the two
   Supabase values under **Environment Variables** → **Deploy**.
   You get a free live link like `cloudmajix-website.vercel.app` within ~2 minutes.
5. 🙋 On Vercel: **Settings → Domains → add `cloudmajix.ca` and `www.cloudmajix.ca`**.
   Vercel shows 2 DNS records → 🙋 add them at your domain registrar. Live on your domain
   in minutes to a few hours. HTTPS is automatic and free.
6. From then on: every change I make + push → Vercel redeploys automatically. No servers to manage.

### Phase 7 — After launch (🙋 + 🤖 guidance, ~30 minutes)
| Step | What |
|---|---|
| 🙋 7.1 | **Business email `support@cloudmajix.ca`.** A domain doesn't include email by itself. Free options: Cloudflare Email Routing or ImprovMX (forwards to your Gmail), or Zoho Mail's free plan (a real inbox). I'll walk you through whichever you pick |
| 🙋 7.2 | **Google Search Console:** verify `cloudmajix.ca`, submit `https://cloudmajix.ca/sitemap.xml` so Google indexes you |
| 🙋 7.3 | **Google Business Profile** (free) — big help for "near me" searches in Canada |
| 🤖 7.4 | Optional: an email alert when a new lead arrives (would use Resend's free tier — new service, your call) |
| 🤖 7.5 | Supabase keep-alive: free Supabase projects **pause after ~7 days with no activity**. I'll add a free daily Vercel Cron ping so your form never goes down |

### Phase 8 — Later: moving to paid hosting (when you're ready)
The code avoids Vercel-only features, so it can move anywhere:
- **Easiest:** upgrade the same project to **Vercel Pro** (~US$20/month). Zero code changes.
- **Alternatives:** Netlify, Cloudflare, or a VPS (DigitalOcean, Hetzner) running Node or Docker.
  For a VPS I'd add a `Dockerfile` and a setup guide; ~1 hour of work.
- Supabase stays the same in all cases (upgrade to Supabase Pro ~US$25/month only if needed).

---

## 11. Hosting & cost reality check

| Item | Now | Notes |
|---|---|---|
| Domain `cloudmajix.ca` | ~CA$15–25/year | The only unavoidable cost |
| Vercel Hobby | $0 | ⚠️ Vercel's Hobby plan terms say it is for **personal, non-commercial** use. A business site that brings in clients is commercial. Fine for building and launching, but plan to move to Vercel Pro (or Netlify/Cloudflare free tiers, which allow commercial use) once clients start coming in |
| Supabase Free | $0 | 500 MB database — enough for many thousands of leads |
| Email | $0 | Forwarding or Zoho free plan |
| **Total to launch** | **~CA$20/year** | |

---

## 12. Your checklist — everything I need from you

**Before/while I build (Phase 0):**
- [ ] GitHub account
- [ ] Vercel account (signed in with GitHub)
- [ ] Supabase account + project in Canada (Central)
- [ ] Where `cloudmajix.ca` was bought (or "not yet")
- [ ] OK to install Node.js 22 with Homebrew
- [ ] Approve dependencies in §2 (and yes/no to `lenis` smooth scroll)

**Content (send whenever — placeholders marked `TODO` until then):**
- [ ] Previous projects: name, what you built, tech stack, link, 1–3 screenshots
- [ ] "Starting from" prices in CAD per service (or "use your suggestions")
- [ ] City/province, or "Canada-wide remote"; phone number to show, or email only
- [ ] Logo, if you have one (else I'll design one)
- [ ] Years of experience, number of projects done, anything true and impressive about you
- [ ] Real client quotes if you have them (else placeholders marked `TODO`)
- [ ] Confirm: "Bill payments" = payment/billing systems built for clients?

**During the build:** reviews at checkpoints 1, 2, 3 · paste 2 Supabase keys · run 1 SQL paste.
**Going live:** create GitHub repo · import to Vercel · add 2 DNS records.
