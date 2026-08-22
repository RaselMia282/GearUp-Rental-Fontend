import { trendingNow } from "@/service/trending";

const TrendingNow = async () => {
  const trendingData = await trendingNow();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Trending Now</h2>

      {/* Grid Layout - Responsive 1 to 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingData?.slice(0, 3).map((item: any) => (
          <div
            key={item.id || item._id}
            className="group border border-gray-100 rounded-2xl p-4 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl h-52 bg-gray-100">
              
              <img
                src={item.image}
                alt={item.title || item.name || "Trending Gear"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Brand Badge */}
              {item.brand && (
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                  {item.brand}
                </span>
              )}
            </div>

            {/* Content Body */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                  {item.title || item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Quantity Footer */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-gray-900">
                    ${item.pricePerDay || 0}
                  </span>
                  <span className="text-xs text-gray-400"> / day</span>
                </div>

                <span
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                    item.availableQuantity > 0
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {item.availableQuantity > 0
                    ? `${item.availableQuantity} in stock`
                    : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;