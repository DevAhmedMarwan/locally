import Link from "next/link";
const KidsPage = () => {
  return (
    <section className="bg-[#2a303c] relative">
      <div className="!max-w-7xl !mx-auto !px-4 !py-12">
        <h1 className="text-3xl font-bold text-white !mb-8">Kids</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#2a303c]">
          <Link href="/category/kids/all-products">
          <div className="bg-[#2a303c] dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/096e8f28-ed5c-46b4-c93e-a0f164cec700/public"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="!p-6">
              <h2 className="text-xl font-semibold text-white dark:text-white !mb-3">
                All Products
              </h2>
              <button className="text-blue-600 dark:text-primary-400 font-medium hover:underline">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
          </Link>
          <Link href="/category/kids/kids">
          <div className="bg-[#2a303c] dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="h-48 relative overflow-hidden">
              <img
                src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/69c2c2ca-0eff-4fb2-98dd-74c043cab900/public"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="!p-6">
              <h2 className="text-xl font-semibold text-white dark:text-white !mb-3">
                Kids
              </h2>
              <button className="text-blue-600 dark:text-primary-400 font-medium hover:underline">
                {" "}
                View{" "}
              </button>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KidsPage;
