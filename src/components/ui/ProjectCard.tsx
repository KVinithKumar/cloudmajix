import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectTypeLabel, type Project } from "@/content/projects";
import { services } from "@/content/services";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { TiltCard } from "@/components/motion/TiltCard";

export function ProjectCard({ project }: { project: Project }) {
  const serviceNames = project.services
    .map((slug) => services.find((service) => service.slug === slug)?.shortTitle)
    .filter((name): name is string => Boolean(name));

  return (
    <TiltCard className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col rounded-3xl border border-white/8 bg-ink-900/70 p-3 transition-colors duration-500 hover:border-white/15"
      >
        <div className="relative">
          <ProjectCover project={project} />
          <span className="glass absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide text-snow">
            {projectTypeLabel[project.type]}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-1 text-sm text-fog">{project.client}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-mist transition-[transform,background-color,color,border-color] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink-950">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-mist">{project.summary}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {serviceNames.map((name) => (
              <li key={name} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </TiltCard>
  );
}
