"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrainLogo } from "@/components/BrainLogo";

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
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-700 ${hovered === "left" ? "opacity-15" : "opacity-[0.03]"}`} style={{ background: "#6366F1" }} />
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-700 ${hovered === "right" ? "opacity-15" : "opacity-[0.03]"}`} style={{ background: "#06B6D4" }} />
      </div>

      <div className={`relative z-10 flex flex-col items-center px-4 w-full transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

        {/* Logo + brand — compact */}
        <div className="flex items-center gap-2 mb-8">
          <BrainLogo size={32} />
          <span className="heading-display text-[20px] text-white">Pliant Mind</span>
        </div>

        {/* Brain SVG — large, anatomical */}
        <div className="relative w-full max-w-[700px] aspect-[700/520] mx-auto">
          <svg viewBox="0 0 700 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

            {/* ── LEFT HEMISPHERE ── */}
            <Link href="/learn">
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Outer brain shape — left, more anatomical with bumps */}
                <path
                  d="M345 40
                     C300 38 260 50 230 75
                     C195 95 165 125 145 165
                     C115 175 85 210 80 255
                     C72 305 90 350 120 380
                     C130 415 155 445 195 465
                     C225 480 265 488 310 490
                     L345 490
                     L345 40Z"
                  fill={hovered === "left" ? "rgba(99,102,241,0.10)" : "rgba(99,102,241,0.03)"}
                  stroke={hovered === "left" ? "rgba(99,102,241,0.45)" : "rgba(99,102,241,0.12)"}
                  strokeWidth="1.5"
                  className="transition-all duration-500"
                />

                {/* Frontal lobe bump */}
                <path
                  d="M230 75 C200 60 160 65 140 90 C120 115 115 145 145 165"
                  stroke={hovered === "left" ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.1)"}
                  strokeWidth="1.2" strokeLinecap="round" fill="none"
                  className="transition-all duration-500"
                />

                {/* Sulci — brain folds */}
                <path d="M320 80 C260 100 210 150 175 200" stroke={hovered === "left" ? "rgba(99,102,241,0.30)" : "rgba(99,102,241,0.08)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M330 140 C270 155 200 210 160 270" stroke={hovered === "left" ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.07)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M335 210 C280 225 220 275 175 335" stroke={hovered === "left" ? "rgba(99,102,241,0.22)" : "rgba(99,102,241,0.06)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M335 290 C290 305 245 345 210 395" stroke={hovered === "left" ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.05)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M335 360 C300 370 265 400 240 440" stroke={hovered === "left" ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.04)"} strokeWidth="1" strokeLinecap="round" className="transition-all duration-500" />

                {/* Neural paths */}
                <defs>
                  <path id="l-p1" d="M310 100 C250 120 200 165 175 210" />
                  <path id="l-p2" d="M320 180 C260 200 190 250 160 310" />
                  <path id="l-p3" d="M330 270 C280 290 230 340 200 400" />
                  <path id="l-p4" d="M310 350 C270 370 240 410 225 455" />
                </defs>

                {/* Nodes */}
                <circle cx="310" cy="100" r={hovered === "left" ? "5" : "3"} fill="#6366F1" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="175" cy="210" r={hovered === "left" ? "4.5" : "2.5"} fill="#818CF8" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="180" r={hovered === "left" ? "4" : "2.5"} fill="#6366F1" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="310" r={hovered === "left" ? "4" : "2.5"} fill="#A5B4FC" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="330" cy="270" r={hovered === "left" ? "4.5" : "3"} fill="#818CF8" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="400" r={hovered === "left" ? "3.5" : "2"} fill="#A5B4FC" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="310" cy="350" r={hovered === "left" ? "3.5" : "2"} fill="#6366F1" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.8s" begin="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="225" cy="455" r="2" fill="#C7D2FE">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" begin="1s" repeatCount="indefinite" />
                </circle>

                {/* Sparks firing */}
                <Spark delay={0} duration={2.2} color="#818CF8" path="l-p1" />
                <Spark delay={1.2} duration={2.8} color="#6366F1" path="l-p2" />
                <Spark delay={2.5} duration={2.5} color="#A5B4FC" path="l-p3" />
                <Spark delay={3.8} duration={2.3} color="#818CF8" path="l-p4" />

                {/* Label — just the text, centered in hemisphere */}
                <text
                  x="210" y="265"
                  textAnchor="middle"
                  className={`heading-display transition-all duration-500 ${hovered === "left" ? "fill-white" : "fill-white/50"}`}
                  style={{ fontSize: "32px" }}
                >
                  Learn AI
                </text>
              </g>
            </Link>

            {/* ── CENTER STEM ── */}
            <line x1="348" y1="40" x2="348" y2="490" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <circle cx="348" cy="265" r="5" fill="#1a1f3a" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
              <animate attributeName="r" values="5;6.5;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="348" cy="265" r="2.5" fill="#6366F1" opacity="0.5">
              <animate attributeName="fill" values="#6366F1;#06B6D4;#6366F1" dur="4s" repeatCount="indefinite" />
            </circle>

            {/* ── RIGHT HEMISPHERE ── */}
            <Link href="/implement">
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Outer brain shape — right, mirrored with bumps */}
                <path
                  d="M351 40
                     C396 38 436 50 466 75
                     C501 95 531 125 551 165
                     C581 175 611 210 616 255
                     C624 305 606 350 576 380
                     C566 415 541 445 501 465
                     C471 480 431 488 386 490
                     L351 490
                     L351 40Z"
                  fill={hovered === "right" ? "rgba(6,182,212,0.10)" : "rgba(6,182,212,0.03)"}
                  stroke={hovered === "right" ? "rgba(6,182,212,0.45)" : "rgba(6,182,212,0.12)"}
                  strokeWidth="1.5"
                  className="transition-all duration-500"
                />

                {/* Frontal lobe bump — mirrored */}
                <path
                  d="M466 75 C496 60 536 65 556 90 C576 115 581 145 551 165"
                  stroke={hovered === "right" ? "rgba(6,182,212,0.35)" : "rgba(6,182,212,0.1)"}
                  strokeWidth="1.2" strokeLinecap="round" fill="none"
                  className="transition-all duration-500"
                />

                {/* Sulci */}
                <path d="M376 80 C436 100 486 150 521 200" stroke={hovered === "right" ? "rgba(6,182,212,0.30)" : "rgba(6,182,212,0.08)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M366 140 C426 155 496 210 536 270" stroke={hovered === "right" ? "rgba(6,182,212,0.25)" : "rgba(6,182,212,0.07)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M361 210 C416 225 476 275 521 335" stroke={hovered === "right" ? "rgba(6,182,212,0.22)" : "rgba(6,182,212,0.06)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M361 290 C406 305 451 345 486 395" stroke={hovered === "right" ? "rgba(6,182,212,0.18)" : "rgba(6,182,212,0.05)"} strokeWidth="1.2" strokeLinecap="round" className="transition-all duration-500" />
                <path d="M361 360 C396 370 431 400 456 440" stroke={hovered === "right" ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.04)"} strokeWidth="1" strokeLinecap="round" className="transition-all duration-500" />

                {/* Neural paths */}
                <defs>
                  <path id="r-p1" d="M386 100 C446 120 496 165 521 210" />
                  <path id="r-p2" d="M376 180 C436 200 506 250 536 310" />
                  <path id="r-p3" d="M366 270 C416 290 466 340 496 400" />
                  <path id="r-p4" d="M386 350 C426 370 456 410 471 455" />
                </defs>

                {/* Nodes */}
                <circle cx="386" cy="100" r={hovered === "right" ? "5" : "3"} fill="#06B6D4" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="521" cy="210" r={hovered === "right" ? "4.5" : "2.5"} fill="#22D3EE" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="376" cy="180" r={hovered === "right" ? "4" : "2.5"} fill="#06B6D4" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="536" cy="310" r={hovered === "right" ? "4" : "2.5"} fill="#67E8F9" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" begin="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="366" cy="270" r={hovered === "right" ? "4.5" : "3"} fill="#22D3EE" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3.3s" begin="1.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="496" cy="400" r={hovered === "right" ? "3.5" : "2"} fill="#67E8F9" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="386" cy="350" r={hovered === "right" ? "3.5" : "2"} fill="#06B6D4" className="transition-all duration-300">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.8s" begin="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="471" cy="455" r="2" fill="#A5F3FC">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" begin="1s" repeatCount="indefinite" />
                </circle>

                {/* Sparks */}
                <Spark delay={0.5} duration={2.5} color="#22D3EE" path="r-p1" />
                <Spark delay={1.8} duration={3} color="#06B6D4" path="r-p2" />
                <Spark delay={3} duration={2.3} color="#67E8F9" path="r-p3" />
                <Spark delay={4.2} duration={2.6} color="#22D3EE" path="r-p4" />

                {/* Label */}
                <text
                  x="486" y="265"
                  textAnchor="middle"
                  className={`heading-display transition-all duration-500 ${hovered === "right" ? "fill-white" : "fill-white/50"}`}
                  style={{ fontSize: "30px" }}
                >
                  Implement AI
                </text>
              </g>
            </Link>
          </svg>
        </div>

        {/* Bottom labels */}
        <div className="flex justify-between w-full max-w-[580px] mt-2 px-12">
          <span className={`text-[9px] tracking-[0.15em] uppercase transition-all duration-300 ${hovered === "left" ? "text-indigo-400/60" : "text-white/12"}`}>
            Logic · Structure
          </span>
          <span className={`text-[9px] tracking-[0.15em] uppercase transition-all duration-300 ${hovered === "right" ? "text-cyan-400/60" : "text-white/12"}`}>
            Creative · Vision
          </span>
        </div>
      </div>
    </div>
  );
}
