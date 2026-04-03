"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Assess",
    description: "Take our free AI readiness quiz or book a business audit. Understand where you are and where the opportunities live.",
    link: { text: "Take Assessment", href: "/assessment" },
    color: "#6366F1",
  },
  {
    number: "02",
    title: "Learn or Build",
    description: "Follow structured learning tracks to upskill yourself — or work with us to design and deploy AI solutions for your business.",
    link: { text: "Explore Tracks", href: "/tracks" },
    color: "#06B6D4",
  },
  {
    number: "03",
    title: "Transform",
    description: "Apply what you learn immediately. Every lesson includes a real-world challenge. Every business engagement delivers working solutions.",
    link: { text: "Get Started", href: "/assessment" },
    color: "#10B981",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-background-warm">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label text-accent mb-3 block">How it works</span>
          <h2 className="heading-display text-[32px] md:text-[44px]">
            Three steps. Real results.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div
                className="text-[48px] heading-display mb-4"
                style={{ color: step.color, opacity: 0.3 }}
              >
                {step.number}
              </div>
              <h3 className="heading-sans text-[22px] mb-3">{step.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4">
                {step.description}
              </p>
              <Link
                href={step.link.href}
                className="text-[13px] font-semibold hover:underline transition-colors"
                style={{ color: step.color }}
              >
                {step.link.text} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
