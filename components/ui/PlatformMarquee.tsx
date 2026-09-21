"use client";

import React from "react";

const portals = [
  {
    name: "Canvas LMS",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 200 44" fill="currentColor">
        {/* Canvas Instructure 8-petal icon */}
        <g transform="translate(4, 2)">
          <circle cx="20" cy="5" r="3.6" />
          <circle cx="31" cy="9" r="3.6" />
          <circle cx="35" cy="20" r="3.6" />
          <circle cx="31" cy="31" r="3.6" />
          <circle cx="20" cy="35" r="3.6" />
          <circle cx="9" cy="31" r="3.6" />
          <circle cx="5" cy="20" r="3.6" />
          <circle cx="9" cy="9" r="3.6" />
        </g>
        {/* canvas text */}
        <text
          x="54"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.5px"
        >
          canvas
        </text>
      </svg>
    ),
  },
  {
    name: "Blackboard Learn",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 230 44" fill="currentColor">
        {/* Blackboard icon */}
        <g transform="translate(6, 6)">
          <rect x="0" y="0" width="13" height="13" rx="3" />
          <rect x="16" y="0" width="13" height="13" rx="3" />
          <rect x="0" y="16" width="13" height="13" rx="3" />
          <rect x="16" y="16" width="13" height="13" rx="3" />
          <path d="M7 6L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text
          x="44"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="-0.3px"
        >
          Blackboard
        </text>
        <text
          x="154"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="400"
          fill="currentColor"
          opacity="0.65"
        >
          learn
        </text>
      </svg>
    ),
  },
  {
    name: "Brightspace D2L",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 220 44" fill="currentColor">
        {/* D2L Brightspace Flame Prism */}
        <g transform="translate(4, 5)">
          <path d="M8 26L18 4L28 26H8Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
          <path d="M18 10L23 26H13L18 10Z" fill="currentColor" />
        </g>
        <text
          x="42"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="700"
          letterSpacing="-0.2px"
        >
          brightspace
        </text>
        <text
          x="160"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fontWeight="800"
          letterSpacing="1px"
          opacity="0.6"
        >
          D2L
        </text>
      </svg>
    ),
  },
  {
    name: "Moodle",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 170 44" fill="currentColor">
        {/* Moodle Mortarboard cap on m */}
        <g transform="translate(2, 4)">
          <path d="M16 4L4 9L16 14L28 9L16 4Z" />
          <path d="M26 10.5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
        <text
          x="36"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="23"
          fontWeight="800"
          letterSpacing="-0.5px"
        >
          moodle
        </text>
      </svg>
    ),
  },
  {
    name: "Pearson MyLab",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 210 44" fill="currentColor">
        {/* Pearson Interlocking ellipse */}
        <g transform="translate(4, 7)">
          <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22" fill="currentColor" />
        </g>
        <text
          x="38"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="19"
          fontWeight="700"
          letterSpacing="-0.3px"
        >
          Pearson
        </text>
        <text
          x="122"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="15"
          fontWeight="500"
          opacity="0.75"
        >
          | MyLab
        </text>
      </svg>
    ),
  },
  {
    name: "McGraw Hill Connect",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 230 44" fill="currentColor">
        {/* McGraw Hill red square array / symbol */}
        <g transform="translate(4, 6)">
          <rect x="0" y="0" width="12" height="12" rx="2" />
          <rect x="15" y="0" width="12" height="12" rx="2" opacity="0.6" />
          <rect x="0" y="15" width="12" height="12" rx="2" opacity="0.6" />
          <rect x="15" y="15" width="12" height="12" rx="2" />
        </g>
        <text
          x="38"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="800"
          letterSpacing="0.2px"
        >
          MCGRAW HILL
        </text>
        <text
          x="38"
          y="34"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1px"
          opacity="0.65"
        >
          CONNECT
        </text>
      </svg>
    ),
  },
  {
    name: "Cengage WebAssign",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 200 44" fill="currentColor">
        <g transform="translate(4, 7)">
          <circle cx="14" cy="14" r="5" />
          <path d="M14 2V6M14 22V26M2 14H6M22 14H26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text
          x="36"
          y="27"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.5px"
        >
          CENGAGE
        </text>
      </svg>
    ),
  },
  {
    name: "WileyPLUS",
    logo: (
      <svg className="h-7 w-auto" viewBox="0 0 170 44" fill="currentColor">
        <text
          x="4"
          y="28"
          fontFamily="Georgia, serif"
          fontSize="21"
          fontWeight="700"
          fontStyle="italic"
        >
          WILEY
        </text>
        <text
          x="80"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="15"
          fontWeight="800"
          letterSpacing="1px"
          opacity="0.75"
        >
          PLUS
        </text>
      </svg>
    ),
  },
];

export default function PlatformMarquee() {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="mask-gradient-x relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {/* First track */}
          {portals.map((portal, index) => (
            <div
              key={`track1-${index}`}
              className="flex items-center justify-center shrink-0 text-charcoal/70 hover:text-charcoal transition-all duration-200 transform hover:scale-105"
              title={portal.name}
            >
              {portal.logo}
            </div>
          ))}

          {/* Duplicated track for seamless infinite marquee loop */}
          {portals.map((portal, index) => (
            <div
              key={`track2-${index}`}
              className="flex items-center justify-center shrink-0 text-charcoal/70 hover:text-charcoal transition-all duration-200 transform hover:scale-105"
              title={portal.name}
            >
              {portal.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
