"use client";

const steps = [
  {
    number: "01",
    label: "STEP ONE",
    title: "Take the assessment",
    description:
      "A quick quiz that maps your current AI confidence, identifies gaps, and recommends where to start. No signup required.",
    bg: "bg-[#FDDEC8]",
    cta: { text: "Take Quiz", href: "#pricing", style: "btn-accent-pink" },
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "Follow your track",
    description:
      "Bite-sized, practical lessons you can do in 15 minutes. Each one builds on the last — with real exercises, not just theory.",
    bg: "bg-[#DDD8F3]",
    cta: { text: "See Tracks", href: "#tracks", style: "btn-accent-purple" },
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "Apply it at work",
    description:
      "Every lesson ends with a 'try this now' challenge. You'll be using AI in your actual job from day one — not just watching videos.",
    bg: "bg-[#C8E6C9]",
    cta: { text: "Get Started", href: "#pricing", style: "btn-accent-green" },
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">How it works</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Learn by doing, not watching.
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
