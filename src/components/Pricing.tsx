"use client";

import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start learning the fundamentals. No credit card needed.",
    features: [
      "AI Essentials track (full access)",
      "AI readiness assessment",
      "Community access",
      "Weekly newsletter",
    ],
    cta: { text: "Start Free", href: "/assessment" },
    highlight: false,
    color: "#10B981",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "All tracks, advanced lessons, and hands-on projects.",
    features: [
      "All 6 learning tracks",
      "Hands-on project challenges",
      "Tool library & templates",
      "Progress tracking",
      "Priority community support",
    ],
    cta: { text: "Start Pro", href: "#" },
    highlight: true,
    color: "#6366F1",
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "AI audit, implementation, and team training — tailored to your business.",
    features: [
      "Full AI audit & roadmap",
      "Voice agents & chatbots",
      "Workflow automation",
      "Team training (all tracks)",
      "Ongoing support",
      "Dedicated account manager",
    ],
    cta: { text: "Talk to Us", href: "/business" },
    highlight: false,
    color: "#06B6D4",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="section-label text-accent mb-3 block">Pricing</span>
          <h2 className="heading-display text-[32px] md:text-[44px] mb-3">
            Start free. Scale when ready.
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Learn for free, go deeper with Pro, or get custom AI solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-surface-dark text-white ring-2 ring-accent shadow-xl shadow-accent/10"
                  : "card"
              }`}
            >
              <div className="mb-6">
                <span
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className={`heading-display text-[38px] ${plan.highlight ? "text-white" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-text-on-dark-muted" : "text-text-muted"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-[13px] mt-2 ${plan.highlight ? "text-text-on-dark-muted" : "text-text-secondary"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-[13px] flex items-start gap-2 ${
                      plan.highlight ? "text-text-on-dark-muted" : "text-text-secondary"
                    }`}
                  >
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`text-center w-full rounded-lg py-3 font-semibold text-[13px] transition-all ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "border-1.5 border-border hover:border-accent hover:text-accent"
                }`}
                style={!plan.highlight ? { borderWidth: "1.5px" } : undefined}
              >
                {plan.cta.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
