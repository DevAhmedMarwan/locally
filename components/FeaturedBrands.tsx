"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
const products = [
  {
    id: 1,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/77518025-c829-43fe-c7c7-cbd8f65c9c00/public",
  },
  {
    id: 2,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/8eab7166-cd85-4313-3a90-01c93b916a00/public",
  },
  {
    id: 3,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/77518025-c829-43fe-c7c7-cbd8f65c9c00/public",
  },
  {
    id: 4,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/8eab7166-cd85-4313-3a90-01c93b916a00/public",
  },
  {
    id: 5,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/8eab7166-cd85-4313-3a90-01c93b916a00/public",
  },
  {
    id: 6,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/77518025-c829-43fe-c7c7-cbd8f65c9c00/public",
  },
  {
    id: 5,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/8eab7166-cd85-4313-3a90-01c93b916a00/public",
  },
  {
    id: 6,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/8eab7166-cd85-4313-3a90-01c93b916a00/public",
  },
  {
    id: 7,
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/77518025-c829-43fe-c7c7-cbd8f65c9c00/public",
  },
];
const FeaturedBrands = ({ Clothes , pathname }) => {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-between items-center !px-4 lg:!px-2">
          <h1 className="!text-lg text-blue-300 font-extrabold !text-xl">
            {Clothes}
          </h1>
          <Link href={{pathname}} className="!text-sm !text-blue-300 hover:!text-blue-700 font-medium transition cursor-pointer">
            View All
          </Link>
        </div>

        <button className="featured-prev absolute left-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
          <FaChevronLeft />
        </button>
        <button className="featured-next absolute right-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
          <FaChevronRight />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".featured-prev",
            nextEl: ".featured-next",
          }}
          observer={true}
          spaceBetween={20}
          slidesPerGroup={1}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="!px-4 !py-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-[#2a303c] rounded-lg relative">
                <div className="relative h-[120px] md:h-[150px] lg:h-[200px]">
                  <Swiper
                    modules={[Autoplay, A11y]}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="h-full rounded-md"
                  >
                    <SwiperSlide>
                      <img
                        src={product.imageFront}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedBrands;
