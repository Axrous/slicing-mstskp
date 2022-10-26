export default function FooterListItem({ key, children }) {
  return (
    <li key={key} className="text-base leading-loose">
      {children}
    </li>
  );
}
