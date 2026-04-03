import Link from "next/link";
import { BrainLogo } from "@/components/BrainLogo";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const solutions = [
  {
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-6.274-.292c-2.146 0-4.262.138-6.274.292C4.595 4.01 3.75 4.973 3.75 6.108V16.5A2.25 2.25 0 006 18.75h.75",
    title: "AI Audit & Roadmap",
    description: "We map your operations, interview key stakeholders, and deliver a prioritised AI strategy — complete with quick wins and vendor-neutral recommendations.",
    deliverables: ["Operations assessment", "Opportunity scorecard", "90-day roadmap", "Tool recommendations", "Executive presentation"],
    color: "#06B6D4",
  },
  {
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
    title: "AI Voice Agents",
    description: "Conversational AI that handles calls — qualifying leads, booking appointments, answering FAQs, and routing to humans when needed.",
    deliverables: ["Voice agent design", "Call flow development", "CRM integration", "Quality assurance", "Ongoing optimisation"],
    color: "#0891B2",
  },
  {
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    title: "AI Chatbots",
    description: "Intelligent chatbots trained on your knowledge — handling support, sales qualification, onboarding, and lead capture. 24/7, endlessly patient.",
    deliverables: ["Knowledge base training", "Conversation design", "Widget deployment", "Human handoff", "Analytics loop"],
    color: "#14B8A6",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Workflow Automation",
    description: "Connect your tools and eliminate manual busywork. End-to-end automations using n8n, Make, Zapier, and custom integrations.",
    deliverables: ["Process audit", "Architecture design", "Build & testing", "Team training", "30-day support"],
    color: "#22D3EE",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "30-minute conversation about your business, pain points, and goals. Free, no obligation.", time: "30 min" },
  { step: "02", title: "Audit & Assessment", desc: "We dig into your operations, tools, and workflows. Stakeholder interviews, process mapping, opportunity identification.", time: "1-2 weeks" },
  { step: "03", title: "Strategy & Roadmap", desc: "Detailed report with scored opportunities, recommended solutions, timeline, and budget estimates.", time: "Delivered" },
  { step: "04", title: "Build & Deploy", desc: "We build the solutions, integrate with your systems, test thoroughly, and train your team.", time: "2-6 weeks" },
  { step: "05", title: "Support & Optimise", desc: "Ongoing monitoring, performance reporting, and continuous improvement.", time: "Ongoing" },
];

export default function ImplementPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero — cyan theme */}
        <section className="pt-28 pb-16 px-6 text-center" style={{ background: "linear-gradient(200deg, #0a1628 0%, #0f2130 100%)" }}>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BrainLogo size={28} />
              <span className="heading-sans text-[16px] text-white">Pliant Mind</span>
            </div>
            <span className="section-label text-cyan-400 text-[11px] mb-4 block">For Businesses</span>
            <h1 className="heading-display text-[36px] md:text-[52px] text-white mb-3">
              Implement AI
            </h1>
            <p className="text-white/50 text-[15px] mb-6 max-w-lg mx-auto leading-relaxed">
              From audit to deployment. We assess your operations, identify high-impact opportunities, and build the solutions.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="mailto:hello@pliantmind.com" className="inline-block text-[13px] py-2.5 px-6 rounded-full font-semibold text-white cursor-pointer" style={{ background: "#06B6D4", boxShadow: "0 4px 0 0 #0891B2", transform: "translateY(-2px)" }}>
                Book a Discovery Call
              </a>
              <Link href="/learn" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                Or explore Learn AI →
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <span className="section-label text-cyan-600 mb-2 block">What We Build</span>
              <h2 className="heading-display text-[28px] md:text-[40px]">Solutions that work while you sleep.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="group rounded-2xl p-8 border-2 border-border hover:border-cyan-300 transition-all duration-200 hover:shadow-[0_4px_0_0] hover:shadow-cyan-100 hover:-translate-y-1 bg-white"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${solution.color}12` }}>
                          <svg className="w-5 h-5" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={solution.icon} />
                          </svg>
                        </div>
                        <h3 className="heading-sans text-[18px] group-hover:text-cyan-700 transition-colors">{solution.title}</h3>
                      </div>
                      <p className="text-[13px] text-text-secondary leading-relaxed">{solution.description}</p>
                    </div>
                    <div className="md:w-48 flex-shrink-0">
                      <h4 className="text-[10px] font-bold tracking-widest uppercase text-text-muted mb-2">Deliverables</h4>
                      <ul className="space-y-1.5">
                        {solution.deliverables.map((d) => (
                          <li key={d} className="text-[12px] text-text-secondary flex items-start gap-1.5">
                            <svg className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

        {/* Process timeline — cyan themed */}
        <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, rgba(6,182,212,0.03), transparent)" }}>
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <span className="section-label text-cyan-600 mb-2 block">Our Process</span>
              <h2 className="heading-display text-[28px] md:text-[40px]">From conversation to transformation.</h2>
            </div>

            <div className="space-y-0">
              {process.map((step, i) => (
                <div key={step.step} className="flex gap-5 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0 text-white" style={{ background: "#06B6D4" }}>
                      {step.step}
                    </div>
                    {i < process.length - 1 && <div className="w-px flex-1 bg-cyan-200 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="heading-sans text-[16px]">{step.title}</h3>
                      <span className="text-[10px] text-text-muted bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded font-medium">{step.time}</span>
                    </div>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — cyan themed */}
        <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(200deg, #0a1628 0%, #0f2130 100%)" }}>
          <div className="mx-auto max-w-2xl">
            <h2 className="heading-display text-[28px] md:text-[40px] text-white mb-3">Let&apos;s talk about your business.</h2>
            <p className="text-white/50 text-[15px] mb-8">
              30-minute discovery call. Free. No pitch, no pressure — just a sharp conversation about where AI fits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@pliantmind.com" className="inline-block text-[14px] py-3 px-8 rounded-full font-semibold text-white cursor-pointer" style={{ background: "#06B6D4", boxShadow: "0 4px 0 0 #0891B2", transform: "translateY(-2px)" }}>
                Book Discovery Call
              </a>
              <Link href="/learn" className="text-[13px] text-white/40 hover:text-white/60 transition-colors">
                Looking to upskill instead? →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
