import BestSellers from "@/components/BestSellers";
import CarouselPage from "@/components/CarouselPage";
import FeaturedBrands from "@/components/FeaturedBrands";
import FeaturedCollection from "@/components/FeaturedCollection";
import StepIntoTheWeekWithTheseLooks from "@/components/StepIntoTheWeekWithTheseLooks";
const HomePage = () => {
  return (
    <>
      <section>
        <CarouselPage />
      </section>
      <section className="w-full mx-auto !px-3 !pt-3 lg:!py-4 lg:!px-10 xl:!px-30 bg-gray-800">
        <BestSellers Clothes={"Best Sellers"} pathname={"/best-sellers"} />
      </section>
      <section className="w-full mx-auto !px-3 !pt-3 lg:!py-4 lg:!px-10 xl:!px-30 bg-gray-800">
        <FeaturedBrands Clothes={"Featured Brands"} pathname={"/brands"} />
      </section>
      <section className="w-full mx-auto !px-3 !pt-3 lg:!py-4 lg:!px-10 xl:!px-30 bg-gray-800">
        <BestSellers Clothes={"New In"} pathname={"/new-in"}/>
      </section>
      <section className="w-full mx-auto !px-3 !pt-3 lg:!py-4 lg:!px-10 xl:!px-30 bg-gray-800">
        <FeaturedCollection />
      </section>
      <section className="w-full mx-auto !px-3 !pt-3 lg:!py-4 lg:!px-10 xl:!px-30 bg-gray-800">
        <StepIntoTheWeekWithTheseLooks />
      </section>
    </>
  );
};

export default HomePage;
