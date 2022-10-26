export default function CardTitle({ children, addClassName }) {
  return <span className={`text-lg ${addClassName}`}>{children}</span>;
}
