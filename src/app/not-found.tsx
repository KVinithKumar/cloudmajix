import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden pt-28 pb-16">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div aria-hidden="true" className="animate-aurora absolute top-1/4 left-1/4 -z-10 h-[50vmax] w-[50vmax] rounded-full bg-aurora-violet/25 blur-[120px]" />

      <Container className="text-center">
        <p aria-hidden="true" className="animate-float text-aurora font-display text-[clamp(7rem,28vw,16rem)] leading-none font-bold tracking-tighter">
          404
        </p>
        <h1 className="animate-fade-up mt-4 text-3xl font-bold sm:text-5xl">This page drifted off into the northern lights.</h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-lg text-lg text-mist [--delay:0.15s]">
          The link may be old or mistyped. Let&rsquo;s get you back on track.
        </p>
        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row [--delay:0.3s]">
          <ButtonLink href="/" size="lg">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" /> Back home
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Explore services <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
