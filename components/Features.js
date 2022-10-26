import Cards from "./Cards";
import WhySection from "./WhySection";

export default function Features() {
  return (
    <section className="bg-[#FFF6ED] py-10">
      <div className="container mx-auto mt-96">
        <div className="flex w-full mx-auto">
          <WhySection />
          <Cards />
        </div>
      </div>
    </section>
  );
}
