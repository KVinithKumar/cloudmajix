"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projects } from "@/content/projects";
import { serviceCategories, services, type ServiceCategory } from "@/content/services";
import { FilterTabs, type FilterOption } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = ServiceCategory | "all";

const options: FilterOption<Filter>[] = [
  { value: "all", label: "All work" },
  ...(Object.entries(serviceCategories) as [ServiceCategory, string][]).map(([value, label]) => ({ value, label })),
];

function categoriesOf(serviceSlugs: string[]): Set<ServiceCategory> {
  return new Set(
    serviceSlugs
      .map((slug) => services.find((service) => service.slug === slug)?.category)
      .filter((category): category is ServiceCategory => Boolean(category)),
  );
}

/** Filterable portfolio grid. Shows everything when JavaScript is off. */
export function WorkExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => categoriesOf(project.services).has(filter));

  return (
    <div>
      <FilterTabs id="work-filter" label="Filter projects" options={options} value={filter} onChange={setFilter} />
      <motion.ul layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
