"use client";

import { useSyncExternalStore } from "react";

/** Subscribe to a CSS media query. Always `false` during server rendering. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True on devices with a precise pointer (mouse/trackpad) and no reduced-motion preference. */
export function useFancyPointer(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
}
