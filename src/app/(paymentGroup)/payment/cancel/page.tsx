import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100">
        {/* Red Circle Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <div className="relative">
            <CreditCard className="h-10 w-10 text-red-500" />
            {/* Slash line over card icon */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-0.5 w-12 rotate-45 bg-red-500"></span>
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="mb-3 text-2xl font-bold text-gray-900">
          Adventure Paused.
        </h1>
        <p className="mb-8 text-sm text-gray-500 leading-relaxed">
          Something went wrong with your transaction. Don't worry, your gear is
          still reserved in your cart for a limited time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/checkout"
            className="w-full rounded-lg bg-[#B63D0D] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#9B330A] transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/gears"
            className="w-full rounded-lg border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Keep Browsing
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100" />

        {/* Footer Support Text */}
        <p className="text-xs text-gray-500">
          Need help?{" "}
          <Link href="/support" className="text-[#B63D0D] font-medium hover:underline">
            Contact our trail guides
          </Link>
          .
        </p>
      </div>
    </div>
  );
}