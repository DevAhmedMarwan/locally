import ProductCard from "@/components/ProductCard";
import { productcollection } from "@/data/productcollection";

const page = async ({params}: {params: Promise<{ typecollection: string }>;}) => {
  const { typecollection } = await params;
  const key = typecollection as keyof typeof productcollection; 
  //"أنا متأكد إن typecollection ده واحد من keys بتاعة productcollection"
  const data = productcollection[key];

  if (!data)
    return (
      <div className="min-h-screen bg-gray-900 text-white text-center pt-20">
        Collection not found.
      </div>
    );

  return (
    <section className="min-h-screen bg-[#111827]">
      <div className="bg-[#111827]">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-white !mb-2">
            {data.heading}
          </h1>
          <p className="text-base sm:text-lg text-gray-400">{data.paragraph}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6 sm:!py-8 lg:!py-12">
        {data.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default page;
