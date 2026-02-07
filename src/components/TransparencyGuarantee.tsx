export function TransparencyGuarantee() {
  const cards = [
    {
      title: "Physical Inspection",
      bgClass: "bg-[var(--reloos-safety-bg)]",
      icon: (
        <svg
          className="h-8 w-8 text-[var(--reloos-safety-icon)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      items: [
        "All surfaces cleaned and sanitized",
        "Mesh inspected for tears or damage",
        "Frame checked for structural integrity",
      ],
    },
    {
      title: "Mechanical Testing",
      bgClass: "bg-[var(--reloos-buyback-bg)]",
      icon: (
        <svg
          className="h-8 w-8 text-[var(--reloos-buyback-icon)]"
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
      ),
      items: [
        "Motor runs silently without vibration",
        "All motion settings tested thoroughly",
        "Sound system clarity verified",
      ],
    },
    {
      title: "Safety Certification",
      bgClass: "bg-[var(--reloos-pickup-bg)]",
      icon: (
        <svg
          className="h-8 w-8 text-[var(--reloos-pickup-icon)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      items: [
        "Meets all current safety standards",
        "No recalls or safety issues",
        "Certified by third-party inspector",
      ],
    },
  ];

  return (
    <section className="border-t border-zinc-200 bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          Transparency Guarantee
        </h2>
        <p className="mt-2 text-zinc-600">
          Every item undergoes rigorous inspection.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div
                className={`flex h-24 items-center justify-center ${card.bgClass}`}
              >
                {card.icon}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900">{card.title}</h3>
                <ul className="mt-3 space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
