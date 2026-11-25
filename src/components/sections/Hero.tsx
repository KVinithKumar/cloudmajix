import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { RotatingWords } from "@/components/motion/RotatingWords";
import { SplitText } from "@/components/motion/SplitText";
import { HeroOrbit } from "@/components/sections/HeroOrbit";

const rotatingWords = ["websites", "mobile apps", "games", "AI agents", "chatbots", "voice AI", "payments", "ML models"] as const;

// TODO: confirm these promises are ones you can keep.
const trustPoints = ["Canadian-owned", "Quotes in CAD", "Reply within 1 business day"] as const;

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-28 lg:pb-24">
      {/* Background layers */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="animate-aurora absolute -top-[30%] -left-[10%] -z-10 h-[70vmax] w-[70vmax] rounded-full bg-aurora-violet/25 blur-[120px]" />
      <div aria-hidden="true" className="animate-aurora absolute top-[10%] -right-[20%] -z-10 h-[55vmax] w-[55vmax] rounded-full bg-aurora-cyan/15 blur-[120px] [animation-delay:-7s]" />
      <div aria-hidden="true" className="animate-aurora absolute -bottom-[30%] left-[30%] -z-10 h-[45vmax] w-[45vmax] rounded-full bg-aurora-mint/10 blur-[120px] [animation-delay:-12s]" />
      <div aria-hidden="true" className="bg-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div>
          <div className="animate-fade-up" style={delay(0)}>
            <Badge pulse>
              Canadian software studio<span className="hidden sm:inline"> · Booking new projects</span>
            </Badge>
          </div>

          <h1 className="mt-7 text-[clamp(2.6rem,10vw,5rem)] leading-[0.98] font-bold lg:text-[clamp(3.25rem,4.9vw,5rem)]">
            <span className="sr-only">
              CloudMajix designs and builds websites, mobile apps, games, AI agents, chatbots, voice AI, payment
              systems and machine learning for Canadian businesses.
            </span>
            <span aria-hidden="true" className="block">
              <SplitText text="We design & build" className="block" />
              <span className="block">
                <RotatingWords words={rotatingWords} />
              </span>
              <SplitText text="for Canadian businesses." className="block" startDelay={0.25} />
            </span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-mist" style={delay(0.45)}>
            From a website that finally brings in leads to an AI receptionist that never misses a call, we turn ideas
            into software that wins customers and saves you hours every week.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(0.6)}>
            <Magnetic>
              <ButtonLink href="/contact" size="lg" className="w-full sm:w-auto">
                Start your project
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore services
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="animate-fade-up mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist" style={delay(0.75)}>
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/15 text-lime">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up" style={delay(0.3)}>
          <HeroOrbit />
        </div>
      </Container>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-fog uppercase lg:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="animate-float absolute inset-x-0 top-0 h-4 bg-lime" />
        </span>
      </div>
    </section>
  );
}
