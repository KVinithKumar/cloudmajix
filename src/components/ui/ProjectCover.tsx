import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Cover art for a project card. Uses the real screenshot when `project.image` is set,
 * otherwise draws a lightweight illustrated mock-up (no image download needed).
 */
export function ProjectCover({ project, priority = false, className }: { project: Project; priority?: boolean; className?: string }) {
  const style = { "--accent": project.accent } as CSSProperties;
  return (
    <div
      style={style}
      className={cn(
        "relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/8 bg-ink-800",
        "bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--accent)_35%,transparent),transparent_60%)]",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-105">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <Mockup kind={project.kind} />
        </div>
      )}
    </div>
  );
}

const bar = "rounded-full bg-white/15";

function Mockup({ kind }: { kind: Project["kind"] }) {
  switch (kind) {
    case "mobile":
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={cn(
                "h-[78%] w-[24%] rounded-[1.4rem] border border-white/15 bg-ink-900/90 p-2 shadow-2xl",
                i === 1 && "translate-y-6 rotate-6",
              )}
            >
              <div className="h-full rounded-[1rem] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--accent)_45%,transparent),transparent_60%)] p-2">
                <div className={cn(bar, "mx-auto h-1.5 w-8")} />
                <div className="mt-4 h-12 rounded-lg bg-white/10" />
                <div className={cn(bar, "mt-3 h-2 w-3/4")} />
                <div className={cn(bar, "mt-2 h-2 w-1/2")} />
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  <div className="h-8 rounded-md bg-white/10" />
                  <div className="h-8 rounded-md bg-[var(--accent)]/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "game":
      return (
        <div className="absolute inset-[10%] overflow-hidden rounded-xl border border-white/15 bg-ink-950">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--accent)_40%,transparent),transparent)]" />
          <div className="absolute inset-x-0 bottom-[30%] h-px bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
          <div className="animate-float absolute bottom-[31%] left-[22%] h-8 w-8 rounded-md bg-[var(--accent)] shadow-[0_0_30px_var(--accent)]" />
          {[30, 55, 75].map((left) => (
            <div key={left} className="absolute bottom-[30%] w-4 rounded-t-sm bg-white/25" style={{ left: `${left}%`, height: `${12 + (left % 3) * 8}%` }} />
          ))}
          <div className="absolute top-3 left-3 font-mono text-[10px] text-white/70">SCORE 004 210</div>
          <div className="absolute top-3 right-3 flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-maple" />
            ))}
          </div>
        </div>
      );
    case "voice":
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent)]/20">
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)]/20 [animation-duration:2.5s]" />
            <span className="h-10 w-10 rounded-full bg-[var(--accent)] shadow-[0_0_40px_var(--accent)]" />
          </div>
          <div className="flex h-10 items-center gap-1">
            {[20, 45, 70, 35, 90, 55, 30, 80, 40, 60, 25, 50].map((h, i) => (
              <span key={i} className="w-1.5 rounded-full bg-white/50" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="glass rounded-xl px-4 py-2 text-[11px] text-white/80">Booked: Tue 2:30 PM ✓</div>
        </div>
      );
    case "dashboard":
      return (
        <div className="absolute inset-[9%] grid grid-cols-3 grid-rows-3 gap-2">
          <div className="col-span-3 flex items-end gap-1.5 rounded-xl border border-white/10 bg-ink-900/80 p-3">
            {[35, 50, 42, 65, 58, 80, 72, 95].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-[var(--accent)]/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-ink-900/80 p-2">
              <div className={cn(bar, "h-1.5 w-1/2")} />
              <div className="mt-2 h-3 w-2/3 rounded bg-white/30" />
            </div>
          ))}
          <div className="col-span-3 rounded-xl border border-white/10 bg-ink-900/80 p-3">
            <svg viewBox="0 0 100 20" className="h-full w-full" preserveAspectRatio="none">
              <path d="M0 15 L15 12 L30 14 L45 8 L60 10 L75 4 L100 6" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      );
    case "payments":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[62%] rounded-2xl border border-white/15 bg-ink-900/90 p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className={cn(bar, "h-2 w-16")} />
              <span className="rounded-full bg-aurora-mint/20 px-2 py-0.5 text-[9px] font-semibold text-aurora-mint">PAID</span>
            </div>
            <div className="mt-3 font-display text-xl font-bold text-white/90">$1,850.00</div>
            <div className="mt-3 space-y-1.5">
              <div className={cn(bar, "h-1.5 w-full")} />
              <div className={cn(bar, "h-1.5 w-4/5")} />
            </div>
            <div className="mt-4 h-8 rounded-lg bg-[var(--accent)]/80" />
          </div>
          <div className="absolute top-[18%] right-[10%] h-14 w-24 rotate-12 rounded-lg bg-[linear-gradient(135deg,var(--accent),#7c3aed)] shadow-xl" />
        </div>
      );
    default:
      return (
        <div className="absolute inset-x-[8%] top-[12%] bottom-0 rounded-t-xl border border-b-0 border-white/15 bg-ink-900/90 shadow-2xl">
          <div className="flex gap-1.5 border-b border-white/10 p-2.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-white/25" />
            ))}
          </div>
          <div className="p-4">
            <div className="h-3 w-1/3 rounded bg-white/30" />
            <div className="mt-2 h-5 w-2/3 rounded bg-[var(--accent)]/70" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      );
  }
}
