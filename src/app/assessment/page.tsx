"use client";

import { useState } from "react";
import Link from "next/link";
import { quizQuestions, calculateResult, type QuizResult } from "@/lib/quiz";
import { PageShell } from "@/components/PageShell";
import { tracks } from "@/lib/tracks";

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [started, setStarted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(calculateResult(newAnswers));
    }
  };

  const progress = started ? ((currentQuestion + (result ? 1 : 0)) / quizQuestions.length) * 100 : 0;

  let inner;

  if (result) {
    const recommendedTracks = result.recommendedTracks
      .map((slug) => tracks.find((t) => t.slug === slug))
      .filter(Boolean);

    inner = (
      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              {result.level}
            </div>
            <h1 className="heading-display text-[32px] md:text-[48px] mb-4">{result.headline}</h1>
            <p className="text-text-secondary text-lg leading-relaxed">{result.description}</p>
          </div>
          <div className="card rounded-lg p-6 mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-secondary">Your AI Readiness Score</span>
              <span className="font-bold">{result.score}/{result.maxScore}</span>
            </div>
            <div className="w-full bg-background-warm rounded-full h-3">
              <div className="bg-accent h-3 rounded-full transition-all duration-1000" style={{ width: `${result.percentage}%` }} />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="heading-display text-[24px] mb-4">Your recommended tracks</h2>
            <div className="space-y-4">
              {recommendedTracks.map((track) => track && (
                <Link key={track.slug} href={`/tracks/${track.slug}`} className="card rounded-lg p-6 flex items-start gap-4 hover:border-accent/30 transition-all block">
                  <span className={`dot ${track.dot} mt-1.5 flex-shrink-0`} />
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-text-muted">{track.label}</span>
                    <h3 className="heading-display text-[20px] mt-1">{track.title}</h3>
                    <p className="text-[13px] text-text-secondary mt-1">{track.description}</p>
                    <span className="text-[12px] text-accent font-semibold mt-2 inline-block">{track.lessons.length} lessons &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center space-y-3">
            <Link href="/tracks" className="btn-primary inline-block">View All Tracks</Link>
            <button onClick={() => { setAnswers([]); setCurrentQuestion(0); setResult(null); setStarted(false); }} className="block mx-auto text-sm text-text-muted hover:text-text-primary transition-colors">
              Retake assessment
            </button>
          </div>
        </div>
      </div>
    );
  } else if (!started) {
    inner = (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="section-label mb-6 inline-block">AI Readiness Assessment</span>
          <h1 className="heading-display text-[36px] md:text-[52px] mb-4">How AI-ready are you?</h1>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            10 quick questions. No signup required. Get a personalised score and learning recommendations in under 3 minutes.
          </p>
          <button onClick={() => setStarted(true)} className="btn-primary">Start Assessment</button>
        </div>
      </div>
    );
  } else {
    const q = quizQuestions[currentQuestion];
    inner = (
      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-text-muted mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-background-warm rounded-full h-2">
              <div className="bg-accent h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div key={q.id} className="animate-fade-in-up">
            <h2 className="heading-display text-[24px] md:text-[32px] mb-8">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((option, i) => (
                <button key={i} onClick={() => handleAnswer(i)} className="w-full text-left card rounded-lg p-5 hover:border-accent/40 hover:bg-surface-warm transition-all group">
                  <span className="text-[15px] text-text-primary group-hover:text-accent transition-colors">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PageShell>{inner}</PageShell>;
}
