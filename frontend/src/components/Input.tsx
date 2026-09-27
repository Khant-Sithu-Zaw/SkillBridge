import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">

      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <input
        id={id}
        className={`
          w-full
          rounded-lg
          border
          bg-slate-800
          px-4
          py-3
          text-sm
          text-white
          placeholder-slate-500
          outline-none
          transition
          focus:ring-2
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
          }
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;