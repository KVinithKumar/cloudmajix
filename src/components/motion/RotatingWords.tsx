"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Cycles through words in place. All words are stacked invisibly in one grid cell
 * so the line reserves the width of the longest word and nothing jumps around.
 * Visual only: pair it with a screen-reader sentence.
 */
export function RotatingWords({
  words,
  interval = 2200,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [interval, reduceMotion, words.length]);

  return (
    <span aria-hidden="true" className={cn("relative inline-grid align-bottom", className)}>
      {words.map((word) => (
        <span key={word} className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {word}
        </span>
      ))}
      <span className="col-start-1 row-start-1 overflow-hidden pb-[0.12em]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={words[index]}
            className="inline-block whitespace-nowrap text-aurora"
            initial={{ y: "100%", opacity: 0, rotateX: -60 }}
            animate={{ y: "0%", opacity: 1, rotateX: 0 }}
            exit={{ y: "-100%", opacity: 0, rotateX: 60 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
