"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrainLogo } from "./BrainLogo";

const navLinks = [
  { href: "/tracks", label: "Learn" },
  { href: "/business", label: "For Business" },
  { href: "/assessment", label: "Assessment" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Before scroll: white text on dark hero. After scroll: dark text on glass bg.
  const textColor = scrolled ? "text-text-primary" : "text-white";
  const linkColor = scrolled ? "text-text-secondary hover:text-text-primary" : "text-white/70 hover:text-white";
  const menuIconColor = scrolled ? "text-text-secondary" : "text-white/70";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <BrainLogo size={34} />
          <span className={`text-[16px] font-bold tracking-tight transition-colors duration-300 ${textColor}`}>
            Pliant Mind
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
          <a href="/assessment" className="btn-primary text-[13px] py-2.5 px-5">
            Get Started Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${menuIconColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass border-t border-border px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-secondary hover:text-text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assessment"
            onClick={() => setMobileOpen(false)}
            className="btn-primary block text-center text-sm"
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}
