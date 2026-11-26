"use server";

import { after } from "next/server";
import { z } from "zod";
import { site } from "@/content/site";
import { sendLeadNotification } from "@/lib/email";
import { getSupabase } from "@/lib/supabase";
import {
  contactSchema,
  HONEYPOT_FIELD,
  MIN_FILL_TIME_MS,
  STARTED_AT_FIELD,
  type ContactField,
} from "@/lib/validation";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  /** Echoed back so a no-JavaScript submission keeps what the visitor typed. */
  values?: Partial<Record<ContactField, string>>;
};

function text(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

/**
 * Validates a contact-form submission on the server, saves it to Supabase and emails it to the inbox.
 * Works with or without JavaScript in the browser.
 */
export async function submitLead(_previous: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const raw = {
    name: text(formData, "name"),
    businessName: text(formData, "businessName"),
    email: text(formData, "email"),
    phone: text(formData, "phone"),
    service: text(formData, "service"),
    message: text(formData, "message"),
  };

  const success: ContactFormState = {
    status: "success",
    message: "Thanks! Your message is on its way. We'll reply within one business day.",
  };

  // Spam protection: bots fill hidden fields and submit instantly. Pretend it worked so they move on.
  if (text(formData, HONEYPOT_FIELD).trim() !== "") return success;
  const startedAt = Number(text(formData, STARTED_AT_FIELD));
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS) return success;

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    const firstErrors: Partial<Record<ContactField, string>> = {};
    for (const [field, messages] of Object.entries(fieldErrors) as [ContactField, string[] | undefined][]) {
      if (messages?.[0]) firstErrors[field] = messages[0];
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: firstErrors,
      values: raw,
    };
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.error("Contact form: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set.");
    return {
      status: "error",
      message: `Our form is temporarily unavailable. Please email us at ${site.email}.`,
      values: raw,
    };
  }

  const lead = parsed.data;
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    business_name: lead.businessName || null,
    email: lead.email.toLowerCase(),
    phone: lead.phone || null,
    service: lead.service,
    message: lead.message,
  });

  if (error) {
    console.error("Contact form: failed to save lead.", error.code, error.message);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your message. Please try again or email us at ${site.email}.`,
      values: raw,
    };
  }

  // Email the lead to the inbox after responding, so the visitor never waits on email delivery.
  after(async () => {
    try {
      await sendLeadNotification(lead);
    } catch (mailError) {
      console.error("Contact form: lead saved, but the email notification failed.", mailError);
    }
  });

  return success;
}
