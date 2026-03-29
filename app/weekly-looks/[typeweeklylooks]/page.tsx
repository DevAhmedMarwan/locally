import ProductWeeklyLooks from "@/components/ProductWeeklyLooks";
import StepIntoTheWeekWithTheseLooks from "@/components/StepIntoTheWeekWithTheseLooks";
import { WeeklyLooks } from "@/data/productweeklylooks";

const WeeklyLooksPage = async ({params}: {params: Promise<{typeweeklylooks: string}>}) => {
  const { typeweeklylooks } = await params;
  const dayData = WeeklyLooks[typeweeklylooks as keyof typeof WeeklyLooks];

  if (!dayData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white text-center pt-20">
        Day of the week not found.
      </div>
    );
  }

  return (
    <main>
      <section className="bg-gray-800 min-h-screen">
        <div className="!py-8">
          <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 text-center">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white !mb-2">
                {dayData.heading}
              </h1>
              <p className="text-lg font-bold text-gray-400 dark:text-gray-400">
                {dayData.paragraph}
              </p>
            </div>
          </div>
        </div>
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6 sm:!py-8 lg:!py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="relative h-[600px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={dayData.mainImage}
                  alt={dayData.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white !mb-4">
                  Shop the Look
                </h2>
                <p className="font-bold text-gray-300 !mb-6">
                  "Complete your outfit with these essential pieces that
                  perfectly complement your style."
                </p>
              </div>
              <section className="!py-6 sm:!py-8">
                <div className="!mt-4 sm:!mt-6">
                  <ProductWeeklyLooks />
                </div>
              </section>
            </div>
          </div>
          <section className="!mt-10">
            <StepIntoTheWeekWithTheseLooks />
          </section>
        </div>
      </section>
    </main>
  );
};

export default WeeklyLooksPage;
