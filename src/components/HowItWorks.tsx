"use client";

const steps = [
  {
    number: "01",
    label: "STEP ONE",
    title: "Book a Session",
    description:
      "Grab a time that works. The first 30-minute discovery call is on us — just a conversation about where you are and what's possible.",
    bg: "bg-[#FDDEC8]",
    cta: { text: "Book Now", href: "#book", style: "btn-accent-pink" },
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "We Assess & Strategize",
    description:
      "We dig into your operations with fresh eyes — surfacing quick wins, long-term plays, and the stuff you might be too close to see.",
    bg: "bg-[#DDD8F3]",
    cta: { text: "Learn More", href: "#services", style: "btn-outline" },
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "You Transform",
    description:
      "You leave with a clear playbook — specific recommendations, tool picks, and implementation steps you can act on tomorrow.",
    bg: "bg-[#C8E6C9]",
    cta: { text: "Get Started", href: "#book", style: "btn-accent-green" },
  },
];

export function HowItWorks() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">How it works</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Clear thinking, zero fluff.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${step.bg} rounded-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[320px] justify-center`}
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary mb-4">
                {step.label}
              </span>

              <h3 className="heading-serif text-[26px] md:text-[32px] italic mb-4 text-text-primary">
                {step.title}
              </h3>

              <p className="text-[13px] text-text-secondary leading-relaxed mb-6 max-w-[280px]">
                {step.description}
              </p>

              <a href={step.cta.href} className={step.cta.style}>
                {step.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
