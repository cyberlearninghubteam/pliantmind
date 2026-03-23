"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#FB6182",
          },
          dark: {
            "cal-brand": "#FB6182",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" className="py-28 px-6 bg-surface-warm">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="section-label">Get started</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Let&apos;s think through it together.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            First 30-minute discovery call is free — no pitch, no pressure.
            Just a sharp conversation about where AI fits in your business.
          </p>
        </div>

        <div className="card rounded-lg p-2 overflow-hidden">
          <Cal
            calLink="matt-anderson/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          Powered by Cal.com &middot; All times shown in your local timezone
        </p>
      </div>
    </section>
  );
}
