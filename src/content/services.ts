import {
  Bot,
  BrainCircuit,
  CloudCog,
  CodeXml,
  CreditCard,
  Gamepad2,
  Palette,
  PhoneCall,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

/**
 * Every service CloudMajix offers.
 * Add, remove or reorder entries here: navigation, footer, service pages,
 * pricing, sitemap and the contact form all read from this list.
 * Prices marked TODO are placeholders — replace them with your real rates.
 */
export type ServiceCategory = "build" | "ai" | "business";

export type Feature = { title: string; body: string };
export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: LucideIcon;
  category: ServiceCategory;
  /** Big headline on the service page. */
  headline: string;
  metaDescription: string;
  intro: string;
  problem: { heading: string; points: string[] };
  solution: { heading: string; body: string };
  features: Feature[];
  deliverables: string[];
  stack: string[];
  idealFor: string[];
  /** TODO: confirm your real starting price. */
  startingPrice: string;
  priceNote: string;
  faqs: Faq[];
};

export type ServiceSummary = Pick<Service, "slug" | "title" | "shortTitle" | "tagline" | "icon" | "category">;

export const services: readonly Service[] = [
  {
    slug: "website-development",
    title: "Full-Stack Web Development",
    shortTitle: "Websites & Web Apps",
    tagline: "Fast, search-friendly websites, web apps and online stores.",
    icon: CodeXml,
    category: "build",
    headline: "A website that works as hard as you do.",
    metaDescription:
      "Custom websites, web apps and online stores for Canadian businesses. Fast, mobile-first, search-friendly and built to turn visitors into customers.",
    intro:
      "Your website is often the first conversation a customer has with your business. We design and build fast, modern sites and web apps that load in a blink, rank on Google and make it easy for people to call, book or buy.",
    problem: {
      heading: "Sound familiar?",
      points: [
        "Your current site looks dated and is painful to update.",
        "It's slow on phones, so visitors leave before it loads.",
        "You get traffic but very few calls, bookings or sales.",
        "Nobody can find you on Google for the services you actually offer.",
      ],
    },
    solution: {
      heading: "Built for speed, search and sales",
      body: "We plan every page around what your customers need to do, write clear copy, and build on modern, proven technology. The result is a site you can edit yourself, that scores high on Google's performance tests, and that guides visitors toward getting in touch.",
    },
    features: [
      { title: "Mobile-first design", body: "Designed for phones first, then scaled up beautifully for tablets and desktops." },
      { title: "Lightning-fast loading", body: "Optimised images, clean code and global hosting so pages load in about a second." },
      { title: "SEO foundations", body: "Proper structure, metadata, sitemaps and local SEO so customers can find you." },
      { title: "Easy content editing", body: "Update text, photos and blog posts yourself, without calling a developer." },
      { title: "E-commerce ready", body: "Online stores with secure checkout, inventory, shipping and tax for Canada." },
      { title: "Custom web apps", body: "Portals, dashboards, booking systems and internal tools built around your workflow." },
    ],
    deliverables: [
      "Sitemap, wireframes and visual design",
      "Responsive build for phone, tablet and desktop",
      "Contact, quote or booking forms connected to your inbox",
      "Google Analytics and Search Console setup",
      "Launch on your domain with free SSL",
      "Training video so your team can make updates",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL", "Shopify", "WordPress"],
    idealFor: ["Trades and home services", "Clinics and professional firms", "Restaurants and retail", "Start-ups launching a product"],
    startingPrice: "$1,200",
    priceNote: "for a professional 5-page business website",
    faqs: [
      {
        question: "How long does a website take to build?",
        answer:
          "A typical small-business website takes 2 to 4 weeks from kickoff to launch. Larger sites, online stores and custom web apps usually take 6 to 12 weeks. You'll get a clear timeline in your quote.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Yes. We set up a simple editor for your text, images and blog, and give you a short training video. For bigger changes, we offer affordable monthly care plans.",
      },
      {
        question: "Do you help with hosting and domains?",
        answer:
          "Yes. We can register your domain, set up fast and secure hosting, and connect your business email. You stay the owner of every account.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "iOS and Android apps your customers will actually keep.",
    icon: Smartphone,
    category: "build",
    headline: "Your idea, in your customers' pockets.",
    metaDescription:
      "iOS and Android app development for Canadian businesses and start-ups. Cross-platform apps built with React Native and Flutter, from MVP to App Store launch.",
    intro:
      "Whether you're launching a start-up or giving loyal customers a faster way to order, book or pay, we design and build mobile apps that feel native, run smoothly and get through App Store review the first time.",
    problem: {
      heading: "Where most app projects go wrong",
      points: [
        "Months of building before a single real user sees the app.",
        "Separate iOS and Android teams that double the cost.",
        "Clunky designs that users delete after one try.",
        "No plan for updates, crashes or app-store rejections.",
      ],
    },
    solution: {
      heading: "Launch lean, then grow",
      body: "We start with a focused first version (an MVP) that solves one problem really well, built once for both iOS and Android. You get real users and real feedback fast, then we add features based on what people actually use.",
    },
    features: [
      { title: "One codebase, two platforms", body: "Cross-platform apps with React Native or Flutter that look and feel native on iPhone and Android." },
      { title: "Clickable prototype first", body: "Test the full experience on your phone before a line of production code is written." },
      { title: "Accounts and payments", body: "Secure sign-in, subscriptions, in-app purchases and payment processing." },
      { title: "Push notifications", body: "Bring users back with timely reminders, offers and updates." },
      { title: "Offline-friendly", body: "Apps that stay useful on spotty rural or underground connections." },
      { title: "App Store launch", body: "We handle Apple App Store and Google Play listings, screenshots and review." },
    ],
    deliverables: [
      "Product workshop and feature roadmap",
      "UI/UX design and clickable prototype",
      "iOS and Android apps from one codebase",
      "Admin dashboard and backend API",
      "App Store and Google Play submission",
      "Crash reporting, analytics and 30 days of launch support",
    ],
    stack: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase", "Node.js", "Stripe"],
    idealFor: ["Start-ups validating an idea", "Service businesses with repeat customers", "Fitness, health and wellness", "Marketplaces and communities"],
    startingPrice: "$8,000",
    priceNote: "for a focused MVP on iOS and Android",
    faqs: [
      {
        question: "Should I build a mobile app or a web app first?",
        answer:
          "It depends on how often people will use it and whether you need phone features like push notifications or the camera. We'll give you an honest recommendation in our first call, even if that means a smaller project.",
      },
      {
        question: "Who owns the app and the code?",
        answer: "You do. Once the project is paid in full, the code, designs and app-store accounts belong to your business.",
      },
      {
        question: "Can you take over an app someone else built?",
        answer:
          "Often, yes. We start with a code review to assess its health, then recommend whether to improve the existing app or rebuild the parts that are holding it back.",
      },
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    shortTitle: "Games",
    tagline: "Mobile, web and PC games, plus gamified apps that boost engagement.",
    icon: Gamepad2,
    category: "build",
    headline: "Games people can't put down.",
    metaDescription:
      "Game development studio in Canada. Mobile, web and PC games built with Unity and Godot, plus gamified apps and interactive brand experiences.",
    intro:
      "From casual mobile games to branded web experiences and gamified learning apps, we combine game design, art direction and solid engineering to create experiences people come back to.",
    problem: {
      heading: "Making games is hard",
      points: [
        "Great ideas stall without a clear scope and playable prototype.",
        "Games that look good in screenshots but feel wrong to play.",
        "Performance problems on lower-end phones.",
        "No plan for monetisation, analytics or live updates.",
      ],
    },
    solution: {
      heading: "Find the fun, then polish it",
      body: "We prototype the core gameplay in days, not months, so you can play it, feel it and adjust it early. Once the fun is proven, we build out levels, art, sound and progression, and tune performance for real devices.",
    },
    features: [
      { title: "Rapid prototypes", body: "A playable version of your core mechanic early, so decisions are based on feel, not guesses." },
      { title: "Cross-platform builds", body: "Ship to iOS, Android, web browsers and PC from one project." },
      { title: "Gamification", body: "Points, streaks, levels and rewards that lift engagement in apps and training." },
      { title: "Monetisation design", body: "Ethical ads, in-app purchases or premium pricing that respect players." },
      { title: "Multiplayer and leaderboards", body: "Real-time play, accounts, cloud saves and global leaderboards." },
      { title: "Analytics and live ops", body: "See where players drop off and ship updates and events after launch." },
    ],
    deliverables: [
      "Game design document and scope",
      "Playable prototype of the core loop",
      "2D or 3D art direction and assets",
      "Builds for your target platforms",
      "Store listings and launch support",
      "Post-launch analytics dashboard",
    ],
    stack: ["Unity", "C#", "Godot", "Phaser", "Three.js", "Blender", "Firebase", "PlayFab"],
    idealFor: ["Indie founders with a game idea", "Brands wanting playable marketing", "Schools and training teams", "Apps that need better retention"],
    startingPrice: "$3,000",
    priceNote: "for a playable prototype",
    faqs: [
      {
        question: "Do you make 2D or 3D games?",
        answer: "Both. We'll recommend the style that fits your budget, platform and audience, since 2D is often faster and more affordable to produce.",
      },
      {
        question: "Can you add game elements to my existing app?",
        answer:
          "Yes. Gamification such as streaks, badges, progress bars and rewards can be added to most apps and training platforms to boost engagement.",
      },
      {
        question: "How much does a full game cost?",
        answer:
          "It varies widely with scope. Most clients start with a prototype, then we estimate the full game once the core gameplay is proven, so you never commit to a large budget blindly.",
      },
    ],
  },
  {
    slug: "ai-voice-calling",
    title: "AI Voice Calling",
    shortTitle: "AI Voice Calling",
    tagline: "An AI receptionist that answers, books and follows up, 24/7.",
    icon: PhoneCall,
    category: "ai",
    headline: "Never miss another call.",
    metaDescription:
      "AI receptionist and AI voice calling for Canadian small businesses. Answer every call 24/7, book appointments, take messages and run outbound follow-ups.",
    intro:
      "Every missed call is a customer who might phone your competitor next. Our AI voice agents answer in a natural voice, any time of day, book appointments straight into your calendar, take detailed messages and hand urgent calls to a real person.",
    problem: {
      heading: "Missed calls are missed revenue",
      points: [
        "Calls go to voicemail while you're on a job or with a client.",
        "After-hours and weekend callers never call back.",
        "Your team spends hours on the same five questions.",
        "Hiring a full-time receptionist isn't in the budget.",
      ],
    },
    solution: {
      heading: "A receptionist that never sleeps",
      body: "We set up an AI voice agent trained on your services, prices, hours and policies. It answers instantly, sounds friendly and professional, books into your calendar, sends you a summary of every call, and transfers callers to you when a human touch is needed.",
    },
    features: [
      { title: "24/7 call answering", body: "Every call answered on the first ring, including evenings, weekends and holidays." },
      { title: "Appointment booking", body: "Books, reschedules and cancels directly in Google Calendar, Outlook or your booking tool." },
      { title: "Smart call transfer", body: "Urgent or complex calls go straight to you or your team." },
      { title: "Call summaries", body: "Get a text or email summary and transcript of every conversation." },
      { title: "Outbound calling", body: "Automated reminders, follow-ups and lead callbacks that sound human." },
      { title: "English and French", body: "Serve customers across Canada in English, French and other languages." },
    ],
    deliverables: [
      "Call-flow design and script for your business",
      "AI agent trained on your services and FAQs",
      "Local Canadian phone number or forwarding from your existing line",
      "Calendar and CRM integration",
      "Call dashboard with recordings and summaries",
      "Monthly tuning based on real calls",
    ],
    stack: ["OpenAI", "ElevenLabs", "Twilio", "Vapi", "Retell AI", "Google Calendar", "Calendly", "Zapier", "HubSpot"],
    idealFor: ["Clinics, dentists and salons", "Trades, contractors and home services", "Law and accounting firms", "Restaurants and hospitality"],
    startingPrice: "$149/month",
    priceNote: "plus a one-time setup fee",
    faqs: [
      {
        question: "Will callers know they're talking to AI?",
        answer:
          "The voice sounds natural and conversational, but we recommend being transparent. The agent can briefly introduce itself as a virtual assistant, which most callers appreciate when it solves their problem quickly.",
      },
      {
        question: "Can I keep my existing business phone number?",
        answer:
          "Yes. You can forward your current number to the AI agent (for example, only after hours or when you don't pick up), or we can set up a new local Canadian number.",
      },
      {
        question: "What happens if the AI can't answer a question?",
        answer:
          "It takes a detailed message, tells the caller someone will follow up, and notifies you right away. Urgent calls can be transferred to you live.",
      },
    ],
  },
  {
    slug: "ai-agents-chatbots",
    title: "AI Agents & Chatbots",
    shortTitle: "AI Agents & Chatbots",
    tagline: "Chatbots and AI agents that answer customers and automate busywork.",
    icon: Bot,
    category: "ai",
    headline: "Put your busywork on autopilot.",
    metaDescription:
      "Custom AI chatbots and AI agents for Canadian businesses. Website chat, WhatsApp and SMS bots, and workflow automation trained on your own data.",
    intro:
      "We build AI assistants that know your business inside out. They answer customer questions on your website, WhatsApp or SMS, qualify leads, and quietly handle repetitive tasks like data entry, email triage and report writing.",
    problem: {
      heading: "Your team is stuck on repeat",
      points: [
        "The same customer questions, answered by hand, every day.",
        "Website visitors leave because nobody replies in time.",
        "Hours lost copying data between tools.",
        "Generic chatbots that give wrong or made-up answers.",
      ],
    },
    solution: {
      heading: "AI that knows your business",
      body: "We connect a modern AI model to your own documents, products and systems, with guardrails so it only answers from approved information. It hands off to a human when it should, and every conversation is logged so you stay in control.",
    },
    features: [
      { title: "Trained on your content", body: "Answers come from your website, documents, price lists and policies, not guesswork." },
      { title: "Website and messaging", body: "Chat on your website, WhatsApp, SMS, Instagram or Facebook Messenger." },
      { title: "Lead qualification", body: "Asks the right questions, captures contact details and books calls." },
      { title: "Workflow agents", body: "Automate email triage, data entry, quotes, reports and follow-ups." },
      { title: "Human hand-off", body: "Escalates to your team with the full conversation when needed." },
      { title: "Privacy and guardrails", body: "Data handling designed with Canadian privacy law (PIPEDA) in mind." },
    ],
    deliverables: [
      "Use-case workshop and conversation design",
      "Knowledge base built from your content",
      "Chatbot or agent deployed to your channels",
      "Integrations with your CRM, email or tools",
      "Admin view of conversations and analytics",
      "Ongoing accuracy reviews and improvements",
    ],
    stack: ["OpenAI", "Anthropic Claude", "LangChain", "Python", "Node.js", "Pinecone", "Supabase", "n8n", "Zapier"],
    idealFor: ["E-commerce and online services", "Real estate and property management", "Professional services firms", "Operations-heavy teams"],
    startingPrice: "$990",
    priceNote: "setup, plus a small monthly fee",
    faqs: [
      {
        question: "Will the chatbot make things up?",
        answer:
          "We design it to answer only from your approved content and to say \"I'm not sure, let me connect you\" when it doesn't know. We test it against real questions before launch.",
      },
      {
        question: "What's the difference between a chatbot and an AI agent?",
        answer:
          "A chatbot mainly answers questions. An AI agent can also take actions, like updating your CRM, drafting a quote, sending an email or booking an appointment.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "We choose providers and settings based on your needs, including Canadian data residency where available, and we never use your data to train public models.",
      },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & Machine Learning Solutions",
    shortTitle: "AI & Machine Learning",
    tagline: "Custom models, data pipelines and LLM apps built on your data.",
    icon: BrainCircuit,
    category: "ai",
    headline: "Turn your data into decisions.",
    metaDescription:
      "Custom AI and machine-learning development in Canada: predictive models, computer vision, LLM and RAG applications, and data pipelines.",
    intro:
      "Machine learning isn't just for big tech. We help businesses use the data they already have to forecast demand, spot problems early, understand documents and images, and build smart features into their products.",
    problem: {
      heading: "Data everywhere, insight nowhere",
      points: [
        "Spreadsheets and systems that don't talk to each other.",
        "Decisions made on gut feeling instead of evidence.",
        "Manual review of documents, images or transactions.",
        "AI hype with no clear path to real business value.",
      ],
    },
    solution: {
      heading: "Practical AI with a clear return",
      body: "We start by finding the use case with the best value for effort, check that your data can support it, and build a working proof of concept. If it delivers, we take it to production with monitoring so it keeps performing.",
    },
    features: [
      { title: "Predictive models", body: "Forecast sales, demand, churn or risk using your historical data." },
      { title: "Computer vision", body: "Detect, count and inspect objects in photos and video." },
      { title: "Document AI", body: "Extract data from invoices, forms and contracts automatically." },
      { title: "LLM and RAG apps", body: "Search and chat across your company knowledge securely." },
      { title: "Data pipelines", body: "Clean, organise and connect your data into one reliable source." },
      { title: "MLOps and monitoring", body: "Deploy models safely and track accuracy over time." },
    ],
    deliverables: [
      "Use-case and data assessment",
      "Proof of concept with measured results",
      "Production model and API",
      "Dashboard or app for your team",
      "Documentation and handover",
      "Monitoring and retraining plan",
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Pandas", "OpenAI", "Hugging Face", "FastAPI", "AWS", "Google Cloud"],
    idealFor: ["Retail and inventory-heavy businesses", "Manufacturing and logistics", "Finance and insurance", "SaaS products adding AI features"],
    startingPrice: "$2,500",
    priceNote: "for a discovery and proof of concept",
    faqs: [
      {
        question: "Do I need a lot of data to use machine learning?",
        answer:
          "Not always. Some problems need years of history, while others work well with pre-trained models and a few hundred examples. Our discovery phase tells you honestly what's possible with what you have.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We agree on a clear business metric up front, such as hours saved, forecast accuracy or error rate, and report against it at every stage.",
      },
      {
        question: "Can you add AI features to our existing product?",
        answer: "Yes. We regularly add search, recommendations, summarisation and automation to existing web and mobile apps through clean APIs.",
      },
    ],
  },
  {
    slug: "payments-billing",
    title: "Payments & Bill Payment Systems",
    shortTitle: "Payments & Billing",
    tagline: "Secure checkout, invoicing, recurring billing and bill-pay portals.",
    icon: CreditCard,
    category: "business",
    headline: "Get paid faster, with less chasing.",
    metaDescription:
      "Payment gateway integration, online invoicing, recurring billing and bill payment portals for Canadian businesses. Stripe, Moneris, Square and more.",
    intro:
      "Late payments and manual invoicing drain time and cash flow. We build secure payment flows, customer billing portals and subscription systems that make paying you as easy as tapping a button.",
    problem: {
      heading: "Billing shouldn't be a second job",
      points: [
        "Chasing customers for cheques and e-Transfers.",
        "Invoices built by hand in spreadsheets.",
        "No way for customers to pay or view bills online.",
        "Worry about security and card-data compliance.",
      ],
    },
    solution: {
      heading: "Payments that run themselves",
      body: "We integrate trusted payment providers so card details never touch your servers, automate invoices and reminders, and give customers a simple portal to view and pay their bills. Everything syncs with your accounting software.",
    },
    features: [
      { title: "Payment gateway integration", body: "Stripe, Moneris, Square, PayPal and Helcim, connected securely." },
      { title: "Online invoicing", body: "Branded invoices sent automatically, with pay-now links." },
      { title: "Recurring billing", body: "Subscriptions, memberships, retainers and payment plans." },
      { title: "Customer bill-pay portal", body: "Customers log in to view statements, pay bills and download receipts." },
      { title: "Automatic reminders", body: "Polite, automated follow-ups that cut late payments." },
      { title: "Accounting sync", body: "Payments flow into QuickBooks, Xero or Wave automatically." },
    ],
    deliverables: [
      "Payment flow design and provider selection",
      "Secure checkout or payment integration",
      "Invoice and receipt templates with GST/HST support",
      "Customer billing portal",
      "Accounting software integration",
      "Testing in sandbox before going live",
    ],
    stack: ["Stripe", "Moneris", "Square", "PayPal", "Helcim", "QuickBooks", "Xero", "Node.js", "PostgreSQL"],
    idealFor: ["Service businesses with recurring clients", "Property managers and landlords", "Gyms, studios and memberships", "SaaS and online businesses"],
    startingPrice: "$1,500",
    priceNote: "for a payment integration",
    faqs: [
      {
        question: "Is it secure to take payments online?",
        answer:
          "Yes, when done right. We use PCI-compliant providers so card details are handled by the payment company and never stored on your website or servers.",
      },
      {
        question: "Can you handle Canadian taxes like GST/HST and PST?",
        answer: "Yes. Invoices and checkouts can calculate and display the correct sales tax by province.",
      },
      {
        question: "Which payment provider should I use?",
        answer:
          "It depends on your fees, volume and whether you also take in-person payments. We'll compare options for your business and recommend the best fit.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud, DevOps & IT Support",
    shortTitle: "Cloud & IT Support",
    tagline: "Hosting, migrations, automation and ongoing maintenance.",
    icon: CloudCog,
    category: "business",
    headline: "Technology that just works.",
    metaDescription:
      "Cloud hosting, migrations, DevOps automation and IT support for Canadian small businesses. Reliable, secure and monitored around the clock.",
    intro:
      "Slow servers, surprise outages and scary update buttons cost you sleep. We set up reliable cloud hosting, automate deployments and backups, and look after your systems so you can focus on running your business.",
    problem: {
      heading: "When tech gets in the way",
      points: [
        "Websites or apps that go down without warning.",
        "No backups, or backups nobody has tested.",
        "Cloud bills that keep creeping up.",
        "Nobody to call when something breaks.",
      ],
    },
    solution: {
      heading: "Set up right, kept running",
      body: "We audit what you have, move it to the right cloud setup, automate the boring parts like deployments and backups, and monitor everything. When something needs attention, we're already on it.",
    },
    features: [
      { title: "Cloud setup and migration", body: "Move to AWS, Google Cloud, Azure, Vercel or a managed host with zero drama." },
      { title: "CI/CD automation", body: "Automatic testing and deployments every time code changes." },
      { title: "Backups and recovery", body: "Automated, tested backups with a clear recovery plan." },
      { title: "Monitoring and uptime", body: "Alerts before customers notice a problem." },
      { title: "Security hardening", body: "Updates, SSL, firewalls and access controls kept in check." },
      { title: "Cost optimisation", body: "Right-sized infrastructure so you only pay for what you use." },
    ],
    deliverables: [
      "Infrastructure and security audit",
      "Cloud architecture and migration plan",
      "Automated deployment pipeline",
      "Backup and disaster-recovery setup",
      "Monitoring dashboard and alerts",
      "Monthly maintenance report",
    ],
    stack: ["AWS", "Google Cloud", "Azure", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Cloudflare"],
    idealFor: ["Businesses with a website or app to maintain", "Teams outgrowing shared hosting", "Start-ups preparing to scale", "Companies with no in-house IT"],
    startingPrice: "$99/month",
    priceNote: "for website care and maintenance",
    faqs: [
      {
        question: "Can you look after a website or app you didn't build?",
        answer: "Yes. We start with a quick audit, fix anything urgent, and then keep it updated, backed up and monitored.",
      },
      {
        question: "Can my data be hosted in Canada?",
        answer: "Yes. Most major cloud providers have Canadian data centres, and we can configure your hosting to keep data in Canada.",
      },
      {
        question: "What's included in a maintenance plan?",
        answer:
          "Software updates, security patches, backups, uptime monitoring and a set amount of support time each month for small changes and fixes.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Brand Design",
    shortTitle: "UI/UX Design",
    tagline: "Interfaces and brands that look sharp and convert visitors.",
    icon: Palette,
    category: "build",
    headline: "Design that earns trust in seconds.",
    metaDescription:
      "UI/UX design, prototyping and brand identity for Canadian businesses and start-ups. User research, wireframes, design systems and logos.",
    intro:
      "People judge a business by its design in a few seconds. We create clear, beautiful interfaces and brand identities that make your product easy to use and your business easy to trust.",
    problem: {
      heading: "Good products, poor first impressions",
      points: [
        "Users get confused and give up halfway through sign-up.",
        "Your brand looks different on every channel.",
        "Developers guess at designs, so things look off.",
        "Your product looks less professional than it really is.",
      ],
    },
    solution: {
      heading: "Clarity first, then polish",
      body: "We learn who your users are and what they need, map the simplest path for them, then design interfaces and brand assets that feel modern and consistent. You get a design system your developers can build from with confidence.",
    },
    features: [
      { title: "User research", body: "Interviews and testing that reveal what users really need." },
      { title: "Wireframes and flows", body: "Clear page structures and user journeys before visual design." },
      { title: "High-fidelity UI", body: "Pixel-perfect screens for web and mobile." },
      { title: "Interactive prototypes", body: "Clickable prototypes to test and pitch before building." },
      { title: "Design systems", body: "Reusable components and guidelines that keep everything consistent." },
      { title: "Brand identity", body: "Logo, colours, typography and brand guidelines." },
    ],
    deliverables: [
      "Research summary and user personas",
      "User flows and wireframes",
      "UI designs for all key screens",
      "Clickable prototype",
      "Design system in Figma",
      "Logo and brand guidelines (brand projects)",
    ],
    stack: ["Figma", "FigJam", "Adobe Illustrator", "Adobe Photoshop", "Framer", "Spline", "Maze"],
    idealFor: ["Start-ups preparing to raise or launch", "SaaS products with drop-off problems", "Businesses refreshing their brand", "Teams without an in-house designer"],
    startingPrice: "$1,500",
    priceNote: "for a design sprint",
    faqs: [
      {
        question: "Do I get the design files?",
        answer: "Yes. You receive the full Figma files, exported assets and brand guidelines, and they belong to you.",
      },
      {
        question: "Can you design for an app another team will build?",
        answer: "Absolutely. We prepare developer-ready specs and can join handover calls with your developers.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Each design phase includes two rounds of revisions. We share work early and often, so big surprises at the end are rare.",
      },
    ],
  },
];

export const serviceCategories: Record<ServiceCategory, string> = {
  build: "Design & Build",
  ai: "AI & Automation",
  business: "Business Systems",
};

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
