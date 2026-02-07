import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { HelpButton } from "@/components/HelpButton";
import { ProductDetailPanel } from "@/components/ProductDetailPanel";
import { ProductGuarantees } from "@/components/ProductGuarantees";
import { TransparencyGuarantee } from "@/components/TransparencyGuarantee";
import { getProduct } from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ condition?: string }>;
};

export async function generateStaticParams() {
  const { getAllProductIds } = await import("@/lib/products");
  return getAllProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Reloos`,
    description: `Buy ${product.name} with guaranteed buyback. Choose your condition and get 30% credit when you return.`,
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { condition: conditionFromUrl } = await searchParams;
  const product = getProduct(id);
  if (!product) notFound();

  const validConditionId =
    conditionFromUrl &&
    product.conditions.some((c) => c.id === conditionFromUrl)
      ? conditionFromUrl
      : undefined;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Product layout: image left, info right */}
        <section className="border-b border-zinc-200 px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-[var(--reloos-yellow)] bg-zinc-100">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="5rem"
                  />
                </div>
              </div>
            </div>
            <div className="lg:py-2">
              <ProductDetailPanel product={product} initialConditionId={validConditionId} />
            </div>
          </div>
        </section>

        <ProductGuarantees />
        <TransparencyGuarantee />
      </main>
      <HelpButton />
    </>
  );
}
