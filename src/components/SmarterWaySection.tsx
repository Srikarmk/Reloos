const ITEMS = [
  {
    num: "01",
    title: "PICK YOUR CONDITION",
    description:
      "From Factory New to certified refurbished—choose the price point that works for you.",
  },
  {
    num: "02",
    title: "TOTAL USAGE SUPPORT",
    description:
      "Enjoy your gear with an included 1-year warranty and specialist safety certification.",
  },
  {
    num: "03",
    title: "SEAMLESS BUYBACK",
    description:
      "Done with your item? We pick it up and credit your account immediately. No marketplace hassle.",
  },
];

export function SmarterWaySection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            A smarter way
            <br />
            <span className="text-[var(--reloos-primary)]">to own gear.</span>
          </h2>
          <ul className="mt-10 space-y-8">
            {ITEMS.map((item) => (
              <li key={item.num} className="flex gap-6">
                <span className="text-lg font-medium text-zinc-500">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-400">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* Inner orbit: dotted, half visible. Outer orbit: solid, half visible. Electrons on outer. */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 200 200"
              fill="none"
            >
              {/* Inner orbit - dotted circle, light grey, ~50% visible */}
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 6"
                className="text-zinc-400 opacity-50"
              />
              {/* Outer orbit - solid circle, slightly darker grey, ~50% visible */}
              <circle
                cx="100"
                cy="100"
                r="98"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-zinc-500 opacity-50"
              />
            </svg>
            {/* Nucleus: dark teal circle with refresh icon */}
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F605A] text-[#81E0A4]">
              <svg
                className="h-10 w-10"
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
            </div>
            {/* Electron 1 (yellow) - glowing, orbits slowly on outer ring */}
            <div
              className="absolute inset-0 animate-orbit-slow"
              style={{ transformOrigin: "center center" }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400"
                style={{
                  transform: "translate(-50%, -50%) translateY(-122px)",
                  boxShadow:
                    "0 0 12px 3px rgba(251, 191, 36, 0.8), 0 0 24px 6px rgba(251, 191, 36, 0.4)",
                }}
              />
            </div>
            {/* Electron 2 (purple) - glowing, opposite phase, slow */}
            <div
              className="absolute inset-0 animate-orbit-slow-delayed"
              style={{ transformOrigin: "center center" }}
            >
              <div
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--reloos-secondary)]"
                style={{
                  transform: "translate(-50%, -50%) translateY(-122px)",
                  boxShadow:
                    "0 0 12px 3px rgba(220, 119, 255, 0.8), 0 0 24px 6px rgba(220, 119, 255, 0.4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
