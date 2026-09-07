import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { Showcase } from "@/components/showcase";
import { Stat } from "@/components/stat";
import { WhatIs } from "@/components/what-is";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatIs />
        <Features />
        <Showcase />
        <Security />
        <Stat />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
