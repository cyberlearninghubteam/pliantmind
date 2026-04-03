export function BrainLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Synapse network — nodes connected by dendrite-like paths */}

      {/* Central node */}
      <circle cx="16" cy="16" r="3" fill="#6366F1" />

      {/* Outer nodes */}
      <circle cx="6" cy="8" r="2" fill="#818CF8" />
      <circle cx="26" cy="7" r="2.2" fill="#6366F1" />
      <circle cx="5" cy="22" r="1.8" fill="#A5B4FC" />
      <circle cx="27" cy="22" r="2" fill="#818CF8" />
      <circle cx="16" cy="4" r="1.5" fill="#A5B4FC" />
      <circle cx="16" cy="28" r="1.8" fill="#818CF8" />
      <circle cx="10" cy="28" r="1.2" fill="#C7D2FE" />
      <circle cx="24" cy="28" r="1.3" fill="#C7D2FE" />

      {/* Dendrite connections — organic curves from center to outer nodes */}
      <path d="M16 13.5C15 11 10 9 8 8.5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M16 13.5C18 11 23 8.5 24.5 7.5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M13.5 16C10 16 6.5 19 5.5 21" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M18.5 16C22 16 25.5 19 26.5 21" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M16 13C16 10 16 6 16 5.5" stroke="#A5B4FC" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M16 19C16 22 16 26 16 26.5" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M14.5 18.5C12.5 22 11 26 10.5 27" stroke="#A5B4FC" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <path d="M17.5 18.5C19.5 22 22 26 23.5 27" stroke="#A5B4FC" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />

      {/* Tiny synapse sparks */}
      <circle cx="12" cy="11" r="0.8" fill="#818CF8" opacity="0.6" />
      <circle cx="20" cy="10.5" r="0.8" fill="#818CF8" opacity="0.6" />
      <circle cx="9" cy="18" r="0.7" fill="#A5B4FC" opacity="0.4" />
      <circle cx="23" cy="18" r="0.7" fill="#A5B4FC" opacity="0.4" />
    </svg>
  );
}
