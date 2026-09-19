import { Card } from "./card";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Showcase() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="One shared inbox"
            title="Requests move between teams — nothing gets lost"
            description="A message never sits on someone's personal WeChat. Every request is visible, assigned, and tracked until it's resolved, across every department on property."
          />
        </Reveal>

        <Reveal delay={120} className="w-full">
          <Card className="overflow-hidden p-2">
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/feature-ui/messenger-dashboard-test.svg"
                alt="Telkie front desk inbox interface with translated guest request and contact details"
                className="h-auto w-full"
              />
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
