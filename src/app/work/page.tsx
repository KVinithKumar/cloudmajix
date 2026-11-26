import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { PageTransition } from "@/components/motion/PageTransition";
import { CtaSection } from "@/components/sections/CtaSection";
import { WorkExplorer } from "@/components/sections/WorkExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work — Websites, Apps, Games & AI Projects",
  description:
    "See the websites, mobile apps, games, AI voice agents, payment systems and machine-learning projects CloudMajix designs and builds for Canadian businesses.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our work"
        title="Software we're proud to put our name on."
        intro="Real products we’ve designed, built and shipped, from an AI-powered car marketplace to HR portals, campus systems and AI career tools."
        crumbs={[{ href: "/work", label: "Work" }]}
      />
      <section className="pb-16">
        <Container>
          <WorkExplorer />
        </Container>
      </section>
      <CtaSection title="Your project could be next." />
    </PageTransition>
  );
}
