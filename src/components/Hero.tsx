"use client";

import { useState } from "react";
import Link from "next/link";

export function Hero() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [selected, setSelected] = useState<"learn" | "implement" | null>(null);

  const handleSelect = (side: "learn" | "implement") => {
    setSelected(side);
    const target = side === "learn" ? "#learn" : "#implement";
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] md:min-h-[95vh] flex flex-col">
      {/* Top bar with tagline */}
      <div className="absolute top-0 left-0 right-0 z-20 text-center pt-24 pb-6 pointer-events-none">
        <span className="section-label text-white/50 text-[11px]">
          Choose your path
        </span>
      </div>

      {/* Split hero — desktop side-by-side, mobile stacked */}
      <div className="flex-1 flex flex-col md:flex-row relative">

        {/* LEFT BRAIN — Learn */}
        <div
          className={`relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
            hovered === "right" ? "md:flex-[0.85]" : hovered === "left" ? "md:flex-[1.15]" : ""
          }`}
          style={{
            background: "linear-gradient(160deg, #0F1629 0%, #1a1f3a 40%, #1e2340 100%)",
          }}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleSelect("learn")}
        >
          {/* Background pattern — structured grid (left brain) */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          {/* Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl transition-opacity duration-500 ${
            hovered === "left" ? "opacity-30" : "opacity-10"
          }`} style={{ background: "#6366F1" }} />

          <div className="relative z-10 px-8 md:px-12 py-20 md:py-0 text-center max-w-md">
            {/* Icon */}
            <div className={`mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              hovered === "left" ? "scale-110 bg-indigo-500/20" : "bg-white/5"
            }`}>
              <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>

            <h2 className={`heading-display text-[28px] md:text-[40px] text-white mb-3 transition-all duration-300 ${
              hovered === "left" ? "scale-105" : ""
            }`}>
              Learn AI
            </h2>

            <p className={`text-[14px] md:text-[15px] leading-relaxed mb-6 transition-all duration-300 ${
              hovered === "left" ? "text-white/80" : "text-white/50"
            }`}>
              Practical, role-based tracks that build real skills. From AI essentials to prompt engineering — learn at your own pace.
            </p>

            <div className={`flex flex-wrap justify-center gap-2 mb-6 transition-all duration-300 ${
              hovered === "left" ? "opacity-100" : "opacity-50"
            }`}>
              {["6 Tracks", "26 Lessons", "Free to Start"].map((tag) => (
                <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-indigo-400/30 text-indigo-300">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/tracks"
              onClick={(e) => { e.stopPropagation(); }}
              className={`inline-block btn-primary text-[13px] py-2.5 px-6 transition-all duration-300 ${
                hovered === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none md:opacity-0"
              }`}
            >
              Explore Tracks
            </Link>

            {/* Brain label */}
            <div className={`mt-8 transition-all duration-300 ${
              hovered === "left" ? "opacity-60" : "opacity-20"
            }`}>
              <span className="text-[10px] tracking-[0.2em] uppercase text-indigo-300 font-medium">
                Left Brain &middot; Logic &middot; Structure
              </span>
            </div>
          </div>
        </div>

        {/* Center divider — brain stem */}
        <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10 items-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-[#1a1f3a] border border-white/10 flex items-center justify-center shadow-xl">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="opacity-80">
                <circle cx="16" cy="16" r="3" fill="#6366F1">
                  <animate attributeName="r" values="3;3.5;3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="10" cy="10" r="1.5" fill="#818CF8" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="22" cy="10" r="1.5" fill="#06B6D4" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="10" cy="22" r="1.2" fill="#A5B4FC" opacity="0.4">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="22" cy="22" r="1.2" fill="#22D3EE" opacity="0.4">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <line x1="13.5" y1="13.5" x2="10" y2="10" stroke="#818CF8" strokeWidth="0.8" opacity="0.3" />
                <line x1="18.5" y1="13.5" x2="22" y2="10" stroke="#06B6D4" strokeWidth="0.8" opacity="0.3" />
                <line x1="13.5" y1="18.5" x2="10" y2="22" stroke="#A5B4FC" strokeWidth="0.8" opacity="0.2" />
                <line x1="18.5" y1="18.5" x2="22" y2="22" stroke="#22D3EE" strokeWidth="0.8" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile divider */}
        <div className="md:hidden flex items-center justify-center py-3" style={{ background: "linear-gradient(90deg, #1a1f3a, #0f2130)" }}>
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">or</span>
        </div>

        {/* RIGHT BRAIN — Implement */}
        <div
          className={`relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
            hovered === "left" ? "md:flex-[0.85]" : hovered === "right" ? "md:flex-[1.15]" : ""
          }`}
          style={{
            background: "linear-gradient(200deg, #0a1628 0%, #0f2130 40%, #112435 100%)",
          }}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleSelect("implement")}
        >
          {/* Background pattern — flowing curves (right brain) */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M0 50 Q50 0 100 50 Q150 100 200 50" stroke="#06B6D4" fill="none" strokeWidth="1" />
                  <path d="M0 100 Q50 50 100 100 Q150 150 200 100" stroke="#06B6D4" fill="none" strokeWidth="1" />
                  <path d="M0 150 Q50 100 100 150 Q150 200 200 150" stroke="#06B6D4" fill="none" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
          </div>

          {/* Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl transition-opacity duration-500 ${
            hovered === "right" ? "opacity-30" : "opacity-10"
          }`} style={{ background: "#06B6D4" }} />

          <div className="relative z-10 px-8 md:px-12 py-20 md:py-0 text-center max-w-md">
            {/* Icon */}
            <div className={`mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              hovered === "right" ? "scale-110 bg-cyan-500/20" : "bg-white/5"
            }`}>
              <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>

            <h2 className={`heading-display text-[28px] md:text-[40px] text-white mb-3 transition-all duration-300 ${
              hovered === "right" ? "scale-105" : ""
            }`}>
              Implement AI
            </h2>

            <p className={`text-[14px] md:text-[15px] leading-relaxed mb-6 transition-all duration-300 ${
              hovered === "right" ? "text-white/80" : "text-white/50"
            }`}>
              We audit your operations, build AI solutions, and deploy them. Voice agents, chatbots, automations — working while you sleep.
            </p>

            <div className={`flex flex-wrap justify-center gap-2 mb-6 transition-all duration-300 ${
              hovered === "right" ? "opacity-100" : "opacity-50"
            }`}>
              {["AI Audit", "Voice Agents", "Chatbots", "Automation"].map((tag) => (
                <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/business"
              onClick={(e) => { e.stopPropagation(); }}
              className={`inline-block text-[13px] py-2.5 px-6 rounded-full font-semibold transition-all duration-300 ${
                hovered === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none md:opacity-0"
              }`}
              style={{
                background: "#06B6D4",
                color: "white",
                boxShadow: "0 4px 0 0 #0891B2",
                transform: hovered === "right" ? "translateY(-2px)" : "translateY(6px)",
              }}
            >
              Book a Discovery Call
            </Link>

            {/* Brain label */}
            <div className={`mt-8 transition-all duration-300 ${
              hovered === "right" ? "opacity-60" : "opacity-20"
            }`}>
              <span className="text-[10px] tracking-[0.2em] uppercase text-cyan-300 font-medium">
                Right Brain &middot; Creative &middot; Vision
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
