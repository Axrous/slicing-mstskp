import Image from "next/image";
import logo from "../public/logo.png";

export default function Logo() {
  return (
    <>
      <Image src={logo} alt="Logo" />
      <span className="text-white tracking-widest text-lg ml-3 font-bold my-auto">
        MSTSKP
      </span>
    </>
  );
}
