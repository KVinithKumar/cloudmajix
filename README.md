# CloudMajix — Company Website

The marketing and portfolio website for **CloudMajix** ([cloudmajix.ca](https://cloudmajix.ca)), a Canadian software studio building websites, mobile apps, games, AI voice agents, chatbots, payment systems and machine-learning solutions.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · Motion · react-hook-form + zod · Supabase · Vercel

---

## Run it locally

You need **Node.js 20.9 or newer** (22 LTS recommended).

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase values (see below)
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (fails on any warning) |
| `npm run typecheck` | TypeScript strict check |
| `npm run check` | Lint + typecheck + build in one go |

---

## Environment variables

| Name | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → `anon` public (or "publishable") key |

- Locally: put them in `.env.local` (git-ignored, never committed).
- On Vercel: Project → Settings → Environment Variables.
- **Never** use the `service_role` / secret key in this project.

Without these variables the site still works; the contact form shows a friendly "email us instead" message.

---

## Supabase setup (contact-form leads)

1. Create a free project at [supabase.com](https://supabase.com) (region: **Canada (Central)**).
2. Open **SQL Editor → New query**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and click **Run**.
3. Copy the URL and anon key into `.env.local` (and later into Vercel).

The SQL creates a `leads` table (`id, name, business_name, email, phone, service, message, created_at`) with Row Level Security: website visitors can **insert** leads but nobody can read them with the public key. View leads in Supabase → **Table Editor → leads**.

Spam protection: hidden honeypot field, minimum time-to-submit check, and the same zod validation on the server as in the browser. The form also works with JavaScript disabled.

---

## Deploy on Vercel (free)

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com): **Add New → Project → Import** this repository (framework is detected automatically).
3. Add the two environment variables above, then click **Deploy**.
4. **Settings → Domains**: add `cloudmajix.ca` and `www.cloudmajix.ca`, then add the DNS records Vercel shows at your domain registrar.

Every push to `main` redeploys automatically.

> Vercel's free Hobby plan is intended for non-commercial use. Upgrade to Pro (or move to another host) once the site is generating business.

---

## Editing content

All copy lives in `src/content/` — no component changes needed:

| File | Contains |
|---|---|
| `site.ts` | Company name, email, domain, location, social links, legal settings |
| `services.ts` | All services and their full page copy (add/remove a service here) |
| `pricing.ts` | Plans and prices per service (CAD) |
| `projects.ts` | Portfolio / case studies (`isConcept: true` shows a "Concept" label) |
| `faqs.ts` | FAQ page questions |
| `testimonials.ts` | Client quotes (placeholders are hidden on the live site) |
| `company.ts` | Process steps, "why us" reasons, stats, tech list |

Search the code for `TODO` to find everything that still needs your real details.

---

## Project structure

```
src/
  app/            Pages (App Router), contact server action, metadata
  components/
    layout/       Navbar, MegaMenu, MobileMenu, Footer, PageHeader, LegalPage, ScrollProgress, CustomCursor
    sections/     Hero, ServicesGrid, Stats, FeaturedWork, WhyUs, HowItWorks, Testimonials, FaqPreview, CtaSection, …
    ui/           Button, Badge, ServiceCard, ProjectCard, PricingTable, FaqAccordion, ContactForm, …
    motion/       Reveal, SplitText, RotatingWords, Magnetic, TiltCard, Counter, PageTransition
  content/        All website copy and data
  lib/            Supabase client, zod validation, SEO helper, utilities
supabase/         Database SQL
```

Animations respect the visitor's "reduce motion" setting, and core content renders without JavaScript.
