import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks, getTrack } from "@/lib/tracks";

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/tracks" className="text-sm text-text-muted hover:text-accent transition-colors">
            &larr; All Tracks
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className={`dot ${track.dot}`} />
            <span className="text-[11px] font-bold tracking-widest uppercase text-text-muted">
              {track.label}
            </span>
          </div>
          <h1 className="heading-display text-[36px] md:text-[52px] mb-4">
            {track.title}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {track.longDescription}
          </p>
          <div className="mt-4 text-sm text-text-muted">
            {track.lessons.length} lessons &middot; {track.lessons.filter((l) => l.free).length} free
          </div>
        </div>

        {/* Lesson list */}
        <div className="space-y-3">
          {track.lessons.map((lesson, i) => (
            <Link
              key={lesson.slug}
              href={`/tracks/${track.slug}/${lesson.slug}`}
              className="card p-6 flex items-start gap-4 block group"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${track.color}20`, color: track.color }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="heading-sans text-[18px] group-hover:text-accent transition-colors">
                    {lesson.title}
                  </h3>
                  {!lesson.free && (
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-accent/10 text-accent rounded">
                      PRO
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-text-secondary">{lesson.description}</p>
              </div>
              <span className="text-[12px] text-text-muted flex-shrink-0 mt-1">
                {lesson.duration}
              </span>
            </Link>
          ))}
        </div>

        {/* Start CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/tracks/${track.slug}/${track.lessons[0].slug}`}
            className="btn-primary text-[15px] px-8 py-3.5"
          >
            Start This Track
          </Link>
        </div>
      </div>
    </div>
  );
}
