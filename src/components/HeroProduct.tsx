"use client";

import { MVP_IMAGES } from "@/lib/mvp-images";
import Image from "next/image";
import Link from "next/link";

const HERO_PRODUCT_ID = "uppababy-vista-v3";

const CONDITIONS: Array<{
  label: string;
  sub: string;
  price: number;
  conditionId: string;
  bestValue?: boolean;
}> = [
  { label: "New", sub: "Factory sealed", price: 999, conditionId: "brand-new" },
  { label: "Like New", sub: "Minimal signs of use", price: 799, conditionId: "like-new", bestValue: true },
  { label: "Good", sub: "Some visible wear", price: 649, conditionId: "good" },
  { label: "Fair", sub: "Noticeable wear", price: 499, conditionId: "fair" },
];

export function HeroProduct() {
  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl min-h-[75vh] md:min-h-[80vh] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2),0_16px_40px_-12px_rgba(0,0,0,0.15)]">
        {/* Background image - park / mother & baby with stroller */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[100%] w-[120%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={MVP_IMAGES.vistaHero}
              alt=""
              fill
              className="object-cover object-[center_28%]"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          {/* Dark semi-transparent overlay on left ~two-thirds so right third shows the photo */}
          <div
            className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-zinc-900/85 via-zinc-900/60 to-transparent"
            aria-hidden
          />
        </div>

        {/* Content on the left over the overlay */}
        <div className="relative flex min-h-[75vh] md:min-h-[80vh] flex-col justify-end p-6 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              BUY IT.
              <br />
              USE IT.
              <br />
              <span className="text-[var(--reloos-primary)]">RETURN IT.</span>
            </h1>
            <p className="mb-6 text-xl text-white">
              UPPAbaby VISTA V3 — Pick your condition:
            </p>

            {/* Feature pills - white text, light borders, colored icons */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-400 bg-sky-500/20 text-white">
                  <span className="text-xs font-bold">1</span>
                </span>
                1-Year Warranty
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Disinfected
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <svg className="h-6 w-6 text-[var(--reloos-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                30% Buyback
              </span>
            </div>

            {/* Condition rows - dark semi-transparent, price on right */}
            <div className="space-y-2">
              {CONDITIONS.map(({ label, sub, price, conditionId, bestValue }) => (
                <Link
                  key={label}
                  href={`/shop/${HERO_PRODUCT_ID}?condition=${conditionId}`}
                  className="flex items-center justify-between gap-4 rounded-xl bg-black/30 px-4 py-3 shadow-md backdrop-blur-sm transition hover:bg-black/40"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div>
                      <span className="font-semibold text-white">{label}</span>
                      {bestValue && (
                        <span className="ml-2 rounded bg-[var(--reloos-primary)] px-2.5 py-0.5 text-xs font-bold text-[var(--reloos-secondary-black)]">
                          BEST VALUE
                        </span>
                      )}
                      <p className="text-sm text-white/85">{sub}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-[var(--reloos-primary)]">
                    ${price}
                  </span>
                </Link>
              ))}
            </div>

            {/* Guaranteed Buyback - solid yellow, dark grey icon */}
            <div className="mt-6 flex items-start gap-4 rounded-xl bg-[var(--reloos-primary)] p-4 shadow-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-700 text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-[var(--reloos-secondary-black)]">
                  Guaranteed Buyback
                </p>
                <p className="mt-0.5 text-sm text-[var(--reloos-secondary-black)]/90">
                  Get 20-30% back in value when you return it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
