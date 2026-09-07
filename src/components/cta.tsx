import { Button } from "./button";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border-soft py-24 sm:py-32">
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-70"
      />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Ready to give Chinese guests the experience they expect?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Button href="mailto:hello@telkie.com?subject=Book%20a%20demo">Book a demo</Button>
        </Reveal>
      </Container>
    </section>
  );
}
