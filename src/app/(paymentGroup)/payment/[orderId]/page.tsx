"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CreditCard, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PaymentPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.orderId;

  const [isLoading, setIsLoading] = useState(false);

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // পেমেন্ট প্রসেসিং ডামি লজিক (পরবর্তীতে Stripe integration হবে)
    setTimeout(() => {
      setIsLoading(false);
      router.push("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 max-w-3xl mx-auto font-sans text-gray-900">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Complete Payment</h1>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Order ID: <span className="font-bold text-gray-700">{orderId}</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure Checkout</span>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePayNow} className="space-y-5">
          <div>
            <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
              Cardholder Name
            </label>

            <input
              type="text"
              required
              placeholder="Alex Adventure"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff4e00] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                required
                maxLength={19}
                placeholder="4242 •••• •••• 4242"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff4e00] transition pl-11"
              />
              <CreditCard className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                required
                placeholder="MM / YY"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff4e00] transition"
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold uppercase text-gray-500 mb-2">
                CVC / CVV
              </label>
              <input
                type="password"
                required
                maxLength={4}
                placeholder="•••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff4e00] transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold py-4 rounded-2xl transition shadow-sm mt-4 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <Lock className="w-4 h-4" />
            <span>{isLoading ? "Processing..." : "Pay Now"}</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium mt-6">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Encrypted with 256-bit SSL Security</span>
        </div>
      </div>
    </div>
  );
}