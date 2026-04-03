export function BrainLogo({ size = 32, className = "", variant = "default" }: { size?: number; className?: string; variant?: "default" | "light" }) {
  const bgColor = variant === "light" ? "rgba(255,255,255,0.1)" : "#6366F1";
  const strokeColor = variant === "light" ? "#818CF8" : "white";

  return (
    <div
      className={`rounded-xl flex items-center justify-center ${className}`}
      style={{ width: size, height: size, background: bgColor }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylised brain - two hemispheres as flowing curves */}
        <path
          d="M12 3C8.5 3 6 5.5 5 8C3.5 8.5 2.5 10 2.5 12C2.5 14 3.5 15.5 5 16C5.5 18.5 8 21 12 21"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M12 3C15.5 3 18 5.5 19 8C20.5 8.5 21.5 10 21.5 12C21.5 14 20.5 15.5 19 16C18.5 18.5 16 21 12 21"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Neural connection lines */}
        <path d="M12 3V21" stroke={strokeColor} strokeWidth="0.75" strokeDasharray="2 2" opacity="0.3" />
        <path d="M8 7C10 8 12 8 12 8" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M16 7C14 8 12 8 12 8" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M6 12C8.5 12 12 13 12 13" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M18 12C15.5 12 12 13 12 13" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        {/* Neural nodes */}
        <circle cx="8" cy="7" r="1.5" fill={strokeColor} opacity="0.8" />
        <circle cx="16" cy="7" r="1.5" fill={strokeColor} opacity="0.8" />
        <circle cx="6" cy="12" r="1.5" fill={strokeColor} opacity="0.8" />
        <circle cx="18" cy="12" r="1.5" fill={strokeColor} opacity="0.8" />
        <circle cx="12" cy="13" r="2" fill={strokeColor} opacity="0.9" />
        <circle cx="9" cy="17" r="1" fill={strokeColor} opacity="0.5" />
        <circle cx="15" cy="17" r="1" fill={strokeColor} opacity="0.5" />
      </svg>
    </div>
  );
}
