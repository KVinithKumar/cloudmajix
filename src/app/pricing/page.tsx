import Link from "next/link";
import { Check } from "lucide-react";
import { faqGroups } from "@/content/faqs";
import { includedEverywhere, pricing } from "@/content/pricing";
import { services } from "@/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PricingTable } from "@/components/ui/PricingTable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing — Transparent Plans in CAD",
  description:
    "Transparent starting prices in Canadian dollars for websites, mobile apps, games, AI voice calling, chatbots, machine learning, payments, cloud and design.",
  path: "/pricing",
});

const pricingFaqs = faqGroups.find((group) => group.title === "Pricing & payments")?.faqs ?? [];

export default function PricingPage() {
  const sections = pricing
    .map((entry) => ({ entry, service: services.find((service) => service.slug === entry.serviceSlug) }))
    .filter((item): item is { entry: (typeof pricing)[number]; service: (typeof services)[number] } => Boolean(item.service));

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Pricing"
        title="Honest prices. No surprises."
        intro="Starting prices in Canadian dollars for every service. After a free consultation, you'll get a fixed quote for your exact project."
        crumbs={[{ href: "/pricing", label: "Pricing" }]}
      />

      {/* Jump links (sticky on larger screens) */}
      <nav aria-label="Pricing by service" className="sticky top-24 z-30 hidden py-3 lg:block">
        <Container>
          <ul className="glass flex flex-wrap justify-center gap-1 rounded-full p-1.5">
            {sections.map(({ service }) => (
              <li key={service.slug}>
                <a href={`#${service.slug}`} className="block rounded-full px-3.5 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/8 hover:text-snow">
                  {service.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {sections.map(({ entry, service }) => {
        const Icon = service.icon;
        return (
          <section key={service.slug} id={service.slug} className="scroll-mt-44 py-14 sm:py-20">
            <Container>
              <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 text-aurora-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="text-3xl font-bold sm:text-4xl">{service.title}</h2>
                </div>
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-lime hover:underline">
                  Service details →
                </Link>
              </Reveal>
              <div className="mt-10">
                <PricingTable plans={entry.plans} serviceSlug={service.slug} />
              </div>
              {entry.note ? <p className="mt-5 text-sm text-fog">{entry.note}</p> : null}
            </Container>
          </section>
        );
      })}

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-white/8 bg-ink-900/70 p-8 sm:p-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Included with every project</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {includedEverywhere.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-mist">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-fog">All prices are in Canadian dollars and exclude applicable GST/HST/PST.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" />
          <Reveal delay={0.1}>
            <FaqAccordion faqs={pricingFaqs} name="pricing-faq" />
          </Reveal>
        </Container>
      </section>

      <CtaSection title="Get your fixed-price quote." intro="Share a few details about your project and we'll reply with a clear scope, timeline and price." />
    </PageTransition>
  );
}
