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
    <section className="py-12 px-6 overflow-hidden bg-background-warm">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-text-muted text-center mb-8">
          Trusted by professionals from
        </p>

        <div className="relative">
          <div className="flex animate-scroll gap-14 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-7 w-[100px] relative opacity-50 hover:opacity-80 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
