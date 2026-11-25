/**
 * Single source of truth for company-wide details.
 * Edit these values and every page, footer, metadata tag and schema updates.
 */
export const site = {
  name: "CloudMajix",
  legalName: "CloudMajix",
  domain: "cloudmajix.ca",
  url: "https://cloudmajix.ca",
  email: "support@cloudmajix.ca",
  // TODO: add a phone number if you want one shown on the site, e.g. "+1-519-555-0123".
  phone: null as string | null,
  tagline: "Software, apps and AI that grow Canadian businesses.",
  description:
    "CloudMajix is a Canadian software studio building websites, mobile apps, games, AI voice agents, chatbots, payment systems and machine-learning solutions for businesses across Canada.",
  // TODO: replace with your city and province, or keep "Canada" for remote, Canada-wide service.
  location: {
    city: null as string | null,
    region: null as string | null,
    country: "CA",
    countryName: "Canada",
  },
  legal: {
    // TODO: set the province whose laws govern your Terms, e.g. "Ontario". Have a lawyer review both legal pages.
    governingProvince: null as string | null,
    lastUpdated: "November 24, 2026",
  },
  social: {
    // TODO: add your profile URLs when ready, e.g. linkedin: "https://www.linkedin.com/company/cloudmajix".
    linkedin: null as string | null,
    github: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
  },
} as const;

export type Site = typeof site;
