import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word reveal done in pure CSS, so it starts on first paint
 * (no waiting for JavaScript) and is fully readable with JavaScript off.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  startDelay = 0,
  step = 0.06,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  /** Seconds before the first word starts. */
  startDelay?: number;
  /** Seconds between words. */
  step?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span
            className={cn("animate-word-in inline-block", wordClassName)}
            style={{ "--delay": `${startDelay + index * step}s` } as CSSProperties}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
