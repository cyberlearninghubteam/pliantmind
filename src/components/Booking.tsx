"use client";

import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#6366f1",
          },
          light: {
            "cal-brand": "#6366f1",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Get started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Let&apos;s think through it together.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            First 30-minute discovery call is free — no pitch, no pressure.
            Just a sharp conversation about where AI fits in your business.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-border bg-surface p-2 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/*
            Replace "matt-anderson" with your actual Cal.com username
            and the event slug with your booking link.
            Example: calLink="matt-anderson/ai-advisory"
          */}
          <Cal
            calLink="matt-anderson/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </motion.div>

        <p className="text-center text-xs text-text-muted mt-6">
          Powered by Cal.com &middot; All times shown in your local timezone
        </p>
      </div>
    </section>
  );
}
