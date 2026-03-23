import React from "react";
import { products, pages } from "@/data/products";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
const BrandsPage = () => {
  const FeaturedBrands = pages.find((p) => p.type === "FeaturedBrands");
  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="!py-8">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white !mb-2">
              {FeaturedBrands?.heading}
            </h1>
            <p className="text-lg font-bold text-gray-400 dark:text-gray-400">
              {FeaturedBrands?.paragraph}
            </p>
          </div>
          <div className="flex justify-center items-center !mt-15">
            <InputGroup className="max-w-md !px-4 !py-6 bg-gray-800 border-gray-700">
              <InputGroupInput className="!pl-3 font-bold text-2xl" placeholder="Search brands..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6 sm:!py-8 lg:!pb-12">
        <div className="space-y-8">
          <div className="!mb-8">
            <div></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="relative !max-w-full !max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square !p-4 flex items-center justify-center">
                  <div className="optimized-image-container relative max-w-full max-h-full object-contain pointer-events-none">
                    <img
                      src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public?width=200&height=200&quality=85&format=webp&fit=contain"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="!p-3 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsPage;
