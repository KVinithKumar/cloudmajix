/**
 * Pricing plans per service (CAD).
 * TODO: every price here is a placeholder based on typical Canadian market rates.
 * Replace with your real prices before launch.
 */
export type Plan = {
  name: string;
  price: string;
  /** e.g. "one-time", "/month", "starting at" */
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type ServicePricing = {
  serviceSlug: string;
  note?: string;
  plans: Plan[];
};

export const pricing: readonly ServicePricing[] = [
  {
    serviceSlug: "website-development",
    plans: [
      {
        name: "Starter",
        price: "$1,200",
        cadence: "one-time",
        description: "A polished site to get your business online properly.",
        features: ["Up to 5 pages", "Mobile-first design", "Contact form", "Basic SEO setup", "Launch on your domain"],
      },
      {
        name: "Business",
        price: "$3,500",
        cadence: "one-time",
        description: "A growth-ready site built to win leads.",
        features: ["Up to 15 pages", "Custom design", "Blog and easy editor", "Booking or quote forms", "Local SEO and analytics", "30 days of support"],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "$8,000+",
        cadence: "starting at",
        description: "Online stores, portals and custom web apps.",
        features: ["E-commerce or web app", "User accounts and dashboards", "Integrations and APIs", "Payments", "Priority support"],
      },
    ],
  },
  {
    serviceSlug: "app-development",
    plans: [
      {
        name: "Prototype",
        price: "$2,500",
        cadence: "one-time",
        description: "Test your idea with a clickable prototype.",
        features: ["Product workshop", "Key screen designs", "Clickable prototype", "Feature roadmap"],
      },
      {
        name: "MVP",
        price: "$8,000",
        cadence: "starting at",
        description: "Your first version, live on both app stores.",
        features: ["iOS and Android", "Accounts and core features", "Admin dashboard", "App Store launch", "30 days of support"],
        highlighted: true,
      },
      {
        name: "Growth",
        price: "$18,000+",
        cadence: "starting at",
        description: "Full-featured apps for scaling businesses.",
        features: ["Advanced features", "Payments and subscriptions", "Integrations", "Analytics", "Ongoing releases"],
      },
    ],
  },
  {
    serviceSlug: "game-development",
    plans: [
      {
        name: "Prototype",
        price: "$3,000",
        cadence: "one-time",
        description: "A playable version of your core idea.",
        features: ["Game design outline", "Core mechanic prototype", "Placeholder art", "Playtest build"],
      },
      {
        name: "Indie launch",
        price: "$12,000",
        cadence: "starting at",
        description: "A complete casual game ready for the stores.",
        features: ["Full levels and progression", "Original 2D art", "Sound and music", "Store launch", "Analytics"],
        highlighted: true,
      },
      {
        name: "Custom",
        price: "Let's talk",
        cadence: "custom quote",
        description: "3D, multiplayer and branded experiences.",
        features: ["3D or multiplayer", "Branded and advergames", "Gamified training", "Live ops"],
      },
    ],
  },
  {
    serviceSlug: "ai-voice-calling",
    note: "One-time setup from $499. Call usage above the plan allowance is billed at cost.",
    plans: [
      {
        name: "Starter",
        price: "$149",
        cadence: "/month",
        description: "Never miss a call again.",
        features: ["24/7 call answering", "Messages and call summaries", "FAQ answers", "Up to 200 calls/month"],
      },
      {
        name: "Pro",
        price: "$349",
        cadence: "/month",
        description: "A full AI receptionist that books for you.",
        features: ["Everything in Starter", "Calendar booking", "Live call transfer", "English and French", "Up to 600 calls/month"],
        highlighted: true,
      },
      {
        name: "Business",
        price: "Let's talk",
        cadence: "custom quote",
        description: "Outbound calling and multi-location teams.",
        features: ["Outbound campaigns", "CRM integration", "Multiple locations", "Custom voice and flows"],
      },
    ],
  },
  {
    serviceSlug: "ai-agents-chatbots",
    plans: [
      {
        name: "Website chatbot",
        price: "$990",
        cadence: "setup + $49/month",
        description: "Answer visitor questions instantly.",
        features: ["Trained on your website", "Lead capture", "Human hand-off", "Monthly accuracy review"],
      },
      {
        name: "Multi-channel",
        price: "$2,500",
        cadence: "setup + $99/month",
        description: "One assistant across your channels.",
        features: ["Website, WhatsApp and SMS", "Your documents and FAQs", "CRM integration", "Booking and quotes"],
        highlighted: true,
      },
      {
        name: "AI agent",
        price: "$5,000+",
        cadence: "starting at",
        description: "Automate real workflows end to end.",
        features: ["Custom workflow automation", "Tool and API actions", "Approval steps", "Audit logs"],
      },
    ],
  },
  {
    serviceSlug: "ai-ml-solutions",
    plans: [
      {
        name: "Discovery",
        price: "$2,500",
        cadence: "one-time",
        description: "Find the best AI opportunity in your business.",
        features: ["Use-case workshop", "Data assessment", "Proof of concept", "Roadmap and estimate"],
      },
      {
        name: "Build",
        price: "$10,000",
        cadence: "starting at",
        description: "A production model or AI feature.",
        features: ["Production model", "API or dashboard", "Testing and validation", "Documentation"],
        highlighted: true,
      },
      {
        name: "Managed",
        price: "$500",
        cadence: "/month",
        description: "Keep your models accurate over time.",
        features: ["Monitoring", "Retraining", "Performance reports", "Priority support"],
      },
    ],
  },
  {
    serviceSlug: "payments-billing",
    plans: [
      {
        name: "Integration",
        price: "$1,500",
        cadence: "one-time",
        description: "Take payments online, securely.",
        features: ["Gateway setup", "Checkout or pay links", "Receipts", "Sales tax by province"],
      },
      {
        name: "Billing system",
        price: "$4,500",
        cadence: "starting at",
        description: "Automated invoicing and subscriptions.",
        features: ["Recurring billing", "Automated invoices", "Payment reminders", "Accounting sync"],
        highlighted: true,
      },
      {
        name: "Bill-pay portal",
        price: "$8,000+",
        cadence: "starting at",
        description: "A full customer billing portal.",
        features: ["Customer accounts", "Statements and history", "Pre-authorised debit", "Admin dashboard"],
      },
    ],
  },
  {
    serviceSlug: "cloud-devops",
    plans: [
      {
        name: "Care plan",
        price: "$99",
        cadence: "/month",
        description: "Keep your website safe and up to date.",
        features: ["Updates and patches", "Daily backups", "Uptime monitoring", "1 hour of changes/month"],
      },
      {
        name: "DevOps setup",
        price: "$1,500",
        cadence: "starting at",
        description: "Modern hosting and automated deployments.",
        features: ["Cloud setup or migration", "CI/CD pipeline", "Backups and recovery", "Monitoring and alerts"],
        highlighted: true,
      },
      {
        name: "Managed IT",
        price: "$399",
        cadence: "/month",
        description: "Ongoing cloud and IT support.",
        features: ["Infrastructure management", "Security reviews", "Cost optimisation", "Priority support"],
      },
    ],
  },
  {
    serviceSlug: "ui-ux-design",
    plans: [
      {
        name: "Design sprint",
        price: "$1,500",
        cadence: "one-time",
        description: "Solve one key flow, fast.",
        features: ["Workshop", "User flow", "Key screen designs", "Clickable prototype"],
      },
      {
        name: "Product design",
        price: "$5,000",
        cadence: "starting at",
        description: "Complete UI for a website or app.",
        features: ["Research", "Wireframes", "Full UI design", "Design system", "Developer handover"],
        highlighted: true,
      },
      {
        name: "Brand identity",
        price: "$2,000",
        cadence: "starting at",
        description: "A brand that looks the part.",
        features: ["Logo design", "Colour and type", "Brand guidelines", "Social media kit"],
      },
    ],
  },
];

export function getPricing(serviceSlug: string): ServicePricing | undefined {
  return pricing.find((entry) => entry.serviceSlug === serviceSlug);
}

/** Included with every project, regardless of service. */
export const includedEverywhere = [
  "Fixed-price quote before any work starts",
  "Prices in Canadian dollars",
  "You own the code, designs and accounts",
  "Weekly progress updates",
  "Free consultation call",
  "Launch support",
] as const;
