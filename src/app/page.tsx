import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Tracks } from "@/components/Tracks";
import { BusinessSection } from "@/components/BusinessSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Tracks />
      <BusinessSection />
      <HowItWorks />
      <Pricing />
      <CTA />
    </>
  );
}
