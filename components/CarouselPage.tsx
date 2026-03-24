"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdArrowRightAlt } from "react-icons/md";
const CarouselPage = () => {
  return (
    <div className="relative w-full mx-auto">
      <div className="swiper-button-prev custom-arrow">
        <KeyboardArrowLeftRoundedIcon size={5} strokeWidth={1.5} />
      </div>

      <div className="swiper-button-next custom-arrow">
        <KeyboardArrowRightRoundedIcon size={5} strokeWidth={1.5} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide className="relative">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/c89d01a7-a93e-43d8-9747-4045cce53100/public"
            alt="slide 1"
            className="w-full h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-5 left-5">
            <div className="inline-flex items-center justify-center gap-2 cursor-pointer !px-3 !py-2 sm:!px-4 sm:!py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
              <span className="font-bold">Explore Now</span>

              <MdArrowRightAlt className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/767bd719-422a-4c35-0d7d-5cb25f32d200/public"
            alt="slide 2"
            className="w-full h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-8 left-7">
            <div className="inline-flex items-center justify-center gap-2 cursor-pointer !px-3 !py-2 sm:!px-4 sm:!py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
              <span className="font-bold">Explore Now</span>

              <MdArrowRightAlt className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselPage;
