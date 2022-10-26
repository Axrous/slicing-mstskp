import Button from "./Button";

export default function WhySection() {
  return (
    <div className="w-6/12 my-auto">
      <span className="uppercase text-[#FC881D] font-semibold tracking-widest">
        Kenapa sih?
      </span>
      <h2 className="my-6 text-4xl font-bold w-9/12 leading-relaxed">
        Kenapa Kami Tidak Memberikan Insight Apapun?
      </h2>
      <p className="w-9/12 text-base leading-7 opacity-60">
        Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
        apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
        semata-mata ingin menyelamatkan planet bumi.
      </p>
      <Button variant={"black"} className="px-9 py-4 mt-5">
        Pelajari Lebih Lanjut
      </Button>
    </div>
  );
}
