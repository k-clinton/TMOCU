"use client";

import React from "react";

interface University {
  name: string;
  logo: React.ReactNode;
}

const universities: University[] = [
  {
    name: "Southern New Hampshire University (SNHU)",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 160 44" fill="none">
        {/* SNHU blue wordmark */}
        <text
          x="10"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="30"
          fontWeight="900"
          fill="#002B49"
          letterSpacing="-0.5px"
        >
          snhu
        </text>
        {/* SNHU golden sprout/leaf mark over 'u' */}
        <path
          d="M86 16C90 12 96 11 99 13C98 17 94 21 89 22C86 21 85 18 86 16Z"
          fill="#F7A823"
        />
        <path
          d="M88 12C91 8 96 7 98 8C97 12 94 15 90 16C88 15 87 13 88 12Z"
          fill="#002B49"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    name: "National University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* National University column/torch mark */}
        <g transform="translate(6, 6)">
          <rect x="2" y="2" width="22" height="28" rx="2" fill="#002855" />
          <path d="M7 8H19M7 13H19M7 18H19M7 23H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 2V30" stroke="#C59B27" strokeWidth="1.5" />
        </g>
        <text
          x="36"
          y="21"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="700"
          fill="#002855"
        >
          National
        </text>
        <text
          x="36"
          y="34"
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="600"
          fill="#002855"
          opacity="0.9"
        >
          University
        </text>
      </svg>
    ),
  },
  {
    name: "Capella University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* Capella Red Crest Shield with C & star */}
        <g transform="translate(6, 6)">
          <path
            d="M14 2L24 6V18C24 24 14 30 14 30C14 30 4 24 4 18V6L14 2Z"
            fill="none"
            stroke="#C8102E"
            strokeWidth="2.5"
          />
          <text
            x="14"
            y="21"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="#C8102E"
          >
            C
          </text>
        </g>
        <text
          x="38"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill="#1E242B"
          letterSpacing="1px"
        >
          CAPELLA
        </text>
        <text
          x="38"
          y="34"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#596574"
          letterSpacing="1.8px"
        >
          UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "The University of Arizona Global Campus",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 190 44" fill="none">
        {/* Arizona Block 'A' */}
        <g transform="translate(6, 7)">
          <path
            d="M13 2L23 28H17L15 22H9L7 28H1L11 2H13Z"
            fill="#0C2340"
          />
          <path
            d="M9 18H15V14H9V18Z"
            fill="#AB0520"
          />
          <polygon points="12,5 14,11 10,11" fill="white" />
        </g>
        <text
          x="34"
          y="18"
          fontFamily="system-ui, sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#596574"
          letterSpacing="0.4px"
        >
          THE UNIVERSITY OF ARIZONA
        </text>
        <text
          x="34"
          y="31"
          fontFamily="system-ui, sans-serif"
          fontSize="13"
          fontWeight="900"
          fill="#0C2340"
          letterSpacing="0.5px"
        >
          GLOBAL CAMPUS
        </text>
      </svg>
    ),
  },
  {
    name: "Liberty University Online",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* LU ONLINE Monogram */}
        <text
          x="6"
          y="25"
          fontFamily="system-ui, sans-serif"
          fontSize="22"
          fontWeight="900"
          fill="#0A2540"
          fontStyle="italic"
        >
          LU
        </text>
        <text
          x="42"
          y="25"
          fontFamily="system-ui, sans-serif"
          fontSize="17"
          fontWeight="900"
          fill="#0A2540"
          letterSpacing="0.5px"
        >
          ONLINE
        </text>
        <line x1="42" y1="28" x2="114" y2="28" stroke="#C8102E" strokeWidth="2.5" />
        <text
          x="42"
          y="38"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#596574"
          letterSpacing="1.2px"
        >
          LIBERTY UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "Grand Canyon University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 180 44" fill="none">
        <text
          x="10"
          y="22"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="800"
          fill="#522398"
          letterSpacing="0.8px"
        >
          GRAND CANYON
        </text>
        <text
          x="10"
          y="34"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#522398"
          letterSpacing="2.2px"
          opacity="0.85"
        >
          UNIVERSITY™
        </text>
      </svg>
    ),
  },
  {
    name: "UMGC (University of Maryland Global Campus)",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 160 44" fill="none">
        {/* Dynamic swirling arcs */}
        <g transform="translate(6, 6)">
          <path d="M6 8C14 4 22 8 24 12C20 14 12 12 6 8Z" fill="#E03A3E" />
          <path d="M4 14C12 10 24 14 26 18C20 20 10 18 4 14Z" fill="#F7A823" />
          <path d="M6 20C12 18 22 22 24 26C18 26 10 24 6 20Z" fill="#E03A3E" />
          <path d="M8 26C14 24 20 28 22 30C16 30 10 28 8 26Z" fill="#111418" />
        </g>
        <text
          x="38"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="24"
          fontWeight="900"
          fill="#111418"
          letterSpacing="-0.5px"
        >
          UMGC
        </text>
      </svg>
    ),
  },
  {
    name: "Purdue University Global",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 160 44" fill="none">
        <text
          x="10"
          y="22"
          fontFamily="Georgia, serif"
          fontSize="15"
          fontWeight="900"
          fill="#000000"
          letterSpacing="0.5px"
        >
          PURDUE
        </text>
        <text
          x="10"
          y="31"
          fontFamily="system-ui, sans-serif"
          fontSize="7"
          fontWeight="800"
          fill="#C28E0E"
          letterSpacing="1px"
        >
          UNIVERSITY
        </text>
        <text
          x="10"
          y="40"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="900"
          fill="#000000"
          letterSpacing="1.2px"
        >
          GLOBAL
        </text>
      </svg>
    ),
  },
  {
    name: "Strayer University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* Strayer Shield */}
        <g transform="translate(6, 7)">
          <path
            d="M13 1L23 5V16C23 23 13 29 13 29C13 29 3 23 3 16V5L13 1Z"
            fill="#990000"
          />
          <path d="M7 8H19M7 13H19M7 18H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <text
          x="36"
          y="22"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="900"
          fill="#1E242B"
          letterSpacing="0.8px"
        >
          STRAYER
        </text>
        <text
          x="36"
          y="33"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#596574"
          letterSpacing="1.8px"
        >
          UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "Chamberlain University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 180 44" fill="none">
        {/* Chamberlain Seal */}
        <g transform="translate(6, 6)">
          <circle cx="16" cy="16" r="15" fill="#002F6C" />
          <circle cx="16" cy="16" r="12" stroke="#E5A823" strokeWidth="1.5" fill="none" />
          {/* Inner crest with rays */}
          <path d="M16 6L21 21H11L16 6Z" fill="#E5A823" />
          <path d="M12 21V26H20V21" stroke="white" strokeWidth="1.5" />
        </g>
        <text
          x="44"
          y="21"
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="700"
          fill="#002F6C"
        >
          Chamberlain
        </text>
        <text
          x="44"
          y="33"
          fontFamily="Georgia, serif"
          fontSize="11"
          fontWeight="600"
          fill="#596574"
        >
          University
        </text>
      </svg>
    ),
  },
  {
    name: "NCU (Northcentral University)",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* NCU Circular Crest */}
        <g transform="translate(6, 6)">
          <circle cx="16" cy="16" r="14" fill="none" stroke="#861F41" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="8" fill="#861F41" />
          <circle cx="16" cy="16" r="3" fill="white" />
        </g>
        <text
          x="42"
          y="24"
          fontFamily="Georgia, serif"
          fontSize="21"
          fontWeight="800"
          fill="#861F41"
          letterSpacing="0.5px"
        >
          NCU
        </text>
        <text
          x="42"
          y="36"
          fontFamily="Georgia, serif"
          fontSize="9.5"
          fontWeight="600"
          fill="#596574"
        >
          Northcentral University
        </text>
      </svg>
    ),
  },
  {
    name: "Arizona State University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 175 44" fill="none">
        {/* ASU Sunburst mark */}
        <g transform="translate(4, 8)">
          <path
            d="M8 24L14 4L20 24H8Z"
            fill="#8C1D40"
          />
          <path
            d="M14 8L17 22H11L14 8Z"
            fill="#FFC627"
          />
        </g>
        <text
          x="30"
          y="22"
          fontFamily="Georgia, serif"
          fontSize="13.5"
          fontWeight="700"
          fill="#8C1D40"
        >
          Arizona State
        </text>
        <text
          x="30"
          y="35"
          fontFamily="Georgia, serif"
          fontSize="12"
          fontWeight="600"
          fill="#1E242B"
        >
          University
        </text>
      </svg>
    ),
  },
  {
    name: "Embry-Riddle Aeronautical University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 190 44" fill="none">
        {/* Eagle winged compass */}
        <g transform="translate(4, 7)">
          <path d="M2 14C8 8 18 6 26 14C18 16 10 18 2 14Z" fill="#002663" />
          <path d="M6 18C12 14 20 13 24 18C18 19 12 21 6 18Z" fill="#C59B27" />
        </g>
        <text
          x="34"
          y="19"
          fontFamily="Georgia, serif"
          fontSize="12.5"
          fontWeight="700"
          fill="#002663"
        >
          Embry-Riddle
        </text>
        <text
          x="34"
          y="31"
          fontFamily="system-ui, sans-serif"
          fontSize="8.5"
          fontWeight="700"
          fill="#596574"
          letterSpacing="0.4px"
        >
          AERONAUTICAL UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "Keiser University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* Keiser Academic Seal */}
        <g transform="translate(6, 6)">
          <circle cx="16" cy="16" r="15" fill="#002B49" />
          <path d="M10 11H22V21H10V11Z" stroke="white" strokeWidth="1.2" fill="none" />
          <path d="M16 8V24M8 16H24" stroke="#C59B27" strokeWidth="1" />
        </g>
        <text
          x="44"
          y="22"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="800"
          fill="#002B49"
          letterSpacing="0.5px"
        >
          KEISER
        </text>
        <text
          x="44"
          y="34"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#596574"
          letterSpacing="1.5px"
        >
          UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "BYU (Brigham Young University)",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        <text
          x="6"
          y="25"
          fontFamily="Georgia, serif"
          fontSize="24"
          fontWeight="900"
          fill="#002E5D"
          letterSpacing="1px"
        >
          BYU
        </text>
        <text
          x="6"
          y="37"
          fontFamily="system-ui, sans-serif"
          fontSize="8"
          fontWeight="800"
          fill="#002E5D"
          letterSpacing="1px"
        >
          BRIGHAM YOUNG UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    name: "University of Cincinnati Online",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 185 44" fill="none">
        {/* UC Monogram */}
        <g transform="translate(6, 8)">
          <text
            x="0"
            y="23"
            fontFamily="Georgia, serif"
            fontSize="24"
            fontWeight="900"
            fill="#E00122"
          >
            C
          </text>
          <rect x="18" y="2" width="3" height="24" fill="#111418" />
        </g>
        <text
          x="32"
          y="18"
          fontFamily="Georgia, serif"
          fontSize="9.5"
          fontWeight="600"
          fill="#596574"
        >
          University of
        </text>
        <text
          x="32"
          y="32"
          fontFamily="system-ui, sans-serif"
          fontSize="12.5"
          fontWeight="900"
          fill="#111418"
          letterSpacing="0.4px"
        >
          CINCINNATI <span className="font-medium text-[#E00122]">ONLINE</span>
        </text>
      </svg>
    ),
  },
  {
    name: "Rider University",
    logo: (
      <svg className="h-11 sm:h-12 w-auto" viewBox="0 0 170 44" fill="none">
        {/* Rider Oak Shield */}
        <g transform="translate(6, 7)">
          <rect x="0" y="0" width="28" height="28" rx="4" fill="#981E32" />
          <text
            x="14"
            y="9"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="6"
            fontWeight="700"
            fill="white"
          >
            1865
          </text>
          {/* Oak tree silhouette */}
          <circle cx="14" cy="16" r="6" fill="white" />
          <rect x="13" y="18" width="2" height="6" fill="#981E32" />
        </g>
        <text
          x="40"
          y="22"
          fontFamily="Georgia, serif"
          fontSize="16"
          fontWeight="900"
          fill="#981E32"
          letterSpacing="0.5px"
        >
          RIDER
        </text>
        <text
          x="40"
          y="34"
          fontFamily="system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="700"
          fill="#596574"
          letterSpacing="1.5px"
        >
          UNIVERSITY
        </text>
      </svg>
    ),
  },
];

export default function UniversityLogos() {
  return (
    <div className="w-full pt-8 sm:pt-10">
      <div className="text-center mb-8">
        <p className="text-sm sm:text-base text-text-secondary font-medium tracking-tight">
          Trusted by thousands of students from top universities around the world.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 items-center justify-items-center">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 rounded-xl transition-all duration-200 hover:scale-105 hover:bg-black/[0.02]"
            title={uni.name}
          >
            {uni.logo}
          </div>
        ))}
      </div>
    </div>
  );
}
