import { Container } from "./container";
import { Reveal } from "./reveal";

export function ImageBand({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="h-auto w-full object-cover" />
          </div>
          {caption && (
            <p className="mt-4 text-center text-sm text-fg-muted">{caption}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
