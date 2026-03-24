export default async function NewInPage({ params }) {
  const { type } = await params;

  return (
    <h1 className="text-black text-3xl">
      {type} - New In
    </h1>
  );
}