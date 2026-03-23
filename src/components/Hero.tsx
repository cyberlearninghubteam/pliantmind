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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="blob blob-pink w-[500px] h-[500px] -top-[100px] -left-[100px]" />
      <div className="blob blob-purple w-[400px] h-[400px] top-[20%] right-[-50px]" />
      <div className="blob blob-pink w-[300px] h-[300px] bottom-[10%] left-[30%]" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      <div
        className={`relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5 text-xs font-medium text-accent-light tracking-wide uppercase mb-8">
          AI Advisory for Adaptive Businesses
        </span>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Your business has the potential.
          <br />
          <span className="gradient-text">
            We bring the{" "}
            <span
              key={rotatingWords[wordIndex]}
              className="inline-block animate-fade-in-up"
              style={{ animationDuration: "0.35s" }}
            >
              {rotatingWords[wordIndex]}.
            </span>
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
          Flexible, clear-eyed AI advisory that meets your business where it
          is — and gets it where it needs to go. No jargon. No bloated
          retainers. Just sharp thinking that moves the needle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-light hover:text-background transition-all duration-200 glow"
          >
            Book a Session
          </a>
          <a
            href="#services"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-accent/30 transition-all duration-200"
          >
            Explore Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Businesses Transformed" },
            { value: "3x", label: "Avg. Efficiency Gain" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-in-up animate-delay-${(i + 3) * 100}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent-light">
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
