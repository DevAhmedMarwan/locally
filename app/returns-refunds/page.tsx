import React from 'react';
import { FaCheckCircle, FaRegClock, FaCheck, FaTimes, FaClipboardList, FaDollarSign, FaExclamationTriangle, FaExchangeAlt, FaRegCheckCircle } from 'react-icons/fa';

export default function ReturnsRefundsPage() {
  return (
    <div className="bg-[#0f141e] text-white min-h-screen !pt-8 !pb-24 font-sans flex flex-col items-center !px-4 md:!px-8">
      {/* Top Header */}
      <div className="text-center !mb-16">
        <h1 className="text-3xl md:text-4xl font-medium text-white !mb-2">Returns & Refunds</h1>
        <p className="text-gray-400 text-lg md:text-xl">Easy returns and fast refunds - Your satisfaction is our priority</p>
      </div>

      {/* Return Policy Title Section */}
      <div className="flex flex-col items-center !mb-10 text-center">
        <div className="bg-[#1c2e4a] text-blue-500 rounded-full !p-3 !mb-4 border border-[#2a4365] flex items-center justify-center">
          <FaCheckCircle className="w-5 h-5" />
        </div>
        <h2 className="text-3xl font-extrabold text-white !mb-2">Return Policy</h2>
        <p className="text-gray-400 text-xl max-w-2xl">We want you to love your purchase. If you're not completely satisfied, we're here to help.</p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {/* 14-Day Return Window */}
        <div className="bg-[#1e293b]/70 border border-[#2a4365]/90 rounded-xl !p-6 flex items-start gap-4">
          <div className="bg-[#2463eb] rounded-lg text-white !p-2 shrink-0 !mt-1">
            <FaRegClock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg !mb-1">14-Day Return Window</h3>
            <p className="text-gray-300 text-md md:text-lg">You have 14 days from the date of delivery to return your item for a full refund or exchange.</p>
          </div>
        </div>

        {/* Eligible / Non-Eligible Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mt-2">
          {/* Eligible */}
          <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-6">
            <div className="flex items-center gap-3 !mb-6">
              <div className="text-green-500 bg-green-500/10 !p-2 rounded-lg flex items-center justify-center">
                <FaCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Items Eligible for Return</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Items must be in new, unworn, and unwashed condition</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Original tags and packaging must be attached</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Items must not be damaged or altered</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Proof of purchase (receipt or order confirmation) required</span>
              </li>
            </ul>
          </div>

          {/* Non-Eligible */}
          <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-6">
            <div className="flex items-center gap-3 !mb-6">
              <div className="text-red-500 bg-red-500/10 !p-2 rounded-lg flex items-center justify-center">
                <FaTimes className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Non-Returnable Items</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Intimate apparel and swimwear (for hygiene reasons)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Items marked as final sale or clearance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Gift cards and promotional items</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Items without original tags or damaged by the customer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Return Title */}
        <div className="flex flex-col items-center !mt-12 !mb-8 text-center">
          <div className="bg-[#1c2e4a] text-blue-500 rounded-full !p-3 !mb-4 border border-[#2a4365] flex items-center justify-center">
            <FaClipboardList className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-extrabold text-white !mb-2">How to Return Your Item</h2>
          <p className="text-gray-400 text-lg">Follow these simple steps to process your return</p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-5 relative !mb-6 w-full max-w-4xl !mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[19px] top-8 bottom-3 w-[2px] bg-blue-600/40"></div>
          
          <div className="flex items-center gap-6 relative z-10 w-full">
            <div className="bg-[#2463eb] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold shrink-0">1</div>
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-5 flex-1 w-full">
              <h3 className="text-white font-bold text-lg !mb-2">Log Into Your Account</h3>
              <p className="text-gray-400 text-md leading-relaxed">Sign in to your account and navigate to 'My Orders' to view your purchase history.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10 w-full">
            <div className="bg-[#2463eb] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold shrink-0">2</div>
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-5 flex-1 w-full">
              <h3 className="text-white font-bold text-lg !mb-2">Select the Item to Return</h3>
              <p className="text-gray-400 text-md leading-relaxed">Choose the order containing the item you wish to return and click 'Return Item'.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 relative z-10 w-full">
            <div className="bg-[#2463eb] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold shrink-0">3</div>
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-5 flex-1 w-full">
              <h3 className="text-white font-bold text-lg !mb-2">Choose Return Reason</h3>
              <p className="text-gray-400 text-md leading-relaxed">Select the reason for your return and specify whether you want a refund or exchange.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 relative z-10 w-full">
            <div className="bg-[#2463eb] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold shrink-0">4</div>
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-5 flex-1 w-full">
              <h3 className="text-white font-bold text-lg !mb-2">Print Return Label</h3>
              <p className="text-gray-400 text-md leading-relaxed">Download and print the prepaid return shipping label provided.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 relative z-10 w-full">
            <div className="bg-[#2463eb] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold shrink-0">5</div>
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-5 flex-1 w-full">
              <h3 className="text-white font-bold text-lg !mb-2">Ship Your Return</h3>
              <p className="text-gray-400 text-md leading-relaxed">Pack the item securely with all tags attached, affix the label, and drop it off at any authorized shipping location.</p>
            </div>
          </div>
        </div>

        {/* Refund Process Title directly centered without container */}
        <div className="flex flex-col items-center !mt-8 !mb-6 text-center">
          <div className="bg-green-500/10 text-green-500 rounded-full !p-3 !mb-4 border border-green-500/20 flex items-center justify-center">
            <FaDollarSign className="w-4 h-4" />
          </div>
          <h2 className="text-3xl font-extrabold text-white !mb-2">Refund Process</h2>
          <p className="text-gray-400 text-lg">Understand how and when you'll receive your refund</p>
        </div>

        {/* Processing Time Box */}
        <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-6 flex flex-col gap-5 w-full">
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 shrink-0 !mt-1 border border-yellow-500/30 bg-yellow-500/10 rounded-md !p-2.5 flex items-center justify-center">
              <FaRegClock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg !mb-2">Processing Time</h3>
              <p className="text-gray-300 text-md leading-relaxed">Once we receive your return, we will inspect the item and process your refund within 5-7 business days. You will receive an email confirmation when your refund has been processed.</p>
            </div>
          </div>
          
          <div className="bg-yellow-950/30 border border-yellow-600/30 rounded-lg !p-4 flex items-start gap-3">
            <div className="text-yellow-500 shrink-0 !mt-0.5">
              <FaExclamationTriangle className="w-4 h-4" />
            </div>
            <p className="text-yellow-500 text-sm md:text-md font-medium"><span className="font-extrabold">Please Note:</span> It may take an additional 3-5 business days for the refund to appear in your account, depending on your bank or payment provider.</p>
          </div>
        </div>

        {/* Refund Methods Grid */}
        <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl !p-6 !mt-6 w-full">
          <div className="flex items-center gap-3 !mb-6">
            <div className="text-green-500 flex items-center justify-center bg-green-500/10 !p-4 rounded-lg">
              <FaRegCheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Refund Methods</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-[#334155] rounded-xl !p-5 bg-[#253143]">
              <div className="flex items-center gap-3 !mb-4">
                <div className="text-green-500 flex items-center justify-center bg-green-500/10 !p-2 rounded-lg">
                    <FaCheck className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-lg">Original Payment <br/>Method</h4>
              </div>
              <p className="text-gray-400 text-md leading-relaxed">Refunds will be credited back to your original payment method</p>
            </div>
            
            <div className="border border-[#334155] rounded-xl !p-5 bg-[#253143]">
              <div className="flex items-center gap-3 !mb-4">
                <div className="text-green-500 flex items-center justify-center bg-green-500/10 !p-2 rounded-lg">
                    <FaCheck className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-lg">Store Credit</h4>
              </div>
              <p className="text-gray-400 text-md leading-relaxed">Get instant store credit that can be used immediately on future purchases</p>
            </div>
            
            <div className="border border-[#334155] rounded-xl !p-5 bg-[#253143]">
              <div className="flex items-center gap-3 !mb-4">
                <div className="text-green-500 flex items-center justify-center bg-green-500/10 !p-2 rounded-lg">
                    <FaCheck className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-lg">Exchange</h4>
              </div>
              <p className="text-gray-400 text-md leading-relaxed">Exchange for a different size, color, or product of equal or lesser value</p>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className="flex flex-col items-center !mt-12 !mb-8 text-center w-full">
          <div className="bg-purple-500/10 text-purple-500 rounded-full !p-3 !mb-4 border border-purple-500/30 flex items-center justify-center">
            <FaExchangeAlt className="w-5 h-5" />
          </div>
          <h2 className="text-3xl font-extrabold text-white !mb-2">Exchanges</h2>
          <p className="text-gray-400 text-lg">Need a different size or color? We make exchanges easy</p>
        </div>

        {/* 2-Column Exchanges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Size & Color Exchanges */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-xl !p-6 flex flex-col items-start w-full">
            <div className="flex items-center gap-4 !mb-6">
              <div className="text-blue-500 bg-[#2463eb]/20 rounded-xl !p-3.5 flex items-center justify-center">
                <FaExchangeAlt className="w-5 h-5" />
              </div>
              <h3 className="text-white font-extrabold text-xl">Size & Color Exchanges</h3>
            </div>
            <p className="text-white text-md leading-relaxed !mb-6 font-medium">If you need a different size or color, we offer free exchanges:</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Same product, different size or color - completely free</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">Expedited processing for exchange requests</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 !mt-2.5 shrink-0"></div>
                <span className="text-gray-300 text-md">New item ships as soon as we receive your return</span>
              </li>
            </ul>
          </div>

          {/* Defective or Damaged Items */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-xl !p-6 flex flex-col items-start w-full">
            <div className="flex items-center gap-4 !mb-4">
              <div className="text-red-400 bg-red-500/10 rounded-xl !p-3.5 flex items-center justify-center">
                <FaExclamationTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-white font-extrabold text-xl">Defective or Damaged Items</h3>
            </div>
            <p className="text-white text-md leading-relaxed !mb-5 font-medium">If you receive a defective or damaged item, we will replace it immediately at no cost to you. Please contact our customer service team within 7 days of receiving your order.</p>

            {/* Red Warning Box */}
            <div className="bg-red-950/30 border border-red-800/60 rounded-lg !p-5 flex items-start gap-3 w-full">
              <div className="text-red-500 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center shrink-0 !mt-0.5">
                <FaExclamationTriangle className="w-3 h-3 text-white" />
              </div>
              <p className="text-red-400 text-md leading-relaxed"><span className="font-extrabold text-red-400">Important:</span> Please take photos of the defective item and include them when contacting us to expedite the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}