import AlternativeItem from "./Alternativeitem";
export default function AlternativesSection() {
  return (
    <section
      className="g-alternatives bg-gradient-to-b from-[#FFF6ED] to-white pt-10 relative"
      id="alternatives"
    >
      <div className="bg-alternatives">
        <div className="container mx-auto lg:h-[820px] md:h-[400px] 2xl:h-[989px] px-10 2xl:px-0">
          <div className="flex flex-wrap xl:pt-52 lg:pt-32 md:pt-20 pt-16">
            <div className="lg:w-6/12 md:w-full">
              <span className="uppercase text-white tracking-widest font-semibold lg:ml-14 md:ml-0">
                alternatives
              </span>
              <h2 className="mx-auto text-xl md:text-4xl text-white font-bold lg:w-5/6 md:w-full leading-relaxed">
                Karena Tool Kita Nggak Ada Apa-Apanya, Inilah Alternatifnya!
              </h2>
            </div>
            <div className="lg:w-6/12 w:full m-auto">
              <p className="mt-16 lg:mt-0 mb-2 md:text-white text-base w-full md:w-5/6 leading-relaxed">
                Seperti yang lo tau sendiri ya, tool ini tuh nggak ada
                apa-apanya. Barangkali lo udah serius gitu butuh tool untuk
                sosial media, maka dari itu kita kasih 2 alternatif yang bisa lo
                pake untuk sosial media lo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:absolute md:static lg:left-2/4 lg:-translate-x-2/4 lg:-bottom-20 xl:-bottom-40  px-10 2xl:px-0 xl:w-5/6">
        <div className="bg-white rounded-3xl drop-shadow-2xl">
          <div className="flex flex-wrap p-16 justify-around">
            <AlternativeItem
              img={"img1"}
              content={
                "Buffer.com – Buffer is the most intuitive, affordable, and authentic way to reach more people on social media."
              }
            />
            <AlternativeItem
              img={"img2"}
              content={
                "Sendible.com – Grow your audience, attract new customers, and reach your social media goals with an all-in-one platform."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
