import NavItem from "./NavItem";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "flex justify-center items-center",
    vertical: "flex-col space-y-5 p-20 text-center",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("lg:space-x-14 ", pickedDir)}>
      <NavItem scheme={scheme} href="#top">
        Top
      </NavItem>
      <NavItem scheme={scheme} href="#features">
        Features
      </NavItem>
      <NavItem scheme={scheme} href="#reasons">
        Reasons
      </NavItem>
      <NavItem scheme={scheme} href="#alternatives">
        Alternatives
      </NavItem>
    </ul>
  );
}
