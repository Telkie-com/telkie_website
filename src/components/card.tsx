import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const hoverStyles = hover ? "transition-colors hover:border-border-strong" : "";

  return (
    <div
      className={`rounded-2xl border border-border bg-bg-panel/60 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
