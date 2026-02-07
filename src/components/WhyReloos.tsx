export function WhyReloos() {
  const cards = [
    {
      title: "Safety First",
      description:
        "Every item is professionally inspected and certified to meet the highest safety standards",
      bgClass: "bg-[var(--reloos-safety-bg)]",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--reloos-safety-icon)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Guaranteed Buyback",
      description:
        "We buy back your gear when you're done — reducing your cost and environmental impact",
      bgClass: "bg-[var(--reloos-buyback-bg)]",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--reloos-buyback-icon)]"
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
    },
    {
      title: "Free Pickup",
      description:
        "Complimentary white-glove pickup and delivery service for all trade-ins and purchases",
      bgClass: "bg-[var(--reloos-pickup-bg)]",
      icon: (
        <svg
          className="h-10 w-10 text-[var(--reloos-pickup-icon)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1h9M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Why Parents Love Reloos
        </h2>
        <p className="mt-2 text-center text-zinc-500">
          Making parenting more affordable and sustainable
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-sm ${card.bgClass}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-center text-lg font-bold text-zinc-900">
                {card.title}
              </h3>
              <p className="mt-2 text-center text-sm text-zinc-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
