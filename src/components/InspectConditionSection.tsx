"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Product, ConditionTier } from "@/lib/products";

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

function getConditionDisplayDescription(id: string): string {
  const overrides: Record<string, string> = {
    "brand-new": "Factory sealed and never opened.",
    "like-new": "Pristine condition with minimal signs of handling.",
    "good": "Pre-loved, well-cared for, and ready for more.",
    "fair": "Visible wear, but works like a charm.",
  };
  return overrides[id] ?? "";
}

type Props = {
  product: Product;
};

export function InspectConditionSection({ product }: Props) {
  const searchParams = useSearchParams();
  const conditionFromUrl = searchParams.get("condition");
  const validFromUrl =
    conditionFromUrl &&
    product.conditions.some((c) => c.id === conditionFromUrl)
      ? conditionFromUrl
      : null;
  const defaultId =
    validFromUrl ??
    product.conditions.find((c) => c.bestValue)?.id ??
    product.conditions[0].id;

  const [selectedConditionId, setSelectedConditionId] = useState(defaultId);

  useEffect(() => {
    if (validFromUrl) setSelectedConditionId(validFromUrl);
  }, [validFromUrl]);

  const conditionsOrdered = [...product.conditions].sort((a, b) => a.price - b.price);

  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-[var(--reloos-secondary-black)] md:text-3xl">
          Inspect the condition
        </h2>
        <p className="mt-2 text-center text-zinc-600">
          See exactly what you&apos;re getting. No surprises.
        </p>
        <p className="mt-2 text-center text-xs italic text-zinc-500">
          *Images are examples of wear and may show a different model. Actual
          imperfections on your specific item may vary slightly.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-2">
            {conditionsOrdered.map((condition) => {
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
                          {getConditionDisplayDescription(condition.id)}
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
      </div>
    </section>
  );
}
