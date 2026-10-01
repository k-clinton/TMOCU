"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface StoryStep {
  id: number;
  overline: string;
  title: string;
  body: string;
  features: string[];
}

const stories: StoryStep[] = [
  {
    id: 1,
    overline: "Online Class Help for Busy Students",
    title: "We are the best online class service provider in USA and Canada",
    body: "The best thing about us is that we have a whole team of trained, experienced professionals who are dedicated to making sure you get the best experience possible when it comes to conquering your education journey in today's fast paced world.",
    features: [
      "Vetted degree-holding academic specialists",
      "Full coverage for USA & Canadian universities",
      "Canvas, Blackboard, D2L & Brightspace mastery",
    ],
  },
  {
    id: 2,
    overline: "Grade Guarantee & Total Peace of Mind",
    title: "We do the work, so you get the grade. Guaranteed!",
    body: "Before you ask someone \"can you do my class?\", it is important that you trust them and they are willing to help. Our company's focus is on making sure our customers never have any worries when hiring us for their eLearning assistance. Our goal is not just in providing the best online class help services, but also ensuring our clients can put their mind at ease knowing that they're assisted by a company focused on more than numbers.",
    features: [
      "100% confidential regional IP connection",
      "Weekly grade tracking & submission receipts",
      "Direct coordinator chat 24 hours a day",
    ],
  },
  {
    id: 3,
    overline: "Take a Step Towards an A or B Grade",
    title: "Let us do all the hard work for you!",
    body: "Why settle for anything less than the best? We're committed to getting it right, every time! You don't have to worry about late submissions, IP leaks, formatting errors, or missed quizzes. We're professional at what we do and will not accept shoddy work!",
    features: [
      "Submissions completed 12–24h ahead of deadline",
      "Strict zero-plagiarism & Turnitin compliance",
      "Precision formatting in APA, MLA, Harvard, or Chicago",
    ],
  },
];

