interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-600"
      />
    </div>
  );
}