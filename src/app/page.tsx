"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrainLogo } from "@/components/BrainLogo";

// Animated spark that fires along a path
function Spark({ delay, duration, color, path }: { delay: number; duration: number; color: string; path: string }) {
  return (
    <circle r="2.5" fill={color} opacity="0">
      <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
        <mpath href={`#${path}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.15;0.7;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
      <animate attributeName="r" values="1;2.5;1" dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

export default function Home() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-auto"
      style={{ background: "linear-gradient(160deg, #0F1629 0%, #151a30 50%, #0f1e2d 100%)" }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${hovered === "left" ? "opacity-20" : "opacity-5"}`} style={{ background: "#6366F1" }} />
        <div className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${hovered === "right" ? "opacity-20" : "opacity-5"}`} style={{ background: "#06B6D4" }} />
      </div>

      <div className={`relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

        {/* Logo + brand */}
        <BrainLogo size={48} className="mb-3" />
        <h1 className="heading-display text-[24px] md:text-[32px] text-white mb-1">Pliant Mind</h1>
        <p className="text-white/35 text-[13px] mb-10">AI transformation for people &amp; businesses</p>

        {/* Brain SVG — two hemispheres */}
        <div className="relative w-full max-w-[600px] aspect-[600/420]">
          <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

            {/* ── LEFT HEMISPHERE ── */}
            <Link href="/learn">
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Brain shape — left half */}
                <path
                  d="M298 50 C230 50 170 80 140 130 C100 140 70 180 70 220 C70 270 100 310 140 320 C150 370 190 400 250 400 L298 400 L298 50Z"
                  fill={hovered === "left" ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.05)"}
                  stroke={hovered === "left" ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.15)"}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />

                {/* Inner folds */}
                <path d="M280 90 C220 100 180 140 160 180" stroke={hovered === "left" ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.12)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M280 160 C210 170 150 220 130 260" stroke={hovered === "left" ? "rgba(99,102,241,0.3)" : "rgba(99,102,241,0.1)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M280 240 C230 250 190 290 170 330" stroke={hovered === "left" ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.08)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />

                {/* Neural paths for sparks */}
                <defs>
                  <path id="l-path-1" d="M270 120 C220 130 180 160 155 195" />
                  <path id="l-path-2" d="M260 200 C210 210 160 250 140 290" />
                  <path id="l-path-3" d="M270 300 C230 310 200 340 185 370" />
                </defs>

                {/* Nodes */}
                <circle cx="270" cy="120" r={hovered === "left" ? "5" : "3.5"} fill="#6366F1" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="155" cy="195" r={hovered === "left" ? "4" : "3"} fill="#818CF8" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="260" cy="200" r={hovered === "left" ? "5" : "3.5"} fill="#6366F1" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="140" cy="290" r={hovered === "left" ? "4" : "3"} fill="#A5B4FC" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="270" cy="300" r={hovered === "left" ? "4.5" : "3"} fill="#818CF8" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="185" cy="370" r="2.5" fill="#A5B4FC">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
                </circle>

                {/* Sparks */}
                <Spark delay={0} duration={2.2} color="#818CF8" path="l-path-1" />
                <Spark delay={1.5} duration={2.8} color="#6366F1" path="l-path-2" />
                <Spark delay={3} duration={2.5} color="#A5B4FC" path="l-path-3" />

                {/* Text overlay */}
                <foreignObject x="85" y="130" width="200" height="200">
                  <div className="flex flex-col items-center justify-center h-full text-center px-2">
                    <svg className={`w-7 h-7 mb-2 transition-all duration-300 ${hovered === "left" ? "text-indigo-400 scale-110" : "text-indigo-400/50"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                    <span className={`heading-display text-[20px] md:text-[26px] transition-all duration-300 ${hovered === "left" ? "text-white scale-105" : "text-white/70"}`}>
                      Learn AI
                    </span>
                    <span className={`text-[10px] md:text-[11px] mt-1.5 transition-all duration-300 leading-relaxed ${hovered === "left" ? "text-white/60" : "text-white/30"}`}>
                      Upskill yourself with practical, role-based tracks
                    </span>
                    <div className={`flex gap-1.5 mt-3 transition-all duration-300 ${hovered === "left" ? "opacity-100" : "opacity-0"}`}>
                      {["6 Tracks", "Free"].map((t) => (
                        <span key={t} className="text-[8px] px-2 py-0.5 rounded-full border border-indigo-400/30 text-indigo-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </foreignObject>
              </g>
            </Link>

            {/* ── CENTER STEM ── */}
            <line x1="300" y1="50" x2="300" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="300" cy="210" r="6" fill="#1a1f3a" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5">
              <animate attributeName="r" values="6;7;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="210" r="3" fill="#6366F1" opacity="0.6">
              <animate attributeName="fill" values="#6366F1;#06B6D4;#6366F1" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* ── RIGHT HEMISPHERE ── */}
            <Link href="/implement">
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Brain shape — right half */}
                <path
                  d="M302 50 C370 50 430 80 460 130 C500 140 530 180 530 220 C530 270 500 310 460 320 C450 370 410 400 350 400 L302 400 L302 50Z"
                  fill={hovered === "right" ? "rgba(6,182,212,0.12)" : "rgba(6,182,212,0.05)"}
                  stroke={hovered === "right" ? "rgba(6,182,212,0.5)" : "rgba(6,182,212,0.15)"}
                  strokeWidth="2"
                  className="transition-all duration-500"
                />

                {/* Inner folds */}
                <path d="M320 90 C380 100 420 140 440 180" stroke={hovered === "right" ? "rgba(6,182,212,0.35)" : "rgba(6,182,212,0.12)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M320 160 C390 170 450 220 470 260" stroke={hovered === "right" ? "rgba(6,182,212,0.3)" : "rgba(6,182,212,0.1)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M320 240 C370 250 410 290 430 330" stroke={hovered === "right" ? "rgba(6,182,212,0.25)" : "rgba(6,182,212,0.08)"} strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500" />

                {/* Neural paths for sparks */}
                <defs>
                  <path id="r-path-1" d="M330 120 C380 130 420 160 445 195" />
                  <path id="r-path-2" d="M340 200 C390 210 440 250 460 290" />
                  <path id="r-path-3" d="M330 300 C370 310 400 340 415 370" />
                </defs>

                {/* Nodes */}
                <circle cx="330" cy="120" r={hovered === "right" ? "5" : "3.5"} fill="#06B6D4" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="445" cy="195" r={hovered === "right" ? "4" : "3"} fill="#22D3EE" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="200" r={hovered === "right" ? "5" : "3.5"} fill="#06B6D4" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="460" cy="290" r={hovered === "right" ? "4" : "3"} fill="#67E8F9" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="330" cy="300" r={hovered === "right" ? "4.5" : "3"} fill="#22D3EE" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.3s" begin="1.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="415" cy="370" r="2.5" fill="#67E8F9">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Sparks */}
                <Spark delay={0.5} duration={2.5} color="#22D3EE" path="r-path-1" />
                <Spark delay={2} duration={3} color="#06B6D4" path="r-path-2" />
                <Spark delay={3.5} duration={2.3} color="#67E8F9" path="r-path-3" />

                {/* Text overlay */}
                <foreignObject x="315" y="130" width="200" height="200">
                  <div className="flex flex-col items-center justify-center h-full text-center px-2">
                    <svg className={`w-7 h-7 mb-2 transition-all duration-300 ${hovered === "right" ? "text-cyan-400 scale-110" : "text-cyan-400/50"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span className={`heading-display text-[20px] md:text-[26px] transition-all duration-300 ${hovered === "right" ? "text-white scale-105" : "text-white/70"}`}>
                      Implement AI
                    </span>
                    <span className={`text-[10px] md:text-[11px] mt-1.5 transition-all duration-300 leading-relaxed ${hovered === "right" ? "text-white/60" : "text-white/30"}`}>
                      We build &amp; deploy AI solutions for your business
                    </span>
                    <div className={`flex gap-1.5 mt-3 transition-all duration-300 ${hovered === "right" ? "opacity-100" : "opacity-0"}`}>
                      {["Audit", "Chatbots", "Voice"].map((t) => (
                        <span key={t} className="text-[8px] px-2 py-0.5 rounded-full border border-cyan-400/30 text-cyan-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </foreignObject>
              </g>
            </Link>
          </svg>
        </div>

        {/* Bottom labels */}
        <div className="flex justify-between w-full max-w-[500px] mt-4 px-8">
          <span className={`text-[9px] tracking-[0.15em] uppercase transition-all duration-300 ${hovered === "left" ? "text-indigo-400/60" : "text-white/15"}`}>
            Left Brain · Logic
          </span>
          <span className="text-[9px] tracking-[0.15em] uppercase text-white/20">Choose your path</span>
          <span className={`text-[9px] tracking-[0.15em] uppercase transition-all duration-300 ${hovered === "right" ? "text-cyan-400/60" : "text-white/15"}`}>
            Right Brain · Creative
          </span>
        </div>
      </div>
    </div>
  );
}
