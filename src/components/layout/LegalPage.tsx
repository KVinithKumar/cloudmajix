import type { ReactNode } from "react";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { PageTransition } from "@/components/motion/PageTransition";

/** Shared layout and readable typography for Privacy Policy and Terms pages. */
export function LegalPage({ title, path, intro, children }: { title: string; path: string; intro: string; children: ReactNode }) {
  return (
    <PageTransition>
      <PageHeader eyebrow="Legal" title={title} intro={intro} crumbs={[{ href: path, label: title }]} />
      <section className="pb-24">
        <Container>
          <article
            className={[
              "max-w-3xl text-[1.05rem] leading-relaxed text-mist",
              "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-snow",
              "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-snow",
              "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:marker:text-lime",
              "[&_a]:text-lime [&_a]:underline-offset-4 [&_a:hover]:underline [&_strong]:text-snow",
            ].join(" ")}
          >
            <p className="rounded-2xl border border-white/8 bg-ink-900/70 px-5 py-4 text-sm">
              Last updated: <strong>{site.legal.lastUpdated}</strong>
            </p>
            {children}
          </article>
        </Container>
      </section>
    </PageTransition>
  );
}
