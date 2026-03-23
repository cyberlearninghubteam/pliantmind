"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "Clarity",
  "Agility",
  "Leverage",
  "Momentum",
  "Edge",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="section-label mb-8 inline-block">
          AI Advisory for Adaptive Businesses
        </span>

        <h1 className="heading-serif text-[42px] md:text-[72px] mb-6">
          Your business has
          <br />
          the potential.{" "}
          <span className="text-accent">
            <span
              key={rotatingWords[wordIndex]}
              className="inline-block"
              style={{ animation: "fadeInUp 0.35s ease-out forwards" }}
            >
              {rotatingWords[wordIndex]}.
            </span>
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
          Flexible, clear-eyed AI advisory that meets your business where it
          is — and gets it where it needs to go.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#book" className="btn-primary">
            Book a Session
          </a>
          <a href="#services" className="btn-outline">
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Businesses Transformed" },
            { value: "3x", label: "Avg. Efficiency Gain" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="heading-serif text-2xl md:text-3xl text-text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
