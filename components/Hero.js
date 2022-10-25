import Button from "./Button";
import Navbar from "./Navbar";
import Image from "next/image";
import hero1 from "../public/hero1.png"

export default function Hero() {
    return (
        <div className="bg-hero h-[1370px]">
        <div className="container mx-auto relative">
          <Navbar/>
          <div className="text-center mt-20">
            <span className="uppercase font-semibold text-base text-[#FC881D] tracking-widest">mana saya tau saya kan pencurry</span>
            <h1 className="text-[62px] text-white w-7/12 mx-auto leading-snug mt-5">Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun</h1>
            <p className="text-lg text-white w-6/12 mx-auto leading-9 font-mono mt-6">Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.</p>
            <div className="mt-14">
              <Button variant="yellow" className="px-9 py-5">Memulai Sekarang</Button>
              <Button variant="no-border" className="px-8 py-5">Pelajarin Dulu</Button>
            </div>
          </div>
          <div className="grid absolute -bottom-[840px] inset-x-0 w-3/4  mx-auto -mt-1">
            <Image src={hero1} alt="gambar"  />
          </div>
        </div>
      </div>
    )
}