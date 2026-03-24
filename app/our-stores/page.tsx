import { pages } from "@/data/products";

const OurStoresPage = () => {
  const OurStores = pages.find((p) => p.type === "OurStores");
  return (
    <section className="bg-gray-800 min-h-screen">
      <div className="!py-8">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white !mb-2">
              {OurStores?.heading}
            </h1>
            <p className="text-lg font-bold text-gray-400">
              {OurStores?.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div className="!py-8">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
          <div className="flex flex-col items-center !px-4 md:!px-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[35px] justify-center w-full !max-w-3xl">
              <div className="relative shadow-xl group w-full aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px]">
                {" "}
                <img
                  src="https://locallyeg.com/images/ourstores/CairoFestivalCity.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-[100px] rounded-bl-[100px]"
                />
                <a href="#" className="absolute inset-0"></a>
              </div>
              <div className="relative shadow-xl group w-full aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px]">
                {" "}
                <img
                  src="https://locallyeg.com/images/ourstores/Arkan.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-[100px] rounded-bl-[100px]"
                />
                <a href="#" className="absolute inset-0"></a>
              </div>
              <div className="relative shadow-xl group w-full aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px]">
                {" "}
                <img
                  src="https://locallyeg.com/images/ourstores/NewCairo.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-[100px] rounded-bl-[100px]"
                />
                <a href="#" className="absolute inset-0"></a>
              </div>
              <div className="relative shadow-xl group w-full aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px]">
                {" "}
                <img
                  src="https://locallyeg.com/images/ourstores/Citystars.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-[100px] rounded-bl-[100px]"
                />
                <a href="#" className="absolute inset-0"></a>
              </div>
              <div className="relative shadow-xl group w-full aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px]">
                {" "}
                <img
                  src="https://locallyeg.com/images/ourstores/ELRehab.jpg"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-[100px] rounded-bl-[100px]"
                />
                <a href="#" className="absolute inset-0"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStoresPage;
