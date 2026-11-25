/**
 * Portfolio projects.
 *
 * TODO: Replace these concept projects with your real past work.
 * For each real project, set `isConcept: false`, fill in the details, and add
 * screenshots to /public/images/work/ (then set `image` to e.g. "/images/work/my-project.jpg").
 * Concept projects are clearly labelled "Concept" on the site so visitors aren't misled.
 */
export type ProjectKind = "web" | "mobile" | "game" | "voice" | "dashboard" | "payments";

export type Project = {
  slug: string;
  title: string;
  client: string;
  isConcept: boolean;
  year: string;
  summary: string;
  services: string[];
  kind: ProjectKind;
  /** Hex colour used for the card cover glow. */
  accent: string;
  image?: string;
  liveUrl?: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  outcomes: string[];
};

export const projects: readonly Project[] = [
  {
    slug: "ringready-ai-receptionist",
    title: "RingReady",
    client: "AI receptionist for clinics",
    isConcept: true,
    year: "2026",
    summary: "An AI voice agent that answers clinic calls 24/7, books appointments and sends call summaries to staff.",
    services: ["ai-voice-calling", "ai-agents-chatbots"],
    kind: "voice",
    accent: "#34d399",
    challenge:
      "Small clinics miss a large share of calls during busy hours and after closing. Every missed call risks a lost patient, and front-desk staff spend much of the day on routine scheduling questions.",
    solution:
      "A natural-sounding AI receptionist connected to the clinic's calendar. It answers instantly, books and reschedules appointments, answers common questions about hours, location and insurance, and transfers urgent calls to staff.",
    features: [
      "Answers calls on the first ring, 24/7",
      "Two-way calendar sync for booking and rescheduling",
      "Call summaries and transcripts sent by email and SMS",
      "Live transfer for urgent or sensitive calls",
      "English and French conversations",
    ],
    stack: ["OpenAI", "Twilio", "ElevenLabs", "Node.js", "Google Calendar API", "Supabase"],
    outcomes: [
      "Designed to answer every incoming call, including after hours",
      "Frees front-desk staff from routine booking calls",
      "Gives owners a searchable record of every conversation",
    ],
  },
  {
    slug: "shopnorth-ecommerce",
    title: "ShopNorth",
    client: "Online store for a Canadian retailer",
    isConcept: true,
    year: "2026",
    summary: "A lightning-fast online store with Canadian tax, shipping and a checkout built to reduce abandoned carts.",
    services: ["website-development", "payments-billing", "ui-ux-design"],
    kind: "web",
    accent: "#22d3ee",
    challenge:
      "Many small retailers run on slow, template-based stores with confusing checkouts, high cart abandonment and no proper handling of provincial sales tax.",
    solution:
      "A custom storefront with instant page loads, smart product search, a one-page checkout, automatic GST/HST/PST calculation and shipping rates from Canadian carriers.",
    features: [
      "Sub-second page loads on mobile",
      "One-page checkout with Apple Pay and Google Pay",
      "Automatic provincial sales tax",
      "Live Canada Post shipping rates",
      "Inventory and order dashboard",
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Built for top Lighthouse performance scores",
      "Checkout reduced to a single page",
      "Owner can manage products without a developer",
    ],
  },
  {
    slug: "trailmate-mobile-app",
    title: "TrailMate",
    client: "Outdoor adventure mobile app",
    isConcept: true,
    year: "2026",
    summary: "A cross-platform hiking companion with offline maps, trip planning and safety check-ins.",
    services: ["app-development", "ui-ux-design"],
    kind: "mobile",
    accent: "#7c3aed",
    challenge:
      "Hikers in Canada's backcountry often lose signal, and most trail apps stop working exactly when they're needed most.",
    solution:
      "An offline-first app for iOS and Android that downloads trail maps in advance, tracks routes by GPS without signal, and sends automatic safety check-ins to a trusted contact.",
    features: [
      "Offline maps and GPS tracking",
      "Trip planner with weather and daylight",
      "Automatic safety check-ins",
      "Photo journal of each hike",
      "Built once for iOS and Android",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Mapbox", "Supabase", "Push notifications"],
    outcomes: [
      "Fully usable with no mobile signal",
      "Single codebase for both app stores",
      "Designed for one-handed use on the trail",
    ],
  },
  {
    slug: "aurora-dash-game",
    title: "Aurora Dash",
    client: "Casual mobile game",
    isConcept: true,
    year: "2026",
    summary: "A neon endless-runner under the northern lights, with daily challenges and global leaderboards.",
    services: ["game-development"],
    kind: "game",
    accent: "#c6ff3d",
    challenge: "Casual games live or die in the first 30 seconds: controls must feel instant and progression must keep players coming back.",
    solution:
      "A one-thumb runner with tight, responsive controls, procedurally generated levels, daily challenges, cosmetic unlocks and leaderboards, tuned to run smoothly on older phones.",
    features: [
      "One-thumb controls with instant response",
      "Procedurally generated levels",
      "Daily challenges and streaks",
      "Global leaderboards and cloud saves",
      "Optimised for 60 fps on older devices",
    ],
    stack: ["Unity", "C#", "PlayFab", "Blender", "Unity Analytics"],
    outcomes: ["Playable prototype in two weeks", "Built-in retention loops from day one", "Ready for iOS, Android and web"],
  },
  {
    slug: "paydesk-billing-portal",
    title: "PayDesk",
    client: "Bill payment portal for property managers",
    isConcept: true,
    year: "2026",
    summary: "A tenant billing portal with recurring rent payments, automatic reminders and accounting sync.",
    services: ["payments-billing", "website-development"],
    kind: "payments",
    accent: "#ff4d5e",
    challenge: "Property managers spend days each month chasing rent cheques and e-Transfers, and reconciling payments by hand.",
    solution:
      "A secure portal where tenants view statements and pay by card or pre-authorised debit, with automatic recurring payments, reminders before due dates and instant sync to accounting software.",
    features: [
      "Recurring and one-time payments",
      "Pre-authorised debit and card payments",
      "Automatic reminders and receipts",
      "Owner dashboard with arrears tracking",
      "QuickBooks sync",
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Supabase", "QuickBooks API", "Resend"],
    outcomes: ["Payments reconcile automatically", "Tenants can pay anytime from their phone", "Late-payment follow-ups run on their own"],
  },
  {
    slug: "insightml-forecasting",
    title: "InsightML",
    client: "Demand forecasting dashboard",
    isConcept: true,
    year: "2026",
    summary: "A machine-learning dashboard that forecasts weekly demand so retailers order the right stock.",
    services: ["ai-ml-solutions", "cloud-devops"],
    kind: "dashboard",
    accent: "#6366f1",
    challenge: "Over-ordering ties up cash in stock, while under-ordering loses sales. Most small retailers forecast with spreadsheets and instinct.",
    solution:
      "A forecasting model trained on sales history, seasonality and holidays, presented in a simple dashboard that recommends order quantities for each product every week.",
    features: [
      "Weekly demand forecast per product",
      "Seasonality and holiday awareness",
      "Suggested order quantities",
      "Accuracy tracking over time",
      "Automated data pipeline from the POS",
    ],
    stack: ["Python", "scikit-learn", "Prophet", "FastAPI", "PostgreSQL", "React", "Google Cloud"],
    outcomes: ["Forecasts refresh automatically every week", "Clear recommendations instead of raw numbers", "Accuracy monitored and reported"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.services.includes(serviceSlug));
}
