import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { getPricing } from "@/content/pricing";
import { getProjectsForService } from "@/content/projects";
import { getService, services } from "@/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PricingTable } from "@/components/ui/PricingTable";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Magnetic } from "@/components/motion/Magnetic";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { pageMetadata } from "@/lib/seo";

// Every slug is pre-rendered at build time, so navigating here only waits on a fast cached
// response. Allowing that short wait avoids flashing a loading skeleton before the page.
export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: service.metaDescription, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const pricing = getPricing(service.slug);
  const related = getProjectsForService(service.slug);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const Icon = service.icon;

  return (
    <PageTransition>
      <PageHeader
        eyebrow={service.title}
        title={service.headline}
        intro={service.intro}
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.shortTitle },
        ]}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <Magnetic>
            <ButtonLink href={`/contact?service=${service.slug}`} size="lg" className="w-full sm:w-auto">
              Get a free quote <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </Magnetic>
          <p className="text-sm text-mist">
            From <span className="font-display text-xl font-bold text-snow">{service.startingPrice}</span> CAD{" "}
            <span className="text-fog">{service.priceNote}</span>
          </p>
        </div>
      </PageHeader>

      {/* Problem → solution */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
              <h2 className="text-3xl font-bold sm:text-4xl">{service.problem.heading}</h2>
              <ul className="mt-8 space-y-4">
                {service.problem.points.map((point) => (
                  <li key={point} className="flex gap-4 text-mist">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maple/15 text-maple">
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="relative isolate h-full overflow-hidden rounded-3xl border border-lime/25 bg-[linear-gradient(160deg,rgb(198_255_61/0.08),rgb(20_20_31/0.9)_50%)] p-7 sm:p-10">
              <Icon aria-hidden="true" className="absolute -right-8 -bottom-8 -z-10 h-48 w-48 text-white/[0.04]" />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-ink-950">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{service.solution.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-mist">{service.solution.body}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What you get" title="Features that make a real difference." />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <RevealItem key={feature.title} className="h-full">
                <SpotlightCard className="h-full p-7">
                  <span className="font-display text-sm font-bold text-lime tabular-nums">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{feature.body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Deliverables, stack, ideal for */}
      <section className="py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            <RevealItem className="h-full lg:col-span-2">
              <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
                <h2 className="text-2xl font-bold sm:text-3xl">What&rsquo;s included</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-mist">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
            <RevealItem className="h-full">
              <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
                <h2 className="text-2xl font-bold sm:text-3xl">Perfect for</h2>
                <ul className="mt-6 space-y-3">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-mist">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-cyan" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
            <RevealItem className="lg:col-span-3">
              <div className="rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
                <h2 className="text-2xl font-bold sm:text-3xl">Tools &amp; technology</h2>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {service.stack.map((tech) => (
                    <li key={tech} className="glass rounded-full px-4 py-2 text-sm font-medium text-mist">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* Pricing */}
      {pricing ? (
        <section className="py-16 sm:py-24" id="pricing">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Clear prices in Canadian dollars."
              intro="Starting prices for typical projects. You'll get a fixed quote after a free consultation."
            />
            <div className="mt-12">
              <PricingTable plans={pricing.plans} serviceSlug={service.slug} />
            </div>
            {pricing.note ? <p className="mt-6 text-sm text-fog">{pricing.note}</p> : null}
            <p className="mt-4 text-sm text-fog">
              Prices exclude applicable taxes.{" "}
              <Link href="/pricing" className="text-lime hover:underline">
                Compare all pricing
              </Link>
            </p>
          </Container>
        </section>
      ) : null}

      {/* Related work */}
      {related.length > 0 ? (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Related work" title="See it in action." />
            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
              {related.slice(0, 2).map((project) => (
                <RevealItem key={project.slug} className="h-full">
                  <ProjectCard project={project} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : null}

      <HowItWorks title={`How your ${service.shortTitle.toLowerCase()} project runs.`} />

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title={`${service.shortTitle}: common questions`} />
          <Reveal delay={0.1}>
            <FaqAccordion faqs={service.faqs} name={`${service.slug}-faq`} />
          </Reveal>
        </Container>
      </section>

      {/* Other services */}
      <section className="py-16">
        <Container>
          <h2 className="text-sm font-semibold tracking-[0.25em] text-fog uppercase">Explore other services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-ink-900/60 p-4 transition-colors hover:border-white/20"
                  >
                    <OtherIcon className="h-5 w-5 text-aurora-cyan" aria-hidden="true" />
                    <span className="flex-1 font-semibold">{other.shortTitle}</span>
                    <ArrowRight className="h-4 w-4 text-fog transition-transform group-hover:translate-x-1 group-hover:text-lime" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaSection title={`Ready to talk about ${service.shortTitle.toLowerCase()}?`} />
    </PageTransition>
  );
}
