"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start learning the fundamentals — no credit card required.",
    features: [
      "AI Essentials track (full access)",
      "AI readiness assessment",
      "Community access",
      "Weekly newsletter",
    ],
    cta: { text: "Start Free", href: "#", style: "btn-outline" },
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Unlock all tracks, advanced lessons, and hands-on projects.",
    features: [
      "All 6 learning tracks",
      "Hands-on project challenges",
      "Tool library & templates",
      "Progress tracking & certificates",
      "Priority community support",
    ],
    cta: { text: "Start Pro", href: "#", style: "btn-accent-pink" },
    highlight: true,
  },
  {
    name: "Teams",
    price: "$19",
    period: "per seat/month",
    description: "Upskill your whole team with admin tools and reporting.",
    features: [
      "Everything in Pro",
      "Team admin dashboard",
      "Progress reporting",
      "Custom learning paths",
      "Onboarding support",
      "Bulk seat discounts",
    ],
    cta: { text: "Talk to Us", href: "mailto:hello@pliantmind.com", style: "btn-accent-purple" },
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">Pricing</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Start free. Grow when ready.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            The fundamentals are free — always. Upgrade when you want deeper
            tracks, projects, and team tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 flex flex-col ${
                plan.highlight
                  ? "bg-text-primary text-white ring-2 ring-accent"
                  : "card"
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-3 ${
                  plan.highlight ? "text-accent" : "section-label"
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span className={`heading-serif text-[42px] ${
                    plan.highlight ? "text-white" : ""
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.highlight ? "text-white/60" : "text-text-muted"
                  }`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-[13px] mt-2 leading-relaxed ${
                  plan.highlight ? "text-white/70" : "text-text-secondary"
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-[13px] flex items-start gap-2 ${
                      plan.highlight ? "text-white/80" : "text-text-secondary"
                    }`}
                  >
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlight ? "text-accent" : "text-accent-green"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta.href}
                className={`${plan.cta.style} text-center w-full ${
                  plan.highlight ? "!border-white !text-white !shadow-[3px_3px_0_rgba(255,255,255,0.3)]" : ""
                }`}
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
