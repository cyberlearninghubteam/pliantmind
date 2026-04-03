import { Hero } from "@/components/Hero";

import { Tracks } from "@/components/Tracks";
import { BusinessSection } from "@/components/BusinessSection";
import { HowItWorks } from "@/components/HowItWorks";

import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Tracks />
      <BusinessSection />
      <HowItWorks />

      <CTA />
    </>
  );
}
