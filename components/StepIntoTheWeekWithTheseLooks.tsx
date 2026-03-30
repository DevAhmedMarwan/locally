"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { productsStepIntoTheWeekWithTheseLooks } from "@/data/products";


const StepIntoTheWeekWithTheseLooks = () => {
  return (
    <div className="relative !pb-10 lg:!mb-10">
      {/* Title */}
      <div className="flex justify-between items-center !px-4 lg:!px-2 !mb-4">
        <h1 className="text-xl text-blue-300 font-extrabold">
          Step into the week with these looks
        </h1>
      </div>

      {/* Navigation Buttons */}
      <button className="featured-prev absolute left-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
        <FaChevronLeft />
      </button>
      <button className="featured-next absolute right-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
        <FaChevronRight />
      </button>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".featured-prev",
          nextEl: ".featured-next",
        }}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={false}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className=""
      >
        {productsStepIntoTheWeekWithTheseLooks.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col gap-3">
              {/* الصورة */}
              <Link href={product.href}>
                <div className="h-[300px] md:h-[550px] lg:h-[455px] cursor-pointer">
                  <Swiper
                    modules={[Autoplay, A11y]}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="h-full rounded-lg"
                  >
                    <SwiperSlide>
                      <img
                        src={product.imageFront}
                        alt={product.days}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Link>
              {/* اليوم تحت الصورة (مساحة ثابتة) */}
              <div className="flex items-start">
                <span className="text-xl text-blue-300 font-extrabold !pl-5">
                  {product.days}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StepIntoTheWeekWithTheseLooks;
