"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border pr-2.5 pl-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:pl-5",
            scrolled || menuOpen
              ? "border-white/10 bg-ink-900/70 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo onClick={closeMenu} />

          <ul className="hidden items-center gap-1 lg:flex" onPointerLeave={() => setHovered(null)}>
            {mainNav.map((link) => {
              const isServices = link.href === "/services";
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href} className={cn("relative", isServices && "group/mega")}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onPointerEnter={() => setHovered(link.href)}
                    onFocus={() => setHovered(link.href)}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-snow" : "text-mist hover:text-snow",
                    )}
                  >
                    {hovered === link.href ? (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/8"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    {link.label}
                    {isServices ? (
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-300 group-focus-within/mega:rotate-180 group-hover/mega:rotate-180"
                        aria-hidden="true"
                      />
                    ) : null}
                    {active ? (
                      <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime" aria-hidden="true" />
                    ) : null}
                  </Link>
                  {isServices ? <MegaMenu /> : null}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
              Start a project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-snow transition-transform duration-500 ease-out-expo",
                  menuOpen ? "rotate-45" : "-translate-y-1",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 rounded-full bg-snow transition-[transform,width] duration-500 ease-out-expo",
                  menuOpen ? "w-5 -rotate-45" : "w-3.5 translate-x-[3px] translate-y-1",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>{menuOpen ? <MobileMenu pathname={pathname} onNavigate={closeMenu} /> : null}</AnimatePresence>
    </>
  );
}
