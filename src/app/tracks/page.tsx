import Link from "next/link";
import { tracks } from "@/lib/tracks";
import { PageShell } from "@/components/PageShell";

export default function TracksPage() {
  return (
    <PageShell>
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-label">All learning tracks</span>
          <h1 className="heading-display text-[36px] md:text-[52px] mt-3 mb-4">
            Pick your path.
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Six structured tracks — from AI basics to building your own tools.
            Start wherever makes sense for you.
          </p>
          <Link href="/assessment" className="btn-outline mt-6 inline-block">
            Not sure where to start? Take the quiz
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <Link
              key={track.slug}
              href={`/tracks/${track.slug}`}
              className="card-window group block"
            >
              {/* Label bar */}
              <div className="px-3 py-2 flex items-center gap-2">
                <span className={`dot ${track.dot}`} />
                <span className="text-[11px] font-bold tracking-widest uppercase text-text-primary">
                  {track.label}
                </span>
              </div>

              {/* Dashed inner */}
              <div className="card-window-inner">
                <h3 className="heading-display text-[22px] md:text-[26px] mb-3 text-text-primary">
                  {track.title}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-4">
                  {track.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-text-muted">
                    {track.lessons.length} lessons
                  </span>
                  <span className="text-[12px] text-accent font-semibold group-hover:translate-x-1 transition-transform">
                    Start &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </PageShell>
  );
}
