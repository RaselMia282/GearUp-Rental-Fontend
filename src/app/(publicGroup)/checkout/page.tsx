"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Trash2, Lock, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { myRentals } from "@/service/myRental";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const gearId = searchParams.get("gearId");
  const gearTitle = searchParams.get("title") || "Selected Gear";
  const gearPrice = Number(searchParams.get("price")) || 45;
  const gearImage =
    searchParams.get("image") || "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg";

  const [selectedProtection, setSelectedProtection] = useState<
    "none" | "basic" | "full"
  >("full");

  const rentalDays = 2;
  const itemPrice = gearPrice * rentalDays;
  const protectionPrices = { none: 0, basic: 15.0, full: 45.0 };
  const cleaningFee = 12.0;
  const taxRate = 0.08;

  const currentProtectionPrice = protectionPrices[selectedProtection];
  const subtotal = itemPrice + currentProtectionPrice + cleaningFee;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // dynamic id here

  const handleConfirmRental = async () => {
    setLoading(true);

    try {
      const payload = {
        startDate: "2026-08-01",
        endDate: "2026-08-05",
        gearItemId: gearId,
        quantity: 1,
      };

      console.log("RENTAL PAYLOAD:", payload);

      const result = await myRentals(payload);

      console.log("🔥 FRONTEND RESULT:", result);

      if (!result.success || !result.data?.id) {
        throw new Error(result.message || "Rental order creation failed");
      }

      router.push(`/payment/${result.data.id}`);
    } catch (error) {
      console.error("RENTAL ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-4 sm:px-8 max-w-7xl mx-auto font-sans text-gray-900">
      <Link
        href={gearId ? `/gears/${gearId}` : "/gears"}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Gear Details
      </Link>

      <h1 className="text-2xl sm:text-3xl font-extrabold mb-8 text-gray-900">
        Review & Confirm Rental
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Equipment Selection */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-gray-900">
              Equipment Selection
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                <Image
                  src={gearImage}
                  alt={gearTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-base">
                    {gearTitle}
                  </h3>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                    Aug 24 — Aug 26 ({rentalDays} Days)
                  </span>
                  <span className="text-xs font-extrabold text-gray-700">
                    ${gearPrice} / day
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gear Protection Option */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-1 text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff4e00]" /> Gear Protection
            </h2>
            <p className="text-xs text-gray-500 mb-5 font-medium">
              Select protection coverage for peace of mind on your trip.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setSelectedProtection("full")}
                className={`relative border-2 rounded-2xl p-4 cursor-pointer transition-all ${
                  selectedProtection === "full"
                    ? "border-[#ff4e00] bg-orange-50/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="absolute -top-2.5 left-3 bg-[#ff4e00] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                  Recommended
                </span>
                <div className="flex justify-between items-start mt-1">
                  <h4 className="font-bold text-gray-900 text-sm">
                    Summit Safety
                  </h4>
                  <input
                    type="radio"
                    checked={selectedProtection === "full"}
                    onChange={() => setSelectedProtection("full")}
                    className="accent-[#ff4e00]"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">
                  Complete coverage for theft, accidental damage, and deep
                  scratches.
                </p>
                <p className="text-sm font-black text-gray-900 mt-4">$45.00</p>
              </div>

              <div
                onClick={() => setSelectedProtection("basic")}
                className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${
                  selectedProtection === "basic"
                    ? "border-[#ff4e00] bg-orange-50/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-sm">
                    Trail Minor
                  </h4>
                  <input
                    type="radio"
                    checked={selectedProtection === "basic"}
                    onChange={() => setSelectedProtection("basic")}
                    className="accent-[#ff4e00]"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">
                  Covers minor wear and tear and standard cleaning.
                </p>
                <p className="text-sm font-black text-gray-900 mt-4">$15.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sticky top-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-gray-900 mb-6">
              Rental Breakdown
            </h2>

            <div className="space-y-3 text-sm text-gray-600 border-b border-gray-100 pb-4 font-medium">
              <div className="flex justify-between">
                <span>
                  {gearTitle} ({rentalDays} days)
                </span>
                <span className="font-bold text-gray-900">
                  ${itemPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Gear Protection</span>
                <span className="font-bold text-gray-900">
                  ${currentProtectionPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning Fee</span>
                <span className="font-bold text-gray-900">
                  ${cleaningFee.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 border-b border-gray-100 py-4 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="font-bold text-gray-900">
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center py-5">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-[#ff4e00]">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleConfirmRental}
              className="w-full bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold py-3.5 rounded-2xl transition shadow-sm mb-3 flex items-center justify-center gap-2 group"
            >
              <span>Confirm Rental</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <p className="text-center text-xs text-gray-400 font-medium">
              By confirming, you agree to our Rental Terms
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-400 pt-6 mt-6 border-t border-gray-100">
              <ShieldCheck className="w-5 h-5" />
              <Lock className="w-5 h-5" />
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
