import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Services />
      <HowItWorks />
      <About />
      <Booking />
    </>
  );
}
