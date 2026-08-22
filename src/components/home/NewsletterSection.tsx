"use client"

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[#f4f4f6] py-16 px-4 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-[#b83b08] text-white rounded-[32px] p-8 md:p-14 shadow-lg flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Content */}
        <div className="max-w-md space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Gear up for the next peak.
          </h2>
          <p className="text-sm md:text-base text-orange-100 font-normal">
            Join 50,000+ adventurers receiving gear guides and exclusive early access to rental drops.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-auto space-y-2">
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-5 py-3.5 rounded-xl text-gray-900 bg-white placeholder-gray-400 focus:outline-none w-full md:w-80 shadow-sm"
            />
            <button
              type="submit"
              className="bg-[#18191c] hover:bg-black text-white font-medium px-6 py-3.5 rounded-xl transition duration-200 whitespace-nowrap shadow-sm"
            >
              Join GearUp
            </button>
          </form>

          {/* Subtext */}
          <p className="text-xs text-orange-200/80 text-center sm:text-left">
            No spam. Only maps and mountains.
          </p>
        </div>

      </div>
    </section>
  );
}