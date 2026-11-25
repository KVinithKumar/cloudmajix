"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Counts up to `value` when scrolled into view.
 * Server HTML contains the final number, so it's correct without JavaScript.
 */
export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reduceMotion) return;
    if (!inView) {
      element.textContent = "0";
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        element.textContent = Math.round(latest).toLocaleString("en-CA");
      },
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span className={className}>
      <span ref={ref} className="tabular-nums">
        {value.toLocaleString("en-CA")}
      </span>
      {suffix}
    </span>
  );
}
