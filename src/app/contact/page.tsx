import { Clock, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us — Start Your Project",
  description: `Tell CloudMajix about your project and get a free consultation and fixed-price quote. Email ${site.email}.`,
  path: "/contact",
});

const nextSteps = [
  "We read your message and reply, usually within one business day.",
  "We book a free call to understand your goals.",
  "You receive a clear proposal with a fixed price in CAD.",
] as const;

export default function ContactPage() {
  const location = site.location.city ? `${site.location.city}, ${site.location.region ?? ""}` : "Canada-wide, working remotely";

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Tell us a little about your business and what you'd like to build. No pressure, no jargon, just honest advice."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <Reveal className="space-y-5">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-3xl border border-white/8 bg-ink-900/70 p-6 transition-colors hover:border-lime/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-ink-950">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-fog">Email us</span>
                <span className="block text-lg font-semibold group-hover:text-lime">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/8 bg-ink-900/70 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-800 text-aurora-cyan">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-fog">Response time</span>
                <span className="block text-lg font-semibold">Within 1 business day</span>
              </span>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/8 bg-ink-900/70 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-800 text-aurora-mint">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-fog">Location</span>
                <span className="block text-lg font-semibold">{location}</span>
              </span>
            </div>
            <div className="rounded-3xl border border-white/8 bg-ink-900/70 p-6">
              <p className="font-semibold">What happens next</p>
              <ol className="mt-4 space-y-3">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-mist">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/15 text-xs font-bold text-lime">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </PageTransition>
  );
}
