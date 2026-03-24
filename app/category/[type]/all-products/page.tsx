export default async function AllProductsPage({ params }) {
  const { type } = await params;

  return (
    <h1 className="text-black text-3xl">
      {type} - All Products
    </h1>
  );
}