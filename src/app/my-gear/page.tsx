import { Header } from "@/components/Header";
import Link from "next/link";

export default function MyGearPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--reloos-secondary-black)]">
            My Gear
          </h1>
          <p className="mt-4 text-zinc-600">
            You don&apos;t have any gear yet. Items you buy or add will show up here.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-[var(--reloos-primary)] px-6 py-3 font-semibold text-[var(--reloos-secondary-black)] transition hover:opacity-90"
          >
            Shop gear
          </Link>
        </div>
      </main>
    </>
  );
}
