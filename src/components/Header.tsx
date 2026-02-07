"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isMyGear = pathname === "/my-gear";

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--reloos-yellow)]">
          <svg
            className="h-5 w-5 text-[var(--reloos-navy)]"
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
        </span>
        <span className="text-xl font-semibold tracking-tight text-zinc-900">
          Reloos
        </span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className={`text-sm font-medium ${pathname === "/" ? "text-zinc-900 underline underline-offset-4" : "text-zinc-600 hover:text-zinc-900"}`}
        >
          Shop
        </Link>
        <Link
          href="/my-gear"
          className={`text-sm font-medium ${isMyGear ? "text-zinc-900 underline underline-offset-4" : "text-zinc-600 hover:text-zinc-900"}`}
        >
          My Gear
        </Link>
        <button
          type="button"
          className="rounded p-1.5 text-zinc-700 hover:bg-zinc-100"
          aria-label="Shopping cart"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
