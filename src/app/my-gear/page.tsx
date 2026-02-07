import Image from "next/image";
import { Header } from "@/components/Header";
import { HelpButton } from "@/components/HelpButton";

const MOCK_GEAR = [
  {
    id: "doona-stroller",
    name: "Doona Stroller",
    purchasedDate: "6/14/2025",
    tradeInValue: 99,
    condition: "Like New",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=400&auto=format&fit=crop",
  },
];

export default function MyGearPage() {
  const totalValue = MOCK_GEAR.reduce((sum, item) => sum + item.tradeInValue, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-100 px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          {/* Total Asset Value card */}
          <section className="rounded-2xl bg-[var(--reloos-navy)] p-6 shadow-lg md:p-8">
            <p className="text-sm font-medium text-white/80">Total Asset Value</p>
            <p className="mt-2 text-4xl font-bold text-white md:text-5xl">
              ${totalValue}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-[var(--reloos-yellow)] px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:opacity-95"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add Outside Gear
              </button>
              <button
                type="button"
                className="rounded-lg bg-[var(--reloos-yellow)] px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:opacity-95"
              >
                Trade-In All
              </button>
            </div>
          </section>

          {/* My Gear heading */}
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            My Gear
          </h2>

          {/* Gear list */}
          <ul className="mt-6 space-y-4">
            {MOCK_GEAR.map((item) => (
              <li
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 w-full shrink-0 sm:h-40 sm:w-40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 640px) 100vw, 10rem"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-zinc-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                          <svg
                            className="h-4 w-4 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Purchased {item.purchasedDate}
                        </p>
                        <p className="mt-2 text-sm text-zinc-600">
                          Current Trade-In Value{" "}
                          <span className="text-lg font-semibold text-emerald-600">
                            ${item.tradeInValue}
                          </span>
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[var(--tag-like-new)] px-3 py-1 text-xs font-medium text-zinc-800">
                        {item.condition}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-lg bg-[var(--reloos-yellow)] px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:opacity-95"
                      >
                        Get Quote
                      </button>
                      <button
                        type="button"
                        className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100"
                        aria-label="Scan"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <HelpButton />
    </>
  );
}
