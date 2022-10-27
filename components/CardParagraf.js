export default function CardParagraf({ children, addClassName }) {
  return (
    <p
      className={`text-base mt-3 opacity-60 xl:w-4/6 lg:w-5/6 ${addClassName}`}
    >
      {children}
    </p>
  );
}
