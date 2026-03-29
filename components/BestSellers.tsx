"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "@/data/products";
import Link from "next/link";


export default function BestSellers({ Clothes , pathname }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-between items-center !px-4 lg:!px-2">
        <h1 className="!text-lg text-blue-300 font-extrabold !text-xl">
          {Clothes}
        </h1>
        <Link href={{pathname}} className="!text-sm !text-blue-300 hover:!text-blue-700 font-medium transition cursor-pointer">
          View All
        </Link>
      </div>

      <button className="best-prev absolute left-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
        <FaChevronLeft />
      </button>
      <button className="best-next absolute right-7 top-1/2 -translate-y-1/2 z-20 bg-gray-200/60 !p-2 !text-gray-600 rounded-full hover:bg-black hover:!text-white hover:scale-125 cursor-pointer transition">
        <FaChevronRight />
      </button>
      {mounted && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".best-prev",
            nextEl: ".best-next",
          }}
          observer={true}
          observeParents={true}
          spaceBetween={20}
          slidesPerGroup={1}
          slidesPerView={2}
          loop={true}
          loopAdditionalSlides={4}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!px-4 !py-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-[#2a303c] rounded-lg relative">
                <div className="relative h-[250px] lg:h-[400px]">
                  <button className="absolute top-3 right-3 z-10 !p-2 rounded-full bg-gray-500/20 transition cursor-pointer">
                    <FaHeart className="text-xl text-gray-500" />
                  </button>

                  <Swiper
                    modules={[Autoplay, A11y, Pagination]}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    loop={true}
                    className="h-full rounded-tr-lg rounded-tl-lg overflow-hidden"
                  >
                    <SwiperSlide className="relative overflow-hidden">
                      <img
                        src={product.imageFront}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute left-5 bottom-5">
                        <img
                          src={product.brands}
                          alt=""
                          className="w-13 h-13 object-cover rounded-full"
                        />
                      </div>
                      {product.discount && (
                        <div className="absolute top-2 left-2 z-10 bg-blue-600 !px-2 !py-0.5 rounded-md">
                          <p className="text-white font-bold">
                            {product.discount}
                          </p>
                        </div>
                      )}
                    </SwiperSlide>

                    <SwiperSlide className="relative overflow-hidden">
                      <img
                        src={product.imageBack}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute left-5 bottom-5">
                        <img
                          src={product.brands}
                          alt=""
                          className="w-13 h-13 object-cover rounded-full"
                        />
                      </div>
                      {product.discount && (
                        <div className="absolute top-2 left-2 z-10 bg-blue-600 !px-2 !py-0.5 rounded-md">
                          <p className="text-white font-bold">
                            {product.discount}
                          </p>
                        </div>
                      )}
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="!px-4 !py-3 !space-y-3 cursor-pointer">
                  <div className="flex flex-col items-start md:flex flex-row items-center lg:flex justify-between items-center !mb-3">
                    <h3 className="!text-white font-bold !text-sm line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-bold text-blue-400">{product.price}</p>
                  </div>

                  <p className="!text-gray-400 text-md font-medium line-clamp-1">
                    {product.desc}
                  </p>

                  <div className="flex gap-2 pt-2 flex-wrap">
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
      )}
    </div>
  );
}
