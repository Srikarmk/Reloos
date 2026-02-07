import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[var(--reloos-navy)] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to Start Your Reloos Journey?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Join thousands of parents who are saving money while making
          sustainable choices
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-lg bg-[var(--reloos-yellow)] px-8 py-3.5 text-center font-semibold text-zinc-900 transition hover:opacity-95 sm:w-auto"
          >
            Browse All Gear
          </Link>
          <Link
            href="/how-it-works"
            className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-center font-semibold text-[var(--reloos-yellow-light)] transition hover:bg-white/10 sm:w-auto"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
