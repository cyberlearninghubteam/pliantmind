"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-28 px-6 bg-surface-warm">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-label">Stay sharp</span>
        <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
          The AI landscape changes weekly.
          <br />
          <span className="italic text-accent">You should too.</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto text-lg mb-10">
          Join the newsletter — a weekly dose of practical AI tips, new tool
          breakdowns, and career strategy. No spam. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="card rounded-lg p-8 max-w-md mx-auto">
            <div className="text-accent text-2xl mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="heading-serif text-xl">You&apos;re in.</p>
            <p className="text-sm text-text-secondary mt-1">Check your inbox for a welcome note.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full sm:flex-1 px-4 py-3 border-2 border-text-primary bg-surface text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-accent-pink w-full sm:w-auto whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
