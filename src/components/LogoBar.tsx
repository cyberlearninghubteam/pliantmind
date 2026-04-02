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
    <section className="py-14 px-6 overflow-hidden border-t border-b border-border">
      <div className="mx-auto max-w-6xl">
        <p className="section-label text-center mb-10">
          Our learners come from
        </p>

        <div className="relative">
          <div className="flex animate-scroll gap-14 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-8 w-[110px] relative opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="110px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
