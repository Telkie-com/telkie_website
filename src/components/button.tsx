import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-accent text-accent-fg hover:bg-accent-dim"
      : "border border-border text-fg hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20 hover:text-accent";

  return <a className={`${base} ${styles} ${className}`} {...props} />;
}
