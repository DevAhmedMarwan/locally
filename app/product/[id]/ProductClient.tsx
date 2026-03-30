"use client";

import React, { useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { Plus, Minus, ChevronDown, Check, TriangleAlert } from "lucide-react";
import Link from "next/link";

interface ProductType {
  id: number;
  name: string;
  price: string;
  desc?: string;
  colors: string[];
  discount?: string;
  brands?: string;
}

export default function ProductClient({
  product,
  galleryImages,
}: {
  product: ProductType;
  galleryImages: string[];
}) {
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Parses realistic original price from discount string (e.g. "-15%") if available
  let originalPrice = "";
  if (product.discount && product.discount.includes("%")) {
    const discountNum = parseInt(product.discount.replace(/[^0-9]/g, ""));
    const priceNum = parseInt(product.price.replace(/[^0-9]/g, ""));
    if (!isNaN(discountNum) && !isNaN(priceNum) && discountNum > 0) {
      originalPrice = Math.round(priceNum / (1 - discountNum / 100)) + " EGP";
    }
  }

  // Zoom logic
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const baseImgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!baseImgRef.current) return;
    const { left, top, width, height } = baseImgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="text-white !max-w-7xl !mx-auto !py-1 text-[#E2E8F0]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 !mb-8 flex items-center !space-x-4">
        <Link href="/" className="hover:text-white transition hover:!text-blue-500">Home</Link>
        <span>/</span>
        <Link href="/all-products" className="hover:text-white transition hover:!text-blue-500">Products</Link>
        <span>/</span>
        <span className="text-white font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column - Gallery */}
        <div className="lg:w-[60%] flex flex-col-reverse md:flex-row gap-4 h-[500px] md:h-[450px]">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-3 md:w-[90px] overflow-x-auto md:overflow-y-auto no-scrollbar !pb-2 md:!pb-0">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-[70px] h-[90px] md:w-full md:h-[110px] rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === img ? "border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Zoomable Image */}
          <div className="flex-1 rounded-lg overflow-hidden bg-[#2a303c] relative h-full flex items-center justify-center">
            <div 
              className="relative w-full h-full overflow-hidden cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={baseImgRef}
                src={activeImage}
                alt={product.name}
                className={`w-full h-full object-contain transition-transform duration-100 ease-out`}
                style={{
                  transformOrigin: `${position.x}% ${position.y}%`,
                  transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                }}
              />
              {/* Overlay Prompt */}
              {!isZoomed && (
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs !px-3 !py-1.5 rounded-full shadow-lg border border-white/10 flex items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Hover to explore
                </div>
              )}
            </div>

            <button className="absolute top-4 right-4 z-10 !p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-red-500/80 transition-colors">
              <FaHeart className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:w-[45%] flex flex-col !pt-2">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tight !mb-4">{product.name}</h1>
          
          {/* Price Block */}
          <div className="flex flex-col !mb-8 gap-2 border-b border-gray-700/50 !pb-6">
            {product.discount && (
              <div className="flex items-center gap-3">
                <span className="bg-blue-600 !px-2 !py-0.5 rounded text-white text-sm font-bold tracking-wider">
                  {product.discount}
                </span>
                <span className="text-gray-400 text-sm font-medium tracking-wide">Discount</span>
              </div>
            )}
            <div className="flex items-end gap-3 !mt-1">
              <span className="text-blue-400 text-2xl font-black tracking-tighter shadow-blue-500/20 drop-shadow-lg">
                {product.price}
              </span>
              {originalPrice && (
                <span className="text-gray-500 text-[1.1rem] font-bold line-through decoration-gray-500 decoration-2 !mb-0.5">
                  {originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Colors Selection */}
          <div className="!mb-6">
            <h3 className="text-white font-bold !mb-3 text-sm tracking-wide">Colors</h3>
            <div className="flex gap-4">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                     selectedColor === color 
                     ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-[#1c2331] shadow-[0_0_12px_rgba(59,130,246,0.6)]" 
                     : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === color && (color === "rgb(255, 255, 255)" || color === "#fff" || color === "white" 
                    ? <Check size={14} className="text-black font-bold"/> 
                    : <Check size={14} className="text-white font-bold"/>)
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="!mb-2 relative">
            <h3 className="text-white font-bold !mb-3 text-sm tracking-wide">Size</h3>
            <div className="relative">
              <button
                onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                className={`w-full flex justify-between items-center bg-[#252E3E]/80 border ${isSizeDropdownOpen ? "border-blue-500 rounded-t-lg" : "border-gray-600 rounded-lg"} !px-4 !py-3 text-sm font-medium hover:border-blue-400 transition-colors cursor-pointer`}
              >
                <span>{selectedSize || "Select Size"}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${isSizeDropdownOpen ? "rotate-180 text-blue-400" : "text-gray-400"}`} />
              </button>
              
              {isSizeDropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-[#2A3445] border border-gray-600 border-t-0 rounded-b-lg shadow-xl z-20 overflow-hidden">
                  <div className="flex flex-col">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setIsSizeDropdownOpen(false);
                        }}
                        className={`text-left !px-4 !py-3 text-sm hover:bg-[#323E52] transition-colors cursor-pointer ${
                          selectedSize === size ? "bg-blue-600/20 text-blue-300 font-bold" : "text-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stock Alert Warning - visible when size is selected */}
          <div className={`transition-all duration-400 overflow-hidden ${selectedSize ? "max-h-24 opacity-100 !my-4" : "max-h-0 opacity-0 !my-0"}`}>
            <div className="border border-orange-500/30 bg-orange-500/10 rounded-lg !p-3">
               <div className="flex items-center !gap-2 text-orange-400 font-bold !mb-1">
                 <TriangleAlert size={16} />
                 <span>Only 3 left in stock!</span>
               </div>
               <p className="text-gray-400 text-xs font-medium !ml-6">For Size {selectedSize}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col !gap-3 !mt-6">
            <button
              disabled={!selectedSize}
              className={`w-full !py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 transform active:scale-[0.98] ${
                selectedSize 
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]" 
                : "bg-gray-600/50 text-gray-400 cursor-not-allowed border border-gray-600"
              }`}
            >
              Add to Cart
            </button>
            <button className="w-full !py-3.5 rounded-lg bg-[#374151] hover:bg-[#4B5563] text-white font-bold text-sm tracking-wide transition-colors cursor-pointer">
              Buy Now
            </button>
          </div>

          {/* Accordions */}
          <div className="!mt-12 flex flex-col !gap-4">
            {[
              { id: "detail", title: "Product Detail", content: product.desc || "A high quality product carefully crafted." },
              { id: "track", title: "Track Order", content: "Track your order through Go to Profile > My Orders > Track Order." },
              { id: "store", title: "Store Availability", content: "All brands available on the website are available in stores." },
              { id: "shipping", title: "Shipping & Return", content: "3-5 working days, hours may differ depending on holidays." },
            ].map((acc) => (
              <div key={acc.id} className="bg-[#242D3D] rounded-lg overflow-hidden border border-gray-700/50">
                <button
                  onClick={() => toggleAccordion(acc.id)}
                  className="w-full !px-5 !py-4 flex justify-between items-center hover:bg-[#2A3445] transition-colors cursor-pointer"
                >
                  <span className="text-blue-400 font-bold text-sm">{acc.title}</span>
                  <span className="text-blue-500">
                    {openAccordion === acc.id ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div 
                  className={`!px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === acc.id ? "max-h-40 !py-4 border-t border-gray-700/50 opacity-100" : "max-h-0 !py-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-sm font-medium leading-relaxed">{acc.content}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
