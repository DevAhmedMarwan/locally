import ProductCard from "@/components/ProductCard";
import { data } from "@/data/productwomen";
import { products } from "@/data/products";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

type Props = {
  params: Promise<{
    type: string;
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { type, slug } = await params;

  // هل ده page (all-products) ولا sub (hoodies)
  const pageData = data?.[type]?.[slug];

  let finalData;
  let finalProducts;

  if (pageData) {
    // ده page عادي
    finalData = pageData;
    finalProducts = pageData.products;
  } else {
    // ده sub category
    finalProducts = products.filter(
      (p: any) => p.category === slug
    );

    finalData = {
      heading: `${type} - ${slug}`,
      paragraph: `Showing results for ${slug}`,
    };
  }

  if (!finalProducts || finalProducts.length === 0) {
    return <div className="!p-10 text-red-500">Page Not Found</div>;
  }

  return (
    <section className="min-h-screen bg-gray-900">
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-3">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
            <h1>ahmed</h1>
              <Link
                underline="hover"
                href="/"
                className="hover:!text-blue-400 !text-gray-400 transition-colors"
              >
                Home
              </Link>
              <Link
                underline="hover"
                href={`/category/${type}`}
                className="hover:!text-blue-400 !text-gray-400 transition-colors"
              >
                {type}
              </Link>
              <Link
                underline="hover"
                href="#"
                className="hover:!text-blue-400 !text-gray-400 transition-colors"
              >
                {slug}
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 !py-8">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-medium text-white !mb-2">
            {finalData.heading}
          </h1>
          <p className="text-lg text-gray-400">
            {finalData.paragraph}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6 sm:!py-8 lg:!py-12">
        {finalProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}