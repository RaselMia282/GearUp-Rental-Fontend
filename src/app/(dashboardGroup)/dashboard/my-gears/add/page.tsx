"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createGears } from "@/service/createGears";


export default function AddGearPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      pricePerDay: Number(formData.get("pricePerDay")),
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      location: formData.get("location") as string,
    };

    try {
      const res = await createGears(payload);

      if (res?.success) {
        router.push("/dashboard/my-gears");
        router.refresh();
      } else {
        setError(res?.message || "Failed to add gear. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Gear</h1>
          <p className="text-sm text-gray-500">List your item for rental.</p>
        </div>
        <Link
          href="/dashboard/my-gears"
          className="text-sm text-gray-600 hover:text-gray-900 border px-3 py-1.5 rounded-lg transition"
        >
          Cancel
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gear Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Sony A7III Camera Kit"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
            >
              <option value="">Select Category</option>
              <option value="Photography">Photography</option>
              <option value="Videography">Videography</option>
              <option value="Camping">Camping</option>
              <option value="Electronics">Electronics</option>
              <option value="Audio">Audio</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price / Day (৳)</label>
            <input
              type="number"
              name="pricePerDay"
              required
              min="1"
              placeholder="1000"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            required
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            placeholder="e.g. Dhaka, Bangladesh"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows={4}
            required
            placeholder="Provide gear details, condition, and included accessories..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium py-2.5 rounded-lg transition text-sm shadow-sm"
        >
          {loading ? "Adding Gear..." : "Submit Gear Listing"}
        </button>
      </form>
    </div>
  );
}