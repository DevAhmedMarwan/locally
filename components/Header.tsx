"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import { MdLightMode } from "react-icons/md"
import { FaCartShopping } from "react-icons/fa6"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-[#2060d3]">
            {/* Top Bar */}
            <div className="mx-auto flex justify-between items-center h-[64px] !px-4 md:!px-8 lg:!px-16 lg:justify-center lg:gap-6">

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
                    <Link href="/women" className="!text-white text-lg font-semibold">Women</Link>
                    <Link href="/men" className="!text-white text-lg font-semibold">Men</Link>
                    <Link href="/kids" className="!text-white text-lg font-semibold">Kids</Link>
                </nav>

                {/* Desktop Search */}
                <div className="hidden lg:flex relative items-center">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[360px] border rounded-md !pl-8 !py-1.5"
                    />
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/login" className="!px-2 text-md font-bold !text-white hover:!text-gray-300 transition">
                        Login
                    </Link>
                    <Link
                        href="/login"
                        className="!px-2 !py-2 !text-white hover:bg-gray-400 rounded-md font-extrabold transition"
                    >
                        Register
                    </Link>

                    <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
                        <FaHeart className="text-xl" />
                    </button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="!p-2 bg-white/10 hover:bg-white/20 !text-white border-0">
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

                    <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
                        <FaCartShopping className="text-xl" />
                    </button>
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
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
                className={`lg:hidden bg-blue-700 transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
                        <Link href="/women" className="!text-white text-lg font-semibold">Women</Link>
                        <Link href="/men" className="!text-white text-lg font-semibold">Men</Link>
                        <Link href="/kids" className="!text-white text-lg font-semibold">Kids</Link>
                    </div>
                    <div className="flex items-center gap-3 justify-between md:justify-between">
                        <Link href="/login" className="!text-white font-bold">Login</Link>
                        <Link href="/login" className="!text-white font-bold">Register</Link>
                        <button className="!p-2 rounded-md bg-white/10 hover:bg-white/20 !text-white transition">
                            <FaHeart className="text-xl" />
                        </button>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="!p-2 bg-white/10 hover:bg-white/20 !text-white border-0">
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
                <div className="h-[48px] mx-auto !px-4 overflow-x-scroll md:!px-8 lg:!px-20 lg:overflow-x-hidden flex items-center">
                    <div className="flex items-center gap-1">
                        <Link href="/allProducts" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">All Products</Link>
                        <Link href="/newIn" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">New In</Link>
                        <Link href="/bestSellers" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">Best Sellers</Link>
                        <Link href="/brands" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">Brands</Link>
                        <Link href="/weeklyLooks" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">Weekly Looks</Link>
                        <Link href="/ourStores" className="!px-3 !py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !text-white/90 hover:!text-white hover:bg-white/10">Our Stores</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
