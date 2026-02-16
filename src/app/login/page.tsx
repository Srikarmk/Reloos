"use client";

import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push("/");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-md">
          <div className="mb-8 flex rounded-xl bg-zinc-100 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${activeTab === "login" ? "bg-white text-[var(--reloos-secondary-black)] shadow-sm" : "text-zinc-600 hover:text-zinc-900"}`}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${activeTab === "signup" ? "bg-white text-[var(--reloos-secondary-black)] shadow-sm" : "text-zinc-600 hover:text-zinc-900"}`}
            >
              Sign up
            </button>
          </div>

          {activeTab === "login" ? (
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-[var(--reloos-secondary-black)]">
                Log in
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Enter your email and password. No backend yet — submit to continue.
              </p>
              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-[var(--reloos-secondary-black)]">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-[var(--reloos-secondary-black)] placeholder-zinc-400 focus:border-[var(--reloos-secondary)] focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-[var(--reloos-secondary-black)]">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-[var(--reloos-secondary-black)] placeholder-zinc-400 focus:border-[var(--reloos-secondary)] focus:outline-none focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--reloos-secondary-black)] py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Log in
                </button>
              </form>
            </section>
          ) : (
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-[var(--reloos-secondary-black)]">
                Sign up
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Create an account. No backend yet — submit to continue.
              </p>
              <form onSubmit={handleSignUp} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium text-[var(--reloos-secondary-black)]">
                    Full name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    placeholder="Alex Smith"
                    className="mt-1.5 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-[var(--reloos-secondary-black)] placeholder-zinc-400 focus:border-[var(--reloos-secondary)] focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-[var(--reloos-secondary-black)]">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-[var(--reloos-secondary-black)] placeholder-zinc-400 focus:border-[var(--reloos-secondary)] focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-[var(--reloos-secondary-black)]">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-[var(--reloos-secondary-black)] placeholder-zinc-400 focus:border-[var(--reloos-secondary)] focus:outline-none focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--reloos-secondary-black)] py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Sign up
                </button>
              </form>
            </section>
          )}

          <p className="mt-8 text-center text-sm text-zinc-500">
            <Link href="/" className="text-[var(--reloos-secondary)] hover:underline">
              ← Back to shop
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
