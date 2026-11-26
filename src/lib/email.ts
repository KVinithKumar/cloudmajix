import "server-only";
import nodemailer from "nodemailer";
import { site } from "@/content/site";
import { serviceOptions } from "@/lib/validation";

export type LeadEmail = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * Emails a new lead to the CloudMajix inbox through the Porkbun mailbox (SMTP).
 * Settings come from environment variables; only SMTP_PASS is required.
 * Does nothing when SMTP_PASS is missing, so the contact form keeps working either way.
 */
export async function sendLeadNotification(lead: LeadEmail): Promise<void> {
  const pass = process.env.SMTP_PASS?.trim();
  if (!pass) return;

  const user = process.env.SMTP_USER?.trim() || site.email;
  const to = process.env.LEAD_NOTIFY_TO?.trim() || site.email;
  const host = process.env.SMTP_HOST?.trim() || "smtp.porkbun.com";
  const port = Number(process.env.SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const serviceLabel = serviceOptions.find((option) => option.value === lead.service)?.label ?? lead.service;
  const received = new Date().toLocaleString("en-CA", { timeZone: "America/Toronto", dateStyle: "medium", timeStyle: "short" });

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Business", lead.businessName || "—"],
    ["Email", lead.email],
    ["Phone", lead.phone || "—"],
    ["Service", serviceLabel],
    ["Received", `${received} (Toronto time)`],
  ];

  const text = [
    "New enquiry from cloudmajix.ca",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    lead.message,
    "",
    "Reply to this email to answer the customer directly.",
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f4f7;font-family:Arial,Helvetica,sans-serif;color:#111">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5ea">
  <div style="background:#07070c;color:#f5f5fa;padding:18px 24px;font-size:18px;font-weight:bold">New enquiry from cloudmajix.ca</div>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:10px 24px;color:#666;width:110px;border-bottom:1px solid #f0f0f3">${escapeHtml(label)}</td><td style="padding:10px 24px;border-bottom:1px solid #f0f0f3">${escapeHtml(value)}</td></tr>`,
      )
      .join("")}
  </table>
  <div style="padding:18px 24px">
    <div style="color:#666;font-size:13px;margin-bottom:6px">Message</div>
    <div style="font-size:15px;line-height:1.5;white-space:pre-wrap">${escapeHtml(lead.message)}</div>
  </div>
  <div style="padding:14px 24px;background:#fafafc;color:#666;font-size:12px">Reply to this email to answer ${escapeHtml(lead.name)} directly.</div>
</div></body></html>`;

  await transporter.sendMail({
    from: { name: "CloudMajix Website", address: user },
    to,
    replyTo: { name: lead.name, address: lead.email },
    subject: `New lead: ${lead.name} — ${serviceLabel}`,
    text,
    html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
