type Props = {};

const FeaturedCollection = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between !mb-6">
        <h1 className="text-lg text-blue-600 dark:text-blue-400 font-bold">
          FeaturedCollection
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-0 sm:mt-0">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden h-[650px] shadow-md relative group cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/eb62164e-8787-40cd-7545-466a0074c200/public"
            alt=""
            className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <h2 className="text-white font-bold text-sm sm:text-base !mb-2">
              Crewnecks
            </h2>
            <button className="bg-white text-gray-900 !px-3 !py-1.5 sm:!px-4 sm:!py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md relative group cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/7e9810c9-7746-4218-b3bd-2b7ba1abfb00/public"
            alt=""
            className="w-full aspect-square md:h-[737px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-300"></div>

          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <h2 className="text-white font-bold text-sm sm:text-base !mb-2">
              Jackets
            </h2>
            <button className="bg-white text-gray-900 !px-3 !py-1.5 sm:!px-4 sm:!py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden aspect-square shadow-md relative group cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/4e5e9db9-72d6-4e3b-15c4-34a38cfb5b00/public"
            alt=""
            className="w-full aspect-square md:h-[737px] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <h2 className="text-white font-bold text-sm sm:text-base !mb-2">
              Women Wear
            </h2>
            <button className="bg-white text-gray-900 px-3 !px-3 !py-1.5 sm:!px-4 sm:!py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden aspect-square shadow-md relative group cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/2d659dbd-e05a-4cd6-7772-4943d1820000/public"
            alt=""
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-30 transition-all duration-300"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <h2 className="text-white font-bold text-sm sm:text-base !mb-2">
              Tops
            </h2>
            <button className="bg-white text-gray-900 px-3 !px-3 !py-1.5 sm:!px-4 sm:!py-2 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedCollection;
