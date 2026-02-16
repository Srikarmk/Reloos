import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { InspectConditionSection } from "@/components/InspectConditionSection";
import { ProductDetailPanel } from "@/components/ProductDetailPanel";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ReloosPromiseSection } from "@/components/ReloosPromiseSection";
import { getProductGalleryImages } from "@/lib/mvp-images";
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
    description: `Buy ${product.name} with guaranteed buyback. Choose your condition and get 20-30% back when you return.`,
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

  const images = getProductGalleryImages(product.id, product.image);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="border-b border-zinc-200 px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-8 inline-block text-sm font-medium text-zinc-500 hover:text-[var(--reloos-secondary-black)]"
            >
              &larr; Back to collections
            </Link>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <ProductImageGallery images={images} productName={product.name} />
              <div className="lg:py-2">
                <ProductDetailPanel
                  product={product}
                  initialConditionId={validConditionId}
                  category="STROLLERS"
                />
              </div>
            </div>
          </div>
        </section>

        <InspectConditionSection product={product} />
        <ReloosPromiseSection />
      </main>
    </>
  );
}
