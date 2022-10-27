import Cards from "./Cards";

export default function Reason() {
  return (
    <section className="pt-10 bg-[#FFF6ED]" id="reasons">
      <div className="container mx-auto xl:mt-20 lg:mt-10 text-center px-10 2xl:px-0">
        <span className="uppercase text-base tracking-widest text-[#FC881D] font-bold">
          terus gimana?
        </span>
        <h2 className="text-4xl lg:w-6/12 md:w-full mx-auto mt-4 leading-normal font-bold">
          Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
        </h2>
        <p className="lg:w-5/12 md:w-10/12 mx-auto mt-6 opacity-60">
          Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
          kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan itu
          akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
        </p>

        <div className="flex mt-10 justify-center">
          <Cards />
        </div>
      </div>
    </section>
  );
}
