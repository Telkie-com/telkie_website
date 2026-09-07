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
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-fg">
          Telkie
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
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
