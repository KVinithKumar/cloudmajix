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
    slug: "orcus-info-website",
    title: "Orcus Info",
    client: "Orcus Info · HR tech & verification",
    type: "client",
    year: "2026",
    summary:
      "A bold, dark-themed website for an AI-powered HR automation and background verification company, built to win trust with enterprise buyers.",
    services: ["website-development", "ui-ux-design"],
    kind: "web",
    accent: "#c6ff3d",
    image: "/images/work/orcus-info.jpg",
    liveUrl: "https://orcusinfo.com",
    challenge:
      "Orcus Info sells HR automation, ERP and AI background verification, which are complex products. The website needed to explain them clearly and look as advanced as the technology behind them.",
    solution:
      "A fast single-page React site with a distinctive developer-inspired look: an animated hero, a live-style workspace preview, product showcases for the HR ERP and verification platforms, a client logo marquee and a clear path to start a conversation.",
    features: [
      "Animated hero with a live-style workspace preview",
      "Product showcases for HR ERP and AI background verification",
      "Services, featured work and insights sections",
      "Scrolling client logo marquee",
      "Built-in chat prompt and contact flow",
      "SEO metadata for every key search term",
    ],
    stack: ["React", "Vite", "Tailwind CSS"],
    outcomes: [
      "A premium first impression for enterprise prospects",
      "Complex products explained in plain language",
      "Clear calls to action on every section",
    ],
  },
  {
    slug: "grace-college-of-nursing",
    title: "Grace College of Nursing",
    client: "Sara Grace Educational Society · Machilipatnam, India",
    type: "client",
    year: "2026",
    summary:
      "An admissions-focused website for a nursing college founded in 1987, with programme details, accreditations, campus life and online applications.",
    services: ["website-development", "ui-ux-design"],
    kind: "web",
    accent: "#34d399",
    image: "/images/work/grace-college-of-nursing.jpg",
    liveUrl: "https://grace-college-of-nursing-o5o5.vercel.app/",
    challenge:
      "Prospective students and parents needed one trustworthy place to check the college's recognitions, understand the B.Sc. Nursing programme and apply before seats filled up.",
    solution:
      "A modern, mobile-first website that leads with approvals and affiliations, explains the 4-year programme and clinical training, showcases labs, hostel and campus life, and drives visitors to apply with a countdown and one-tap call and apply buttons.",
    features: [
      "Admissions pop-up with countdown and apply button",
      "Accreditation and affiliation highlights up front",
      "B.Sc. Nursing programme, eligibility and syllabus",
      "Clinical training, labs, hostel and campus gallery",
      "Founder message and leadership pages",
      "Click-to-call, WhatsApp and SEO for admissions searches",
    ],
    stack: ["React", "Vite", "React Router", "Tailwind CSS", "Lucide", "Vercel"],
    outcomes: [
      "Admissions information in one clear, credible place",
      "Every page leads to applying or calling",
      "Fast and easy to use on mobile phones",
    ],
  },
  {
    slug: "source-fashion-store",
    title: "Source",
    client: "Premium fashion & apparel brand",
    type: "client",
    year: "2026",
    summary:
      "A clean, premium online storefront for everyday wear, streetwear and modern basics, with collections for men, women, unisex and accessories.",
    services: ["website-development", "ui-ux-design", "payments-billing"],
    kind: "web",
    accent: "#e7d8c3",
    image: "/images/work/source-fashion.jpg",
    challenge:
      "A growing fashion label needed a storefront that felt as premium as its products, with browsing simple enough to turn visitors into buyers.",
    solution:
      "An editorial-style storefront with a full-width campaign hero, clear collection entry points, a new-arrivals grid with wishlists, and trust signals for shipping, returns and secure payments right where shoppers decide.",
    features: [
      "Campaign hero slider with shop and explore actions",
      "Men, Women, Unisex and Accessories collections",
      "New arrivals grid with wishlist",
      "Search, account and cart in the header",
      "Free shipping, easy returns and secure payment highlights",
    ],
    stack: [],
    outcomes: [
      "A premium look that matches the brand",
      "Shoppers reach any collection in one click",
      "Trust signals placed where buying decisions happen",
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
    slug: "sri-vasavi-traders",
    title: "Sri Vasavi Traders",
    client: "Logistics company · Madurai, India",
    type: "client",
    year: "2025",
    summary:
      "A fast, modern website for a logistics company serving South India since 1995, covering freight, cargo handling and interstate transport.",
    services: ["website-development", "ui-ux-design"],
    kind: "web",
    accent: "#f59e0b",
    image: "/images/work/sri-vasavi-traders.jpg",
    liveUrl: "https://srivasavitraders.com",
    challenge:
      "An established logistics business with decades of experience had almost no online presence, so new customers couldn't easily find it or see what it offered.",
    solution:
      "A lightweight, search-friendly website that presents the company's services, experience and fleet, with a gallery, customer testimonials and simple ways to make an enquiry.",
    features: [
      "Clear service pages: freight, cargo, interstate and local transport",
      "About section with company history",
      "Photo gallery and customer testimonials",
      "Enquiry email and phone on every page",
      "SEO title, description and keywords",
    ],
    stack: ["Astro"],
    outcomes: [
      "A professional online presence for a 30-year business",
      "Very fast page loads on any connection",
      "Easy for customers to understand services and get in touch",
    ],
  },
  {
    slug: "nameus-farm-to-home",
    title: "NameUS",
    client: "Farm-to-home marketplace · India",
    type: "client",
    year: "2026",
    summary:
      "An online store that connects farmers directly to families, removing middlemen so farmers keep more of every sale and customers get fresher produce.",
    services: ["website-development", "payments-billing"],
    kind: "web",
    accent: "#4ade80",
    image: "/images/work/nameus.jpg",
    liveUrl: "https://www.nameus.in/",
    challenge:
      "Farmers lose much of their income to intermediaries, and families rarely know where their food comes from. NameUS needed a simple way to sell farm produce directly to homes.",
    solution:
      "An easy-to-manage online store with a clear farmer-first message, a showcase of partner farms in the NameUS network, product listings, customer accounts and a cart, so the team can update products without a developer.",
    features: [
      "Online shop with cart and customer log-in",
      "Partner farm network showcase",
      "Clear farmer-first story and value points",
      "Mobile-friendly design",
      "Content the client can update on their own",
    ],
    stack: ["Wix", "Wix Stores"],
    outcomes: [
      "Farmers sell directly to customers online",
      "The client team manages products themselves",
      "A clear story that builds trust with buyers",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.services.includes(serviceSlug));
}
