"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-40 overflow-y-auto bg-ink-950/97 backdrop-blur-xl lg:hidden"
      initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
      transition={{ duration: 0.7, ease }}
    >
      <div aria-hidden="true" className="animate-aurora pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-aurora-violet/30 blur-3xl" />
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <nav aria-label="Mobile" className="relative flex min-h-full flex-col px-6 pt-28 pb-10">
        <motion.ul
          className="space-y-1"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
        >
          {[{ href: "/", label: "Home" }, ...mainNav, { href: "/contact", label: "Contact" }].map((link, index) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <motion.li
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: 40, rotate: 3 },
                  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group flex items-baseline gap-4 py-2 font-display text-4xl font-bold tracking-tight transition-colors sm:text-5xl",
                    active ? "text-lime" : "text-snow hover:text-lime",
                  )}
                >
                  <span className="font-sans text-xs font-medium text-fog tabular-nums">0{index + 1}</span>
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-fog uppercase">Services</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={onNavigate}
                  className="glass inline-flex rounded-full px-3.5 py-2 text-sm text-mist transition-colors hover:text-snow"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-auto flex flex-col gap-3 pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
        >
          <Link href="/contact" onClick={onNavigate} className={buttonStyles({ size: "lg", className: "w-full" })}>
            Start a project <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 py-2 text-sm text-mist hover:text-snow"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
          </a>
        </motion.div>
      </nav>
    </motion.div>
  );
}
