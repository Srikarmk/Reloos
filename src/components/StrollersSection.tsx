import { MVP_IMAGES } from "@/lib/mvp-images";
import Image from "next/image";
import Link from "next/link";

const CONDITION_LABELS = ["NEW", "LIKE NEW", "GOOD", "FAIR"] as const;

const STROLLERS = [
  {
    id: "uppababy-vista-v3",
    name: "UPPAbaby VISTA V3",
    price: 499,
    image: MVP_IMAGES.vistaGallery[0], // 0303-VSO-JKE_1-1_(1).webp
  },
  {
    id: "bugaboo-butterfly-2",
    name: "Bugaboo Butterfly 2 travel stroller",
    price: 249,
    image: MVP_IMAGES.bugabooGallery[0], // imgi_33_... heritage black
  },
  {
    id: "minu-v3",
    name: "Minu® V3",
    price: 249,
    image: MVP_IMAGES.minuV3, // 0803-MIN-NA-JKE_1-1.webp
  },
];

export function StrollersSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
              New & Refurbished
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--reloos-secondary-black)] md:text-4xl">
              STROLLERS
            </h2>
            <p className="mt-1 text-zinc-600">
              Smooth rides for every terrain.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline md:mt-0"
          >
            View all Strollers
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STROLLERS.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
            >
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-center p-4 transition group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="border-t border-zinc-100 p-4">
                  <h3 className="font-semibold text-blue-700">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
                    Available in:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CONDITION_LABELS.map((label, i) => (
                      <span
                        key={label}
                        className={`rounded border px-2 py-1 text-xs font-medium ${
                          i === 0
                            ? "border-blue-600 bg-white text-blue-600"
                            : "border-zinc-300 bg-white text-zinc-600"
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">
                    Starting at{" "}
                    <span className="text-lg font-bold text-[var(--reloos-secondary-black)]">
                      ${product.price}
                    </span>
                  </p>
                </div>
              </Link>
              <div className="flex justify-end p-3">
                <Link
                  href={`/shop/${product.id}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white transition hover:bg-blue-800"
                  aria-label="View product"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
