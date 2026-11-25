/**
 * Client testimonials.
 *
 * TODO: Replace with real quotes from real clients (with their permission).
 * While every entry is a placeholder, the testimonials section is shown only in
 * local development and hidden on the live site, so visitors never see made-up reviews.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  isPlaceholder: boolean;
};

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "TODO: Replace with a real client quote. Example: They rebuilt our website in three weeks and we started getting booking requests the same week it went live.",
    name: "Client name",
    role: "Owner, business name, city",
    isPlaceholder: true,
  },
  {
    quote:
      "TODO: Replace with a real client quote. Example: The AI receptionist answers every after-hours call now. It paid for itself in the first month.",
    name: "Client name",
    role: "Clinic manager, city",
    isPlaceholder: true,
  },
  {
    quote:
      "TODO: Replace with a real client quote. Example: Clear pricing, weekly updates and a finished app that our customers actually use.",
    name: "Client name",
    role: "Founder, start-up name",
    isPlaceholder: true,
  },
];

export function visibleTestimonials(): Testimonial[] {
  const real = testimonials.filter((t) => !t.isPlaceholder);
  if (real.length > 0) return real;
  return process.env.NODE_ENV === "development" ? [...testimonials] : [];
}
