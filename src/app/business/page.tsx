import Link from "next/link";

const solutions = [
  {
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-6.274-.292c-2.146 0-4.262.138-6.274.292C4.595 4.01 3.75 4.973 3.75 6.108V16.5A2.25 2.25 0 006 18.75h.75",
    title: "AI Audit & Roadmap",
    description: "We map your operations, interview key stakeholders, and deliver a prioritised AI strategy — complete with quick wins, long-term plays, and vendor-neutral recommendations.",
    deliverables: ["Operations assessment report", "AI opportunity scorecard", "Prioritised 90-day roadmap", "Tool & vendor recommendations", "Executive presentation"],
    color: "#6366F1",
  },
  {
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
    title: "AI Voice Agents",
    description: "Deploy conversational AI that handles inbound and outbound calls — qualifying leads, booking appointments, answering FAQs, and routing to humans when needed.",
    deliverables: ["Custom voice agent design", "Call flow & script development", "Integration with your CRM/calendar", "Testing & quality assurance", "Ongoing monitoring & optimisation"],
    color: "#06B6D4",
  },
  {
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    title: "AI Chatbots",
    description: "Intelligent chatbots trained on your knowledge base — for customer support, sales qualification, internal help desks, and onboarding. Available 24/7, endlessly patient.",
    deliverables: ["Knowledge base ingestion & training", "Conversation flow design", "Website/app widget deployment", "Human handoff integration", "Analytics & improvement loop"],
    color: "#F59E0B",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Workflow Automation",
    description: "Connect your tools and eliminate manual busywork. We design, build, and maintain end-to-end automations using n8n, Make, Zapier, and custom integrations.",
    deliverables: ["Process mapping & audit", "Automation architecture design", "Build & testing", "Team training & documentation", "30-day support period"],
    color: "#10B981",
  },
];

const process = [
  { step: "01", title: "Discovery Call", description: "30-minute conversation to understand your business, pain points, and goals. Free, no obligation.", time: "30 min" },
  { step: "02", title: "Audit & Assessment", description: "We dig into your operations, tools, and team workflows. Stakeholder interviews, process mapping, opportunity identification.", time: "1-2 weeks" },
  { step: "03", title: "Strategy & Roadmap", description: "Detailed report with scored opportunities, recommended solutions, implementation timeline, and budget estimates.", time: "Delivered" },
  { step: "04", title: "Build & Deploy", description: "We build the solutions, integrate with your existing systems, test thoroughly, and train your team.", time: "2-6 weeks" },
  { step: "05", title: "Support & Optimise", description: "Ongoing monitoring, performance reporting, and continuous improvement. We don't build and disappear.", time: "Ongoing" },
];

export default function BusinessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-2/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="section-label text-accent-2 mb-4 inline-block">AI for Business</span>
          <h1 className="heading-display text-[38px] md:text-[60px] text-white mb-6">
            Stop talking about AI.
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Start using it.</span>
          </h1>
          <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            From audit to deployment. We assess your operations, identify high-impact
            AI opportunities, and build the solutions — voice agents, chatbots,
            automations, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@pliantmind.com" className="btn-primary text-[15px] px-8 py-3.5">
              Book a Free Discovery Call
            </a>
            <a href="#solutions" className="btn-secondary-light text-[15px] px-8 py-3.5">
              See Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="section-label text-accent mb-3 block">What we build</span>
            <h2 className="heading-display text-[32px] md:text-[44px]">
              Solutions that work while you sleep.
            </h2>
          </div>

          <div className="space-y-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="card p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${solution.color}10` }}
                      >
                        <svg className="w-5 h-5" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={solution.icon} />
                        </svg>
                      </div>
                      <h3 className="heading-sans text-[22px]">{solution.title}</h3>
                    </div>
                    <p className="text-[15px] text-text-secondary leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div className="md:w-64 flex-shrink-0">
                    <h4 className="text-[11px] font-bold tracking-widest uppercase text-text-muted mb-3">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {solution.deliverables.map((d) => (
                        <li key={d} className="text-[13px] text-text-secondary flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-background-warm">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label text-accent mb-3 block">Our process</span>
            <h2 className="heading-display text-[32px] md:text-[44px]">
              From conversation to transformation.
            </h2>
          </div>

          <div className="space-y-0">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6 pb-10">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-[13px] font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="heading-sans text-[18px]">{step.title}</h3>
                    <span className="text-[11px] text-text-muted bg-background-warm px-2 py-0.5 rounded">{step.time}</span>
                  </div>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface-dark text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="heading-display text-[32px] md:text-[44px] text-white mb-4">
            Let&apos;s talk about your business.
          </h2>
          <p className="text-text-on-dark-muted text-lg mb-8">
            30-minute discovery call. Free. No pitch, no pressure — just a sharp
            conversation about where AI fits in your operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@pliantmind.com" className="btn-primary text-[15px] px-8 py-3.5">
              Book Discovery Call
            </a>
            <Link href="/assessment" className="btn-secondary-light text-[15px] px-8 py-3.5">
              Or Take the Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
