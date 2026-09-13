import Link from "next/link";
import { 
  Search, 
  CalendarCheck, 
  MapPin, 
  RefreshCcw, 
  Camera, 
  CheckSquare, 
  Handshake, 
  Wallet,
  ArrowRight,
  Tent,
  Bike,
  Compass
} from "lucide-react";

export const metadata = {
  title: "How It Works | GearUp",
  description: "Learn how to rent gears or list your equipment on GearUp.",
};

const HowItWorks = () => {
  const categories = [
    { name: "Cameras & Lenses", count: "120+ Items", icon: Camera, href: "/gears?category=camera" },
    { name: "Camping & Tents", count: "80+ Items", icon: Tent, href: "/gears?category=camping" },
    { name: "Bicycles & Rides", count: "45+ Items", icon: Bike, href: "/gears?category=bike" },
    { name: "Outdoor Gear", count: "60+ Items", icon: Compass, href: "/gears?category=outdoor" },
  ];

  const renterSteps = [
    {
      title: "Discover Gears",
      description: "Browse our extensive catalog of cameras, tents, bikes, and more.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Request Booking",
      description: "Select your desired dates and send a rental request to the owner.",
      icon: CalendarCheck,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      title: "Pick Up",
      description: "Meet the owner at the designated location and inspect the gear.",
      icon: MapPin,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Use & Return",
      description: "Enjoy your trip! Return the gear safely on the agreed date.",
      icon: RefreshCcw,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  const providerSteps = [
    {
      title: "List Your Items",
      description: "Take clear photos, add descriptions, and set your daily rental price.",
      icon: Camera,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      title: "Review Requests",
      description: "Accept or decline booking requests based on your availability.",
      icon: CheckSquare,
      color: "text-teal-500",
      bg: "bg-teal-50",
    },
    {
      title: "Handover Gear",
      description: "Meet the renter, verify their identity, and hand over the equipment.",
      icon: Handshake,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      title: "Get Paid",
      description: "Receive your rental earnings directly into your account safely.",
      icon: Wallet,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            How <span className="text-orange-600">GearUp</span> Works
          </h1>
          <p className="text-lg text-slate-600">
            Simple steps to rent equipment or list your own gear with ease.
          </p>
        </div>

        {/* Categories Section */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">Explore Top Categories</h2>
            <p className="text-slate-500 text-sm mt-0.5">Find exactly what you need for your next adventure.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={idx}
                  href={cat.href}
                  className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-orange-500 hover:shadow-md transition group text-center space-y-2"
                >
                  <div className="w-12 h-12 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-orange-600 transition">{cat.name}</h3>
                  <p className="text-xs text-slate-400">{cat.count}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section 1: Renters */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">For Renters</h2>
            <p className="text-slate-500 text-sm mt-0.5">Rent gear in 4 easy steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renterSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.bg} ${step.color}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Providers */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">For Owners & Providers</h2>
            <p className="text-slate-500 text-sm mt-0.5">List your equipment and earn seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.bg} ${step.color}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple CTA Section */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white shadow-md max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to explore?</h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Browse our wide range of available gears and start your next adventure today.
          </p>
          <div className="pt-2">
            <Link 
              href="/gears" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition shadow-sm text-sm"
            >
              Browse Gears Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;