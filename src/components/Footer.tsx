export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-accent flex items-center justify-center text-white font-bold text-xs">
            O
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Opscaled
          </span>
        </div>
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Opscaled. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@opscaled.com"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            hello@opscaled.com
          </a>
        </div>
      </div>
    </footer>
  );
}
