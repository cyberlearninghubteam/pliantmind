import Link from "next/link";
import { BrainLogo } from "@/components/BrainLogo";

export default function Home() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(160deg, #0F1629 0%, #1a1f3a 50%, #0f2130 100%)" }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <BrainLogo size={64} className="mb-4" />

        {/* Brand */}
        <h1 className="heading-display text-[28px] md:text-[36px] text-white mb-2">
          Pliant Mind
        </h1>
        <p className="text-white/40 text-[14px] mb-16 text-center">
          AI transformation for people &amp; businesses
        </p>

        {/* Choose your path */}
        <span className="section-label text-white/30 text-[11px] mb-8">
          Choose your path
        </span>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-5 w-full max-w-2xl">
          {/* Learn */}
          <Link
            href="/learn"
            className="group relative rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.03] border-2 border-white/8 hover:border-indigo-400/40 block"
            style={{ background: "rgba(99, 102, 241, 0.06)" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-5 group-hover:bg-indigo-500/25 transition-colors">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="heading-display text-[24px] md:text-[28px] text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Learn AI
              </h2>
              <p className="text-[13px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                Practical, role-based tracks that build real skills — from AI essentials to prompt engineering.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["6 Tracks", "26 Lessons", "Free"].map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-indigo-400/20 text-indigo-300/60 group-hover:border-indigo-400/40 group-hover:text-indigo-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-[10px] tracking-[0.15em] uppercase text-white/20 group-hover:text-white/40 transition-colors">
                Left Brain · Logic · Structure
              </div>
            </div>
          </Link>

          {/* Implement */}
          <Link
            href="/implement"
            className="group relative rounded-2xl p-8 text-left transition-all duration-300 hover:scale-[1.03] border-2 border-white/8 hover:border-cyan-400/40 block"
            style={{ background: "rgba(6, 182, 212, 0.06)" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-5 group-hover:bg-cyan-500/25 transition-colors">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="heading-display text-[24px] md:text-[28px] text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Implement AI
              </h2>
              <p className="text-[13px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                We audit your operations, build AI solutions, and deploy them — voice agents, chatbots, automations.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["AI Audit", "Voice Agents", "Chatbots", "Automation"].map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-cyan-400/20 text-cyan-300/60 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-[10px] tracking-[0.15em] uppercase text-white/20 group-hover:text-white/40 transition-colors">
                Right Brain · Creative · Vision
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
