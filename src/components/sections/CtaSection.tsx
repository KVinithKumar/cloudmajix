import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";

/** Big closing call-to-action used at the bottom of most pages. */
export function CtaSection({
  title = "Let's build something your customers love.",
  intro = "Tell us about your business and what you want to achieve. We'll reply with honest advice and a clear, fixed-price plan.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
            <div aria-hidden="true" className="animate-aurora absolute -top-1/2 left-0 -z-10 h-[140%] w-[70%] rounded-full bg-aurora-violet/30 blur-[100px]" />
            <div aria-hidden="true" className="animate-aurora absolute -right-1/4 -bottom-1/2 -z-10 h-[120%] w-[60%] rounded-full bg-aurora-cyan/20 blur-[100px] [animation-delay:-9s]" />
            <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />

            <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">{title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{intro}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <ButtonLink href="/contact" size="lg">
                  Start your project
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </ButtonLink>
              </Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 font-semibold text-mist transition-colors hover:text-snow"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
