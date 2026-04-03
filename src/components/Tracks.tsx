"use client";

import Link from "next/link";

const tracks = [
  {
    slug: "ai-essentials",
    dot: "dot-emerald",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    label: "FOUNDATIONS",
    title: "AI Essentials",
    lessons: "5 lessons",
    description: "Understand what AI actually is and how it's reshaping work.",
  },
  {
    slug: "ai-powered-workflows",
    dot: "dot-amber",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    label: "PRODUCTIVITY",
    title: "AI Workflows",
    lessons: "3 lessons",
    description: "Eliminate busywork with AI-powered daily workflows.",
  },
  {
    slug: "prompt-engineering",
    dot: "dot-rose",
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    label: "COMMUNICATION",
    title: "Prompt Engineering",
    lessons: "3 lessons",
    description: "Write prompts that get precise, useful results every time.",
  },
  {
    slug: "ai-for-leaders",
    dot: "dot-violet",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    label: "STRATEGY",
    title: "AI for Leaders",
    lessons: "3 lessons",
    description: "Evaluate tools, build adoption strategy, lead your team.",
  },
  {
    slug: "build-with-no-code",
    dot: "dot-cyan",
    icon: "M11.42 15.17l-5.384-3.115A2.25 2.25 0 014.77 9.54l6.866-3.974a2.25 2.25 0 012.25 0l6.866 3.974a2.25 2.25 0 01.864 2.515l-5.384 3.115a2.25 2.25 0 01-2.25 0z",
    label: "CREATION",
    title: "No-Code AI",
    lessons: "3 lessons",
    description: "Build AI apps and automations without writing code.",
  },
  {
    slug: "future-proof-skills",
    dot: "dot-indigo",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
    label: "RESILIENCE",
    title: "Future-Proof Skills",
    lessons: "3 lessons",
    description: "Build the human skills AI can't replace.",
  },
];

export function Tracks() {
  return (
    <section id="learn" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="section-label text-accent mb-3 block">For Individuals</span>
            <h2 className="heading-display text-[32px] md:text-[44px]">
              Learn at your own pace.
            </h2>
          </div>
          <Link href="/tracks" className="btn-secondary mt-4 md:mt-0 text-center">
            View All Tracks
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track) => (
            <Link
              key={track.slug}
              href={`/tracks/${track.slug}`}
              className="card p-6 group block"
            >
              <div className="w-10 h-10 rounded-lg bg-background-warm flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <svg className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={track.icon} />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`dot ${track.dot}`} />
                <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">
                  {track.label}
                </span>
              </div>
              <h3 className="heading-sans text-[18px] mb-1.5 group-hover:text-accent transition-colors">
                {track.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-3">
                {track.description}
              </p>
              <span className="text-[12px] text-text-muted">
                {track.lessons}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
