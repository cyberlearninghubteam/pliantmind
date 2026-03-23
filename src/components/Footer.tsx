import { BrainLogo } from "./BrainLogo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <BrainLogo size={24} />
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            Pliant Mind
          </span>
        </div>
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Pliant Mind. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:matt@pliantmind.com"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            matt@pliantmind.com
          </a>
        </div>
      </div>
    </footer>
  );
}
