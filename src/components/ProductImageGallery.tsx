"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  productName: string;
};

export function ProductImageGallery({ images, productName }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex] ?? images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={currentImage}
          alt={productName}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <button
          type="button"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-600 shadow hover:bg-white"
          aria-label="Previous image"
          onClick={() =>
            setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1))
          }
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-600 shadow hover:bg-white"
          aria-label="Next image"
          onClick={() =>
            setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1))
          }
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-100 transition ${
              selectedIndex === i
                ? "ring-2 ring-[var(--reloos-secondary-black)] ring-offset-2"
                : "hover:opacity-80"
            }`}
          >
            <Image
              src={src}
              alt={`${productName} view ${i + 1}`}
              fill
              className="object-cover"
              sizes="5rem"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
