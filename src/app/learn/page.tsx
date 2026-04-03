import Link from "next/link";
import { BrainLogo } from "@/components/BrainLogo";
import { tracks } from "@/lib/tracks";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero — indigo theme */}
        <section className="pt-28 pb-16 px-6 text-center" style={{ background: "linear-gradient(160deg, #0F1629 0%, #1a1f3a 100%)" }}>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BrainLogo size={28} />
              <span className="heading-sans text-[16px] text-white">Pliant Mind</span>
            </div>
            <span className="section-label text-indigo-400 text-[11px] mb-4 block">For Individuals</span>
            <h1 className="heading-display text-[36px] md:text-[52px] text-white mb-3">
              Learn AI
            </h1>
            <p className="text-white/50 text-[15px] mb-6 max-w-lg mx-auto leading-relaxed">
              Practical, role-based learning tracks that build real skills — not just hype. Start free, learn at your own pace.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/assessment" className="btn-primary text-[13px] py-2.5 px-6">
                Take the Assessment
              </Link>
              <Link href="/implement" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
                Or explore Implement AI →
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar — indigo accents */}
        <section className="py-8 px-6 border-b-2 border-indigo-500/10" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.04), transparent, rgba(99,102,241,0.04))" }}>
          <div className="mx-auto max-w-4xl grid grid-cols-3 gap-6 text-center">
            {[
              { value: "6", label: "Learning Tracks" },
              { value: "26", label: "Hands-On Lessons" },
              { value: "Free", label: "To Get Started" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="heading-display text-[28px] text-indigo-600">{stat.value}</div>
                <div className="text-[11px] text-text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks grid */}
        <section id="learn" className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <span className="section-label text-indigo-500 mb-2 block">Learning Tracks</span>
              <h2 className="heading-display text-[28px] md:text-[40px]">Pick your path.</h2>
              <p className="text-text-secondary text-[15px] mt-2 max-w-lg">
                Six structured tracks — from AI basics to building your own tools. Start wherever makes sense for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tracks.map((track) => (
                <Link
                  key={track.slug}
                  href={`/tracks/${track.slug}`}
                  className="group rounded-2xl p-6 border-2 border-border hover:border-indigo-300 transition-all duration-200 hover:shadow-[0_4px_0_0] hover:shadow-indigo-100 hover:-translate-y-1 bg-white block"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                    <span className={`dot ${track.dot}`} style={{ width: 10, height: 10 }} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{track.label}</span>
                  <h3 className="heading-sans text-[18px] mt-1 mb-1.5 group-hover:text-indigo-600 transition-colors">{track.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed mb-3">{track.description}</p>
                  <span className="text-[12px] text-indigo-500 font-medium">{track.lessons.length} lessons →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — indigo steps */}
        <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.03), transparent)" }}>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <span className="section-label text-indigo-500 mb-2 block">How It Works</span>
              <h2 className="heading-display text-[28px] md:text-[40px]">Learn by doing, not watching.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Take the assessment", desc: "A quick quiz that maps your AI confidence and recommends where to start.", color: "#6366F1" },
                { num: "02", title: "Follow your track", desc: "Bite-sized, practical lessons you can do in 15 minutes. Real exercises, not theory.", color: "#818CF8" },
                { num: "03", title: "Apply it at work", desc: "Every lesson ends with a 'try this now' challenge. Use AI in your actual job from day one.", color: "#A5B4FC" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="text-[42px] heading-display mb-3" style={{ color: step.color, opacity: 0.25 }}>{step.num}</div>
                  <h3 className="heading-sans text-[18px] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/assessment" className="btn-primary">Start the Assessment</Link>
            </div>
          </div>
        </section>

        {/* CTA — indigo themed */}
        <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(160deg, #0F1629 0%, #1a1f3a 100%)" }}>
          <div className="mx-auto max-w-2xl">
            <h2 className="heading-display text-[28px] md:text-[40px] text-white mb-3">Ready to start learning?</h2>
            <p className="text-white/50 text-[15px] mb-8">
              The AI essentials track is completely free. No credit card, no signup wall.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tracks/ai-essentials" className="btn-primary text-[14px] px-8 py-3">
                Start Free Track
              </Link>
              <Link href="/implement" className="text-[13px] text-white/40 hover:text-white/60 transition-colors">
                Looking for business solutions? →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
