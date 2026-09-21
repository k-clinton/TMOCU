"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/useScrollReveal";

const steps = [
  {
    step: "01",
    title: "Share Class Details",
    description:
      "Tell us about your courses, upcoming deadlines, syllabus, and what support you need.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Custom Plan & Review",
    description:
      "We evaluate your syllabus and timelines to provide a clear, transparent plan tailored to you.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Coursework Execution",
    description:
      "Dedicated subject specialists complete assignments, quizzes, and discussions with high precision.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Updates & Success",
    description:
      "Stay in the loop with transparent progress updates while keeping your grades on target.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="how-it-works"
      className="bg-cream-warm py-24 lg:py-32 border-y border-border"
      aria-labelledby="how-it-works-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <SectionLabel
            className={
              isVisible ? "animate-fade-in-up inline-block" : "opacity-0"
            }
          >
            How It Works
          </SectionLabel>
          <h2
            id="how-it-works-heading"
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy mt-4 mb-6 tracking-tight ${
              isVisible
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            Simple, Transparent, and Stress-Free
          </h2>
          <p
            className={`text-base md:text-lg text-text-secondary leading-relaxed ${
              isVisible
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            Getting academic assistance shouldn&apos;t be complicated. Here is how we make managing your courses seamless from day one.
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative bg-white rounded-2xl p-8 border border-border/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.12}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black tracking-tight text-navy/20 font-mono">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-xs font-semibold text-gold">
                <span>Step {index + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div
          className={`mt-16 text-center ${
            isVisible
              ? "animate-fade-in-up animation-delay-500"
              : "opacity-0"
          }`}
        >
          <Button href="#contact" size="lg">
            Start With Your Class
          </Button>
        </div>
      </div>
    </section>
  );
}
