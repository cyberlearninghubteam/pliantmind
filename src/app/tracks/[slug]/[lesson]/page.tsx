import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks, getLesson } from "@/lib/tracks";
import { LessonContent } from "@/components/LessonContent";

export function generateStaticParams() {
  return tracks.flatMap((track) =>
    track.lessons.map((lesson) => ({
      slug: track.slug,
      lesson: lesson.slug,
    }))
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const result = getLesson(slug, lessonSlug);
  if (!result) notFound();

  const { track, lesson } = result;
  const lessonIndex = track.lessons.findIndex((l) => l.slug === lessonSlug);
  const prevLesson = lessonIndex > 0 ? track.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < track.lessons.length - 1 ? track.lessons[lessonIndex + 1] : null;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-muted">
          <Link href="/tracks" className="hover:text-accent transition-colors">Tracks</Link>
          <span>/</span>
          <Link href={`/tracks/${track.slug}`} className="hover:text-accent transition-colors">{track.title}</Link>
          <span>/</span>
          <span className="text-text-secondary">{lesson.title}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className={`dot ${track.dot}`} />
            <span className="text-[11px] font-bold tracking-widest uppercase text-text-muted">
              {track.label} &middot; Lesson {lessonIndex + 1} of {track.lessons.length}
            </span>
            {!lesson.free && (
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-accent/10 text-accent rounded">
                PRO
              </span>
            )}
          </div>
          <h1 className="heading-display text-[32px] md:text-[44px] mb-2">
            {lesson.title}
          </h1>
          <p className="text-text-secondary text-lg">{lesson.description}</p>
          <span className="text-sm text-text-muted mt-2 inline-block">{lesson.duration} read</span>
        </div>

        {/* Lesson content */}
        <LessonContent content={lesson.content} />

        {/* Key Takeaways */}
        <div className="mt-12 card p-8 bg-background-warm border-l-4" style={{ borderLeftColor: track.color }}>
          <h3 className="heading-sans text-[20px] mb-4">Key Takeaways</h3>
          <ul className="space-y-2">
            {lesson.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] text-text-secondary">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {takeaway}
              </li>
            ))}
          </ul>
        </div>

        {/* Try This Now */}
        <div className="mt-6 card p-8 rounded-xl" style={{ backgroundColor: `${track.color}08` }}>
          <h3 className="heading-sans text-[20px] mb-3">Try This Now</h3>
          <p className="text-[14px] text-text-secondary leading-relaxed">
            {lesson.tryThisNow}
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          {prevLesson ? (
            <Link
              href={`/tracks/${track.slug}/${prevLesson.slug}`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              &larr; {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Link
              href={`/tracks/${track.slug}/${nextLesson.slug}`}
              className="btn-primary text-sm"
            >
              Next: {nextLesson.title} &rarr;
            </Link>
          ) : (
            <Link href={`/tracks/${track.slug}`} className="btn-primary text-sm">
              Track Complete &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
