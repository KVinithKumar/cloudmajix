import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="services-heading">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <span id="services-heading">
                Everything software, <span className="text-aurora">under one roof.</span>
              </span>
            }
            intro="From your first website to AI that answers your phones, one team handles design, development and support, so nothing falls through the cracks."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0 self-start lg:self-end">
            All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
