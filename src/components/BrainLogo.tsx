export function BrainLogo({ size = 32, className = "", variant = "default" }: { size?: number; className?: string; variant?: "default" | "light" }) {
  const isDark = variant === "light";

  return (
    <div
      className={`rounded-2xl flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        background: isDark
          ? "rgba(255,255,255,0.1)"
          : "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
        boxShadow: isDark ? "none" : "0 2px 0 0 #4F46E5",
      }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric brain — clean, Brilliant-style */}
        {/* Left hemisphere */}
        <path
          d="M12 4C9 4 7 6 6.5 8.5C5 9 4 10.5 4 12.5C4 14.5 5.5 16 7 16.5C7.5 18.5 9.5 20 12 20"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right hemisphere */}
        <path
          d="M12 4C15 4 17 6 17.5 8.5C19 9 20 10.5 20 12.5C20 14.5 18.5 16 17 16.5C16.5 18.5 14.5 20 12 20"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center synapse */}
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.9" />
        {/* Neural connections */}
        <line x1="12" y1="10" x2="12" y2="5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="10.3" y1="13" x2="7" y2="15" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        <line x1="13.7" y1="13" x2="17" y2="15" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  );
}
