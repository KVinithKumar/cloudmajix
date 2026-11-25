"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useFancyPointer } from "@/lib/use-media-query";

/** Subtle 3D tilt toward the cursor. Mouse/trackpad only; static elsewhere. */
export function TiltCard({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const enabled = useFancyPointer();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (!enabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        className="h-full"
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        onPointerMove={handleMove}
        onPointerLeave={reset}
      >
        {children}
      </motion.div>
    </div>
  );
}
