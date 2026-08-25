import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Calendar,
  CheckCircle2,
  Heart,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { getGears } from "@/service/gears";

interface Provider {
  id: string;
  name: string;
  email: string;
}

interface GearItem {
  id: string;
  title: string;
  price: number;
  category: string;
  brand: string;
  description?: string;
  image?: string;
  provider?: Provider;
}

export default async function GearDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const allGears: GearItem[] = await getGears();

  const gear =
    allGears.find((item) => String(item.id) === String(params.id)) ||
    allGears[0];

  const similarGears = allGears
    .filter((item) => String(item.id) !== String(gear?.id))
    .slice(0, 3);

  const currentImage =
    gear?.image || "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg";

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-4 sm:px-8 max-w-7xl mx-auto font-sans text-gray-900">
      {/* Back Link */}
      <Link
        href="/gears"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {gear?.category || "Gears"}
      </Link>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Dynamic Image Gallery & Details */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {/* Main Image */}
            <div className="relative md:col-span-2 h-95 rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src={currentImage}
                alt={gear?.title || "Gear Image"}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-4 left-4 bg-[#ff4e00] text-white text-xs font-bold px-3 py-1 rounded-full">
                Top Rated
              </span>
            </div>

            {/* Side Thumbnails */}
            <div className="flex md:flex-col gap-3 h-95">
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={currentImage}
                  alt="Thumbnail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={currentImage}
                  alt="Thumbnail 2"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Title & Category Tags */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            {gear?.title}
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-[#e6f4f1] text-[#007a6e] text-xs font-bold px-3 py-1 rounded-full">
              {gear?.category || "Outdoor"}
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
              {gear?.brand || "Premium"}
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
              Verified Equipment
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
            {gear?.description ||
              "Engineered for elite performance on technical terrain. Features a lightweight frame and high-performance components to handle your next outdoor adventure."}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-200 mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                WEIGHT
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">13.2 kg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                FRAME
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">C-Series</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                TRAVEL
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">160mm</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                TIRES
              </p>
              <p className="text-lg font-bold text-gray-900 mt-1">
                29 x 2.4&quot;
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Rental Terms
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#ff4e00] shrink-0" />
                <span>
                  Security deposit required (fully refundable upon return).
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#ff4e00] shrink-0" />
                <span>Includes safety gear and standard mounting toolkit.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#ff4e00] shrink-0" />
                <span>
                  Cancellation free up to 48 hours before rental starts.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Booking */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-baseline mb-6">
              <div>
                <span className="text-3xl font-extrabold text-gray-900">
                  ${gear?.price || 45}
                </span>
                <span className="text-gray-500 font-medium text-sm">
                  {" "}
                  / day
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9</span>
                <span className="text-gray-400 font-normal">(124)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-xl mb-6 text-sm font-bold">
              <button className="bg-[#0f4c5c] text-white py-2 rounded-lg transition">
                Daily Rate
              </button>
              <button className="text-gray-600 hover:text-gray-900 py-2 transition">
                Weekly Rate
              </button>
            </div>

            <div className="border border-gray-200 rounded-2xl p-3.5 mb-6 flex items-center justify-between bg-white cursor-pointer hover:border-gray-400 transition">
              <div>
                <p className="text-[11px] font-extrabold uppercase text-gray-400">
                  PICKUP &amp; RETURN
                </p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">
                  Aug 24, 2026 - Aug 26, 2026
                </p>
              </div>
              <Calendar className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
              <div className="flex justify-between">
                <span>${gear?.price || 45} × 2 days</span>
                <span className="font-semibold text-gray-900">
                  ${(gear?.price || 45) * 2}.00
                </span>
              </div>
              <div className="flex justify-between">
                <span>Insurance &amp; Fees</span>
                <span className="font-semibold text-gray-900">$15.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-gray-900">
                ${(gear?.price || 45) * 2 + 15}.00
              </span>
            </div>

            <Link
              href={{
                pathname: "/checkout",
                query: {
                  gearId: gear?.id,
                  title: gear?.title,
                  price: gear?.price,
                  image: currentImage,
                  category: gear?.category || "Outdoor",
                },
              }}
              className="w-full bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold py-3.5 rounded-2xl transition shadow-sm mb-3 text-center block"
            >
              Rent Now
            </Link>
            <p className="text-center text-xs text-gray-400 font-medium">
              You won&apos;t be charged yet
            </p>
          </div>

          {/* Provider Info */}
          <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                <Image
                  src={currentImage}
                  alt="Provider"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  {gear?.provider?.name || "Peak Adventures Co."}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  Provider since 2022
                </p>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-bold mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Identity Verified</span>
                </div>
              </div>
            </div>
            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm py-2.5 rounded-xl transition flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-600" />
              Message Provider
            </button>
          </div>
        </div>
      </div>

      {/* Similar Gears Section */}
      <div className="mt-16 pt-10 border-t border-gray-200">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Similar Gear
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarGears.map((item) => (
            <Link
              key={item.id}
              href={`/gears/${item.id}`}
              className="bg-white rounded-3xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={
                    item.image || "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg"
                  }
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 right-3 bg-white/80 text-gray-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md">
                  {item.category || "General"}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium mb-3">
                Available for rent
              </p>
              <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                <div>
                  <span className="text-lg font-black text-gray-900">
                    ${item.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {" "}
                    / day
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-red-500 transition">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
