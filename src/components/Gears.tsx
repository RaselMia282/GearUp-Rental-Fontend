"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Heart, CheckCircle2 } from "lucide-react";

interface GearItem {
  id: string;
  title: string;
  price: number;
  category: string;
  brand: string;
  availability?: string;
  isAvailable?: boolean;
  image?: string;
  description?: string;
}

export function GearsList({ gears = [] }: { gears: GearItem[] }) {
  const router = useRouter();

  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    availability: "",
    category: "",
    priceSort: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredGears = useMemo(() => {
    return gears
      .filter((gear) => {
        const cleanSearch = filters.search.trim().toLowerCase();

        // ১. সার্চ লজিক (Title & Category)
        const matchesSearch =
          !cleanSearch ||
          gear.title?.toLowerCase().includes(cleanSearch) ||
          gear.category?.toLowerCase().includes(cleanSearch);

        // ২. ব্র্যান্ড ফিল্টার
        const matchesBrand =
          !filters.brand ||
          gear.brand?.toLowerCase() === filters.brand.toLowerCase();

        // ৩. ক্যাটাগরি/স্পেক ফিল্টার
        const matchesCategory =
          !filters.category ||
          gear.category?.toLowerCase() === filters.category.toLowerCase();

        // ৪. অ্যাভেলেবিলিটি ফিল্টার
        const matchesAvailability =
          !filters.availability ||
          (filters.availability === "Available Now"
            ? gear.isAvailable !== false
            : gear.isAvailable === false);

        return (
          matchesSearch &&
          matchesBrand &&
          matchesCategory &&
          matchesAvailability
        );
      })
      .sort((a, b) => {
        if (filters.priceSort === "low-to-high") return a.price - b.price;
        if (filters.priceSort === "high-to-low") return b.price - a.price;
        return 0;
      });
  }, [gears, filters]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore gears, we are here
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-2 font-medium">
          Premium outdoor equipment for your next summit, trail, or tide.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Filter */}
          <select
            value={filters.priceSort}
            onChange={(e) => handleFilterChange("priceSort", e.target.value)}
            className="bg-[#eaeaea] text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-gray-400 outline-none cursor-pointer"
          >
            <option value="">Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>

          {/* Brand Filter */}
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
            className="bg-[#eaeaea] text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-gray-400 outline-none cursor-pointer"
          >
            <option value="">Brand</option>
            <option value="Sony">Sony</option>
            <option value="Thule">Thule</option>
            <option value="Trek">Trek</option>
            <option value="Garmin">Garmin</option>
          </select>

          {/* Availability Filter */}
          <select
            value={filters.availability}
            onChange={(e) => handleFilterChange("availability", e.target.value)}
            className="bg-[#eaeaea] text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-gray-400 outline-none cursor-pointer"
          >
            <option value="">Availability</option>
            <option value="Available Now">Available Now</option>
            <option value="Upcoming">Upcoming / Reserve</option>
          </select>

          {/* Technical Specs / Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="bg-[#eaeaea] text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl border-none focus:ring-2 focus:ring-gray-400 outline-none cursor-pointer"
          >
            <option value="">Technical Specs</option>
            <option value="Photography">Photography</option>
            <option value="Cargo">Cargo</option>
            <option value="Climbing">Climbing</option>
            <option value="Hiking">Hiking</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search gear..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="w-full bg-white text-sm text-gray-800 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-400 shadow-sm"
          />
        </div>
      </div>

      {/* Gears Card Grid */}
      {filteredGears.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGears.map((gear) => (
            <div
              key={gear.id}
              className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Image Header */}
              <div 
                onClick={() => router.push(`/gears/${gear.id}`)}
                className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#f3f3f3] mb-4 cursor-pointer"
              >
                <Image
                  src={
                    gear.image || "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg"
                  }
                  alt={gear.title || "Gear item"}
                  fill
                  className="object-cover"
                />
                <button 
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 transition"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start mb-3">
                <h3 
                  onClick={() => router.push(`/gears/${gear.id}`)}
                  className="text-xl font-bold text-gray-900 line-clamp-1 cursor-pointer hover:text-[#ff4e00] transition"
                >
                  {gear.title}
                </h3>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${gear.price}
                  </span>
                  <span className="text-xs text-gray-500 block">/ day</span>
                </div>
              </div>

              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#efefef] text-gray-700 text-xs font-medium px-3 py-1 rounded-md">
                  {gear.category || "General"}
                </span>
              </div>

              {/* Footer / CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">
                    Available Now
                  </span>
                </div>
                
                {/* Rent Button Routing Fix */}
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/gears/${gear.id}`);
                  }}
                  className="bg-[#ff4e00] hover:bg-[#e04500] text-white font-medium text-sm px-6 py-2 rounded-xl transition cursor-pointer"
                >
                  Rent
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No gears found matching your criteria.
        </div>
      )}
    </div>
  );
}