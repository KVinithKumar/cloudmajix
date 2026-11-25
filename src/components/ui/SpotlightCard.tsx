"use client";

import type { ComponentPropsWithoutRef, PointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a soft glow that follows the cursor.
 * The glow position is stored in CSS variables, so no React re-renders happen on move.
 */
export function SpotlightCard({ className, children, onPointerMove, ...props }: ComponentPropsWithoutRef<"div">) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    onPointerMove?.(event);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className={cn(
        "group/spot relative isolate overflow-hidden rounded-3xl border border-white/8 bg-ink-900/70 transition-colors duration-500 hover:border-white/15",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:bg-[radial-gradient(400px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgb(124_58_237/0.18),rgb(34_211_238/0.08)_40%,transparent_70%)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
