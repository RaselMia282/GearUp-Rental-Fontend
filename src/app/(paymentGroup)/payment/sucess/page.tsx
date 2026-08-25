import Link from "next/link";
import { Check } from "lucide-react";

export default function PaymentSuccessPage() {
  const checklistItems = [
    "Download offline trail maps",
    "Check the 7-day weather forecast",
    "Pack essentials (Water, First Aid, Snacks)",
    "Confirm pickup time at Denver Basecamp",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        {/* Title & Subtitle */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Gear Secured.
        </h1>
        <p className="mt-3 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Your equipment is being prepared for your next epic journey. Check your email
          for the rental agreement and pickup instructions.
        </p>

        {/* Countdown / Days Banner */}
        <div className="my-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            ADVENTURE STARTS IN
          </span>
          <div className="mt-1 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-extrabold text-[#B63D0D]">12</span>
            <span className="text-lg font-bold text-gray-900">Days</span>
          </div>
        </div>

        {/* Preparation Checklist Box */}
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-6 text-left shadow-sm backdrop-blur-sm">
          <h2 className="text-base font-bold text-gray-900 mb-4">
            Preparation Checklist
          </h2>

          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                  <Check className="h-3 w-3 text-gray-400" />
                </div>
                <span className="text-xs font-medium text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pickup Location Box */}
        <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            PICKUP LOCATION
          </span>
          <h3 className="text-base font-bold text-gray-900 mt-0.5">
            Denver Basecamp
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/my-rentals"
            className="rounded-lg bg-gray-100 px-6 py-2.5 text-xs font-semibold text-[#B63D0D] hover:bg-gray-200 transition-colors"
          >
            View My Rentals
          </Link>
          <Link
            href="/"
            className="rounded-lg px-6 py-2.5 text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


