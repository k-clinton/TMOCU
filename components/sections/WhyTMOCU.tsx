"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Reclaim Your Schedule",
    subtitle: "Focus on your career and personal life without falling behind.",
    description:
      "Between work shifts, family responsibilities, and everyday life, coursework can easily become overwhelming. We step in to manage portal submissions, discussion boards, and assignments on time.",
  },
  {
    number: "02",
    title: "Vetted Degree-Holding Specialists",
    subtitle: "Expertise across 50+ undergraduate and graduate fields.",
    description:
      "We do not rely on generic automated tools. Every subject is assigned to a qualified specialist with verified master's or doctoral credentials in your specific discipline.",
  },
  {
    number: "03",
    title: "Regional IP Matching & Privacy",
    subtitle: "Guaranteed confidential portal login protocols.",
    description:
      "Your institutional credentials and academic record remain completely confidential. We match your school's local geographic region with dedicated residential connections.",
  },
  {
    number: "04",
    title: "Direct Communication & SLA",
    subtitle: "24/7 academic coordinators and instant status updates.",
    description:
      "Stay informed with weekly grade audits, submission receipts, and proactive milestone tracking so you are always in total control of your semester.",
  },
];

export default function WhyTMOCU() {
  const { ref, isVisible } = useScrollReveal(0.06);

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-24 lg:py-32 border-t border-border-subtle"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="overline-tag">WHY CHOOSE US</span>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-charcoal tracking-tight mt-3 mb-4"
          >
            Academic Support Built on Reliability
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Discover why working professionals and busy college students trust TMOCU to manage their online coursework and degree requirements.
          </p>
        </div>

        {/* 2x2 Grid of Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((item, index) => (
            <div
              key={item.number}
              className={`bg-[#F8F9FA] rounded-[28px] p-8 sm:p-10 border border-[#EAECEF] hover:border-charcoal/30 transition-all duration-300 flex flex-col justify-between ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-charcoal/20 font-mono">
                    {item.number}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-charcoal/70 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50">
                  TMOCU Standard
                </span>
                <span className="text-gold font-bold text-xs">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Card with Quote / Trust Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121417] text-white rounded-[32px] p-8 sm:p-12 overflow-hidden relative">
          <div className="lg:col-span-7 space-y-4 relative z-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest">
              Dedicated Coordinator Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              &ldquo;We treat your coursework with the same rigor and dedication as you would.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg">
              From our 1-hour response SLA to our verified rubric compliance check, we ensure your online academic journey is seamless and stress-free.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-gold transition-colors"
              >
                <span>Read more about our standards</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/student-study-1.jpg"
              alt="Student focused on coursework"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
