"use client";

import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className="bg-[#2a303c] rounded-lg block relative group">
      <div className="relative h-[250px] lg:h-[400px] rounded-t-lg overflow-hidden">
        <button 
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 z-10 !p-2 rounded-full bg-gray-500/20 transition cursor-pointer hover:bg-white/20"
        >
          <FaHeart className="text-xl text-gray-500" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <img
              src={product.imageFront}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={product.imageBack}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="absolute left-5 bottom-5 z-10">
          <img
            src={product.brands}
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>

        {product.discount && (
          <div className="absolute top-2 left-2 z-10 bg-blue-600 !px-2 !py-0.5 rounded-md">
            <p className="text-white font-bold">{product.discount}</p>
          </div>
        )}
      </div>

      <div className="!px-4 !py-3 space-y-3 cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-bold text-sm line-clamp-1">
            {product.name}
          </h3>
          <p className="font-bold text-blue-400">{product.price}</p>
        </div>

        <p className="text-gray-400 text-md font-medium line-clamp-1">
          {product.desc}
        </p>

        <div className="flex gap-2 !pt-2 flex-wrap">
          {product.colors.map((color: string, i: number) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;