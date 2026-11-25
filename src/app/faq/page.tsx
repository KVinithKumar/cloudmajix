import Link from "next/link";
import { Mail } from "lucide-react";
import { faqGroups } from "@/content/faqs";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ — Common Questions Answered",
  description:
    "Answers to common questions about working with CloudMajix: pricing, timelines, ownership, support, AI, data privacy and each of our services.",
  path: "/faq",
});

const groups = [
  ...faqGroups,
  {
    title: "About our services",
    faqs: services.map((service) => service.faqs[0]),
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function FaqPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        intro="Everything you might want to know before starting a project with us. Can't find your question? Just ask."
        crumbs={[{ href: "/faq", label: "FAQ" }]}
      />

      <section className="pb-20">
        <Container className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <nav aria-label="FAQ topics">
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {groups.map((group) => (
                  <li key={group.title}>
                    <a
                      href={`#${slugify(group.title)}`}
                      className="glass block rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-snow lg:rounded-xl lg:border-transparent lg:bg-transparent lg:hover:bg-white/5"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 hidden rounded-2xl border border-white/8 bg-ink-900/70 p-5 lg:block">
              <p className="font-semibold">Still have questions?</p>
              <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-lime hover:underline">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
            </div>
          </aside>

          <div className="space-y-16">
            {groups.map((group) => (
              <section key={group.title} id={slugify(group.title)} className="scroll-mt-32">
                <Reveal>
                  <h2 className="text-3xl font-bold sm:text-4xl">{group.title}</h2>
                </Reveal>
                <Reveal delay={0.05} className="mt-6">
                  <FaqAccordion faqs={group.faqs} name={slugify(group.title)} />
                </Reveal>
              </section>
            ))}
            <p className="text-mist">
              Want the details on a specific service? Visit our{" "}
              <Link href="/services" className="text-lime hover:underline">
                services
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-lime hover:underline">
                pricing
              </Link>{" "}
              pages.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection title="Didn't find your answer?" intro="Send us your question and we'll get back to you, usually within one business day." />
    </PageTransition>
  );
}
