import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { serviceCategories } from "@/content/services";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

/** Card linking to a service page. Whole card is clickable. */
export function ServiceCard({
  service,
  showPrice = false,
  className,
}: {
  service: Service;
  showPrice?: boolean;
  className?: string;
}) {
  const Icon = service.icon;
  return (
    <SpotlightCard className={cn("h-full", className)}>
      <Link href={`/services/${service.slug}`} className="group flex h-full flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 text-aurora-cyan transition-[transform,background-color,color] duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-lime group-hover:text-ink-950">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-[transform,background-color,color,border-color] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink-950">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-fog uppercase">{serviceCategories[service.category]}</p>
        <h3 className="mt-2 text-2xl font-bold">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-mist">{service.tagline}</p>
        {showPrice ? (
          <p className="mt-auto pt-6 text-sm text-fog">
            From <span className="font-semibold text-snow">{service.startingPrice}</span> CAD
          </p>
        ) : null}
      </Link>
    </SpotlightCard>
  );
}
