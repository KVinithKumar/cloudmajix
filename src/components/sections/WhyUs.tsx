import { reasons } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-aurora-violet/10 blur-[120px]" />
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why CloudMajix"
          title={
            <>
              Big-agency skills. <span className="text-aurora">Small-business heart.</span>
            </>
          }
          intro="We work the way we'd want to be treated as a business owner: straight talk, fair prices and software that pays for itself."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }, index) => (
            <RevealItem key={title} className="h-full">
              <SpotlightCard className="h-full p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/10 text-lime">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-fog tabular-nums" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{body}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
