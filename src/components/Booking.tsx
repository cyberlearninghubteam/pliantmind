"use client";

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
            "cal-brand": "#FB6182",
          },
          light: {
            "cal-brand": "#FB6182",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" className="py-28 px-6 border-t border-border relative">
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-12">
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
        </div>

        <div className="rounded-2xl border border-border bg-surface p-2 overflow-hidden glow-subtle">
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
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          Powered by Cal.com &middot; All times shown in your local timezone
        </p>
      </div>
    </section>
  );
}
