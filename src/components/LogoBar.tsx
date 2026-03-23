"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/deloitte.png", alt: "Deloitte" },
  { src: "/logos/commbank.png", alt: "Commonwealth Bank" },
  { src: "/logos/telstra.png", alt: "Telstra" },
  { src: "/logos/nab.png", alt: "NAB" },
  { src: "/logos/kmart.png", alt: "Kmart" },
  { src: "/logos/suncorp.png", alt: "Suncorp" },
  { src: "/logos/medibank.png", alt: "Medibank" },
  { src: "/logos/wesfarmers.png", alt: "Wesfarmers" },
  { src: "/logos/target.png", alt: "Target" },
  { src: "/logos/transurban.png", alt: "Transurban" },
  { src: "/logos/bankwest.png", alt: "Bankwest" },
  { src: "/logos/government-of-south-australia.png", alt: "Government of South Australia" },
  { src: "/logos/city-of-adelaide.png", alt: "City of Adelaide" },
  { src: "/logos/aami.png", alt: "AAMI" },
  { src: "/logos/electranet.png", alt: "ElectraNet" },
  { src: "/logos/hydrotasmania.png", alt: "Hydro Tasmania" },
];

export function LogoBar() {
  return (
    <section className="py-16 px-6 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-mono text-text-muted tracking-widest uppercase mb-10">
          Trusted by teams at
        </p>

        {/* Scrolling logo strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll gap-12 w-max">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-10 w-[120px] relative grayscale brightness-[2] opacity-50 hover:opacity-80 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
