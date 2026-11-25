import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  "Websites",
  "Mobile apps",
  "Games",
  "AI voice agents",
  "Chatbots",
  "Payments",
  "Machine learning",
  "Cloud & DevOps",
  "UI/UX design",
] as const;

/** Big scrolling strip of what we do. Decorative; the same content is in the hero. */
export function CapabilityMarquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...capabilities, ...capabilities];
  return (
    <div aria-hidden="true" className="relative -rotate-1 border-y border-white/8 bg-ink-900/60 py-6 sm:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-8 pr-8 hover:[animation-play-state:paused] sm:gap-12 sm:pr-12">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span
                className={cn(
                  "font-display text-4xl font-bold tracking-tight whitespace-nowrap sm:text-6xl",
                  index % 2 === 0 ? "text-snow" : "text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.45)]",
                )}
              >
                {item}
              </span>
              <Sparkle className="h-6 w-6 shrink-0 fill-lime text-lime sm:h-8 sm:w-8" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
