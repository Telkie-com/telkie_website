import Link from "next/link";
import { Container } from "./container";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Why Telkie", href: "#product" },
      { label: "Security", href: "#security" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [{ label: "Contact", href: "#contact" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="flex max-w-xs flex-col gap-3">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/telkie-logo-color.png" alt="Telkie" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-fg-muted">WeChat, done the hotel way.</p>
          </div>

          <div className="flex gap-16">
            {columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-fg-faint">
                  {column.heading}
                </span>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-fg-faint">© 2026 Telkie Limited. All rights reserved.</p>
          <a
            href="https://hk.linkedin.com/company/telkie"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-fg-muted transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
