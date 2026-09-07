import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const rows = [
  { guest: "Guest asks about spa hours", team: "Concierge", status: "Resolved" },
  { guest: "Late check-out request", team: "Front Desk", status: "In progress" },
  { guest: "Extra pillows needed", team: "Housekeeping", status: "Resolved" },
];

export function Showcase() {
  return (
    <section className="border-t border-border-soft py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="One shared inbox"
            title="Requests move between teams — nothing gets lost"
            description="A message never sits on someone's personal WeChat. Every request is visible, assigned, and tracked until it's resolved, across every department on property."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border-soft bg-bg-panel/60">
            {rows.map((row, i) => (
              <div
                key={row.guest}
                className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                  i !== rows.length - 1 ? "border-b border-border-soft" : ""
                }`}
              >
                <span className="text-fg">{row.guest}</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="rounded-full border border-border px-2.5 py-1 text-xs text-fg-muted">
                    {row.team}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      row.status === "Resolved" ? "text-accent-text" : "text-fg-faint"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
