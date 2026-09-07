import { Container } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function WhatIs() {
  return (
    <section className="border-t border-border-soft py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title="Chinese guests expect WeChat. Most hotels can't deliver it well."
            description="WeChat is often the only channel your Chinese guests trust — but scattered across personal phones and ad hoc group chats, it becomes a liability instead of a service advantage."
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-2xl text-center text-base text-fg-muted leading-relaxed">
            Telkie gives every department one secure system of record for guest
            conversations — from pre-arrival to check-out — so nothing depends on a
            single person&rsquo;s phone.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
