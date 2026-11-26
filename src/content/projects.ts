/**
 * Portfolio projects shown on /work, the home page and related service pages.
 *
 * To add a project: copy an entry, give it a unique `slug`, and put its banner in
 * /public/images/work/ (1600×1000 works best; keep the important part centred).
 * Only list client work you have permission to show.
 */
export type ProjectKind = "web" | "mobile" | "game" | "voice" | "dashboard" | "payments";

/** "client" = delivered for a client or employer; "product" = our own build. */
export type ProjectType = "client" | "product";

export type Project = {
  slug: string;
  title: string;
  client: string;
  type: ProjectType;
  year: string;
  summary: string;
  services: string[];
  kind: ProjectKind;
  /** Hex colour used for the card cover glow. */
  accent: string;
  /** Banner image in /public (falls back to an illustrated cover when missing). */
  image?: string;
  liveUrl?: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  /** What the finished build delivers. */
  outcomes: string[];
};

export const projectTypeLabel: Record<ProjectType, string> = {
  client: "Client project",
  product: "Own product",
};

export const projects: readonly Project[] = [
  {
    slug: "cararth-ai-car-marketplace",
    title: "CarArth",
    client: "AARO7 Fintech · Hyderabad, India",
    type: "client",
    year: "2026",
    summary:
      "An AI-powered used-car platform that helps buyers find, compare and trust pre-owned vehicles, with a conversational buyer advisor, deal scoring and fraud-risk checks.",
    services: ["ai-agents-chatbots", "ai-ml-solutions", "website-development"],
    kind: "web",
    accent: "#22d3ee",
    image: "/images/work/cararth.jpg",
    liveUrl: "https://cararth.com",
    challenge:
      "Buying a used car means comparing scattered listings, guessing whether a price is fair and hoping the odometer and paperwork are honest. Classified sites show listings, but give buyers very little help deciding which car to trust.",
    solution:
      "A buyer-first platform that brings listings into one place and adds an intelligence layer on top: an AI advisor that turns plain-language requests into searches, market-aware deal scoring, listing credibility ranking and odometer fraud-risk signals, backed by a domain-specific automotive knowledge base.",
    features: [
      "Ms. 7: a conversational AI advisor that understands requests like “an SUV under ₹10 lakh in Hyderabad”",
      "Master 7: market intelligence that scores deals and explains each recommendation",
      "OdoShield: odometer and fraud-risk signals from records, service and insurance history",
      "TrustRank: listing credibility ranking that sellers can't pay to boost",
      "Car detail pages with photo gallery, EMI calculator, location map and similar cars",
      "Retrieval-augmented automotive knowledge base built on PostgreSQL and pgvector",
    ],
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "OpenAI embeddings",
      "Drizzle ORM",
      "FireCrawl",
      "Cloudinary",
      "Twilio",
      "Google Maps",
      "GitHub Actions",
    ],
    outcomes: [
      "One place to search, compare and shortlist used cars",
      "Plain-language search instead of endless filters",
      "Every recommendation comes with an explanation and risk signals",
      "Grounded AI answers with source attribution, not guesswork",
    ],
  },
  {
    slug: "kodebloom-hr-portal",
    title: "KodeBloom HR Portal",
    client: "KodeBloom Technologies",
    type: "client",
    year: "2025",
    summary:
      "A role-based HR and team management portal for directors, HR, project managers and employees, with performance reviews, projects, holidays and Excel reports.",
    services: ["website-development", "ui-ux-design", "cloud-devops"],
    kind: "dashboard",
    accent: "#7c3aed",
    image: "/images/work/kodebloom-hr.jpg",
    challenge:
      "A growing tech team was managing employees, projects, performance and announcements across spreadsheets and chat threads. Every role needed a different view, and nothing was in one place.",
    solution:
      "A secure web portal with separate dashboards for directors, HR, project managers and employees. Each role sees exactly what it needs, and HR can export any report to Excel in one click.",
    features: [
      "Role-based dashboards for Director, HR, PM and Employee",
      "Employee directory with profiles and documents",
      "Project assignment and tracking",
      "Performance reviews and ratings",
      "Company holidays calendar and announcements",
      "In-app notifications and one-click Excel exports",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Node.js", "Express", "MongoDB", "JWT", "Multer", "ExcelJS"],
    outcomes: [
      "One portal replaces scattered spreadsheets",
      "Every role gets its own focused dashboard",
      "Reports go from hours of copy-paste to a single click",
      "Secure sign-in with role-based access to every page",
    ],
  },
  {
    slug: "kodebloom-campus-leave-attendance",
    title: "Campus Leave & Attendance",
    client: "KodeBloom Technologies · education platform",
    type: "client",
    year: "2026",
    summary:
      "A leave, attendance and timetable system for schools and colleges, with approval workflows for principals, staff and students, plus PDF and Excel reports.",
    services: ["website-development", "app-development", "ui-ux-design"],
    kind: "dashboard",
    accent: "#34d399",
    image: "/images/work/kodebloom-campus.jpg",
    challenge:
      "Schools were handling leave requests on paper, marking attendance in registers and rebuilding timetables by hand whenever a teacher was away. Principals had no live picture of who was in and who was out.",
    solution:
      "A web platform with separate logins for admins, principals, staff and students. Leave requests flow through a clear approval chain, attendance is marked digitally, timetable changes are tracked, and reports are ready to download as PDF or Excel.",
    features: [
      "Admin, principal, staff and student dashboards",
      "Leave requests with multi-step approval",
      "Digital attendance with history",
      "Timetables and schedule-change tracking",
      "Announcements for the whole campus",
      "OTP verification, photo uploads and PDF/Excel reports",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "PDFKit", "jsPDF"],
    outcomes: [
      "Paper leave forms replaced with a tracked approval flow",
      "Principals see attendance and leave in real time",
      "Every action is logged for accountability",
      "Reports ready to print or share in seconds",
    ],
  },
  {
    slug: "pathfinder-ai-career-guide",
    title: "PathFinder AI",
    client: "AI career guidance for students",
    type: "product",
    year: "2025",
    summary:
      "An AI career guide that analyses a student's profile, interests and résumé, then recommends career paths, the skills to build and courses to get there.",
    services: ["ai-ml-solutions", "ai-agents-chatbots", "website-development"],
    kind: "dashboard",
    accent: "#6366f1",
    image: "/images/work/pathfinder-ai.jpg",
    challenge:
      "Students choose careers with little guidance. Generic advice ignores their actual strengths, and most don't know which skills employers want or where to learn them.",
    solution:
      "A Next.js platform powered by Google's Gemini models through Genkit. Students share their academic profile, interests and résumé, and the AI returns personalised career matches with the skills each path needs and practical next steps.",
    features: [
      "AI analysis of academic profile, interests and résumé",
      "Personalised career matches with clear explanations",
      "Skill-gap breakdown for every suggested path",
      "Upskilling plan with links to courses",
      "Downloadable PDF career report",
      "Clean, responsive interface designed for students",
    ],
    stack: ["Next.js", "React", "TypeScript", "Genkit", "Google Gemini", "Firebase", "Tailwind CSS", "Radix UI", "Zod"],
    outcomes: [
      "Career advice tailored to each student, in minutes",
      "Clear skill gaps instead of vague suggestions",
      "A concrete learning plan students can act on",
    ],
  },
  {
    slug: "wealth-map-property-intelligence",
    title: "Wealth Map",
    client: "Property ownership intelligence",
    type: "product",
    year: "2025",
    summary:
      "An interactive map that reveals who owns property and what it's worth, built on a data pipeline that merges public property records and refreshes automatically.",
    services: ["ai-ml-solutions", "website-development", "cloud-devops"],
    kind: "dashboard",
    accent: "#ff4d5e",
    image: "/images/work/wealth-map.jpg",
    challenge:
      "Property ownership and valuation data is public, but it's spread across several large datasets that are hard to join and impossible to explore without technical skills.",
    solution:
      "A Python ETL pipeline that merges deed transfers, ownership parties, land-use and assessment records into one clean dataset, served through a Node.js API and explored on an interactive map with owner profiles and wealth breakdowns.",
    features: [
      "Interactive map with owner markers and clustering",
      "Owner profiles with estimated property value",
      "Wealth breakdown charts",
      "Python ETL merging four public datasets",
      "Scheduled data refresh with cron jobs",
      "Google sign-in and secure accounts",
    ],
    stack: ["React", "Leaflet", "Recharts", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Python", "pandas", "node-cron", "Google OAuth"],
    outcomes: [
      "Four large public datasets turned into one explorable map",
      "Data stays fresh without manual work",
      "Complex property research made visual and simple",
    ],
  },
  {
    slug: "cryptofolio-trading-simulator",
    title: "Cryptofolio",
    client: "Virtual crypto trading app",
    type: "product",
    year: "2025",
    summary:
      "A virtual cryptocurrency trading app with live market prices, a practice portfolio and historical charts, so people can learn to trade without risking real money.",
    services: ["app-development", "payments-billing", "ui-ux-design"],
    kind: "payments",
    accent: "#c6ff3d",
    image: "/images/work/cryptofolio.jpg",
    liveUrl: "https://fd0092d9.mobsted.com/pwa/?appid=16",
    challenge:
      "New investors want to understand crypto markets, but learning with real money is expensive and stressful.",
    solution:
      "A React web app, installable on phones as a PWA, that simulates buying and selling with virtual funds using real-time market data, and tracks how each decision would have performed.",
    features: [
      "Real-time cryptocurrency prices and trends",
      "Buy and sell with virtual funds",
      "Portfolio tracking with gains and losses",
      "Historical price charts across time ranges",
      "Installable on mobile as a progressive web app",
    ],
    stack: ["React", "React Router", "JavaScript", "Market data API", "Progressive Web App"],
    outcomes: [
      "Risk-free way to learn trading",
      "Live market data for a realistic experience",
      "Works on desktop and as a phone app",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.services.includes(serviceSlug));
}
