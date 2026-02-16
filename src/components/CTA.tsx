import Link from "next/link";

export function CTA() {
  return (
    <>
      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-[var(--reloos-primary)] px-8 py-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--reloos-secondary-black)] md:text-3xl">
              Didn&apos;t find what you were looking for?
            </h2>
            <p className="mt-4 text-[var(--reloos-secondary-black)]/90">
              Leave us a message and we will find it for you, or schedule a call
              with our gear experts.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--reloos-secondary-black)] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Find it for me
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--reloos-secondary-black)] bg-white px-6 py-3.5 font-semibold text-[var(--reloos-secondary-black)] transition hover:bg-zinc-50"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
