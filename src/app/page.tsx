import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Tracks } from "@/components/Tracks";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyPliantMind } from "@/components/WhyPliantMind";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Tracks />
      <HowItWorks />
      <WhyPliantMind />
      <Pricing />
      <CTA />
    </>
  );
}
