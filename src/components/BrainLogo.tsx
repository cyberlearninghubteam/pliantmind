export function BrainLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`rounded-lg bg-[#E04D6E] flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.62}
        height={size * 0.62}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Origami brain — geometric facets forming a brain silhouette */}
        {/* Left hemisphere facets */}
        <polygon
          points="12,3 7,6 8,10"
          fill="white"
          opacity="0.9"
        />
        <polygon
          points="7,6 4,10 8,10"
          fill="white"
          opacity="0.6"
        />
        <polygon
          points="4,10 5,15 8,10"
          fill="white"
          opacity="0.8"
        />
        <polygon
          points="8,10 5,15 9,17"
          fill="white"
          opacity="0.5"
        />
        <polygon
          points="8,10 9,17 12,12"
          fill="white"
          opacity="0.7"
        />
        <polygon
          points="9,17 12,21 12,12"
          fill="white"
          opacity="0.4"
        />

        {/* Right hemisphere facets */}
        <polygon
          points="12,3 17,6 16,10"
          fill="white"
          opacity="0.9"
        />
        <polygon
          points="17,6 20,10 16,10"
          fill="white"
          opacity="0.55"
        />
        <polygon
          points="20,10 19,15 16,10"
          fill="white"
          opacity="0.75"
        />
        <polygon
          points="16,10 19,15 15,17"
          fill="white"
          opacity="0.45"
        />
        <polygon
          points="16,10 15,17 12,12"
          fill="white"
          opacity="0.65"
        />
        <polygon
          points="15,17 12,21 12,12"
          fill="white"
          opacity="0.35"
        />

        {/* Center fold line */}
        <line
          x1="12" y1="3" x2="12" y2="21"
          stroke="#E04D6E"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
