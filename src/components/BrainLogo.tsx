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
      {/* Central node — gentle pulse */}
      <circle cx="16" cy="16" r="3" fill="#6366F1">
        <animate attributeName="r" values="3;3.5;3" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Outer nodes — staggered subtle pulse */}
      <circle cx="6" cy="8" r="2" fill="#818CF8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="26" cy="7" r="2.2" fill="#6366F1">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3.5s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="5" cy="22" r="1.8" fill="#A5B4FC">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="27" cy="22" r="2" fill="#818CF8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3.8s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="4" r="1.5" fill="#A5B4FC">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="28" r="1.8" fill="#818CF8">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="4.2s" begin="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="28" r="1.2" fill="#C7D2FE">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5.5s" begin="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="28" r="1.3" fill="#C7D2FE">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.8s" begin="0.7s" repeatCount="indefinite" />
      </circle>

      {/* Dendrite connections — signal pulse travelling along paths */}
      <path d="M16 13.5C15 11 10 9 8 8.5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M16 13.5C15 11 10 9 8 8.5" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0" strokeDasharray="3 20">
        <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="23;0" dur="2.5s" begin="0s" repeatCount="indefinite" />
      </path>

      <path d="M16 13.5C18 11 23 8.5 24.5 7.5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M16 13.5C18 11 23 8.5 24.5 7.5" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0" strokeDasharray="3 20">
        <animate attributeName="opacity" values="0;0.8;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="23;0" dur="3s" begin="1.2s" repeatCount="indefinite" />
      </path>

      <path d="M13.5 16C10 16 6.5 19 5.5 21" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M13.5 16C10 16 6.5 19 5.5 21" stroke="#A5B4FC" strokeWidth="1.8" strokeLinecap="round" opacity="0" strokeDasharray="3 20">
        <animate attributeName="opacity" values="0;0.6;0" dur="3.5s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="23;0" dur="3.5s" begin="2s" repeatCount="indefinite" />
      </path>

      <path d="M18.5 16C22 16 25.5 19 26.5 21" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M18.5 16C22 16 25.5 19 26.5 21" stroke="#A5B4FC" strokeWidth="1.8" strokeLinecap="round" opacity="0" strokeDasharray="3 20">
        <animate attributeName="opacity" values="0;0.6;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="23;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
      </path>

      <path d="M16 13C16 10 16 6 16 5.5" stroke="#A5B4FC" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M16 19C16 22 16 26 16 26.5" stroke="#818CF8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M14.5 18.5C12.5 22 11 26 10.5 27" stroke="#A5B4FC" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
      <path d="M17.5 18.5C19.5 22 22 26 23.5 27" stroke="#A5B4FC" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />

      {/* Synapse sparks — firing randomly */}
      <circle cx="12" cy="11" r="0.8" fill="#818CF8">
        <animate attributeName="r" values="0.8;1.5;0.8" dur="2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="10.5" r="0.8" fill="#818CF8">
        <animate attributeName="r" values="0.8;1.4;0.8" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="9" cy="18" r="0.7" fill="#A5B4FC">
        <animate attributeName="r" values="0.7;1.3;0.7" dur="3s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="23" cy="18" r="0.7" fill="#A5B4FC">
        <animate attributeName="r" values="0.7;1.2;0.7" dur="2.8s" begin="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.8s" begin="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
