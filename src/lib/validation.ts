import { z } from "zod";
import { services } from "@/content/services";

/** Dropdown options for "Service interested in". */
export const serviceOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "not-sure", label: "Not sure yet — help me decide" },
] as const;

const serviceValues = serviceOptions.map((option) => option.value);

/** Accepts common Canadian/North American formats: (519) 555-0123, 519-555-0123, +1 519 555 0123. */
const phonePattern = /^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

/**
 * Contact form rules, shared by the browser (instant feedback)
 * and the server action (the real security check).
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Please enter your name." })
    .max(100, { error: "Name must be 100 characters or fewer." }),
  businessName: z.string().trim().max(120, { error: "Business name must be 120 characters or fewer." }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Please enter your email address." })
    .pipe(z.email({ error: "Please enter a valid email address, like name@business.ca." })),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || phonePattern.test(value), {
      error: "Please enter a valid phone number, like 519-555-0123.",
    }),
  service: z
    .string()
    .refine((value) => serviceValues.includes(value), { error: "Please choose the service you're interested in." }),
  message: z
    .string()
    .trim()
    .min(20, { error: "Please tell us a little more (at least 20 characters)." })
    .max(2000, { error: "Message must be 2,000 characters or fewer." }),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export const MESSAGE_MAX = 2000;

/** Honeypot field name: hidden from people, tempting for bots. */
export const HONEYPOT_FIELD = "website";
/** Hidden field holding when the form was first shown (ms since epoch). */
export const STARTED_AT_FIELD = "startedAt";
/** Submissions faster than this are treated as bots. */
export const MIN_FILL_TIME_MS = 3000;
