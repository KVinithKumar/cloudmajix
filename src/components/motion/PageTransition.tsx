import { ViewTransition, type ReactNode } from "react";

/**
 * Wrap each page's content in this to get a smooth fade-and-rise between routes.
 * Uses the browser View Transitions API: zero JavaScript animation cost,
 * and browsers without support simply navigate normally.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
