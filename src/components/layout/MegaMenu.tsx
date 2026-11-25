import Link from "next/link";
import type { MouseEvent } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/content/services";

/**
 * Services dropdown. Opens on hover or keyboard focus using CSS only
 * (the parent <li> carries the `group/mega` class), so it works without JavaScript.
 */
export function MegaMenu() {
  function blurOnClick(event: MouseEvent<HTMLAnchorElement>) {
    // Close the focus-driven menu after navigating.
    event.currentTarget.blur();
  }

  return (
    <div className="invisible absolute top-full left-1/2 z-50 w-[min(820px,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out-expo group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
        <ul className="grid grid-cols-3 gap-1 p-3">
          {services.map(({ slug, shortTitle, tagline, icon: Icon }) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                onClick={blurOnClick}
                className="group/item flex h-full gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5 focus-visible:bg-white/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-aurora-cyan transition-[transform,color,background-color] duration-300 ease-spring group-hover/item:scale-110 group-hover/item:-rotate-6 group-hover/item:bg-lime group-hover/item:text-ink-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-snow">{shortTitle}</span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-fog">{tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 border-t border-white/8 bg-white/[0.02] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-mist">
            <Sparkles className="h-4 w-4 text-lime" aria-hidden="true" />
            Not sure what you need? Tell us the problem and we&rsquo;ll suggest the right fix.
          </p>
          <Link
            href="/services"
            onClick={blurOnClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:underline"
          >
            All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
