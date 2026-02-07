"use client";

import Image from "next/image";
import Link from "next/link";

const HERO_PRODUCT_ID = "uppababy-vista-v3";

const CONDITIONS = [
  { label: "New", price: 999, conditionId: "brand-new" },
  { label: "Like New", price: 799, conditionId: "like-new" },
  { label: "Good", price: 649, conditionId: "good" },
  { label: "Fair", price: 499, conditionId: "fair" },
] as const;

export function HeroProduct() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-zinc-900/50" />
      </div>
      <div className="relative flex min-h-[70vh] flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16">
        <Link
          href={`/shop/${HERO_PRODUCT_ID}`}
          className="mb-2 text-4xl font-bold tracking-tight text-white drop-shadow hover:underline md:text-5xl lg:text-6xl"
        >
          UPPAbaby VISTA V3
        </Link>
        <p className="mb-6 text-lg text-white/90">Pick condition you want</p>
        <div className="mb-8 flex flex-wrap gap-3">
          {CONDITIONS.map(({ label, price, conditionId }) => (
            <Link
              key={label}
              href={`/shop/${HERO_PRODUCT_ID}?condition=${conditionId}`}
              className="rounded-lg px-6 py-3 text-base font-semibold transition-all bg-[var(--reloos-yellow)]/90 text-zinc-900 hover:bg-[var(--reloos-yellow)]"
            >
              {label} — £{price}
            </Link>
          ))}
        </div>
        <div className="max-w-md rounded-xl bg-white/95 px-5 py-4 text-zinc-800 shadow-lg backdrop-blur">
          <p className="text-sm md:text-base">
            Return when no longer needed and get{" "}
            <strong className="font-bold">30% credit</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
