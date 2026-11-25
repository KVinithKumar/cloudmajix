import { stats } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/motion/Counter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Stats() {
  return (
    <section aria-label="CloudMajix at a glance" className="py-10">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="bg-ink-950 p-6 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} className="text-aurora" />
              </p>
              <p className="mt-3 text-sm text-mist sm:text-base">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
