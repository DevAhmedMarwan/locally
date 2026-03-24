export default async function BestSellersPage({ params }) {
  const { type } = await params;

  return (
    <h1 className="text-black text-3xl">
      {type} - Best Sellers
    </h1>
  );
}