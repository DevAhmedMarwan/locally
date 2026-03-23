"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: [
      "rgb(10, 10, 10)",
      "rgb(255, 128, 195)",
      "rgb(167, 74, 57)",
      "rgb(102, 102, 102)",
      "rgb(57, 38, 151)",
      "rgb(128, 128, 128)",
    ],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/e55de18f-8ef4-403f-c09d-1b7508593600/public",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/e0f956dc-b160-446e-2a42-bbe0e7949d00/public",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public",
    discount: "-50%",
  },
  {
    id: 2,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: [
      "rgb(167, 74, 57)",
      "rgb(102, 102, 102)",
      "rgb(57, 38, 151)",
      "rgb(128, 128, 128)",
    ],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/a1507908-b176-415e-697d-adfec94e1e00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/96f17d30-31b4-44b8-c4e8-f0f1630a7a00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/218284d9-de29-48ac-1f9b-e55f6b0afe00/public",
  },
  {
    id: 3,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: ["rgb(10, 10, 10)", "rgb(255, 128, 195)", "rgb(167, 74, 57)"],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/71d596ab-3b8d-4d66-cde2-6de1f0885200/public",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/c791c132-9ab6-492f-1eb4-e7b28341d600/public",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/a9f42b3c-4953-44ea-15b9-9b5058e15b00/public",
    discount: "-50%",
  },
  {
    id: 4,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: ["rgb(167, 74, 57)", "rgb(102, 102, 102)"],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/96f17d30-31b4-44b8-c4e8-f0f1630a7a00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/a1507908-b176-415e-697d-adfec94e1e00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/af9dc61b-2f77-47cc-44e1-565b67918900/public",
    discount: "-50%",
  },
  {
    id: 5,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: ["rgb(57, 38, 151)", "rgb(128, 128, 128)"],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/71d596ab-3b8d-4d66-cde2-6de1f0885200/public",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/c791c132-9ab6-492f-1eb4-e7b28341d600/public",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/7b820b5c-c337-4001-ea74-0991c393da00/public",
    discount: "-50%",
  },
  {
    id: 6,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: ["rgb(255, 128, 195)", "rgb(167, 74, 57)", "rgb(102, 102, 102)"],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/96f17d30-31b4-44b8-c4e8-f0f1630a7a00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/a1507908-b176-415e-697d-adfec94e1e00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/ec932b43-2b62-452d-90de-217e8ef60a00/public",
    discount: "-50%",
  },
  {
    id: 7,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: [
      "rgb(10, 10, 10)",
      "rgb(255, 128, 195)",
      "rgb(167, 74, 57)",
      "rgb(102, 102, 102)",
    ],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/71d596ab-3b8d-4d66-cde2-6de1f0885200/public",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/c791c132-9ab6-492f-1eb4-e7b28341d600/public",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/af9dc61b-2f77-47cc-44e1-565b67918900/public",
    discount: "-50%",
  },
  {
    id: 8,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: [
      "rgb(10, 10, 10)",
      "rgb(255, 128, 195)",
      "rgb(167, 74, 57)",
      "rgb(102, 102, 102)",
    ],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/35b36b55-c931-40fc-651c-117d0476b000/public?width=400&height=400&quality=80&format=webp&fit=cover",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/aefadc77-b9fe-4cda-e508-73ca35b11d00/public?width=400&height=400&quality=80&format=webp&fit=cover",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/218284d9-de29-48ac-1f9b-e55f6b0afe00/public",
  },
  {
    id: 9,
    name: "Ahmed Marwan",
    price: "1026 EGP",
    desc: "Junior Front End Developer",
    colors: [
      "rgb(10, 10, 10)",
      "rgb(255, 128, 195)",
      "rgb(167, 74, 57)",
      "rgb(102, 102, 102)",
    ],
    imageFront:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/71d596ab-3b8d-4d66-cde2-6de1f0885200/public",
    imageBack:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/c791c132-9ab6-492f-1eb4-e7b28341d600/public",
    brands:
      "https://imagedelivery.net/-C_C_oAtDrYq1E-MmtOfiw/af9dc61b-2f77-47cc-44e1-565b67918900/public",
    discount: "-50%",
  },
];

export default function BestSellers({ Clothes }) {
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
        <button className="!text-sm !text-blue-300 hover:!text-blue-700 font-medium transition cursor-pointer">
          View All
        </button>
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