export default function StickyExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track which step is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 border-t border-border-subtle relative"
      aria-label="Student Success & Online Class Experience"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="overline-tag">EFFORTLESS &amp; SECURE GRADE ASSURANCE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-charcoal tracking-tight mt-3 mb-4">
            Effortlessly &amp; Securely Get Better Grades!
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            It is a common problem, so don&apos;t worry. We know you&apos;re busy and not everyone can dedicate the time to going through all that schooling for one class! With takemyonlineclassusa.com, you&apos;ll be able to get straight A&apos;s without having to put in any of those pesky hours at school.
          </p>
        </ScrollReveal>

        {/* 2-Column Sticky Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Left / Stationary Sticky Column: Realistic Mobile Phone Mockup */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 z-20 flex flex-col items-center">
            {/* Phone Outer Chassis with Volume & Power Buttons */}
            <div className="relative w-[285px] sm:w-[310px] drop-shadow-2xl">
              {/* Left Side Buttons (Mute + Volume) */}
              <div className="absolute -left-[3.5px] top-24 w-[3.5px] h-6 bg-[#33383F] rounded-l-xs" />
              <div className="absolute -left-[3.5px] top-34 w-[3.5px] h-10 bg-[#33383F] rounded-l-xs" />
              <div className="absolute -left-[3.5px] top-48 w-[3.5px] h-10 bg-[#33383F] rounded-l-xs" />

              {/* Right Side Button (Power) */}
              <div className="absolute -right-[3.5px] top-32 w-[3.5px] h-14 bg-[#33383F] rounded-r-xs" />

              {/* Phone Body Frame */}
              <div className="rounded-[44px] sm:rounded-[48px] p-3 sm:p-3.5 bg-[#0F1216] border-[4px] border-[#2C323B] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Phone Screen Glass */}
                <div className="rounded-[34px] sm:rounded-[38px] overflow-hidden bg-white text-charcoal h-[480px] sm:h-[510px] flex flex-col justify-between relative shadow-inner">
                  {/* Top Phone Notch / Dynamic Island */}
                  <div className="pt-2 pb-1 bg-white flex justify-center z-10">
                    <div className="w-24 h-4 bg-black rounded-full flex items-center justify-end px-2">
                      <div className="w-2 h-2 rounded-full bg-[#1A2536] border border-[#2B3B52]" />
                    </div>
                  </div>

                  {/* Active Screen Content with Smooth Crossfade */}
                  <div className="flex-1 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      {activeStep === 0 && (
                        <motion.div
                          key="screen-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="p-4 sm:p-5 flex flex-col justify-between h-full text-left font-sans select-none"
                        >
                          <div className="space-y-3.5">
                            <div className="text-xs sm:text-[13px] font-medium text-charcoal/90 pb-2 border-b border-black/10">
                              Total: <span className="font-bold">1,000.00 / 1,000.00 (A)</span>
                            </div>

                            <div className="flex items-center gap-1.5 text-[11px] text-[#0066CC] font-semibold cursor-pointer">
                              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              <span>Show Saved &quot;What-If&quot; Scores</span>
                            </div>

                            <div>
                              <span className="inline-block px-3 py-1 bg-[#F5F5F5] border border-black/15 text-[11px] font-medium text-charcoal/80 rounded shadow-xs">
                                Show All Details
                              </span>
                            </div>

                            <div className="pt-2 border-t border-black/10 space-y-2.5">
                              <h4 className="text-[11px] sm:text-xs font-black tracking-tight text-charcoal uppercase leading-snug">
                                Course assignments are not weighted.
                              </h4>

                              <div className="flex items-start gap-2 text-[11px] text-charcoal leading-snug">
                                <input
                                  type="checkbox"
                                  checked
                                  readOnly
                                  className="mt-0.5 rounded text-blue-600 accent-blue-600 w-3.5 h-3.5"
                                />
                                <span className="font-medium">Calculate based only on graded assignments</span>
                              </div>

                              <p className="text-[10px] sm:text-[11px] text-charcoal/70 leading-relaxed pt-1">
                                You can view your grades based on What-If scores so that you know how grades will be affected by upcoming or resubmitted assignments. You can test scores for an assignment that already includes a score, or an assignment that has yet to be graded.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 1 && (
                        <motion.div
                          key="screen-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col justify-between h-full text-left font-sans select-none bg-white"
                        >
                          <div className="divide-y divide-black/10 text-xs flex-1">
                            {[
                              { pct: "95.22%", pts: "857.00 / 900.00" },
                              { pct: "100%", pts: "100.00 / 100.00" },
                              { pct: "100%", pts: "900.00 / 900.00" },
                              { pct: "94.24%", pts: "376.96 / 400.00" },
                              { pct: "100%", pts: "100.00 / 100.00" },
                              { pct: "N/A", pts: "0.00 / 0.00" },
                              { pct: "95%", pts: "95.00 / 100.00" },
                              { pct: "N/A", pts: "0.00 / 0.00" },
                            ].map((row, i) => (
                              <div key={i} className="flex items-center justify-between px-4 sm:px-5 py-2 hover:bg-black/[0.02]">
                                <span className="font-bold text-charcoal text-[11px] sm:text-xs">{row.pct}</span>
                                <span className="text-[10px] sm:text-[11px] text-charcoal/70 font-mono">{row.pts}</span>
                              </div>
                            ))}
                          </div>

                          <div className="py-3 px-4 border-t border-black/10 bg-[#FAFAFA] text-center">
                            <span className="text-xl sm:text-2xl font-black text-charcoal tracking-tight font-mono">
                              96.94%
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="screen-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col h-full text-left font-sans select-none bg-white"
                        >
                          {/* Header row */}
                          <div className="grid grid-cols-12 px-3 sm:px-4 py-1.5 border-b border-black/15 text-[10px] font-bold text-charcoal/60 uppercase tracking-wider bg-black/[0.02]">
                            <div className="col-span-5">Points</div>
                            <div className="col-span-3 text-center">Grade</div>
                            <div className="col-span-4 text-right">Assessment</div>
                          </div>

                          {/* Rows */}
                          <div className="divide-y divide-black/10 flex-1 overflow-hidden">
                            {[
                              { pts: "35 / 35", grade: "A" },
                              { pts: "35 / 35", grade: "A" },
                              { pts: "62.08 / 65", grade: "A" },
                              { pts: "35 / 35", grade: "A" },
                              { pts: "90 / 90", grade: "A" },
                              { pts: "35 / 35", grade: "A" },
                              { pts: "35 / 35", grade: "A" },
                              { pts: "98 / 100", grade: "A" },
                              { pts: "35 / 35", grade: "A" },
                              { pts: "54.11 / 65", grade: "B" },
                            ].map((item, i) => (
                              <div key={i} className="grid grid-cols-12 items-center px-3 sm:px-4 py-1 text-[10px] sm:text-[11px]">
                                <div className="col-span-5 font-mono text-charcoal font-medium">{item.pts}</div>
                                <div className="col-span-3 text-center font-bold text-charcoal">{item.grade}</div>
                                <div className="col-span-4 flex items-center justify-end gap-1 text-[9px] sm:text-[10px] text-[#0066CC] font-semibold">
                                  <svg className="w-3 h-3 text-[#0066CC] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                  </svg>
                                  <span className="truncate">View Grade</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="py-2 bg-white flex justify-center z-10">
                    <div className="w-24 h-1 bg-black/30 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Interactive Stage Indicator Below Phone */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-charcoal/60">
                {stories.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      stepRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx ? "w-8 bg-gold" : "w-2 bg-charcoal/20"
                    }`}
                    aria-label={`Scroll to stage ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right / Scrolling Story Cards */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-16">
            {stories.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`p-8 sm:p-10 rounded-[28px] border transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-[#F8F9FA] border-charcoal/30 shadow-xl"
                    : "bg-white border-[#EAECEF] opacity-75 hover:opacity-100"
                }`}
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gold uppercase tracking-widest">
                    {step.overline}
                  </span>
                  <span className="text-2xl font-black text-charcoal/20 font-mono">
                    0{step.id}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mb-4">
                  {step.title}
                </h3>

                {/* Body paragraph */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  {step.body}
                </p>

                {/* Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-border-subtle mb-6">
                  {step.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal font-medium">
                      <span className="text-gold font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white hover:bg-gold rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Chat with a tutor</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/price-calculator"
                    className="text-xs font-bold text-charcoal/70 hover:text-charcoal underline underline-offset-4"
                  >
                    Calculate Class Cost
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
