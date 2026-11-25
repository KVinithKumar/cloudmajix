import { techStack } from "@/content/company";
import { Container } from "@/components/ui/Container";

function Row({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul
        className="animate-marquee flex shrink-0 gap-3 pr-3 hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
        aria-hidden="true"
      >
        {doubled.map((tech, index) => (
          <li
            key={`${tech}-${index}`}
            className="glass rounded-2xl px-5 py-3 font-display text-lg font-semibold whitespace-nowrap text-mist transition-colors hover:text-snow"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechMarquee() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-center text-sm font-semibold tracking-[0.25em] text-fog uppercase">
          Built with modern, proven technology
        </h2>
        {/* Screen readers get the plain list; the animated rows are decorative. */}
        <p className="sr-only">{techStack.join(", ")}</p>
      </Container>
      <div className="mt-8 space-y-3">
        <Row items={techStack.slice(0, half)} />
        <Row items={techStack.slice(half)} reverse />
      </div>
    </section>
  );
}
