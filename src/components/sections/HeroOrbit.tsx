import type { CSSProperties, ReactNode } from "react";
import { CalendarCheck, CreditCard } from "lucide-react";
import { services } from "@/content/services";
import { LogoMark } from "@/components/ui/Logo";

/**
 * Decorative hero visual: service icons orbiting the CloudMajix mark,
 * with two floating UI cards. Pure CSS animation, no JavaScript.
 */
const innerOrbit = services.slice(0, 4);
const outerOrbit = services.slice(4);

function OrbitChip({ angle, radius, children }: { angle: number; radius: string; children: ReactNode }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -mt-6 -ml-6 h-12 w-12 sm:-mt-7 sm:-ml-7 sm:h-14 sm:w-14"
      style={{ transform: `rotate(${angle}deg) translateX(${radius}) rotate(${-angle}deg)` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function HeroOrbit() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[min(88vw,520px)] select-none">
      {/* Rings */}
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/12" />
      <div className="absolute inset-0 rounded-full border border-white/8" />
      <div className="absolute inset-[34%] rounded-full bg-aurora-violet/25 blur-3xl" />

      {/* Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-float">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-[28px] bg-aurora-cyan/20 [animation-duration:3s]" />
            <LogoMark className="relative h-24 w-24 drop-shadow-[0_0_40px_rgb(34_211_238/0.45)] sm:h-28 sm:w-28" />
          </div>
        </div>
      </div>

      {/* Inner orbit */}
      <div className="animate-spin-slow absolute inset-0">
        {innerOrbit.map((service, index) => {
          const Icon = service.icon;
          return (
            <OrbitChip key={service.slug} angle={index * 90 + 20} radius="min(32vw,166px)">
              <div className="animate-spin-slow-reverse glass flex h-full w-full items-center justify-center rounded-2xl text-aurora-cyan">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </OrbitChip>
          );
        })}
      </div>

      {/* Outer orbit */}
      <div className="animate-spin-slow-reverse absolute inset-0 [animation-duration:60s]">
        {outerOrbit.map((service, index) => {
          const Icon = service.icon;
          return (
            <OrbitChip key={service.slug} angle={index * (360 / outerOrbit.length)} radius="min(42vw,250px)">
              <div className="animate-spin-slow glass flex h-full w-full items-center justify-center rounded-2xl text-aurora-mint [animation-duration:60s]">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </OrbitChip>
          );
        })}
      </div>

      {/* Floating UI cards (illustrations of what we build) */}
      <div className="animate-float glass absolute top-[6%] -left-[4%] hidden rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 sm:block [animation-delay:-2s]">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora-mint/15 text-aurora-mint">
            <CalendarCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-fog">AI receptionist</p>
            <p className="text-sm font-semibold">Appointment booked</p>
          </div>
        </div>
      </div>
      <div className="animate-float glass absolute -right-[2%] bottom-[8%] hidden rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 sm:block [animation-delay:-4s]">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/15 text-lime">
            <CreditCard className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-fog">Invoice paid</p>
            <p className="text-sm font-semibold tabular-nums">$1,250.00 CAD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
