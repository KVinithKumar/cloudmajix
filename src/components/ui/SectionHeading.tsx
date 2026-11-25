import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Eyebrow + heading + optional intro, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-lime uppercase",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-lime/60" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-4 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">{title}</Heading>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-mist">{intro}</p> : null}
    </Reveal>
  );
}
