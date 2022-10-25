import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="flex items-center py-10">
          <div className="w-3/12 flex ">
            <Logo />
          </div>
          <div className="w-6/12">
            <Nav />
          </div>
          <div className="w-3/12">
            <div className="flex justify-end">
              <Button variant="no-border" className="my-auto">Mendaftar</Button>
              <Button variant="white" className="">Login</Button>
            </div>
          </div>
        </div>
    );
}