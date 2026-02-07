"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Product, ConditionTier, ProductColor } from "@/lib/products";

const TRADE_IN_PERCENT = 0.3;

type Props = {
  product: Product;
  initialConditionId?: string;
};

export function ProductDetailPanel({ product, initialConditionId }: Props) {
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
  const [selectedColorHex, setSelectedColorHex] = useState(
    product.colors[0]?.hex ?? ""
  );

  const selectedCondition = product.conditions.find(
    (c) => c.id === selectedConditionId
  ) as ConditionTier;
  const purchasePrice = selectedCondition?.price ?? 0;
  const tradeInValue = Math.round(purchasePrice * TRADE_IN_PERCENT);
  const netCost = purchasePrice - tradeInValue;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
        {product.name}
      </h1>
      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-[var(--reloos-yellow)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-zinc-700">
          {product.rating} ({product.reviewCount.toLocaleString()} reviews)
        </span>
      </div>
      <p className="text-3xl font-bold text-zinc-900">
        ${selectedCondition?.price.toLocaleString()}
      </p>

      {/* Color */}
      <div>
        <p className="mb-2 text-sm font-medium text-zinc-700">Color</p>
        <div className="flex gap-3">
          {product.colors.map((color: ProductColor) => (
            <button
              key={color.hex}
              type="button"
              onClick={() => setSelectedColorHex(color.hex)}
              className={`h-9 w-9 shrink-0 rounded-full border-2 transition ${
                selectedColorHex === color.hex
                  ? "border-[var(--reloos-yellow)] ring-2 ring-[var(--reloos-yellow)] ring-offset-2"
                  : "border-zinc-300 hover:border-zinc-400"
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <p className="mb-3 text-sm font-medium text-zinc-700">Condition</p>
        <div className="space-y-2">
          {product.conditions.map((condition) => (
            <button
              key={condition.id}
              type="button"
              onClick={() => setSelectedConditionId(condition.id)}
              className={`flex w-full items-start justify-between gap-4 rounded-xl border-2 p-4 text-left transition ${
                selectedConditionId === condition.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <div className="flex min-w-0 flex-1 items-start gap-3">
                {selectedConditionId === condition.id && (
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-900">
                      {condition.label}
                    </span>
                    {condition.bestValue && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                        Best Value
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-600">
                    {condition.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-semibold text-zinc-900">
                  ${condition.price.toLocaleString()}
                </span>
                {condition.showHelp && (
                  <button
                    type="button"
                    className="rounded p-1 text-zinc-400 hover:text-zinc-600"
                    aria-label="More info"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 011 1v1a1 1 0 11-2 0V8a1 1 0 011-1zm0 4a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Guaranteed Buyback */}
      <div className="rounded-xl bg-[var(--reloos-navy)] p-5 text-white">
        <h3 className="font-semibold">Guaranteed Buyback</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt>Purchase Price</dt>
            <dd>${purchasePrice.toLocaleString()}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Future Trade-in Value (30%)</dt>
            <dd className="font-medium text-emerald-400">+${tradeInValue.toLocaleString()}</dd>
          </div>
          <div className="flex justify-between border-t border-white/20 pt-2 font-semibold">
            <dt>Net Cost of Ownership</dt>
            <dd>${netCost.toLocaleString()}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-[var(--reloos-yellow)] py-3.5 text-base font-semibold text-zinc-900 transition hover:opacity-95"
      >
        Add to Cart
      </button>
    </div>
  );
}
