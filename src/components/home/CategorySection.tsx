import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/service/category";

const CategorySection = async () => {
  const categoriesData = await getCategories();
  // console.log(categoriesData);
  

  // API Response Handle 
  const categories = Array.isArray(categoriesData)
    ? categoriesData
    : categoriesData?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900">Ready for Anything</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mt-2 mb-10">
        <p className="text-gray-500 max-w-xl">
          Select your pursuit and find specially curated gear kits for every
          training and sessions
        </p>

        <Link
          href="/categories"
          className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          View All Categories <span>→</span>
        </Link>
      </div>

      {/* Categories Grid (Top 4 Categories) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.slice(0, 4).map((category: any) => (
          <div
            key={category.id}
            className="group relative h-95 w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-900"
          >
            
            {category.imgURL && (
              <Image
                src={category.imgURL}
                alt={category.name}
                fill
                priority
                sizes="(max-inline-size: 640px) 100vw, (max-inline-size: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text Content inside Card */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-2xl font-bold tracking-tight">
                {category.name}
              </h3>
              <p className="text-xs text-gray-300 mt-1 font-medium line-clamp-2">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;