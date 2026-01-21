"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const Carousel = () => {
    return (
        <div className="relative w-full mx-auto">

            <div className="swiper-button-prev custom-arrow">
                <ChevronLeft size={5} strokeWidth={2.2} />
            </div>

            <div className="swiper-button-next custom-arrow">
                <ChevronRight size={5} strokeWidth={2.2} />
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
                <SwiperSlide>
                    <img
                        src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/9f4394e2-ce1a-403a-0f0e-35245d398200/2k"
                        alt="slide 1"
                        className="max-w-full h-[600px] object-center"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/4191af50-7a0b-4b60-8d21-d5a3d3980300/2k"
                        alt="slide 2"
                        className="max-w-full h-[600px] object-center"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/66023542-b00a-4df2-0ace-de60a5f15600/2k"
                        alt="slide 3"
                        className="max-w-full h-[600px] object-center"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/a0ed3a53-4533-426a-94c8-3b2d362fbc00/2k"
                        alt="slide 4"
                        className="max-w-full h-[600px] object-center"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel