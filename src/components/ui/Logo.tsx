import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const gradientId = `logo-gradient-${id}`;
  return (
    <svg viewBox="0 0 64 64" className={cn("h-9 w-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.55" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#14141f" />
      <rect x="0.5" y="0.5" width="63" height="63" rx="15.5" fill="none" stroke="rgb(255 255 255 / 0.1)" />
      <path
        d="M44 22.5A14 14 0 1 0 44 41.5"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="46" cy="32" r="4" fill="#c6ff3d" />
    </svg>
  );
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight", className)}
      aria-label="CloudMajix home"
    >
      <LogoMark className="transition-transform duration-500 ease-spring group-hover:rotate-[-12deg] group-hover:scale-105" />
      <span>
        Cloud<span className="text-aurora">Majix</span>
      </span>
    </Link>
  );
}
