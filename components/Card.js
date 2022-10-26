export default function Card({ children, variant, className }) {
  const addClassName = className ? className : "";
  const varians = {
    "bg-black": `bg-[#0D0E25] rounded-xl`,
  };

  const pickedVariant = varians[variant];

  return (
    <div className={`w-6/12 px-4 py-14  ${pickedVariant} ${addClassName}`}>
      {children}
    </div>
  );
}
