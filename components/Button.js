export default function Button({className, children, variant}) {
    const addClassName = className ? `${className}` : '' ;
    
    const varians = {
        "white" : `border text-black px-6 py-1.5 bg-white font-bold`,
        "no-border": `text-white px-6 py-1.5 hover:border`,
        "yellow" : ` text-white bg-[#FC881D]`
    }

    const pickedVariant = varians[variant];

    return (
        <a className={`rounded-full text-base mx-1 font-mono inline-block ${addClassName} ${pickedVariant}`}>
            {children}
        </a>
    )
}