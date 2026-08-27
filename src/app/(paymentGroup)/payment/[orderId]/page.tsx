"use client";

import { useState, use } from "react";
import { createPayments } from "@/service/payments";
import { ShieldCheck, Lock } from "lucide-react";

export default function OrderPaymentPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const resolvedParams = use(params);
  const [loading, setLoading] = useState(false);

  const handlePayNow = async () => {
    setLoading(true);
    try {
      const res = await createPayments(resolvedParams.orderId);

      
      if (res?.success && res?.data?.url) {
        window.location.href = res.data.url; 
      } else {
        alert(res?.message || "Payment URL generation failed!");
      }
    } catch (error) {
      console.error("PayNow Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50/50 px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Complete Payment</h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Order ID: <span className="font-semibold text-gray-700">{resolvedParams.orderId}</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            <ShieldCheck className="h-4 w-4" />
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={handlePayNow}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF4500] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E03E00] disabled:opacity-50 transition-all cursor-pointer"
          >
            <Lock className="h-4 w-4" />
            {loading ? "Redirecting to Stripe..." : "Pay Now"}
          </button>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Encrypted with 256-bit SSL Security
          </p>
        </div>
      </div>
    </div>
  );
}