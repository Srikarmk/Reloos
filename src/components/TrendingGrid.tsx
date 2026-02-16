import Image from "next/image";
import Link from "next/link";

type TrendingProduct = {
  id: string;
  name: string;
  price: number;
  image: string | null;
  grayscale: boolean;
};

const PRODUCTS: TrendingProduct[] = [
  {
    id: "uppababy-vista-v3",
    name: "UPPAbaby VISTA V3",
    price: 649,
    image: "/header.jpg",
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
];

const CONDITION_LABELS = ["NEW", "LIKE NEW", "GOOD", "FAIR"] as const;

export function TrendingGrid() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold italic tracking-tight text-[var(--reloos-secondary-black)] md:text-4xl">
          TRENDING RIGHT NOW
        </h2>
        <p className="mt-2 text-zinc-600">
          The most loved gear by parents
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative aspect-[4/3] bg-zinc-100">
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
                <div className="border-t border-zinc-100 p-4">
                  <h3 className="font-semibold text-[var(--reloos-secondary-black)]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Available in:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CONDITION_LABELS.map((label) => (
                      <span
                        key={label}
                        className="rounded border border-zinc-300 bg-zinc-50 px-2 py-1 text-xs font-medium text-[var(--reloos-secondary-black)]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">
                    Starting at{" "}
                    <span className="font-bold text-[var(--reloos-secondary-black)]">
                      ${product.price}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
