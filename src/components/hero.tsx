import { Button } from "./button";
import { Reveal } from "./reveal";
import { SplitSection } from "./split-section";

export function Hero() {
  return (
    <SplitSection
      bordered={false}
      padding="pt-20 pb-16 sm:pt-28 sm:pb-24"
      copy={
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-muted">
              For hotels welcoming Chinese guests
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-xl text-4xl font-medium tracking-tight text-balance sm:text-6xl">
              Turn WeChat into your <span className="text-accent">five-star advantage</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-fg-muted text-balance">
              Telkie centralizes WeChat guest communication for global hotels — secure,
              on-brand, and built around how your front desk actually works.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact">Book a demo</Button>
              <Button href="#product" variant="ghost">
                See how it works
              </Button>
            </div>
          </Reveal>
        </div>
      }
      media={
        <Reveal delay={200}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_40px_120px_-40px_rgba(44,84,104,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lifestyle/front-desk.jpg"
              alt="Hotel front desk team welcoming a guest at check-in"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      }
    />
  );
}
