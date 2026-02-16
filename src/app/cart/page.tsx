"use client";

import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function CartPage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white px-4 py-16 md:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-bold text-[var(--reloos-secondary-black)]">
              Your cart
            </h1>
            <p className="mt-4 text-zinc-600">
              Log in to view your cart.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block rounded-xl bg-[var(--reloos-secondary-black)] px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Log in
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--reloos-secondary-black)]">
            Your cart
          </h1>
          <p className="mt-2 text-zinc-600">
            Your cart is empty.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-[var(--reloos-primary)] px-6 py-3 font-semibold text-[var(--reloos-secondary-black)] hover:opacity-90"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    </>
  );
}
