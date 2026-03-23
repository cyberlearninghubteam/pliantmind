export function BrainLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`rounded-lg bg-[#E04D6E] flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain outline - two hemispheres with neural connection */}
        <path
          d="M12 2C9.5 2 7.5 3.2 6.5 5C5.2 5.2 4 6 3.3 7.2C2.5 8.5 2.5 10 3 11.3C2.4 12.5 2.3 14 3 15.3C3.5 16.3 4.4 17 5.5 17.3C5.8 18.5 6.7 19.5 7.8 20C9 20.5 10.3 20.4 11.5 19.8L12 19.5L12.5 19.8C13.7 20.4 15 20.5 16.2 20C17.3 19.5 18.2 18.5 18.5 17.3C19.6 17 20.5 16.3 21 15.3C21.7 14 21.6 12.5 21 11.3C21.5 10 21.5 8.5 20.7 7.2C20 6 18.8 5.2 17.5 5C16.5 3.2 14.5 2 12 2Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center neural line */}
        <path
          d="M12 2V19.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="2 2"
          opacity="0.6"
        />
        {/* Left hemisphere folds */}
        <path
          d="M12 5.5C10 5.5 8 6.5 7 8.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M12 10C9.5 10 7 11 5.5 13"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Right hemisphere folds */}
        <path
          d="M12 5.5C14 5.5 16 6.5 17 8.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M12 10C14.5 10 17 11 18.5 13"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Neural nodes */}
        <circle cx="7" cy="8.5" r="1" fill="white" opacity="0.9" />
        <circle cx="17" cy="8.5" r="1" fill="white" opacity="0.9" />
        <circle cx="5.5" cy="13" r="1" fill="white" opacity="0.9" />
        <circle cx="18.5" cy="13" r="1" fill="white" opacity="0.9" />
      </svg>
    </div>
  );
}
