import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#17191c] text-gray-300 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Left Column: Brand & Info */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold tracking-wider text-white uppercase">
              Adventure Rentals
            </h2>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Equipping the modern explorer with premium, professional-grade
              gear for every terrain on earth. From the highest peaks to the
              deepest canyons.
            </p>
            
            {/* Social / Action Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6">
            
            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white tracking-widest uppercase">
                Company
              </h3>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact Support</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white tracking-widest uppercase">
                Services
              </h3>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Rental Kits</Link></li>
                <li><Link href="#" className="hover:text-white transition">Global Delivery</Link></li>
                <li><Link href="#" className="hover:text-white transition">Guided Tours</Link></li>
                <li><Link href="#" className="hover:text-white transition">Gear Buy-Back</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white tracking-widest uppercase">
                Legal
              </h3>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Insurance Details</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800/80 my-4" />

        {/* Bottom Section */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 Modern Adventure Rentals. Built for the rugged.</p>
          
          {/* Payment Badges Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[10px]">VISA</div>
            <div className="w-8 h-5 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[10px]">MC</div>
            <div className="w-8 h-5 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-[10px]">AMEX</div>
          </div>
        </div>

      </div>
    </footer>
  );
}