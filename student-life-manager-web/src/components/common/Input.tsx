interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

export default function Input({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
}: Props) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-slate-800 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
        </div>
    );
}