import Link from "next/link";
import { Check } from "lucide-react";
import type { Plan } from "@/content/pricing";
import { buttonStyles } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Three-column plan comparison for one service. */
export function PricingTable({ plans, serviceSlug }: { plans: readonly Plan[]; serviceSlug: string }) {
  return (
    <RevealGroup className="grid gap-5 md:grid-cols-3">
      {plans.map((plan) => (
        <RevealItem key={plan.name} className="h-full">
          <div
            className={cn(
              "relative flex h-full flex-col rounded-3xl border p-7 sm:p-8",
              plan.highlighted
                ? "border-lime/40 bg-[linear-gradient(160deg,rgb(198_255_61/0.10),rgb(20_20_31/0.9)_45%)] shadow-[0_20px_80px_-30px_rgb(198_255_61/0.35)]"
                : "border-white/8 bg-ink-900/70",
            )}
          >
            {plan.highlighted ? (
              <span className="absolute -top-3 left-7 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink-950">Most popular</span>
            ) : null}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{plan.description}</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-4xl font-bold tracking-tight">{plan.price}</span>
              <span className="text-sm text-fog">{plan.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-mist">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Link
                href={`/contact?service=${serviceSlug}`}
                className={buttonStyles({ variant: plan.highlighted ? "primary" : "secondary", className: "w-full" })}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
