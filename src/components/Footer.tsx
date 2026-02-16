import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--reloos-secondary-black)] px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-white/80">
          © 2026 Reloos. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/terms" className="text-white/80 hover:text-white">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-white/80 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
