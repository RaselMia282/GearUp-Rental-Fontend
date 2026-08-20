import Image from "next/image";
import heroBg from "@/../public/images/hero.jpg"; 
export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* 1. Background Image with Gradients */}
      <Image
        src={heroBg}
        alt="GearUp Hero Background"
        placeholder="blur"
        priority
        fill
        className="object-cover object-center z-0"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Left side gradient for crisp text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      {/* 2. Main Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Side: Hero Text & Buttons (8 Cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Badge */}
          <span className="inline-block bg-[#ff5522] text-white text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-sm">
            PREMIUM EQUIPMENT
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Rent Your <br />
            <span className="text-[#ff5522]">Adventure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-base md:text-lg max-w-xl font-medium leading-relaxed drop-shadow">
            Professional-grade outdoor gear delivered to your trailhead. Stop buying, start exploring with our curated inventory of rugged performance equipment.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#ff5522] hover:bg-[#e0481b] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 cursor-pointer shadow-lg shadow-orange-950/30">
              Explore Catalog
            </button>
            <button className="bg-black/30 hover:bg-black/50 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg backdrop-blur-md transition-all duration-200 cursor-pointer">
              How it Works
            </button>
          </div>
        </div>

        {/* Right Side: Glassmorphism Stats Card (5 Cols) */}
        <div className="lg:col-span-5 w-full flex justify-start lg:justify-end">
          <div className="w-full max-w-md bg-black/40 border border-white/15 backdrop-blur-md p-6 md:p-8 rounded-2xl grid grid-cols-2 gap-6 shadow-2xl">
            
            {/* Stat 1 */}
            <div className="border-r border-white/10 pr-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#ff5522] tracking-tight">
                25k+
              </h3>
              <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase mt-1">
                ACTIVE USERS
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pl-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#ff5522] tracking-tight">
                140
              </h3>
              <p className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase mt-1">
                TRAIL LOCATIONS
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}