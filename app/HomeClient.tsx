"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import PlatformMarquee from "@/components/ui/PlatformMarquee";
import WhyTMOCU from "@/components/sections/WhyTMOCU";
import HeroImageBackdrop from "@/components/ui/HeroImageBackdrop";
import AnimatedImageCard from "@/components/ui/AnimatedImageCard";

const metricCards = [
  {
    number: "98.4%",
    label: "GRADE TARGETS MET",
    description:
      "Consistent high-tier academic results across quizzes, assignments, and comprehensive term coursework.",
  },
  {
    number: "500+",
    label: "ONLINE COURSES MANAGED",
    description:
      "Proven expertise across undergraduate, graduate, nursing, business, and STEM online curricula nationwide.",
  },
  {
    number: "100%",
    label: "CONFIDENTIAL & SECURE",
    description:
      "End-to-end privacy guarantees, dedicated IP matching, and discreet academic coordination.",
  },
];

export default function HomeClient() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.05);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Section (Architectural Backdrop with Animated Ken Burns & Ambient Glow) ─── */}
      <section
        ref={heroRef}
        className="relative bg-[#1E2B34] text-white pt-32 md:pt-40 pb-24 md:pb-36 px-6 lg:px-12 overflow-hidden"
        aria-label="Hero"
      >
        {/* Animated Architectural Photo Backdrop */}
        <HeroImageBackdrop
          src="/images/hero-architecture.jpg"
          alt="Modern university campus architecture"
          priority
        />

        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline & Mission */}
          <div className="lg:col-span-8 space-y-6">
            <span
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wide text-white/90 ${
                heroVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Higher Education Support Redefined
            </span>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight ${
                heroVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
              }`}
            >
              We manage
              <br />
              your academic
              <br />
              <span className="text-white/80 font-normal">commitments.</span>
            </h1>

            <p
              className={`text-base sm:text-lg text-white/80 max-w-xl leading-relaxed font-normal ${
                heroVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
              }`}
            >
              Professional online class management, coursework completion, and exam preparation designed for busy students and working professionals.
            </p>

            <div
              className={`pt-2 flex flex-wrap items-center gap-4 ${
                heroVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white text-charcoal hover:bg-gold hover:text-white rounded-full font-semibold text-sm transition-all duration-200 shadow-xl"
              >
                Get Free Class Quote
              </Link>
              <Link
                href="/services"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full font-medium text-sm transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main White Surface (Curved Top Overlap - Arkitect Style) ─── */}
      <div
        ref={contentRef}
        className="relative z-20 -mt-10 sm:-mt-14 bg-white rounded-t-[36px] sm:rounded-t-[48px] shadow-2xl pt-14 pb-28 border-t border-black/[0.04]"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* ─── LMS / Platform Monochrome Logo Strip ─── */}
          <div className="border-b border-border-subtle pb-12 mb-16">
            <div className="text-center mb-6">
              <span className="overline-tag">SUPPORTED PORTALS & PLATFORMS</span>
            </div>
            <PlatformMarquee />
          </div>

          {/* ─── 3 Metric Feature Cards (Arkitect Grid) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 lg:mb-32">
            {metricCards.map((card) => (
              <div
                key={card.label}
                className="bg-[#F8F9FA] rounded-[24px] p-8 md:p-10 border border-[#EAECEF] hover:border-charcoal/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight mb-2">
                  {card.number}
                </div>
                <div className="text-[11px] font-bold tracking-widest text-charcoal/60 uppercase mb-4">
                  {card.label}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* ─── Section Micro Label ─── */}
          <div className="text-center mb-16">
            <span className="overline-tag">OUR SERVICES</span>
          </div>

          {/* ─── Staggered Editorial Section 1: PLAN ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 lg:mb-36">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                Plan
              </h2>
              <p className="text-lg sm:text-xl font-medium text-charcoal leading-snug">
                Comprehensive syllabus assessment and milestone mapping from day one.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We review your course requirements, assignment rubrics, exam schedules, and discussion board cadence. By structuring a disciplined timeline early, you eliminate late penalties and stay ahead of every university deadline.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-gold transition-colors"
                >
                  <span>Learn how we plan courses</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Vertical Realistic Photo Card */}
            <div className="lg:col-span-6">
              <AnimatedImageCard
                src="/images/student-study-1.jpg"
                alt="Student focused on coursework in library"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                badge={{
                  text: "Syllabus Deconstruction & Planning",
                  dotColor: "bg-gold",
                  pulse: true,
                  position: "bottom-left",
                }}
                secondaryBadge="Stage 01"
              />
            </div>
          </div>

          {/* ─── Staggered Editorial Section 2: EXECUTE (Alternating Layout) ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 lg:mb-36">
            {/* Left: Vertical Realistic Photo Card with Live Status Badge */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <AnimatedImageCard
                src="/images/student-study-2.jpg"
                alt="Student studying with laptop and books"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                badge={{
                  text: "Live Portal Tracking & Execution",
                  dotColor: "bg-emerald-400",
                  pulse: true,
                  position: "bottom-left",
                }}
                secondaryBadge="Stage 02"
              />
            </div>

            {/* Right: Text Narrative */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                Execute
              </h2>
              <p className="text-lg sm:text-xl font-medium text-charcoal leading-snug">
                Subject-matter specialists completing your coursework with rigor.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Whether you need assistance in quantitative business analysis, nursing pharmacology, computer science coding labs, or humanities research papers, our vetted academic specialists tackle the material according to your rubric.
              </p>
              <div className="pt-2">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-gold transition-colors"
                >
                  <span>See our execution process</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Staggered Editorial Section 3: SUCCEED ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 lg:mb-36">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
                Succeed
              </h2>
              <p className="text-lg sm:text-xl font-medium text-charcoal leading-snug">
                Continuous grade monitoring and verified submission proofs.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Stay updated every week with grade reports, confirmation receipts, and feedback analysis. We protect your peace of mind while ensuring your academic credentials remain 100% confidential.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-gold transition-colors"
                >
                  <span>Read our privacy & integrity policy</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: Realistic Photo Card */}
            <div className="lg:col-span-6">
              <AnimatedImageCard
                src="/images/students-collaboration.jpg"
                alt="Students studying collaboratively in modern atrium"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                badge={{
                  text: "Grade A Targets Verified",
                  dotColor: "bg-emerald-400",
                  pulse: true,
                  position: "bottom-left",
                }}
                secondaryBadge="Stage 03"
              />
            </div>
          </div>

          {/* ─── Why Choose Us Section ─── */}
          <WhyTMOCU />

          {/* ─── High-Conversion Editorial Banner CTA ─── */}
          <div className="bg-[#121417] text-white rounded-[32px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Start Today
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Let us take the stress out of your online semester.
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                Share your syllabus or course link for a confidential review and guaranteed quote within 1 hour.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-charcoal hover:bg-gold hover:text-white rounded-full font-bold text-sm transition-all duration-200 shadow-xl"
                >
                  Request Class Quote
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium text-sm transition-all border border-white/10"
                >
                  How Onboarding Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
