import { MVP_IMAGES } from "@/lib/mvp-images";
import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    slug: "strollers",
    title: "STROLLERS",
    subtitle: "Smooth rides for every terrain.",
    image: MVP_IMAGES.collectionsStrollers,
    tag: "NEW & REFURBISHED",
  },
  {
    slug: "bassinets",
    title: "BASSINETS",
    subtitle: "Dreamy sleep spaces for newborns.",
    image: MVP_IMAGES.collectionsBassinets,
    tag: "NEW & REFURBISHED",
  },
  {
    slug: "carriers",
    title: "CARRIERS",
    subtitle: "Hands-free comfort for you and baby.",
    image: MVP_IMAGES.collectionsCarriers,
    tag: "NEW & REFURBISHED",
  },
  {
    slug: "baby-monitors",
    title: "BABY MONITORS",
    subtitle: "Peace of mind while they sleep.",
    image: MVP_IMAGES.collectionsBabyMonitors,
    tag: "NEW & REFURBISHED",
  },
] as const;

export function ShopCollections() {
  return (
    <section className="bg-[#F7F7F7] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold italic tracking-tight text-[var(--reloos-secondary-black)] md:text-4xl">
              SHOP COLLECTIONS
            </h2>
            <p className="mt-1 text-[var(--reloos-secondary-black)]/70">
              Curated high-end gear for every parenting milestone.
            </p>
          </div>
          <Link
            href="/"
            className="mt-4 border-b-2 border-[var(--reloos-primary)] pb-0.5 font-medium text-[var(--reloos-secondary-black)] hover:opacity-80 md:mt-0"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.slug}
              href={`/?collection=${col.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[var(--reloos-primary)] p-6 transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold italic tracking-tight text-[var(--reloos-secondary-black)]">
                {col.title}
              </h3>
              <div className="relative mt-4 flex min-h-[180px] flex-1 items-end justify-center">
                <Image
                  src={col.image}
                  alt={col.title}
                  width={280}
                  height={200}
                  className="collection-card-img object-contain object-bottom transition group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
