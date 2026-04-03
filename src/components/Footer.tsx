import Link from "next/link";
import { BrainLogo } from "./BrainLogo";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <BrainLogo size={28} />
              <span className="text-[15px] font-bold tracking-tight">Pliant Mind</span>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              AI transformation for people and businesses. Learn, build, lead.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-[12px] font-bold tracking-widest uppercase text-text-muted mb-4">Learn</h4>
            <div className="space-y-2.5">
              <Link href="/tracks" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">All Tracks</Link>
              <Link href="/assessment" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">Assessment</Link>
              <Link href="/tracks/ai-essentials" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">AI Essentials</Link>
              <Link href="/tracks/prompt-engineering" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">Prompt Engineering</Link>
            </div>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-[12px] font-bold tracking-widest uppercase text-text-muted mb-4">Business</h4>
            <div className="space-y-2.5">
              <Link href="/business" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">AI Audit</Link>
              <Link href="/business" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">Voice Agents</Link>
              <Link href="/business" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">Chatbots</Link>
              <Link href="/business" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">Automation</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-bold tracking-widest uppercase text-text-muted mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href="mailto:hello@pliantmind.com" className="block text-[13px] text-text-secondary hover:text-text-primary transition-colors">hello@pliantmind.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-text-muted">
            &copy; {new Date().getFullYear()} Pliant Mind. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-text-muted hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="text-[12px] text-text-muted hover:text-text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
