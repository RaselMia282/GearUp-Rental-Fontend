"use client";

import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GearRow({ gear }: { gear: any }) {
  return (
    <tr className="hover:bg-gray-50/50 transition border-b border-gray-100">
      {/* Gear Details */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
            {gear.images?.[0] ? (
              <Image
                src={gear.images[0]}
                alt={gear.name || "Gear image"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                No Img
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-800 line-clamp-1">{gear.name}</p>
            <p className="text-xs text-gray-400 capitalize">{gear.category || "Uncategorized"}</p>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="px-6 py-4 text-sm font-medium text-gray-700">
        ৳{gear.pricePerDay || gear.price || 0} / day
      </td>

      {/* Status / Availability */}
      <td className="px-6 py-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            gear.isAvailable !== false
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-amber-50 text-amber-700 border border-amber-200"
          }`}
        >
          {gear.isAvailable !== false ? "Available" : "Rented"}
        </span>
      </td>

      {/* Owner Info */}
      <td className="px-6 py-4 text-xs text-gray-500">
        {gear.owner?.name || gear.owner?.email || "Unknown Owner"}
      </td>
    </tr>
  );
}