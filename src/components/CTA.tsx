"use client";

import { useState } from "react";
import Link from "next/link";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-3xl" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <h2 className="heading-display text-[32px] md:text-[44px] text-white mb-4">
          Ready to embrace AI?
        </h2>
        <p className="text-text-on-dark-muted text-lg mb-10 max-w-lg mx-auto">
          Whether you&apos;re upskilling yourself or transforming your business —
          the best time to start was yesterday. The second best is now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/assessment" className="btn-primary text-[15px] px-8 py-3.5">
            Take the Free Assessment
          </Link>
          <Link href="/business" className="btn-secondary-light text-[15px] px-8 py-3.5">
            Book an AI Audit
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-text-on-dark-muted text-sm mb-3">
            Or join the newsletter — weekly AI tips, no spam.
          </p>
          {submitted ? (
            <p className="text-accent-light text-sm font-medium">You&apos;re in. Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="btn-primary text-sm py-2.5 px-5">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
