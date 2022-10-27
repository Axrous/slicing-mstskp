import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import Image from "next/image";
import menu from "../public/menu.svg";
import x from "../public/x.svg";
import classnames from "classnames";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12 flex ">
          <Logo />
        </div>
        <div className="w-6/12 hidden lg:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 hidden lg:block">
          <div className="flex justify-end">
            <Button variant="no-border" className="my-auto">
              Mendaftar
            </Button>
            <Button variant="white" className="">
              Login
            </Button>
          </div>
        </div>
        <div className="w-9/12 lg:hidden text-right">
          <Image
            src={menu}
            alt="menu"
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>

      <div
        className={classnames(
          "fixed bg-white z-10 top-5 h-96 w-3/5 lg:hidden transition-all rounded-xl opacity-95",
          offCanvas ? "right-5" : "-right-full"
        )}
      >
        <div className="absolute top-7 right-6 inline-block">
          <Image
            src={x}
            alt="x"
            width={30}
            height={30}
            onClick={() => setOffCanvas(false)}
          />
        </div>
        <Nav dir="vertical" scheme="dark" />
        <div className="flex justify-center px-2">
          <Button variant="no-border" className="my-auto">
            Mendaftar
          </Button>
          <Button variant="white" className="">
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
