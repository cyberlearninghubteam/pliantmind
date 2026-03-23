"use client";

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
    <section className="py-28 px-6 bg-surface-warm">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">How it works</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Clear thinking, zero fluff.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="heading-serif text-[72px] text-text-primary/[0.06] leading-none block">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mt-1 mb-3 text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-8 text-text-muted">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
