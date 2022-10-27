export default function FooterListItem({ children }) {
  return (
    <li key={children} className="text-base leading-loose">
      {children}
    </li>
  );
}
