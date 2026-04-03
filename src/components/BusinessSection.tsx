"use client";

import Link from "next/link";

const solutions = [
  {
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-6.274-.292c-2.146 0-4.262.138-6.274.292C4.595 4.01 3.75 4.973 3.75 6.108V16.5A2.25 2.25 0 006 18.75h.75",
    title: "AI Audit",
    description: "We assess your operations, identify high-impact AI opportunities, and deliver a prioritised roadmap your team can actually execute.",
    color: "#6366F1",
  },
  {
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
    title: "AI Voice Agents",
    description: "Deploy intelligent voice agents that handle calls, qualify leads, book appointments, and provide 24/7 customer support — sounding natural, not robotic.",
    color: "#06B6D4",
  },
  {
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    title: "AI Chatbots",
    description: "Custom chatbots trained on your business knowledge — handling customer questions, onboarding, internal support, and lead capture around the clock.",
    color: "#F59E0B",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Workflow Automation",
    description: "Connect your tools, eliminate manual processes, and build end-to-end automations that run while you sleep. n8n, Make, Zapier, and custom integrations.",
    color: "#10B981",
  },
];

export function BusinessSection() {
  return (
    <section className="py-24 px-6 bg-surface-dark">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="section-label text-accent-2 mb-3 block">For Businesses</span>
            <h2 className="heading-display text-[32px] md:text-[44px] text-white">
              AI that works for you.
            </h2>
            <p className="text-text-on-dark-muted text-lg mt-3 max-w-lg">
              From audit to implementation. We don&apos;t just advise — we build,
              deploy, and support AI solutions that drive real results.
            </p>
          </div>
          <Link href="/business" className="btn-secondary-light mt-4 md:mt-0 text-center">
            Learn More
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((solution) => (
            <div key={solution.title} className="card-dark p-8 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${solution.color}15` }}
              >
                <svg className="w-5 h-5" style={{ color: solution.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={solution.icon} />
                </svg>
              </div>
              <h3 className="heading-sans text-[20px] text-white mb-2 group-hover:text-accent-light transition-colors">
                {solution.title}
              </h3>
              <p className="text-[14px] text-text-on-dark-muted leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
