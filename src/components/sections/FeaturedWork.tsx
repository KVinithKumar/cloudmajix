import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function FeaturedWork() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Ideas we&rsquo;ve turned into <span className="text-aurora">real products.</span>
              </>
            }
            intro="A few of the platforms we’ve built, from AI-powered marketplaces to business portals used every day."
          />
          <ButtonLink href="/work" variant="secondary" className="shrink-0 self-start lg:self-end">
            View all work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <RevealItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
