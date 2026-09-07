import { Container } from "./container";
import { Reveal } from "./reveal";

export function Stat() {
  return (
    <section className="border-t border-border-soft py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Reveal>
          <p className="font-mono text-6xl font-medium tracking-tight text-accent-text sm:text-8xl">
            24/7
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="max-w-md text-base text-fg-muted">
            Multi-language guest support, every day of the year — without adding
            headcount to your front desk.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
