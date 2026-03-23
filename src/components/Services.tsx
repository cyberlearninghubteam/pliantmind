"use client";

const services = [
  {
    dot: "dot-green",
    label: "STRATEGY",
    title: "AI Strategy & Roadmap",
    description:
      "Cut through the noise. We assess where you are, identify the highest-impact opportunities, and build a phased plan that fits your budget, your team, and the way you actually work.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-green" },
  },
  {
    dot: "dot-yellow",
    label: "AUTOMATION",
    title: "Workflow Automation",
    description:
      "Stop burning hours on tasks a machine should handle. We design and wire up automations with n8n, Make, Zapier, and custom integrations — so your team can focus on work that matters.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-yellow" },
  },
  {
    dot: "dot-pink",
    label: "AGENTIC AI",
    title: "Agentic AI & Assistants",
    description:
      "Go beyond chatbots. We build autonomous AI agents that reason, take action, and get work done — handling customer inquiries, qualifying leads, and running multi-step workflows without hand-holding.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-pink" },
  },
  {
    dot: "dot-purple",
    label: "ANALYTICS",
    title: "Data & Analytics",
    description:
      "You're sitting on more insight than you think. We set up dashboards, reporting pipelines, and AI-powered analytics so you can see what's working — and where to push harder.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-purple" },
  },
  {
    dot: "dot-orange",
    label: "INTEGRATION",
    title: "Tool Selection & Integration",
    description:
      "The AI tool landscape changes weekly. We stay on top of it so you don't have to — evaluating, recommending, and integrating what actually fits your stack. No vendor lock-in.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-orange" },
  },
  {
    dot: "dot-teal",
    label: "TRAINING",
    title: "Team Training & Enablement",
    description:
      "AI is only as good as the people using it. We run hands-on workshops that get your team confident with prompt engineering, AI tools, and automation — tailored to how they actually work.",
    cta: { text: "Learn More", href: "#book", style: "btn-accent-teal" },
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">How we help</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Bend, don&apos;t break.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Every business is different. We adapt our thinking to your reality
            — finding the right AI and automation moves that actually fit how
            your team works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-window">
              {/* Label bar */}
              <div className="px-3 py-2 flex items-center gap-2">
                <span className={`dot ${service.dot}`} />
                <span className="text-[11px] font-bold tracking-widest uppercase text-text-primary">
                  {service.label}
                </span>
              </div>

              {/* Dashed inner */}
              <div className="card-window-inner">
                <h3 className="heading-serif text-[22px] md:text-[26px] mb-3 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-5">
                  {service.description}
                </p>
                <a href={service.cta.href} className={service.cta.style}>
                  {service.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
