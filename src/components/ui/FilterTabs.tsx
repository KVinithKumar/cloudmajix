"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type FilterOption<T extends string> = { value: T; label: string };

/** Pill-style filter tabs with a sliding highlight. */
export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  id,
  label,
}: {
  options: readonly FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  id: string;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="glass inline-flex max-w-full flex-wrap gap-1 rounded-3xl p-1.5 sm:rounded-full">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
              active ? "text-ink-950" : "text-mist hover:text-snow",
            )}
          >
            {active ? (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 -z-10 rounded-full bg-lime"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
