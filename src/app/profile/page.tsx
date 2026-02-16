"use client";

import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DUMMY_PROFILE = {
  name: "Alex Smith",
  email: "alex.smith@example.com",
  phone: "+1 (555) 123-4567",
  address: {
    line1: "123 Oak Street",
    line2: "Apt 4B",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
  },
  memberSince: "January 2025",
  ordersCount: 3,
};

export default function ProfilePage() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white px-4 py-16 md:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-2xl font-bold text-[var(--reloos-secondary-black)]">
              Profile
            </h1>
            <p className="mt-4 text-zinc-600">
              Log in to view your profile.
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

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const { name, email, phone, address, memberSince, ordersCount } = DUMMY_PROFILE;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--reloos-secondary-black)]">
            Profile
          </h1>
          <p className="mt-1 text-zinc-600">
            Manage your account and preferences.
          </p>

          <section className="mt-10 space-y-8">
            {/* Personal info */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--reloos-secondary-black)]">
                Personal information
              </h2>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-sm font-medium text-zinc-500">Full name</dt>
                  <dd className="mt-0.5 text-[var(--reloos-secondary-black)]">{name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-500">Email</dt>
                  <dd className="mt-0.5 text-[var(--reloos-secondary-black)]">{email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-zinc-500">Phone</dt>
                  <dd className="mt-0.5 text-[var(--reloos-secondary-black)]">{phone}</dd>
                </div>
              </dl>
              <button
                type="button"
                className="mt-4 rounded-xl border-2 border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-[var(--reloos-secondary-black)] hover:bg-zinc-50"
              >
                Edit (coming soon)
              </button>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--reloos-secondary-black)]">
                Shipping address
              </h2>
              <address className="mt-4 not-italic">
                <p className="text-[var(--reloos-secondary-black)]">{address.line1}</p>
                {address.line2 && (
                  <p className="text-[var(--reloos-secondary-black)]">{address.line2}</p>
                )}
                <p className="text-[var(--reloos-secondary-black)]">
                  {address.city}, {address.state} {address.zip}
                </p>
              </address>
              <button
                type="button"
                className="mt-4 rounded-xl border-2 border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-[var(--reloos-secondary-black)] hover:bg-zinc-50"
              >
                Edit (coming soon)
              </button>
            </div>

            {/* Account summary */}
            <div className="rounded-2xl border border-zinc-200 bg-[var(--reloos-primary)]/30 p-6">
              <h2 className="text-lg font-bold text-[var(--reloos-secondary-black)]">
                Account
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Member since</dt>
                  <dd className="font-medium text-[var(--reloos-secondary-black)]">{memberSince}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-zinc-600">Orders</dt>
                  <dd className="font-medium text-[var(--reloos-secondary-black)]">{ordersCount}</dd>
                </div>
              </dl>
            </div>

            {/* Log out */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-xl border-2 border-zinc-300 bg-white py-3.5 font-semibold text-[var(--reloos-secondary-black)] transition hover:bg-zinc-50"
              >
                Log out
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
