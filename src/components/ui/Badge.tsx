import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small pill label used above headings ("eyebrow" text). */
export function Badge({
  children,
  className,
  pulse = false,
}: {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide text-mist sm:text-sm",
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {pulse ? (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
        ) : null}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {children}
    </span>
  );
}
