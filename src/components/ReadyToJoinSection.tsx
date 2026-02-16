import Link from "next/link";

export function ReadyToJoinSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold italic tracking-tight text-[var(--reloos-secondary-black)] md:text-4xl lg:text-5xl">
          READY TO JOIN
          <br />
          THE <span className="text-[var(--reloos-secondary)]">LOOP?</span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-xl bg-[var(--reloos-secondary-black)] px-8 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:opacity-90 sm:w-auto"
          >
            Start Shopping
          </Link>
          <Link
            href="/how-it-works"
            className="w-full text-center font-medium italic text-[var(--reloos-secondary-black)] hover:underline sm:w-auto"
          >
            Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
