import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Search } from "lucide-react";

export const metadata = {
  title: "All Categories | GearUp",
  description: "Explore all rental gear categories on GearUp.",
};

export default function CategoriesPage() {
  const categories = [
    {
      id: "cameras-lenses",
      name: "Cameras & Lenses",
      slug: "camera",
      description: "DSLRs, Mirrorless, Cinema Lenses, and Tripods for your professional shoots.",
      itemCount: 142,
      image: "https://i.ibb.co.com/QFFTj8D3/Screenshot-2026-08-22-at-11-04-41-AM.png",
      badge: "Popular",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "safety-helmets-rides",
      name: "Helmets & Ride Gear",
      slug: "helmets",
      description: "Safety helmets, riding gloves, armor, and biking accessories.",
      itemCount: 88,
      image: "https://i.ibb.co.com/sdzB9N3z/Screenshot-2026-08-20-at-10-15-23-PM.png",
      badge: "Essential",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      id: "hiking-boots-footwear",
      name: "Waterproof Hiking Boots",
      slug: "footwear",
      description: "Durable waterproof hiking boots, trekking shoes, and outdoor footwear.",
      itemCount: 75,
      image: "https://i.ibb.co.com/NdSxMx66/Screenshot-2026-08-22-at-9-12-07-PM.png",
      badge: "Trending",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
    },
    {
      id: "camping-tents",
      name: "Camping & Tents",
      slug: "camping",
      description: "Waterproof tents, sleeping bags, stoves, and trek lanterns.",
      itemCount: 98,
      image: "https://i.ibb.co.com/NdSxMx66/Screenshot-2026-08-22-at-9-12-07-PM.png",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
    {
      id: "drones-video",
      name: "Drones & Action Cams",
      slug: "drones",
      description: "DJI Drones, GoPro 4K Action Cameras, and Stabilizers.",
      itemCount: 85,
      image: "https://i.ibb.co.com/QFFTj8D3/Screenshot-2026-08-22-at-11-04-41-AM.png",
      badge: "Hot",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "outdoor-adventure",
      name: "Outdoor Gear",
      slug: "outdoor",
      description: "Hiking poles, GPS trackers, climbing ropes, and backpacks.",
      itemCount: 110,
      image: "https://i.ibb.co.com/sdzB9N3z/Screenshot-2026-08-20-at-10-15-23-PM.png",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            Explore Inventory
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Gear Categories
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Find premium adventure, photography, and outdoor equipment tailored for your next journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Image Section */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-inline-size: 768px) 100vw, (max-inline-size: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {cat.badge && (
                    <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-md bg-slate-900/80 text-white backdrop-blur-md shadow-sm">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Info Section */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {cat.itemCount} Items Available
                </span>

                <Link
                  href={`/gears?category=${cat.slug}`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm transition-all ${cat.buttonColor}`}
                >
                  Browse <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Can't find what you are looking for?</h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Search through our complete catalog or contact our team for specialized gear requests.
            </p>
          </div>
          <Link
            href="/gears"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition shadow-lg shadow-orange-600/30 whitespace-nowrap text-sm"
          >
            <Search className="w-4 h-4" /> View All Gears
          </Link>
        </div>

      </div>
    </div>
  );
}