import React from 'react'
import ProductCard from "@/components/ProductCard";
import { products , pages } from "@/data/products";
const BestSellersPage = () => {
    const best = pages.find((p) => p.type === "best")
  return (
     <section className="bg-gray-900 min-h-screen">
      <div className="!py-8">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white !mb-2">{best?.heading}</h1>
              <p className="text-lg font-bold text-gray-400 dark:text-gray-400">{best?.paragraph}</p>
            </div>
        </div>
      </div>
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6 sm:!py-8 lg:!pb-12 !pt-10">
        <div className="space-y-8">
          <div className="!mb-8">
            <div className="!mb-6">
              <h2 className="text-2xl font-semibold sm:text-xl text-white">
                Best Selling Products
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellersPage