"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto">
          {/* Header with photo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="relative w-28 h-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-accent/30 bg-white">
              <Image
                src="/matt-anderson.png"
                alt="Matt Anderson — Pliant Mind"
                fill
                className="object-cover object-[center_15%] scale-[1.05]"
                sizes="112px"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="section-label">The mind behind it</span>
              <h2 className="heading-serif text-[32px] md:text-[48px] mt-2">
                Matt Anderson
              </h2>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="space-y-4 text-text-secondary leading-relaxed text-[16px]">
              <p>
                Pliant Mind is me — one advisor, no layers, no account managers.
                When you book a session, you get the person who actually does
                the thinking and the work.
              </p>
              <p>
                With over a decade in technology, operations, and digital
                transformation, I&apos;ve helped teams go from overwhelmed and
                duct-taped together to running lean, automated operations that
                scale without burning people out.
              </p>
              <p>
                I&apos;m not here to sell you software or push a vendor.
                I&apos;m the outside perspective that sees what you&apos;re too
                close to notice — and gives you a clear, honest path forward.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "AI Strategy",
                "Process Automation",
                "LLM Integration",
                "No-Code / Low-Code",
                "Data Pipelines",
                "Team Enablement",
              ].map((tag) => (
                <span key={tag} className="tag rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
