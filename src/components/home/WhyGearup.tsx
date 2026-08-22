import { ShieldCheck, Globe, Headset } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Insured Gear",
    description:
      "Accidents happen on the trail. Every rental includes comprehensive damage insurance for total peace of mind.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "We deliver to hotels, trailheads, or local hubs in over 40 countries. Pick up here, drop off there.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description:
      "Our team consists of veteran outdoorspeople. We help you pick the right gear for your specific journey.",
  },
];

const WhyGearUpSection = () => {
  return (
    <section className="bg-[#181a1b] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Why GearUp?
        </h2>
        {/* Orange Accent Line */}
        <div className="w-12 h-1 bg-orange-600 mx-auto mt-3 rounded-full" />

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#242728] border border-gray-800/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-orange-950/40 border border-orange-800/30 flex items-center justify-center text-orange-500 mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyGearUpSection;

