interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    type = "button",
    onClick,
    className = "",
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
}