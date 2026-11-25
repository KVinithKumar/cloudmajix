import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SplitText } from "@/components/motion/SplitText";
import { cn } from "@/lib/utils";

type Crumb = { href: string; label: string };

/** Hero band at the top of inner pages: breadcrumbs, animated H1 and intro. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20", className)}>
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden="true" className="animate-aurora absolute -top-1/2 left-1/4 -z-10 h-[50vmax] w-[50vmax] rounded-full bg-aurora-violet/20 blur-[120px]" />
      <div aria-hidden="true" className="animate-aurora absolute -top-1/3 -right-1/4 -z-10 h-[40vmax] w-[40vmax] rounded-full bg-aurora-cyan/10 blur-[120px] [animation-delay:-8s]" />

      <Container>
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fog">
            <li>
              <Link href="/" className="hover:text-snow">
                Home
              </Link>
            </li>
            {crumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {index === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-mist">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-snow">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow ? (
          <p className="animate-fade-up mt-8 text-xs font-semibold tracking-[0.25em] text-lime uppercase [--delay:0.05s]">{eyebrow}</p>
        ) : null}
        <h1 className={cn("max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] font-bold", eyebrow ? "mt-4" : "mt-8")}>
          <SplitText text={title} step={0.05} />
        </h1>
        {intro ? (
          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl [--delay:0.3s]">{intro}</p>
        ) : null}
        {children ? <div className="animate-fade-up mt-10 [--delay:0.4s]">{children}</div> : null}
      </Container>
    </section>
  );
}
