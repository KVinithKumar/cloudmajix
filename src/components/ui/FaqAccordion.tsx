import { Plus } from "lucide-react";
import type { Faq } from "@/content/services";
import { cn } from "@/lib/utils";

/**
 * Accessible accordion built on native <details>/<summary>:
 * works without JavaScript, keyboard-friendly, and animates open/close in modern browsers.
 * Items sharing a `name` behave as an exclusive group (one open at a time).
 */
export function FaqAccordion({ faqs, name, className }: { faqs: readonly Faq[]; name: string; className?: string }) {
  return (
    <div className={cn("divide-y divide-white/8 rounded-3xl border border-white/8 bg-ink-900/60", className)}>
      {faqs.map((faq) => (
        <details key={faq.question} name={name} className="faq-item group px-6 sm:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition-colors hover:text-lime [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-[transform,background-color,color,border-color] duration-500 ease-out-expo group-open:rotate-45 group-open:border-lime group-open:bg-lime group-open:text-ink-950">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-mist">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
