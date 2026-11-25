import { Quote } from "lucide-react";
import { visibleTestimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Client quotes. Placeholder quotes only render during local development;
 * on the live site this section stays hidden until real testimonials are added.
 */
export function Testimonials() {
  const items = visibleTestimonials();
  if (items.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Kind words"
          title={
            <>
              Don&rsquo;t just take <span className="text-aurora">our word for it.</span>
            </>
          }
        />
        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <RevealItem key={`${item.name}-${index}`} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-8">
                {item.isPlaceholder ? (
                  <span className="absolute top-4 right-4 rounded-full bg-maple/20 px-2.5 py-1 text-[10px] font-bold tracking-wide text-maple">
                    TODO · DEV ONLY
                  </span>
                ) : null}
                <Quote className="h-8 w-8 text-lime" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-snow">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-white/8 pt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-fog">{item.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
