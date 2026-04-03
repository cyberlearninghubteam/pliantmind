"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const rotatingWords = ["adapt", "build", "lead", "thrive", "create"];

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
    <section className="relative bg-gradient-hero min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-2/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="section-label text-accent-light mb-6 inline-block">
          AI transformation for people & businesses
        </span>

        <h1 className="heading-display text-[40px] md:text-[68px] mb-6 text-white">
          Learn AI. Implement AI.
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            <span
              key={rotatingWords[wordIndex]}
              className="inline-block capitalize"
              style={{ animation: "fadeInUp 0.35s ease-out forwards" }}
            >
              {rotatingWords[wordIndex]}.
            </span>
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-lg md:text-xl text-text-on-dark-muted mb-10 leading-relaxed">
          Upskill your team with practical AI learning tracks — or let us
          audit, build, and deploy AI solutions for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/assessment" className="btn-primary text-[15px] px-8 py-3.5">
            Take the Free Assessment
          </Link>
          <Link href="/business" className="btn-secondary-light text-[15px] px-8 py-3.5">
            AI for Your Business
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "6", label: "Learning Tracks" },
            { value: "26", label: "Hands-On Lessons" },
            { value: "Free", label: "To Get Started" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="heading-display text-2xl md:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-xs text-text-on-dark-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
