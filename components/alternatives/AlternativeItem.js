import Image from "next/image";
import Button from "../Button";
import alternative1 from "../../public/alternative1.png";
import alternative2 from "../../public/alternative2.png";

export default function AlternativeItem({ img, content }) {
  const image = {
    img1: alternative1,
    img2: alternative2,
  };

  const pickImage = image[img];

  return (
    <div className=" lg:w-6/12 md:w-full flex justify-center md:mb-10 border-b-2">
      <div className="lg:w-9/12 md:w-full">
        <Image src={pickImage} alt="alternative" />
        <p className="text-xl mt-4">{content}</p>
        <Button className={"mt-8"}>Learn More</Button>
      </div>
    </div>
  );
}
