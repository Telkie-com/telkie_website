import { Container } from "./container";
import { IconCloud, IconLayers, IconLock, IconRefresh, IconServer, IconTrail } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const items = [
  { icon: IconLock, title: "Encrypted data storage", description: "Guest data is encrypted at rest and in transit." },
  { icon: IconRefresh, title: "Automated backups", description: "Conversations are backed up continuously, with no manual step." },
  { icon: IconTrail, title: "Full audit trails", description: "Every message and handoff is logged and attributable." },
  { icon: IconCloud, title: "AWS infrastructure", description: "Built on enterprise-grade cloud infrastructure your IT team can vet." },
  { icon: IconServer, title: "Built-in redundancy", description: "No single point of failure across regions or services." },
  { icon: IconLayers, title: "Role-based access", description: "Staff see only the conversations relevant to their role." },
];

export function Security() {
  return (
    <section id="security" className="border-t border-border py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Security"
            title="Enterprise-grade, from day one"
            description="Guest trust is the product. Telkie is built to the standard hotel IT and compliance teams expect."
          />
        </Reveal>

        <div className="grid w-full gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-fg">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
