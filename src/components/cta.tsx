import { Button } from "./button";
import { Reveal } from "./reveal";
import { SplitSection } from "./split-section";

export function CTA() {
  return (
    <SplitSection
      id="contact"
      copy={
        <div className="flex flex-col items-start gap-8 text-left">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Ready to give Chinese guests the experience they expect?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Button href="mailto:hello@telkie.com?subject=Book%20a%20demo">Book a demo</Button>
          </Reveal>
        </div>
      }
      media={
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lifestyle/concierge-tablet.jpg"
              alt="Hotel concierge using a check-in tablet at the front desk"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      }
    />
  );
}
