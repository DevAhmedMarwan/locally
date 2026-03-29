"use client";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const params = useParams();// → عشان تعرف نوع الكاتيجوري من الـ URL
  const currentType = typeof params?.type === "string" ? params.type : "women";
  const pathname = usePathname(); // → عشان تعرف أنت في أنهي صفحة
  const isCategoryPage = pathname.includes("/category/");
  return (
    <header className="w-full bg-[#2060d3]">
      {/* Top Bar */}
      <div className="!mx-auto flex justify-between items-center h-[64px] !px-4 md:!px-8 lg:!px-16 lg:justify-center lg:gap-10">
        {/* Logo */}
        <Link href="/">
          <img
            className="w-[78px] h-[40px] object-contain"
            src="https://locallyeg.com/locally-logo.png"
            alt="logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/category/women"
            className="!text-white text-lg font-semibold"
          >
            Women
          </Link>
          <Link
            href="/category/men"
            className="!text-white text-lg font-semibold"
          >
            Men
          </Link>
          <Link
            href="/category/kids"
            className="!text-white text-lg font-semibold"
          >
            Kids
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex relative items-center">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-[360px] lg:w-[120px] xl:w-[360px] border rounded-md !pl-8 !py-1.5"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="!px-2 text-md font-bold !text-white hover:!text-gray-300 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="!px-2 !py-2 !text-white hover:bg-gray-400 rounded-md font-extrabold transition"
          >
            Register
          </Link>

          <Link href="/favorites" className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
            <FaHeart className="text-xl" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="!p-2 bg-white/10 hover:bg-white/20 !text-white border-0"
              >
                English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 p-2">
              <DropdownMenuRadioGroup>
                <button className="w-full !p-1 text-end">English</button>
                <DropdownMenuSeparator />
                <button className="w-full !p-1 text-end">العربية</button>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
            <MdLightMode className="text-xl" />
          </button>

          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition cursor-pointer"
          >
            <FaCartShopping className="text-xl" />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-3 lg:hidden cursor-pointer">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition"
          >
            <FaCartShopping className="text-xl" />
          </button>
          <button
            className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-blue-700 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="!px-4 !py-6 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="min-w-full border rounded-md !pl-8 !py-1.5"
            />
          </div>
          <div className="flex flex-col gap-5">
            <Link
              href="/category/women"
              className="!text-white text-lg font-semibold"
            >
              Women
            </Link>
            <Link
              href="/category/men"
              className="!text-white text-lg font-semibold"
            >
              Men
            </Link>
            <Link
              href="/category/kids"
              className="!text-white text-lg font-semibold"
            >
              Kids
            </Link>
          </div>
          <div className="flex items-center gap-3 justify-between md:justify-between">
            <Link href="/login" className="!text-white font-bold">
              Login
            </Link>
            <Link href="/login" className="!text-white font-bold">
              Register
            </Link>
            <Link href="/favorites" className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition text-center w-max mx-auto">
              <FaHeart className="text-xl" />
            </Link>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="!p-2 bg-white/10 hover:bg-white/20 !text-white border-0"
                  >
                    English
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32 p-2">
                  <DropdownMenuRadioGroup>
                    <button className="w-full !p-1 text-end">English</button>
                    <DropdownMenuSeparator />
                    <button className="w-full !p-1 text-end">العربية</button>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
              <MdLightMode className="text-xl" />
            </button>
          </div>
        </div>
      </div>


      <div className="w-full bg-[#6292e7]">
        <div className="h-[48px] !max-w-7xl !mx-auto !px-2 md:!px-4 lg:!px-14 overflow-x-scroll lg:overflow-x-hidden flex items-center">
          <div className="flex items-center gap-1">
            <Link
              href={
                isCategoryPage
                  ? `/category/${currentType}/all-products`
                  : "/all-products"
              }
              className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
            >
              All Products
            </Link>
            <Link
              href={
                isCategoryPage ? `/category/${currentType}/new-in` : "/new-in"
              }
              className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
            >
              New In
            </Link>
            <Link
              href={
                isCategoryPage
                  ? `/category/${currentType}/best-sellers`
                  : "/best-sellers"
              }
              className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
            >
              Best Sellers
            </Link>
            {!isCategoryPage && (
              <>
                <Link
                  href="/brands"
                  className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
                >
                  Brands
                </Link>
                <Link
                  href="/weekly-looks/saturday"
                  className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
                >
                  Weekly Looks
                </Link>
                <Link
                  href="/our-stores"
                  className="!px-3 !py-2 rounded-md !text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10"
                >
                  Our Stores
                </Link>
              </>
            )}
          </div>
        </div>
      </div>



      {/* Cart Dropdown */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40 lg:hidden !cursor-pointer" 
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-[64px] right-0 md:right-0 lg:right-[calc(50vw-500px)] xl:right-[calc(50vw-600px)] 2xl:right-[calc(50vw-700px)] w-full md:w-[400px] bg-[#222E3C] shadow-2xl z-50 !p-6 md:rounded-b-md flex flex-col items-center">
            <button 
              onClick={() => setIsCartOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-12 left-0 w-full border-b border-gray-600" />

            <div className="!mt-12 text-white font-bold text-xl text-center ">
              Your shopping bag is empty
            </div>
            <div className="!mt-2 text-gray-300 text-sm text-center">
              discover Locally and add products to your Bag
            </div>
        
            <div className="!mt-8 w-2/3 mx-auto flex flex-col gap-3">
              <Link 
                href="/all-products" 
                onClick={() => setIsCartOpen(false)} 
                className="w-full !py-3 bg-[#2563EB] hover:bg-[#1D4ED8] !text-white text-center font-semibold rounded-md transition-colors"
              >
                All Products
              </Link>
              <Link 
                href="/new-in" 
                onClick={() => setIsCartOpen(false)} 
                className="w-full !py-3 bg-[#2563EB] hover:bg-[#1D4ED8] !text-white text-center font-semibold rounded-md transition-colors"
              >
                New In
              </Link>
              <Link 
                href="/best-sellers" 
                onClick={() => setIsCartOpen(false)} 
                className="w-full !py-3 bg-[#2563EB] hover:bg-[#1D4ED8] !text-white text-center font-semibold rounded-md transition-colors"
              >
                Best Sellers
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
