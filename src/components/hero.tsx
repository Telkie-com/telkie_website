import { Button } from "./button";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3"
      />
      <div
        aria-hidden
        className="grid-fade pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-soft) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-muted">
            For hotels welcoming Chinese guests
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-6xl">
            Turn WeChat into your{" "}
            <span className="bg-gradient-to-r from-accent-text to-blue-100 bg-clip-text text-transparent">
              five-star advantage
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg text-fg-muted text-balance">
            Telkie centralizes WeChat guest communication for global hotels — secure,
            on-brand, and built around how your front desk actually works.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact">Book a demo</Button>
            <Button href="#product" variant="ghost">
              See how it works
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320} className="w-full">
          <div className="relative mt-20 w-full max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-panel/80 p-2 shadow-[0_40px_120px_-40px_rgba(96,165,250,0.35)] backdrop-blur">
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/feature-ui/messenger-dashboard.png"
                  alt="Telkie front desk inbox showing a guest conversation in Chinese with an English translation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
