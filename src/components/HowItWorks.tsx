"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a Session",
    description:
      "Grab a time that works. The first 30-minute discovery call is on us — just a conversation about where you are and what's possible.",
  },
  {
    number: "02",
    title: "We Assess & Strategize",
    description:
      "We dig into your operations with fresh eyes — surfacing quick wins, long-term plays, and the stuff you might be too close to see.",
  },
  {
    number: "03",
    title: "You Transform",
    description:
      "You leave with a clear playbook — specific recommendations, tool picks, and implementation steps you can act on tomorrow.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Clear thinking, zero fluff.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="font-mono text-6xl font-bold text-accent/10">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8 text-text-muted">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
