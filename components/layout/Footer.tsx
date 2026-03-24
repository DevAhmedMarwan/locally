import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white">
      <div className="!max-w-7xl !mx-auto !py-12 !px-4 sm:!px-6 lg:!px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="!mb-1">
              <img
                src="https://locallyeg.com/locally-logo.png"
                alt=""
                className="w-40 h-auto text-white w-40"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed !mb-6">
              Your trusted online shopping destination
            </p>
            <div className="flex items-center gap-4 !mb-4">
              <Link
                href={"#"}
                className="!p-2 rounded text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href={"#"}
                className="!p-2 rounded text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center !px-3 !py-2 text-sm font-medium transition-colors rounded-md text-white hover:text-white/90 bg-white/10 hover:bg-white/20"
                  >
                    <span>English</span>
                    <span className="">
                      <MdKeyboardArrowDown />
                    </span>
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
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm border-b border-white/30 !pb-2">
                  Shop
                </h4>
                <ul className="flex flex-col gap-2 !py-3 text-white/80 text-sm">
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Kids
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm border-b border-white/30 !pb-2">
                  Explore
                </h4>
                <ul className="flex flex-col gap-2 !py-3 text-white/80 text-sm">
                  <li>
                    <Link
                      href={"#"}
                      font-bold
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      New In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Best Sellers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm border-b border-white/30 !pb-2">
                  Help & Support
                </h4>
                <ul className="flex flex-col gap-2 !py-3 text-white/80 text-sm">
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Orders & Shipping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Returns & Refunds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Policies
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm border-b border-white/30 !pb-2">
                  About Locally
                </h4>
                <ul className="flex flex-col gap-2 !py-3 text-white/80 text-sm">
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Our Stores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-white cursor-pointer transition-colors font-bold"
                    >
                      Weekly Look
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="!mt-10 !pt-6 border-t border-white/20 text-center text-white/80">
          <p className="">
            "Copy Rights 2025 ©. All Rights Reserved - Powered By"
            <Link
              href={"#"}
              className="text-white hover:text-gray-300 underline transition-colors"
            >
              Teleoceans.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
