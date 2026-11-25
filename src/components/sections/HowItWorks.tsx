"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/** Process timeline whose line fills in as you scroll through the steps. */
export function HowItWorks({ title = "From idea to launch in five clear steps." }: { title?: string }) {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How it works"
            title={title}
            intro="No jargon, no black boxes. You'll always know what we're working on, what it costs and what comes next."
          />
        </div>

        <ol ref={listRef} className="relative space-y-6 pl-14 sm:pl-16">
          <span aria-hidden="true" className="absolute top-3 bottom-3 left-[19px] w-px bg-white/10 sm:left-[23px]" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-3 bottom-3 left-[19px] w-px origin-top bg-gradient-to-b from-aurora-violet via-aurora-cyan to-lime sm:left-[23px]"
          />
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute top-5 -left-14 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-sm font-bold text-lime sm:-left-16 sm:h-12 sm:w-12">
                {index + 1}
              </span>
              <Reveal y={24} className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-fog uppercase">{step.duration}</p>
                <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
