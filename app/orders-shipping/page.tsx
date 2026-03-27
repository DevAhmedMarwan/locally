import React from 'react';
import { FaFileAlt, FaCheck, FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";

export default function OrdersShippingPage() {
  return (
    <div className="bg-[#0f141e] text-white min-h-screen !pt-8 !pb-24 font-sans flex flex-col items-center">
      {/* Top Header */}
      <div className="text-center !mb-20">
        <h1 className="text-3xl md:text-4xl font-medium text-white !mb-2">Orders & Shipping</h1>
        <p className="text-gray-400 text-lg md:text-xl">Everything you need to know about orders, shipping, and returns</p>
      </div>

      {/* Orders Icon & Title */}
      <div className="flex flex-col items-center !mb-10">
        <div className="bg-[#1c2e4a] text-blue-500 rounded-full !p-4 !mb-4 flex items-center justify-center border border-[#2a4365]">
          <FaFileAlt className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-extrabold text-white !mb-1">Orders</h2>
        <p className="text-gray-400 text-lg">Track and manage your orders</p>
      </div>

      {/* Main Container */}
      <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl w-full max-w-4xl !p-6 md:!p-8 flex flex-col gap-6 !mx-4 md:!mx-auto">
        
        {/* Section 1: How to track */}
        <div className="bg-[#283548] rounded-lg !p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 !mb-6">
            <div className="text-blue-400 flex items-center justify-center bg-blue-400/10 !p-3 rounded-lg">
              <FaRegCheckCircle className="w-5 h-5 " />
            </div>
            <h3 className="text-lg font-bold text-white capitalize">How to Track Your Order</h3>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <span className="text-gray-300 text-sm font-medium">Log in to your account</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <span className="text-gray-300 text-sm font-medium">Go to 'My Orders' section</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <span className="text-gray-300 text-sm font-medium">Click on the order you want to track</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">4</div>
              <span className="text-gray-300 text-sm font-medium">View real-time tracking information</span>
            </li>
          </ul>
        </div>

        {/* Section 2: Order Status Explained */}
        <div className="bg-[#283548] rounded-lg !p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 !mb-6">
            <div className="text-green-500 flex items-center justify-center bg-green-500/10 !p-3 rounded-lg">
              <FaRegCheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white capitalize">Order status explained</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1 */}
            <div className="border border-gray-600/50 rounded-lg !p-4 bg-transparent border-[#334155]">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
                  <FaCheck className="w-3 h-3" />
                </div>
                <h4 className="text-white font-bold text-lg">Pending</h4>
              </div>
              <p className="text-gray-400 text-lg leading-tight !ml-8">Your order has been received and is awaiting processing</p>
            </div>
            {/* Box 2 */}
            <div className="border border-gray-600/50 rounded-lg !p-4 bg-transparent border-[#334155]">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white shrink-0">
                  <FaCheck className="w-3 h-3" />
                </div>
                <h4 className="text-white font-bold text-sm">Processing</h4>
              </div>
              <p className="text-gray-400 text-md leading-relaxed !ml-8">We are preparing your order for shipment</p>
            </div>
            {/* Box 3 */}
            <div className="border border-gray-600/50 rounded-lg !p-4 bg-transparent border-[#334155]">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 rounded-full w-5 h-5 flex items-center justify-center text-white shrink-0">
                  <FaCheck className="w-3 h-3" />
                </div>
                <h4 className="text-white font-bold text-sm">Shipped</h4>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed !ml-8">Your order is on its way to you</p>
            </div>
            {/* Box 4 */}
            <div className="border border-gray-600/50 rounded-lg !p-4 bg-transparent border-[#334155]">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white shrink-0">
                  <FaCheck className="w-3 h-3" />
                </div>
                <h4 className="text-white font-bold text-sm">Delivered</h4>
              </div>
              <p className="text-gray-400 text-md leading-relaxed !ml-8">Your order has been successfully delivered</p>
            </div>
          </div>
        </div>

        {/* Section 3: Order Cancellation */}
        <div className="bg-[#283548] rounded-lg !p-6 border border-gray-700/50">
          <div className="flex items-center gap-3 !mb-4">
            <div className="text-red-500 text-xl flex items-center justify-center bg-red-500/10 !p-3 rounded-lg">
               <MdOutlineCancel />
            </div>
            <h3 className="text-lg font-bold text-white capitalize">Order Cancellation</h3>
          </div>
          
          <p className="text-gray-300 text-sm !mb-4 font-medium">You can cancel your order before it has been shipped. Here's how:</p>
          <ul className="flex flex-col gap-3 !ml-2">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-1.5 shrink-0 border border-red-500"></div>
              <span className="text-gray-300 text-sm font-medium">Orders can be cancelled within 24 hours of placement</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-1.5 shrink-0 border border-red-500"></div>
              <span className="text-gray-300 text-sm font-medium">Go to 'My Orders' and click 'Cancel Order'</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-1.5 shrink-0 border border-red-500"></div>
              <span className="text-gray-300 text-sm font-medium">Refunds will be processed within 5-7 business days</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}