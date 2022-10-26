import AlternativeItem from "./Alternativeitem";
export default function AlternativesSection() {
  return (
    <section className="bg-gradient-to-b from-[#FFF6ED] to-white pt-10 relative">
      <div className="bg-alternatives">
        <div className="container mx-auto h-[748px]">
          <div className="flex pt-52">
            <div className="w-6/12">
              <span className="uppercase text-white tracking-widest font-semibold ml-14">
                alternatives
              </span>
              <h2 className="mx-auto text-4xl text-white font-bold w-5/6 leading-relaxed">
                Karena Tool Kita Nggak Ada Apa-Apanya, Inilah Alternatifnya!
              </h2>
            </div>
            <div className="w-6/12 m-auto">
              <p className="text-white text-base w-5/6 leading-relaxed">
                Seperti yang lo tau sendiri ya, tool ini tuh nggak ada
                apa-apanya. Barangkali lo udah serius gitu butuh tool untuk
                sosial media, maka dari itu kita kasih 2 alternatif yang bisa lo
                pake untuk sosial media lo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto absolute left-2/4 -translate-x-2/4 -bottom-80">
        <div className="bg-white rounded-3xl drop-shadow-2xl">
          <div className="flex p-16 justify-around">
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
