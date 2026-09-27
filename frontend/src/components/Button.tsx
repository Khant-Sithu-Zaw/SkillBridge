import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-lg px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-950/40 hover:bg-blue-500 focus:ring-blue-500/40 active:bg-blue-700",

    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500/40",

    outline:
      "border border-slate-700 bg-transparent text-white hover:bg-slate-800 focus:ring-slate-500/40",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;