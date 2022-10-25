import NavItem from "./NavItem";

export default function Nav() {
    return (
        <ul className="flex justify-center items-center space-x-14">
        <NavItem>Top</NavItem>
        <NavItem>Features</NavItem>
        <NavItem>Reasons</NavItem>
        <NavItem>Alternatives</NavItem>
      </ul>
    )
}