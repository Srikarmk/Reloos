"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isMyGear = pathname === "/my-gear";
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 md:px-8">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <Image
          src="/logo w black .png"
          alt="Reloos"
          width={120}
          height={36}
          className="h-8 w-auto object-contain"
          priority
        />
      </Link>

      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4 md:gap-8">
        <Link
          href="/"
          className={`text-sm font-medium ${pathname === "/" ? "text-[var(--reloos-secondary-black)] underline underline-offset-4" : "text-zinc-600 hover:text-[var(--reloos-secondary-black)]"}`}
        >
          Shop
        </Link>
        {isLoggedIn && (
          <Link
            href="/my-gear"
            className={`text-sm font-medium ${isMyGear ? "text-[var(--reloos-secondary-black)] underline underline-offset-4" : "text-zinc-600 hover:text-[var(--reloos-secondary-black)]"}`}
          >
            My Gear
          </Link>
        )}
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        {isLoggedIn ? (
          <>
            <Link
              href="/cart"
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
            </Link>
            <Link
              href="/profile"
              className="rounded p-1.5 text-zinc-700 hover:bg-zinc-100"
              aria-label="Profile"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </>
        ) : (
          <Link
            href="/login"
            className="rounded-xl bg-[var(--reloos-secondary-black)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Log in / Sign up
          </Link>
        )}
      </div>
    </header>
  );
}
