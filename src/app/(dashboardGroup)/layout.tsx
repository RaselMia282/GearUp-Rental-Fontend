"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getAuthData, logOut } from "@/service/logOut";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getAuthData();

        if (!user || !user.role) {
          router.push("/login");
          return;
        }

        setRole(user.role);
      } catch (error) {
        console.error("Auth verification failed:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await logOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center font-bold text-gray-600">
        Loading Dashboard...
      </div>
    );
  }

  // রোল চেককে নিরাপদ করতে কেস নরমাল করা হলো
  const normalizedRole = role?.toUpperCase();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-white p-6 md:block border-r border-gray-200 shrink-0">
        <Link
          href="/"
          className="mb-8 block text-2xl font-bold text-orange-500 tracking-tight"
        >
          GearUp
        </Link>

        <nav className="space-y-2">
          {/* Overview Link - Available for All */}
          <Link
            href="/dashboard"
            className={`block rounded-lg p-3 font-semibold transition ${
              pathname === "/dashboard"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </Link>

          {/* CUSTOMER / USER Links */}
          {(normalizedRole === "CUSTOMER" || normalizedRole === "USER") && (
            <>
              <Link
                href="/dashboard/my-rentals"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/my-rentals"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                My Rentals
              </Link>

              <Link
                href="/dashboard/wishlist"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/wishlist"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Wishlist
              </Link>
            </>
          )}

          {/* PROVIDER Links */}
          {normalizedRole === "PROVIDER" && (
            <>
              <Link
                href="/dashboard/my-gears"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/my-gears"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                My Gears
              </Link>

              <Link
                href="/dashboard/my-gears/add"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/my-gears/add"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Add Gear
              </Link>

              <Link
                href="/dashboard/rental-requests"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/rental-requests"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Rental Requests
              </Link>
            </>
          )}

          {/* ADMIN Links */}
          {normalizedRole === "ADMIN" && (
            <>
              <Link
                href="/dashboard/users"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/users"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Manage Users
              </Link>

              <Link
                href="/dashboard/all-gears"
                className={`block rounded-lg p-3 font-semibold transition ${
                  pathname === "/dashboard/all-gears"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Gears
              </Link>
            </>
          )}

          {/* Profile Settings Link - Available for All */}
          <Link
            href="/dashboard/profile"
            className={`block rounded-lg p-3 font-semibold transition ${
              pathname === "/dashboard/profile"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Profile
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          type="button"
          className="mt-10 w-full rounded-lg bg-red-50 p-3 font-bold text-red-600 hover:bg-red-100 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}