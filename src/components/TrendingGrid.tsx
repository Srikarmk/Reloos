import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "uppababy-vista-v3",
    name: "UPPAbaby VISTA V3",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop",
    grayscale: true,
  },
  {
    id: "snoo-smart-sleeper",
    name: "SNOO Smart Sleeper",
    price: 995,
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop",
    grayscale: false,
  },
  {
    id: "nuna-pipa-lite-lx",
    name: "Nuna PIPA Lite LX",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop",
    grayscale: false,
  },
  {
    id: "doona-stroller",
    name: "Doona Stroller",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop",
    grayscale: true,
  },
] as const;

const CONDITION_BUTTONS = [
  { label: "New", conditionId: "brand-new", className: "bg-blue-500 text-white hover:bg-blue-600" },
  { label: "Like New", conditionId: "like-new", className: "bg-emerald-500 text-white hover:bg-emerald-600" },
  { label: "Good", conditionId: "good", className: "bg-amber-500 text-white hover:bg-amber-600" },
] as const;

export function TrendingGrid() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Trending Right Now
        </h2>
        <p className="mt-2 text-center text-zinc-500">
          The most loved gear by parents
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-zinc-50 shadow-sm transition hover:shadow-md"
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative aspect-[4/3] bg-zinc-200">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-cover transition group-hover:scale-[1.02] ${product.grayscale ? "grayscale" : ""}`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-zinc-200 text-zinc-400">
                      <span className="text-sm font-medium">{product.name}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-zinc-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Starting from{" "}
                    <span className="font-semibold text-emerald-600">
                      ${product.price}
                    </span>
                  </p>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 px-4 pb-4">
                {CONDITION_BUTTONS.map((btn) => (
                  <Link
                    key={btn.label}
                    href={`/shop/${product.id}?condition=${btn.conditionId}`}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${btn.className}`}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
