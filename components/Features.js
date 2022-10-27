import Cards from "./Cards";
import WhySection from "./WhySection";

export default function Features() {
  return (
    <section className="bg-[#FFF6ED] py-10">
      <div
        className="container mx-auto 2xl:mt-96 xl:mt-80 lg:mt-36 px-10 2xl:px-0"
        id="features"
      >
        <div className="flex flex-wrap items-start mx-auto">
          <WhySection />
          <Cards />
        </div>
      </div>
    </section>
  );
}
