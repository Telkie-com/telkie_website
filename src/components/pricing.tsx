import { Button } from "./button";
import { Container } from "./container";
import { IconCheck } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const included = [
  "Unified guest communication",
  "24/7 multi-language support",
  "Analytics & reporting",
  "Enterprise-grade security",
  "Dedicated account management",
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border-soft py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="No hidden fees. One platform, one plan, everything included."
          />
        </Reveal>

        <Reveal delay={120} className="w-full max-w-md">
          <div className="rounded-2xl border border-border bg-bg-panel/70 p-8">
            <ul className="flex flex-col gap-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-fg">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-8 w-full">
              Talk to sales
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
