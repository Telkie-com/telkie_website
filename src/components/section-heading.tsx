export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent-text">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-fg text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-fg-muted text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
