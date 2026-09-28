"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const assurances = [
  {
    title: "100% Confidential",
    desc: "Strict privacy standards. Your personal information and academic credentials remain completely secure.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "On-Time Guarantee",
    desc: "We track every syllabus milestone so coursework and exam deadlines are met ahead of schedule.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Coverage",
    desc: "Expertise across business, nursing, computer science, mathematics, humanities, and social sciences.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Direct Communication",
    desc: "Stay updated continuously with fast response times and direct progress checking.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function Trust() {
  return (
    <section
      className="bg-navy text-white py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left info */}
          <ScrollReveal animation="fade-left" className="lg:col-span-5 space-y-6">
            <SectionLabel className="text-gold-light">
              Academic Integrity &amp; Standards
            </SectionLabel>
            <h2
              id="trust-heading"
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight tracking-tight"
            >
              Support Built On Reliability and Discretion
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              We know how much is riding on your coursework. That is why our team treats every deadline, discussion prompt, and exam with the precision and focus it deserves.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex h-10 w-10 rounded-full ring-2 ring-navy bg-gold/20 items-center justify-center text-xs font-bold text-gold">
                  99%
                </span>
                <span className="inline-flex h-10 w-10 rounded-full ring-2 ring-navy bg-gold/40 items-center justify-center text-xs font-bold text-white">
                  24/7
                </span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Dedicated Support</p>
                <p className="text-xs text-gray-400">Around-the-clock availability</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Cards Grid */}
          <ScrollRevealStagger staggerDelay={0.08} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {assurances.map((item) => (
              <ScrollRevealItem key={item.title} animation="fade-up">
                <div className="bg-navy-light/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-navy-light h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </div>
    </section>
  );
}
