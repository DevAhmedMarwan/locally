"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { products } from "@/data/products";

const ProductWeeklyLooks = () => {
  return (
    <div className="relative">
      
      {/* Buttons */}
      <button className="best-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 text-gray-600 rounded-full hover:bg-black hover:text-white hover:scale-110 transition">
        <FaChevronLeft />
      </button>

      <button className="best-next absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 text-gray-600 rounded-full hover:bg-black hover:text-white hover:scale-110 transition">
        <FaChevronRight />
      </button>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".best-prev",
          nextEl: ".best-next",
        }}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 py-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-[#2a303c] rounded-lg relative overflow-hidden group">

              {/* Image Area */}
              <div className="relative h-[250px] lg:h-[400px]">

                {/* Heart */}
                <button className="absolute top-3 right-3 z-10 !p-2 rounded-full bg-gray-500/20 hover:bg-red-500/80 transition">
                  <FaHeart className="text-xl text-gray-300 hover:text-white" />
                </button>

                {/* Image Swiper */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false, // 🔥 يخليها متقفش
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  loopedSlides={2} // 🔥 مهم عشان الدوتس تبقى 2 بس
                  slidesPerView={1}
                  className="h-full"
                >
                  {/* Front */}
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={product.imageFront}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* Brand */}
                      <img
                        src={product.brands}
                        className="absolute left-4 bottom-4 w-10 h-10 rounded-full border-2 border-white"
                      />

                      {/* Discount */}
                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-blue-600 !px-2 !py-1 rounded text-white text-xs font-bold">
                          {product.discount}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>

                  {/* Back */}
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={product.imageBack}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <img
                        src={product.brands}
                        className="absolute left-4 bottom-4 w-10 h-10 rounded-full border-2 border-white"
                      />

                      {product.discount && (
                        <div className="absolute top-2 left-2 bg-blue-600 !px-2 !py-1 rounded text-white text-xs font-bold">
                          {product.discount}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Info */}
              <div className="!px-4 !py-3 space-y-2 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold text-sm line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-bold text-blue-400">
                    {product.price}
                  </p>
                </div>

                <p className="text-gray-400 text-sm line-clamp-1">
                  {product.desc}
                </p>

                <div className="flex gap-2 !pt-2 flex-wrap">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border-2"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductWeeklyLooks;