export default function CardParagraf({ children, addClassName }) {
  return (
    <p className={`text-base mt-3 opacity-60 w-4/6 ${addClassName}`}>
      {children}
    </p>
  );
}
