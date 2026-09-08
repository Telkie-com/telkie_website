import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { SplitSection } from "./split-section";

export function ScanToService() {
  return (
    <SplitSection
      copy={
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Guest-facing"
            title="Guests already have WeChat open. Meet them there."
            description="A QR code at the desk connects a guest straight into your hotel's own WeChat account — not a staff member's personal phone. The conversation is routed to the right team instantly, and the full context travels with it for the rest of the stay."
          />
        </Reveal>
      }
      media={
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lifestyle/wechat-qr-scan.jpg"
              alt="Hotel guest scanning a WeChat QR code at the front desk"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      }
    />
  );
}
