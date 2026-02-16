"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Product, ConditionTier } from "@/lib/products";

const BUYBACK_MIN = 0.2;
const BUYBACK_MAX = 0.3;

const CONDITION_TAGS: Record<string, string[]> = {
  "like-new": ["1-Year Reloop Warranty", "Safety Certified", "Deep Cleaned"],
};

function getConditionDisplayLabel(label: string): string {
  const map: Record<string, string> = {
    "Brand New": "BRAND NEW",
    "Like New": "LIKE NEW",
    "Good Condition": "GOOD",
    "Fair Condition": "FAIR",
  };
  return map[label] ?? label.toUpperCase();
}

function getConditionDisplayDescription(id: string, description: string): string {
  const overrides: Record<string, string> = {
    "brand-new": "Factory sealed and never opened.",
    "like-new": "Pristine condition with minimal signs of handling.",
    "good": "Pre-loved, well-cared for, and ready for more.",
    "fair": "Visible wear, but works like a charm.",
  };
  return overrides[id] ?? description;
}

type Props = {
  product: Product;
  initialConditionId?: string;
  category?: string;
};

export function ProductDetailPanel({ product, initialConditionId, category = "STROLLERS" }: Props) {
  const searchParams = useSearchParams();
  const conditionFromUrl = searchParams.get("condition");
  const validFromUrl =
    conditionFromUrl &&
    product.conditions.some((c) => c.id === conditionFromUrl)
      ? conditionFromUrl
      : null;
  const defaultId =
    validFromUrl ??
    initialConditionId ??
    product.conditions.find((c) => c.bestValue)?.id ??
    product.conditions[0].id;

  const [selectedConditionId, setSelectedConditionId] = useState(defaultId);

  useEffect(() => {
    if (validFromUrl && validFromUrl !== selectedConditionId) {
      setSelectedConditionId(validFromUrl);
    }
  }, [validFromUrl, selectedConditionId]);

  const selectedCondition = product.conditions.find(
    (c) => c.id === selectedConditionId
  ) as ConditionTier | undefined;
  const purchasePrice = selectedCondition?.price ?? 0;
  const buybackMin = Math.round(purchasePrice * BUYBACK_MIN);
  const buybackMax = Math.round(purchasePrice * BUYBACK_MAX);
  const buybackMid = Math.round((buybackMin + buybackMax) / 2);
  const netCost = purchasePrice - buybackMid;

  return (
    <div className="space-y-6">
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
        {category}
      </p>
      <h1 className="text-2xl font-bold uppercase tracking-tight text-[var(--reloos-secondary-black)] md:text-3xl">
        {product.name.toUpperCase()}
      </h1>
      <p className="text-3xl font-bold text-[var(--reloos-secondary-black)]">
        ${purchasePrice.toLocaleString()}
      </p>

      {/* Guaranteed Buyback - purple gradient */}
      <div
        className="rounded-2xl p-5 text-white"
        style={{
          background: "linear-gradient(135deg, #b84dd4 0%, #9c3dbb 100%)",
        }}
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/80 bg-transparent">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-bold">GUARANTEED BUYBACK</h3>
            <p className="mt-1 text-sm text-white/95">
              Use it, then sell it back. We&apos;ll pay you:
            </p>
            <p className="mt-2 text-2xl font-bold">
              ${buybackMin} – ${buybackMax}
            </p>
            <p className="mt-1 text-xs text-white/80">
              No exceptions on return condition.
            </p>
          </div>
        </div>
      </div>

      {/* Select condition */}
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
          Select condition
        </p>
        <div className="space-y-2">
          {product.conditions.map((condition) => {
            const isSelected = selectedConditionId === condition.id;
            const tags = CONDITION_TAGS[condition.id];
            return (
              <button
                key={condition.id}
                type="button"
                onClick={() => setSelectedConditionId(condition.id)}
                className={`w-full rounded-xl border-2 p-4 text-left transition ${
                  isSelected
                    ? "border-[var(--reloos-secondary-black)] bg-zinc-50"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-[var(--reloos-secondary-black)] bg-[var(--reloos-secondary-black)]"
                          : "border-zinc-300"
                      }`}
                    >
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    <div>
                      <p className="font-bold text-[var(--reloos-secondary-black)]">
                        {getConditionDisplayLabel(condition.label)}
                      </p>
                      <p className="mt-0.5 text-sm text-zinc-600">
                        {getConditionDisplayDescription(
                          condition.id,
                          condition.description
                        )}
                      </p>
                      {tags && isSelected && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-zinc-200 px-2.5 py-1 text-xs font-medium text-[var(--reloos-secondary-black)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 font-bold text-[var(--reloos-secondary-black)]">
                    ${condition.price.toLocaleString()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Smart Ownership Calculator - light yellow */}
      <div className="rounded-2xl bg-[var(--reloos-primary)] p-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--reloos-secondary-black)]">
          Smart ownership calculator
        </h3>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-[var(--reloos-secondary-black)]/80">Price today</dt>
            <dd className="font-semibold text-[var(--reloos-secondary-black)]">
              ${purchasePrice.toLocaleString()}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[var(--reloos-secondary-black)]/80">Future buyback value</dt>
            <dd className="font-semibold text-[var(--reloos-secondary-black)]">
              -${buybackMid.toLocaleString()}
            </dd>
          </div>
          <div className="flex items-baseline justify-between border-t border-[var(--reloos-secondary-black)]/20 pt-3">
            <dt className="text-base font-bold text-[var(--reloos-secondary-black)]">
              Real cost
            </dt>
            <dd className="text-xl font-bold text-[var(--reloos-secondary-black)]">
              ${netCost.toLocaleString()}
            </dd>
          </div>
          <p className="text-right text-xs font-medium text-[var(--reloos-secondary-black)]/70">
            Net cost
          </p>
        </dl>
      </div>

      {/* Add to cart + Buy now */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-xl bg-[var(--reloos-secondary-black)] py-3.5 font-semibold text-white transition hover:opacity-90"
        >
          Add to cart
        </button>
        <button
          type="button"
          className="rounded p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
          aria-label="Add to wishlist"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <button
        type="button"
        className="w-full rounded-xl bg-[var(--reloos-primary)] py-3.5 font-semibold text-[var(--reloos-secondary-black)] transition hover:opacity-90"
      >
        Buy now
      </button>
      <p className="text-center text-xs text-zinc-500">
        FREE SHIPPING · 30-DAY RETURNS · 1-YEAR WARRANTY
      </p>
    </div>
  );
}
