"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin aurora bar along the top edge showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-aurora-violet via-aurora-cyan to-lime"
      style={{ scaleX }}
    />
  );
}
