"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingWords = [
  "Efficiency",
  "Growth",
  "Scale",
  "Automation",
  "Intelligence",
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-light tracking-wide uppercase mb-8">
            AI & Automation Advisory
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Transform your operations.
          <br />
          <span className="gradient-text">Unlock{" "}
            <motion.span
              key={rotatingWords[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {rotatingWords[wordIndex]}.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg md:text-xl text-text-secondary mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Expert advisory helping SMBs harness AI and automation to cut costs,
          streamline workflows, and scale faster — without the enterprise price
          tag.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#book"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-light transition-colors glow"
          >
            Book a Session
          </a>
          <a
            href="#services"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Businesses Transformed" },
            { value: "3x", label: "Avg. Efficiency Gain" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-accent-light">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
