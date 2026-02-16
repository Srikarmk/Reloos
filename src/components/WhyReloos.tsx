export function WhyReloos() {
  const cards = [
    {
      title: "SAFETY SPECIALIST",
      titleLine2: "INSPECTED",
      description:
        "Recalls checked and structural integrity verified for your peace of mind.",
      icon: (
        <svg
          className="h-12 w-12 text-sky-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.5m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      title: "MEDICAL-GRADE",
      titleLine2: "DISINFECTION",
      description:
        "Sanitized using our proprietary high-heat process to ensure every item is like-new.",
      icon: (
        <svg
          className="h-12 w-12 text-[var(--reloos-secondary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      title: "TOTAL PROTECTION",
      titleLine2: "",
      description:
        "A full 1-Year Warranty is standard on both new and refurbished equipment.",
      icon: (
        <svg
          className="h-12 w-12 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F7F7F7] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex justify-center">
                {card.icon}
              </div>
              <h3 className="text-center text-xl font-bold italic tracking-tight text-[var(--reloos-secondary-black)] md:text-2xl">
                {card.title}
                {card.titleLine2 && (
                  <>
                    <br />
                    {card.titleLine2}
                  </>
                )}
              </h3>
              <p className="mt-4 text-center text-sm text-zinc-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
