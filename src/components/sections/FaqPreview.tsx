import { ArrowRight } from "lucide-react";
import { featuredFaqs } from "@/content/faqs";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function FaqPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="FAQ" title="Questions? We've got answers." intro="The things business owners ask us most before starting a project." />
          <Reveal delay={0.1} className="mt-8">
            <ButtonLink href="/faq" variant="secondary">
              See all questions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <FaqAccordion faqs={featuredFaqs} name="home-faq" />
        </Reveal>
      </Container>
    </section>
  );
}
