import Button from "./Button";
import Navbar from "./Navbar";
import Image from "next/image";
import hero1 from "../public/hero1.png";

export default function Hero() {
  return (
    <div
      className="bg-hero 2xl:h-[1370px] xl:h-[1223px] lg:h-[978px] md:h-[780px] h-[900px] px-10"
      id="top"
    >
      <div className="container mx-auto relative">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10">
          <span className="uppercase font-semibold text-base text-[#FC881D] tracking-widest">
            mana saya tau saya kan pencurry
          </span>
          <h1 className="text-3xl md:text-[62px] text-white w-full 2xl:w-7/12 xl:w-8/12 mx-auto leading-snug mt-5">
            Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun
          </h1>
          <p className="text-lg text-white xl:w-6/12 lg:4/6 mx-auto leading-9 font-mono mt-6">
            Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan
            memberikan kamu pelbagai insight, karena kami anti-mainstream maka
            kami akan melakukan sebaliknya.
          </p>
          <div className="mt-14">
            <Button variant="yellow" className="px-9 py-5">
              Memulai Sekarang
            </Button>
            <Button variant="outline" className="mt-2 ml-2 px-8 py-4">
              Pelajarin Dulu
            </Button>
          </div>
        </div>
        <div className="grid absolute 2xl:-bottom-[840px] xl:-bottom-[580px] lg:-bottom-[450px] max-lg:hidden inset-x-0  mx-auto -mt-1 xl:min-w-7/12 lg:w-6/12">
          <Image src={hero1} alt="gambar" />
        </div>
      </div>
    </div>
  );
}
