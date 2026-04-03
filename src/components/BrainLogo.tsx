"use client";

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
      {/* Dendrite connections — base paths */}
      <path d="M16 13.5C15 11 10 9 8 8.5" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M16 13.5C18 11 23 8.5 24.5 7.5" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M13.5 16C10 16 6.5 19 5.5 21" stroke="#818CF8" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M18.5 16C22 16 25.5 19 26.5 21" stroke="#818CF8" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M16 13C16 10 16 6 16 5.5" stroke="#A5B4FC" strokeWidth="0.7" strokeLinecap="round" opacity="0.2" />
      <path d="M16 19C16 22 16 26 16 26.5" stroke="#818CF8" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <path d="M14.5 18.5C12.5 22 11 26 10.5 27" stroke="#A5B4FC" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />
      <path d="M17.5 18.5C19.5 22 22 26 23.5 27" stroke="#A5B4FC" strokeWidth="0.6" strokeLinecap="round" opacity="0.2" />

      {/* Firing signals — dots travelling along paths */}
      {/* Fire 1: center → top-left */}
      <circle r="1.2" fill="#818CF8">
        <animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-tl" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.7;1" dur="1.8s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="r" values="0.5;1.2;0.5" dur="1.8s" begin="0s" repeatCount="indefinite" />
      </circle>

      {/* Fire 2: center → top-right */}
      <circle r="1.2" fill="#6366F1">
        <animateMotion dur="2.2s" begin="0.8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-tr" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.7;1" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="0.5;1.3;0.5" dur="2.2s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      {/* Fire 3: center → bottom-left */}
      <circle r="1" fill="#A5B4FC">
        <animateMotion dur="2.5s" begin="1.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-bl" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.7;1" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Fire 4: center → right */}
      <circle r="1" fill="#818CF8">
        <animateMotion dur="2s" begin="0.3s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.1;0.7;1" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Fire 5: center → bottom */}
      <circle r="0.9" fill="#6366F1">
        <animateMotion dur="2.8s" begin="2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-b" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.7;1" dur="2.8s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Fire 6: center → top */}
      <circle r="0.8" fill="#C7D2FE">
        <animateMotion dur="2.3s" begin="1.1s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-t" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.1;0.7;1" dur="2.3s" begin="1.1s" repeatCount="indefinite" />
      </circle>

      {/* Fire 7: reverse — top-left → center */}
      <circle r="1" fill="#A5B4FC">
        <animateMotion dur="2s" begin="3s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-tl" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.7;1" dur="2s" begin="3s" repeatCount="indefinite" />
      </circle>

      {/* Fire 8: reverse — right → center */}
      <circle r="0.9" fill="#818CF8">
        <animateMotion dur="1.6s" begin="4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
          <mpath href="#path-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.1;0.7;1" dur="1.6s" begin="4s" repeatCount="indefinite" />
      </circle>

      {/* Motion paths (invisible) */}
      <defs>
        <path id="path-tl" d="M16 16C15 13 10 9.5 6 8" />
        <path id="path-tr" d="M16 16C18 13 23 9 26 7" />
        <path id="path-bl" d="M16 16C13 18 11 24 10 28" />
        <path id="path-r" d="M16 16C20 16 25 19 27 22" />
        <path id="path-b" d="M16 16C16 20 16 25 16 28" />
        <path id="path-t" d="M16 16C16 12 16 7 16 4" />
        <path id="path-l" d="M16 16C12 16 7 19 5 22" />
        <path id="path-br" d="M16 16C19 19 22 25 24 28" />
      </defs>

      {/* Static nodes — glow on receive */}
      <circle cx="16" cy="16" r="3" fill="#6366F1">
        <animate attributeName="r" values="3;3.8;3" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
      </circle>

      <circle cx="6" cy="8" r="2" fill="#818CF8" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="1.7s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;2.5;2" dur="1.8s" begin="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="26" cy="7" r="2.2" fill="#6366F1" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" begin="2.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="2.2;2.7;2.2" dur="2.2s" begin="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="5" cy="22" r="1.8" fill="#A5B4FC" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.2s" repeatCount="indefinite" />
        <animate attributeName="r" values="1.8;2.3;1.8" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="27" cy="22" r="2" fill="#818CF8" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="2.1s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;2.5;2" dur="2s" begin="2.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="4" r="1.5" fill="#A5B4FC" opacity="0.4">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.3s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="1.5;2;1.5" dur="2.3s" begin="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="28" r="1.8" fill="#818CF8" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" begin="4.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1.8;2.3;1.8" dur="2.8s" begin="4.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="28" r="1.2" fill="#C7D2FE" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" begin="3.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="24" cy="28" r="1.3" fill="#C7D2FE" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
