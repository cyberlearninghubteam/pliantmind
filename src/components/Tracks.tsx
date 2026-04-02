"use client";

const tracks = [
  {
    dot: "dot-green",
    label: "FOUNDATIONS",
    title: "AI Essentials",
    description:
      "Understand what AI actually is, what it can and can't do, and how it's reshaping work. No jargon, no hype — just the mental models you need to make smart decisions.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-green" },
  },
  {
    dot: "dot-yellow",
    label: "PRODUCTIVITY",
    title: "AI-Powered Workflows",
    description:
      "Master the tools that 10x your output. Learn to use ChatGPT, Claude, Copilot, and automation platforms to eliminate busywork and focus on what actually matters.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-yellow" },
  },
  {
    dot: "dot-pink",
    label: "COMMUNICATION",
    title: "Prompt Engineering",
    description:
      "The skill gap isn't technical — it's knowing how to talk to AI. Learn to write prompts that get precise, useful results every time, across any tool.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-pink" },
  },
  {
    dot: "dot-purple",
    label: "STRATEGY",
    title: "AI for Leaders",
    description:
      "For managers and team leads: how to evaluate AI tools, build an adoption strategy, upskill your team, and make the case to leadership — without the buzzwords.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-purple" },
  },
  {
    dot: "dot-orange",
    label: "CREATION",
    title: "Build with No-Code AI",
    description:
      "Build AI-powered apps, automations, and tools without writing code. From chatbots to data pipelines — learn to prototype and ship real solutions in days, not months.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-orange" },
  },
  {
    dot: "dot-teal",
    label: "RESILIENCE",
    title: "Future-Proof Skills",
    description:
      "AI can't replace creativity, judgment, or leadership. This track builds the human skills that become more valuable as AI handles the routine — critical thinking, storytelling, and strategic decision-making.",
    cta: { text: "Start Free", href: "#pricing", style: "btn-accent-teal" },
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">Learning tracks</span>
          <h2 className="heading-serif text-[32px] md:text-[52px] mt-3 mb-4">
            Pick your path.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Six structured tracks — from AI basics to building your own tools.
            Start wherever makes sense for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div key={track.title} className="card-window">
              {/* Label bar */}
              <div className="px-3 py-2 flex items-center gap-2">
                <span className={`dot ${track.dot}`} />
                <span className="text-[11px] font-bold tracking-widest uppercase text-text-primary">
                  {track.label}
                </span>
              </div>

              {/* Dashed inner */}
              <div className="card-window-inner">
                <h3 className="heading-serif text-[22px] md:text-[26px] mb-3 text-text-primary">
                  {track.title}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-5">
                  {track.description}
                </p>
                <a href={track.cta.href} className={track.cta.style}>
                  {track.cta.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
