export function ReloosPromiseSection() {
  const cards = [
    {
      title: "SAFETY FIRST",
      description:
        "Checked against national recall databases. Structural integrity verified. If it's not safe enough for our kids, we won't sell it to yours.",
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
      title: "REFURBISHED & ULTRA CLEAN",
      description:
        "Fully serviced and sanitized. We repair or replace parts to ensure your gear works like new, then deep-clean every inch. You get total safety and a fresh start without the \"used\" feel.",
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
      title: "RETURN ANYTIME",
      description:
        "Done with it? Scan the QR code on your item and schedule a pickup. We'll give you cash or credit for your next stage.",
      icon: (
        <svg
          className="h-12 w-12 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F8F8F8] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-[var(--reloos-secondary-black)] md:text-4xl">
          THE <span className="text-[var(--reloos-secondary)]">RELOOS</span> PROMISE.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
          We deep-clean, safety-check, and professionally restore every piece of
          gear to its original glory. You get the &quot;new gear&quot; confidence
          without the &quot;new gear&quot; price tag.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-center font-bold uppercase tracking-tight text-[var(--reloos-secondary-black)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
