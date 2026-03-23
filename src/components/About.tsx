"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl bg-surface border border-border overflow-hidden relative glow">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-32 w-32 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-accent-light">
                      MA
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              Matt Anderson
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Most businesses don&apos;t need more tools — they need someone
                who can see the whole picture and tell them what actually matters.
                That&apos;s what I do.
              </p>
              <p>
                With over a decade in technology, operations, and digital
                transformation, I&apos;ve helped teams go from overwhelmed and
                duct-taped together to running lean, automated operations that
                scale without burning people out.
              </p>
              <p>
                I&apos;m not here to sell you software or push a vendor.
                I&apos;m the outside perspective that sees what you&apos;re too
                close to notice — and gives you a clear, honest path forward.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AI Strategy",
                "Process Automation",
                "LLM Integration",
                "No-Code / Low-Code",
                "Data Pipelines",
                "Team Enablement",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
