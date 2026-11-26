import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects, projectTypeLabel } from "@/content/projects";
import { services } from "@/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { pageMetadata } from "@/lib/seo";

// Every slug is pre-rendered at build time, so navigating here only waits on a fast cached
// response. Allowing that short wait avoids flashing a loading skeleton before the page.
export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.title} — ${project.client}`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const projectServices = services.filter((service) => project.services.includes(service.slug));

  return (
    <PageTransition>
      <PageHeader
        eyebrow={project.client}
        title={project.title}
        intro={project.summary}
        crumbs={[
          { href: "/work", label: "Work" },
          { href: `/work/${project.slug}`, label: project.title },
        ]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-fog">Type</dt>
            <dd className="mt-1 font-semibold">{projectTypeLabel[project.type]}</dd>
          </div>
          <div>
            <dt className="text-fog">Year</dt>
            <dd className="mt-1 font-semibold">{project.year}</dd>
          </div>
          <div>
            <dt className="text-fog">Services</dt>
            <dd className="mt-1 flex flex-wrap gap-x-3 font-semibold">
              {projectServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-lime">
                  {service.shortTitle}
                </Link>
              ))}
            </dd>
          </div>
          {project.liveUrl ? (
            <div>
              <dt className="text-fog">Live site</dt>
              <dd className="mt-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-lime hover:underline">
                  Visit site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </PageHeader>

      <section>
        <Container>
          <Reveal>
            <ProjectCover project={project} priority className="aspect-[16/9] rounded-[2rem]" />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-lime uppercase">The challenge</p>
              <p className="mt-5 text-xl leading-relaxed text-snow">{project.challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-aurora-cyan uppercase">Our solution</p>
              <p className="mt-5 text-xl leading-relaxed text-snow">{project.solution}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <RevealGroup className="grid gap-5 lg:grid-cols-3">
            <RevealItem className="h-full">
              <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7">
                <h2 className="text-2xl font-bold">Key features</h2>
                <ul className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-mist">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
            <RevealItem className="h-full">
              <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7">
                <h2 className="text-2xl font-bold">What it delivers</h2>
                <ul className="mt-5 space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-mist">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-cyan" aria-hidden="true" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
            {project.stack.length > 0 ? (
              <RevealItem className="h-full">
                <div className="h-full rounded-3xl border border-white/8 bg-ink-900/70 p-7">
                  <h2 className="text-2xl font-bold">Tech stack</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech} className="glass rounded-full px-3.5 py-1.5 text-sm text-mist">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ) : null}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-white/8 bg-ink-900/60 p-7 transition-colors hover:border-white/20 sm:p-10"
          >
            <span>
              <span className="text-xs font-semibold tracking-[0.25em] text-fog uppercase">Next project</span>
              <span className="mt-2 block font-display text-3xl font-bold sm:text-5xl">{next.title}</span>
            </span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime text-ink-950 transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </section>

      <CtaSection title="Want something like this?" />
    </PageTransition>
  );
}
