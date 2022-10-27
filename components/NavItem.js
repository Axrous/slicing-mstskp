import classnames from "classnames";

export default function NavItem({ scheme, href, children }) {
  const schemes = {
    light: "text-white",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={classnames("text-base font-mono", pickedScheme)}
      >
        {children}
      </a>
    </li>
  );
}
