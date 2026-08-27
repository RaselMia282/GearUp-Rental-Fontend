"use client";

import Link from "next/link";
import { CheckCircle2, Calendar, ShoppingBag, ArrowRight } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        {/* Animated Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        {/* Header Text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-800">
            Payment Successful!
          </h1>
          <p className="text-slate-500 text-sm">
            Thank you for your order. Your rental booking has been confirmed!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-3">
          <Link
            href="/my-rentals"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Go to My Rentals
          </Link>

          <Link
            href="/gears"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse More Gears
          </Link>
        </div>

        {/* Footer Support Note */}
        <p className="text-xs text-slate-400 pt-2">
          Have questions? Reach out to our customer support anytime.
        </p>
      </div>
    </div>
  );
}