export default function Card({ children, variant, className }) {
  const addClassName = className ? className : "";
  const varians = {
    "bg-black": `bg-[#0D0E25] rounded-xl`,
  };

  const pickedVariant = varians[variant];

  return (
    <div
      className={`w-full md:w-3/6 px-4 xl:py-14 lg:py-8 py-6 md:py-11 border-b-2 md:border-b-0 mb-2 md:mb-0 ${pickedVariant} ${addClassName}`}
    >
      {children}
    </div>
  );
}
