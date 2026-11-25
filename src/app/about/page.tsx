import { Compass, Lightbulb, Sprout, Users } from "lucide-react";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us — A Canadian Software Studio",
  description:
    "CloudMajix is a Canadian software studio helping small and medium-sized businesses grow with websites, apps, AI and smart business systems.",
  path: "/about",
});

const values = [
  { title: "Clarity over jargon", body: "We explain technology in plain language so you can make confident decisions.", icon: Lightbulb },
  { title: "Partners, not vendors", body: "We care about your results, not just shipping the project and moving on.", icon: Users },
  { title: "Built to last", body: "Clean code, good documentation and modern tools mean your software keeps working.", icon: Sprout },
  { title: "Honest advice", body: "If a simpler, cheaper solution will do the job, we'll tell you.", icon: Compass },
] as const;

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="About CloudMajix"
        title="A Canadian studio for businesses that want to grow."
        intro="We help small and medium-sized businesses across Canada use modern software and AI to win more customers and spend less time on busywork."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      {/* TODO: personalise this story with your own background, experience and why you started CloudMajix. */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Our story" title="Why we started CloudMajix." />
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-mist">
            <p>
              Big companies have entire departments for websites, apps and automation. Most Canadian small businesses have
              an owner who&rsquo;s already doing five jobs. We started {site.name} to close that gap.
            </p>
            <p>
              Too often, local businesses are stuck with slow websites, missed calls and hours of manual admin, or they&rsquo;re
              quoted enterprise prices for simple fixes. We believe every business deserves software that&rsquo;s fast,
              modern and genuinely useful, at a price that makes sense.
            </p>
            <p>
              Today we design and build websites, mobile apps, games, AI voice agents, chatbots, payment systems and
              machine-learning tools for businesses across Canada. Whatever we build, the goal is the same: software that
              earns its keep.
            </p>
          </Reveal>
        </Container>
      </section>

      <Stats />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="What we value" title="How we work with you." />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, body, icon: Icon }) => (
              <RevealItem key={title} className="h-full">
                <SpotlightCard className="h-full p-7">
                  <Icon className="h-7 w-7 text-lime" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{body}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/8 bg-ink-900 p-8 sm:p-14">
              <div aria-hidden="true" className="animate-aurora absolute -top-1/2 -right-1/4 -z-10 h-[150%] w-[60%] rounded-full bg-maple/15 blur-[100px]" />
              <p className="text-xs font-semibold tracking-[0.25em] text-maple uppercase">Made in Canada</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-bold sm:text-5xl">
                Based in Canada. Serving businesses from coast to coast.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                We understand Canadian business: provincial sales tax, bilingual customers, PIPEDA privacy rules and
                support during Canadian business hours. We work remotely with clients across every province and territory,
                with video calls whenever you want face time.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyUs />
      <CtaSection title="Let's grow your business together." />
    </PageTransition>
  );
}
