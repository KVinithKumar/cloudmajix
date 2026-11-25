import type { Faq } from "@/content/services";

export type FaqGroup = { title: string; faqs: Faq[] };

/** General questions for the FAQ page. Service-specific FAQs live in services.ts. */
export const faqGroups: readonly FaqGroup[] = [
  {
    title: "Working with us",
    faqs: [
      {
        question: "What kinds of businesses do you work with?",
        answer:
          "Mostly Canadian small and medium-sized businesses and start-ups: trades and home services, clinics, professional firms, retailers, restaurants, property managers and tech founders. If you have a problem software can solve, we'd like to hear about it.",
      },
      {
        question: "Do you only work with clients in Canada?",
        answer:
          "We're a Canadian company and our pricing, taxes and support hours are set up for Canadian businesses. We work remotely with clients from coast to coast, and we're happy to discuss projects from elsewhere too.",
      },
      {
        question: "How does a project start?",
        answer:
          "It starts with a free consultation call. We learn about your business and goals, then send a clear proposal with scope, timeline and a fixed price. Once you approve it, we schedule a kickoff and get started.",
      },
      {
        question: "How will we communicate during the project?",
        answer:
          "You get one main point of contact, weekly progress updates, and a shared space to review work as it happens. We use email, video calls or a messaging tool, whatever suits you best.",
      },
    ],
  },
  {
    title: "Pricing & payments",
    faqs: [
      {
        question: "How much does a project cost?",
        answer:
          "It depends on scope, but every service page and our pricing page show starting prices in Canadian dollars. After our consultation, you'll receive a fixed-price quote, so there are no surprises.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "For most projects, we take a deposit to begin, followed by payments at agreed milestones. Monthly services like AI voice calling and care plans are billed monthly, and you can cancel with 30 days' notice.",
      },
      {
        question: "Do your prices include tax?",
        answer: "Prices are shown before applicable Canadian sales taxes (GST/HST/PST), which are added to invoices as required.",
      },
    ],
  },
  {
    title: "Ownership & support",
    faqs: [
      {
        question: "Who owns the website, app or code you build?",
        answer:
          "You do. Once the project is paid in full, you own the code, designs, content and accounts we create for you. We'll never hold your business hostage.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every project includes launch support. After that, you can choose a monthly care plan for updates, backups, monitoring and small changes, or contact us whenever you need help.",
      },
      {
        question: "Can you improve or fix something another developer built?",
        answer:
          "Yes. We start with a review of the existing code or system, explain what we find in plain language, and recommend the most cost-effective way forward.",
      },
    ],
  },
  {
    title: "AI & data",
    faqs: [
      {
        question: "Is AI right for my small business?",
        answer:
          "Often, yes, especially for answering calls and messages, booking appointments and automating repetitive admin work. We'll only recommend AI where it saves real time or money.",
      },
      {
        question: "How do you protect my customers' data?",
        answer:
          "We follow privacy-by-design practices, use reputable providers with strong security, limit access to what's needed, and design our solutions with Canadian privacy law (PIPEDA) in mind. Canadian data hosting is available for most services.",
      },
    ],
  },
];

/** Shown on the home page FAQ preview. */
export const featuredFaqs: Faq[] = [
  faqGroups[0].faqs[2],
  faqGroups[1].faqs[0],
  faqGroups[2].faqs[0],
  faqGroups[3].faqs[0],
];
