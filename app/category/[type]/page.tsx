import WomenSection from "@/components/WomenSection";
import MenSection from "@/components/MenSection";
import KidsSection from "@/components/KidsSection";

export default async function CategoryPage({ params }) {
  const { type } = await params;

  return (
    <>
      {type === "women" && <WomenSection />}
      {type === "men" && <MenSection />}
      {type === "kids" && <KidsSection />}
    </>
  );
}