import type { ReactNode } from "react";
import { Container } from "./container";

export function SplitSection({
  copy,
  media,
  reverse = false,
  id,
  bordered = true,
  padding = "py-24 sm:py-32",
  className = "",
}: {
  copy: ReactNode;
  media: ReactNode;
  reverse?: boolean;
  id?: string;
  bordered?: boolean;
  padding?: string;
  className?: string;
}) {
  const border = bordered ? "border-t border-border-soft" : "";

  return (
    <section id={id} className={`${border} ${padding} ${className}`}>
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? "lg:order-2" : undefined}>{copy}</div>
        <div className={reverse ? "lg:order-1" : undefined}>{media}</div>
      </Container>
    </section>
  );
}
