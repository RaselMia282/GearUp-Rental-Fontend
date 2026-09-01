import Link from "next/link";
import Image from "next/image";
import { getMyGears } from "@/service/getMyGears";

export default async function MyGearsPage() {
  const response = await getMyGears();
  const gears = response?.data || [];

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Gear Listings</h1>
          <p className="text-sm text-gray-500">
            Manage your uploaded rental gears and their availability status.
          </p>
        </div>
        <Link
          href="/dashboard/my-gears/add"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm flex items-center gap-2"
        >
          <span>+</span> Add New Gear
        </Link>
      </div>

      {/* Main Content / Table Area */}
      {gears.length === 0 ? (
        // Empty State
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center shadow-sm">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              📦
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              No gears listed yet
            </h3>
            <p className="text-sm text-gray-500">
              Start earning by listing your photography, camping, or audio equipment for rent!
            </p>
            <Link
              href="/dashboard/my-gears/add"
              className="inline-block bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
            >
              Add Your First Gear
            </Link>
          </div>
        </div>
      ) : (
        // Table View
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold border-b">
                <tr>
                  <th className="px-6 py-4">Gear Details</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price / Day</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gears.map((gear: any) => (
                  <tr key={gear.id || gear._id} className="hover:bg-gray-50/50 transition">
                    {/* Title & Thumbnail */}
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        {gear.imageUrl || gear.image ? (
                          <Image
                            src={gear.imageUrl || gear.image}
                            alt={gear.name || gear.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">
                            📷
                          </div>
                        )}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {gear.name || gear.title}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full border">
                        {gear.category || "General"}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      ৳{gear.pricePerDay || gear.price}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          gear.isAvailable ?? true
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {gear.isAvailable ?? true ? "Available" : "Rented"}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-gray-500 hover:text-orange-500 font-medium text-xs px-2 py-1 rounded border border-gray-200 hover:border-orange-200 transition">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-600 font-medium text-xs px-2 py-1 rounded border border-red-100 hover:bg-red-50 transition">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}