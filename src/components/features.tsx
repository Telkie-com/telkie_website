import { Card } from "./card";
import { Container } from "./container";
import { IconChat, IconDesk, IconLock } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const features = [
  {
    icon: IconDesk,
    title: "Built for hotel operations",
    description:
      "Front desk, concierge, and guest services work from one shared inbox, with handoffs that never lose context between shifts.",
  },
  {
    icon: IconLock,
    title: "Centralized, secure by design",
    description:
      "Every conversation is owned by the property, not a personal device — with clear access control and a full audit trail.",
  },
  {
    icon: IconChat,
    title: "Purpose-built for Chinese guests",
    description:
      "Language, tone, and response times calibrated to what five-star Chinese travelers expect from your brand.",
  },
];

export function Features() {
  return (
    <section id="product" className="border-t border-border py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading eyebrow="Why Telkie" title="One platform for every guest conversation" />
        </Reveal>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <Card hover className="h-full p-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-text">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-medium text-fg">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
