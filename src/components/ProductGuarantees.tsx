export function ProductGuarantees() {
  const cards = [
    {
      title: "Safety Certified",
      description:
        "Every item undergoes rigorous safety inspections and meets all regulatory standards",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      bgClass: "bg-indigo-600",
    },
    {
      title: "Professionally Disinfected",
      description:
        "Hospital-grade cleaning and sanitization process for your peace of mind",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      bgClass: "bg-emerald-500",
    },
    {
      title: "Warranty Included",
      description:
        "All purchases include warranty coverage based on condition tier",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgClass: "bg-blue-600",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${card.bgClass}`}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-zinc-900">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
