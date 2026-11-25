"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { serviceCategories, services, type ServiceCategory } from "@/content/services";
import { FilterTabs, type FilterOption } from "@/components/ui/FilterTabs";
import { ServiceCard } from "@/components/ui/ServiceCard";

type Filter = ServiceCategory | "all";

const options: FilterOption<Filter>[] = [
  { value: "all", label: "All services" },
  ...(Object.entries(serviceCategories) as [ServiceCategory, string][]).map(([value, label]) => ({ value, label })),
];

/** Filterable grid of every service. Shows everything when JavaScript is off. */
export function ServiceExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? services : services.filter((service) => service.category === filter);

  return (
    <div>
      <FilterTabs id="service-filter" label="Filter services" options={options} value={filter} onChange={setFilter} />
      <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((service) => (
            <motion.li
              key={service.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ServiceCard service={service} showPrice />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
