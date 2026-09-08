import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";

const links = [
  { href: "#product", label: "Product" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/telkie-logo-color.png" alt="Telkie" className="h-[45px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-fg-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" className="text-sm">
          Book a demo
        </Button>
      </Container>
    </header>
  );
}
