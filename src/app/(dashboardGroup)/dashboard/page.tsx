import Link from "next/link";

import { ShoppingBag, Clock, CheckCircle2, ArrowRight, Package } from "lucide-react";
import { getMyRentals } from "@/service/getMyRentals";

export default async function UserDashboardPage() {
  
  const rentals = (await getMyRentals()) || [];

  // 💡 Real Data Filter & Calculation
  const totalBookings = rentals.length;
  const activeRentals = rentals.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item.status === "APPROVED" || item.status === "PENDING"
  ).length;
  const completedRentals = rentals.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item.status === "COMPLETED"
  ).length;

  const stats = [
    { label: "Total Bookings", value: totalBookings, icon: ShoppingBag, color: "bg-blue-500" },
    { label: "Active Rentals", value: activeRentals, icon: Clock, color: "bg-amber-500" },
    { label: "Completed", value: completedRentals, icon: CheckCircle2, color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Welcome Banner */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back! 👋</h1>
        <p className="text-slate-300 mt-2 text-sm md:text-base">
          Here is what’s happening with your gear rentals today.
        </p>
      </div>

      {/* Dynamic Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center justify-between"
            >
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">
                  {stat.value}
                </h3>
              </div>
              <div className={`${stat.color} p-4 rounded-xl text-white shadow-md`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
            <Package className="w-5 h-5 text-emerald-600" />
            <span>Manage My Rentals</span>
          </div>
          <p className="text-slate-500 text-sm">
            View your active bookings, check dates, or review past rental history.
          </p>
          <Link
            href="/dashboard/my-rentals"
            className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 text-sm"
          >
            Go to My Rentals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-slate-800 font-semibold text-lg">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <span>Explore More Gears</span>
          </div>
          <p className="text-slate-500 text-sm">
            Planning your next trip? Check out available bikes, tents, and camera gears.
          </p>
          <Link
            href="/gears"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 text-sm"
          >
            Browse Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}