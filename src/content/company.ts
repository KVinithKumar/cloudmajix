import { Gauge, HandCoins, HeartHandshake, KeyRound, MessagesSquare, ShieldCheck, type LucideIcon } from "lucide-react";

/** How every project runs. Used on Home, Services and service pages. */
export const processSteps = [
  {
    title: "Discover",
    body: "A free call to understand your business, your customers and what success looks like. You get a clear proposal with a fixed price.",
    duration: "Week 0",
  },
  {
    title: "Design",
    body: "We map the experience and design the key screens. You see and click through it before we build anything.",
    duration: "Week 1–2",
  },
  {
    title: "Build",
    body: "We build in short cycles with weekly updates and a live preview link, so you always know exactly where things stand.",
    duration: "Week 2–6",
  },
  {
    title: "Launch",
    body: "Testing on real devices, final checks, then go-live. We handle the technical details and train your team.",
    duration: "Launch day",
  },
  {
    title: "Grow",
    body: "We monitor, support and improve what we built, using real data to decide what comes next.",
    duration: "Ongoing",
  },
] as const;

export type Reason = { title: string; body: string; icon: LucideIcon };

/** Why CloudMajix. TODO: make sure each promise matches how you actually work. */
export const reasons: readonly Reason[] = [
  {
    title: "Canadian, through and through",
    body: "Pricing in CAD, invoices with the right sales tax, support in Canadian business hours and privacy practices built around PIPEDA.",
    icon: ShieldCheck,
  },
  {
    title: "Fixed prices, no surprises",
    body: "You get a clear scope and a fixed quote before any work begins. If something changes, we agree on it together first.",
    icon: HandCoins,
  },
  {
    title: "One team for everything",
    body: "Websites, apps, AI, payments and cloud under one roof. No juggling agencies or finger-pointing between vendors.",
    icon: MessagesSquare,
  },
  {
    title: "You own it all",
    body: "Your code, designs, domains and accounts belong to you. No lock-in, no hostage situations.",
    icon: KeyRound,
  },
  {
    title: "Built for speed",
    body: "Modern technology and performance budgets on every project, because faster software wins more customers.",
    icon: Gauge,
  },
  {
    title: "Here after launch",
    body: "We don't disappear on launch day. Care plans, monitoring and quick fixes keep your software healthy.",
    icon: HeartHandshake,
  },
];

/**
 * Headline numbers on the Home and About pages.
 * TODO: replace with your real figures (projects delivered, years of experience, etc.)
 * once you have them. These are facts about the offering, not performance claims.
 */
export const stats = [
  { value: 9, suffix: "", label: "Services under one roof" },
  { value: 24, suffix: "/7", label: "AI call answering" },
  { value: 100, suffix: "%", label: "Code ownership for clients" },
  { value: 1, suffix: "", label: "Point of contact, start to finish" },
] as const;

/** Technologies shown in the home page marquee. */
export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "React Native",
  "Flutter",
  "Unity",
  "Godot",
  "OpenAI",
  "Claude",
  "PyTorch",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Twilio",
  "AWS",
  "Google Cloud",
  "Docker",
  "Figma",
] as const;
