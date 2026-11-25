import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageTransition } from "@/components/motion/PageTransition";
import { CapabilityMarquee } from "@/components/sections/CapabilityMarquee";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Stats } from "@/components/sections/Stats";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Websites, Apps & AI for Canadian Businesses` },
  description:
    "CloudMajix builds websites, mobile apps, games, AI voice receptionists, chatbots, payment systems and machine-learning solutions for Canadian businesses. Fixed prices in CAD.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <CapabilityMarquee />
      <ServicesGrid />
      <Stats />
      <FeaturedWork />
      <WhyUs />
      <HowItWorks />
      <TechMarquee />
      <Testimonials />
      <FaqPreview />
      <CtaSection />
    </PageTransition>
  );
}
