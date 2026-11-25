import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { companyLinks, legalLinks } from "@/content/navigation";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2l1.6 3.2 1.9-1-.6 4.1 2.6-2.4.6 1.6 2.9-.5-1 3 1.5 1-4.3 3.6.6 1.7-4.2-.6.2 4.7h-1.6l.2-4.7-4.2.6.6-1.7L4.5 11.6l1.5-1-1-3 2.9.5.6-1.6 2.6 2.4-.6-4.1 1.9 1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/8 bg-ink-950">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-aurora-violet/15 blur-3xl" />

      <Container className="relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="col-span-2 md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm leading-relaxed text-mist">{site.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-6 inline-flex items-center gap-2 text-lg font-semibold text-snow hover:text-lime"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {site.email}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-fog">
            <MapleLeaf className="h-4 w-4 text-maple" />
            Proudly Canadian. Serving businesses from coast to coast.
          </p>
        </div>

        <nav aria-label="Services" className="col-span-2 md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-fog uppercase">Services</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-mist transition-colors hover:text-snow">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-fog uppercase">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mist transition-colors hover:text-snow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-fog uppercase">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mist transition-colors hover:text-snow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="relative" aria-hidden="true">
        <p className="text-aurora font-display text-[16.5vw] leading-[0.85] font-bold tracking-tighter opacity-90 select-none lg:text-[15.5rem]">
          CloudMajix
        </p>
      </Container>

      <Container className="relative flex flex-col gap-2 border-t border-white/8 py-6 text-xs text-fog sm:flex-row sm:justify-between">
        <p>
          &copy; <CopyrightYear /> {site.legalName}. All rights reserved.
        </p>
        <p>Designed and built in Canada by {site.name}.</p>
      </Container>
    </footer>
  );
}
