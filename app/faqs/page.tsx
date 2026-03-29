"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "Are the prices the same as in store?",
        a: "Yes, the prices are the same as in store.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept Cash on Delivery as well as credit and debit cards.",
      },
      {
        q: "Is the app available on both iOS and Android?",
        a: "Yes, the app is available on both iOS and Android.",
      },
    ],
  },
  {
    category: "Delivery",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Delivery takes around 3 to 5 working days, and delivery hours may differ depending on holidays.",
      },
      {
        q: "What are the delivery fees?",
        a: "Standard delivery charges may apply based on your location.",
      },
      {
        q: "Do you deliver outside of Cairo or Internationally?",
        a: "Yes, we deliver outside of Cairo and are currently working on international shipping.",
      },
    ],
  },
  {
    category: "Order",
    questions: [
      {
        q: "Can I track my order?",
        a: "Yes, you can track your order through the app. Go to Profile → My Orders → Track Order.",
      },
      {
        q: "Can I see or try the order before accepting it?",
        a: "Unfortunately, the package must be received first. If for any reason you're not pleased with your order, you can issue a return request through the app and return it within 14 days either in-store or through the courier (standard shipping fee applies).",
      },
      {
        q: "Can I cancel or change my order after placing it?",
        a: "Yes, you can cancel your order through the app anytime before the package status is Picked up. You cannot edit or change the order once it's placed.",
      },
    ],
  },
  {
    category: "Policies",
    questions: [
      {
        q: "Is the Return/Exchange policy the same as in store?",
        a: "Yes, the policy is the same. Items purchased online can be returned at the store, but items purchased in-store cannot be returned online.",
      },
      {
        q: "Can I pick up or return my item at the store?",
        a: "We're currently working on in-store pickups, but for now you can only return items at the store.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "How can I contact customer support if I have a problem?",
        a: "You can contact our support team through the Contact Us page in the website footer, or through the app by going to Profile → Contact Support, filling out the form, and we'll reach out to you shortly.",
      },
    ],
  },
  {
    category: "Loyalty & Discounts",
    questions: [
      {
        q: "Are there any discounts or loyalty points?",
        a: "Yes, whenever you place an order, you earn points that can be redeemed for discounts online.",
      },
      {
        q: "Do my points expire?",
        a: "No, your points don't expire.",
      },
    ],
  },
  {
    category: "Brands",
    questions: [
      {
        q: "Are the brands available on the app the same as in store?",
        a: "Yes, all brands available on the app are available in stores.",
      },
      {
        q: "Are the brands available in store also available on the website?",
        a: "Not all brands available in-store are available on the website.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(
    "Are the prices the same as in store?",
  );

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-[#1c2434] !pb-24 font-sans text-gray-100">
      <div className="border-b border-gray-700/50 bg-[#1c2434]">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-4">
          <Link href="/" className="hover:!text-blue-400 transition-colors">
            Home
          </Link>
          <span className="!mx-3">/</span>
          <span className="text-gray-400 font-medium">
            Frequently Asked Questions
          </span>
        </div>
      </div>

      <div className="!max-w-4xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !pt-8">
        <h1 className="!text-3xl sm:!text-4xl font-black text-white text-center !mb-16 tracking-wide">
          Frequently Asked Questions
        </h1>

        <div className="!max-w-2xl !mx-auto !space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <div className="!mb-4">
                <h2 className="!text-xl font-black text-white !mb-2">
                  {section.category}
                </h2>
                <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
              </div>

              <div className="!space-y-0">
                {section.questions.map((faq) => {
                  const isOpen = openFAQ === faq.q;
                  return (
                    <div key={faq.q} className="border-b border-gray-700/60">
                      <button
                        onClick={() => toggleFAQ(faq.q)}
                        className="cursor-pointer w-full flex items-center justify-between !py-5 text-left focus:outline-none group"
                      >
                        <span
                          className={`text-base font-bold transition-colors duration-200 ${isOpen ? "text-blue-500" : "text-gray-200 group-hover:text-white"}`}
                        >
                          {faq.q}
                        </span>
                        <span
                          className={`text-2xl font-normal leading-none transition-colors duration-200 ${isOpen ? "text-blue-500" : "text-gray-400 group-hover:text-white"}`}
                        >
                          {isOpen ? "-" : "+"}
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "!max-h-30 !opacity-100 !pb-5" : "!max-h-0 !opacity-0"}`}
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
