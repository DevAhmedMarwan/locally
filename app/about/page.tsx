"use client";

import React from 'react';
import Link from 'next/link';
import { FiInfo, FiUsers, FiTag, FiLifeBuoy, FiSmartphone } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import { MdOutlineVerified } from 'react-icons/md';

const AboutPage = () => {
  return (
    <div className="bg-[#0f141e] min-h-screen font-sans flex flex-col">
      {/* Breadcrumb section */}
      <div className="border-b border-gray-700/50 bg-[#151b27]">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-4 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:!text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400 font-medium">About Us</span>
        </div>
      </div>

      {/* Header section */}
      <div className="bg-[#151b27] !py-12 md:!py-12 border-b border-gray-700/50 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">About Us</h1>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-12 md:!py-20 w-full flex-grow">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center !mb-16">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight !mb-6 leading-tight">
              Discover & Shop Egypt's<br />Best Local Brands
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Locally connects you with 100+ top local designers, offering the
              latest fashion trends and a seamless shopping experience.
              <br className="hidden md:block" /> Download our app or visit from your
              mobile browser!
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://locallyeg.com/locally-logo.png"
              alt="Locally Logo"
              className="max-w-full h-auto w-72 md:w-96 lg:w-[450px]"
            />
          </div>
        </div>

        {/* About Locally Banner */}
        <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-10 border border-gray-700/50 !mb-8">
          <div className="flex items-center gap-4 !mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
              <FiInfo className="w-5 h-5" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">About Locally</h3>
          </div>
          <p className="text-gray-300 text-md md:text-lg leading-relaxed">
            Locally is an innovative local brand store revolutionizing the fashion experience for young people founded by 4 young successful owners. With a passionate team, Locally offers immersive shopping, top-notch customer service, and the latest trends from over 100 local designers. We launched December 24, 2022 as the first ever local brands boutique in Egypt.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <BsBuilding className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">100+ Local Brands</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Discover unique fashion from Egypt's top local designers and brands, all in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <FiUsers className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">Founded by Young Entrepreneurs</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Created by 4 successful young owners passionate about revolutionizing fashion retail in Egypt.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <MdOutlineVerified className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">Pioneer in Egypt</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Launched in December 2022 as the first-ever local brands boutique in Egypt, setting new standards.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <FiTag className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">Latest Fashion Trends</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Stay ahead with the newest collections and trendiest pieces from local designers.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <FiLifeBuoy className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">Top-Notch Service</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Experience exceptional customer service with a dedicated team committed to your satisfaction.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#1c2434] rounded-xl !p-6 md:!p-8 border border-gray-700/50 flex flex-col h-full hover:border-gray-500/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 !mb-6 shrink-0">
              <FiSmartphone className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold text-white !mb-3">Seamless Experience</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Enjoy an immersive shopping experience with our easy-to-use app and mobile-friendly website.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;