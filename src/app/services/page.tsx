import { services } from "@/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { PageTransition } from "@/components/motion/PageTransition";
import { CtaSection } from "@/components/sections/CtaSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceExplorer } from "@/components/sections/ServiceExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services — Web, Apps, Games, AI & Payments",
  description: `Explore all ${services.length} CloudMajix services: websites, mobile apps, games, AI voice calling, chatbots, machine learning, payments, cloud and design for Canadian businesses.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Services"
        title="One team for every piece of your software."
        intro="Pick one service or combine several. Every project comes with a fixed-price quote in Canadian dollars, weekly updates and full ownership of what we build."
        crumbs={[{ href: "/services", label: "Services" }]}
      />
      <section className="pb-12">
        <Container>
          <ServiceExplorer />
        </Container>
      </section>
      <HowItWorks title="Every service follows the same simple process." />
      <CtaSection title="Not sure which service you need?" intro="Tell us what's slowing your business down. We'll recommend the simplest solution, even if it's smaller than you expected." />
    </PageTransition>
  );
}
