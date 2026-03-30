import { products } from "@/data/products";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-white bg-[#1a202c]">
        <h1 className="text-3xl font-bold !mb-4">Product Not Found</h1>
        <p className="text-gray-400">The product you are looking for does not exist.</p>
      </div>
    );
  }

  // Generate 4 mock side views based on the existing imageFront and imageBack
  const galleryImages = [
    product.imageFront,
    product.imageBack,
    product.imageFront, // Using as Left side fallback
    product.imageBack   // Using as Right side fallback
  ].filter(Boolean); // Clean any undefined

  return (
    <div className="min-h-screen bg-[#1c2331]">
      <div className="!max-w-7xl !mx-auto !px-4 !py-8">
        <ProductClient product={product} galleryImages={galleryImages} />
      </div>
    </div>
  );
}
