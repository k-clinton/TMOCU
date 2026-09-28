"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Quote,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  program: string;
  discipline: string;
  outcome: string;
  platform: string;
  rating: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Balancing 12-hour hospital shifts while taking an accelerated BSN program was pushing me to complete burnout. TMOCU matched me with an MSN specialist who managed my weekly discussion posts, pharmacology case studies, and chapter modules flawlessly. Graduated with honors!",
    author: "Jessica M.",
    role: "Registered Nurse & BSN Student",
    program: "Accelerated Nursing Program",
    discipline: "Nursing & Health Sciences",
    outcome: "Grade A (4.0 GPA)",
    platform: "Canvas LMS",
    rating: 5,
    image: "/images/portrait-jessica.jpg",
  },
  {
    quote:
      "The quantitative financial modeling problem sets and Harvard Business case study write-ups were completed with exceptional precision. My coordinator provided submission confirmation receipts 24 hours ahead of every Sunday midnight deadline. Zero stress.",
    author: "Marcus T.",
    role: "Operations Manager & MBA Candidate",
    program: "Executive MBA",
    discipline: "Business & Finance",
    outcome: "Grade A Achieved",
    platform: "Blackboard Ultra",
    rating: 5,
    image: "/images/portrait-marcus.jpg",
  },
  {
    quote:
      "I had complex Python and data structures assignments with strict unit test requirements. Every script was thoroughly documented, formatted cleanly, and passed all autograders on the first run. The regional IP matching gave me total peace of mind.",
    author: "David K.",
    role: "Full-Stack Developer & CS Major",
    program: "B.S. in Computer Science",
    discipline: "Computer Science",
    outcome: "Grade A Achieved",
    platform: "Canvas / ZyBooks",
    rating: 5,
    image: "/images/portrait-david.jpg",
  },
  {
    quote:
      "As a working parent returning to college after 8 years, the 20-page APA literature review felt completely insurmountable. The assigned specialist conducted rigorous research with peer-reviewed citations and helped me secure the top grade in my cohort.",
    author: "Elena R.",
    role: "HR Specialist & Psychology Senior",
    program: "B.A. in Psychology",
    discipline: "Social Sciences",
    outcome: "Grade A Achieved",
    platform: "D2L Brightspace",
    rating: 5,
    image: "/images/portrait-elena.jpg",
  },
  {
    quote:
      "I was falling behind on timed Calculus II problem sets on WebAssign. TMOCU stepped in mid-semester, managed every homework module with full step-by-step workings, and prepared me for proctored exams. Turned my grade around from a D to a solid B+!",
    author: "Brandon L.",
    role: "Mechanical Engineering Student",
    program: "B.S. Mechanical Engineering",
    discipline: "Mathematics & STEM",
    outcome: "Grade B+ Achieved",
    platform: "WebAssign / Canvas",
    rating: 5,
    image: "/images/portrait-brandon.jpg",
  },
  {
    quote:
      "Discreet, dependable, and exceptionally professional coordinators. Whenever I needed an urgent update or syllabus adjustment at odd hours, I received a clear response in under 30 minutes. The best academic support investment I've ever made.",
    author: "Sarah H.",
    role: "High School Teacher & M.Ed Candidate",
    program: "Master of Education (M.Ed)",
    discipline: "Graduate Education",
    outcome: "Grade A Achieved",
    platform: "Canvas LMS",
    rating: 5,
    image: "/images/portrait-sarah.jpg",
  },
];

export default function Testimonials() {
  const { ref } = useScrollReveal(0.06);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevTestimonial, nextTestimonial]);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative w-full bg-gradient-to-br from-[#1B2932] via-[#23333E] to-[#1E2B34] text-white py-10 sm:py-12 lg:py-14 px-6 lg:px-12 overflow-hidden border-y border-white/10"
      aria-labelledby="testimonials-heading"
    >
      {/* Atmospheric Ambient Glow Layers matching Hero overlay */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#4a6778]/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold tracking-wider uppercase text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            STUDENT SUCCESS & REVIEWS
          </span>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-2 mb-2 leading-tight"
          >
            Proven Results Across 500+ Online Courses
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Read verified experiences from working professionals, adult learners, and full-time university students who achieved their academic goals with TMOCU.
          </p>

          {/* Social Proof Aggregate Badges */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-white/90">
            <div className="flex items-center gap-1.5">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs">4.9 / 5.0 Rating</span>
            </div>

            <div className="flex items-center gap-1 text-emerald-400 text-[11px] sm:text-xs">
              <CheckCircle2 size={14} />
              <span>98.4% Target Grade Success</span>
            </div>

            <div className="flex items-center gap-1 text-white/85 text-[11px] sm:text-xs">
              <ShieldCheck size={14} className="text-gold" />
              <span>100% Confidential & Private</span>
            </div>
          </div>
        </div>

        {/* ─── Single Testimonial Horizontal Showcase (No Cards) ─── */}
        <div className="relative min-h-[260px] sm:min-h-[240px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
            >
              {/* Left Column: Big Quotation Marks & Detailed Testimonial */}
              <div className="lg:col-span-8 space-y-3.5">
                {/* Meta Row: Discipline, Outcome, Platform, Stars */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20">
                    {current.discipline}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[11px] font-bold tracking-tight">
                    <CheckCircle2 size={12} />
                    {current.outcome}
                  </span>
                  <span className="bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full border border-white/15 text-[11px] font-medium">
                    {current.platform}
                  </span>
                  <div className="flex items-center gap-1 ml-auto sm:ml-0">
                    <div className="flex gap-0.5 text-gold">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-white/70">5.0 Verified</span>
                  </div>
                </div>

                {/* Big Quotation Mark & Quote Narrative */}
                <div className="relative pt-1">
                  <Quote
                    size={38}
                    className="text-gold/25 -mb-3 -ml-1 pointer-events-none select-none"
                  />
                  <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-white/95 leading-relaxed tracking-tight">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Credentials & Bio */}
                <div className="pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                      <span>{current.author}</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gold/20 text-gold text-[10px]" title="Verified Student">
                        ✓
                      </span>
                    </div>
                    <div className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                      <GraduationCap size={13} className="text-gold" />
                      <span>{current.role}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <BookOpen size={12} className="text-white/40" />
                    <span>{current.program}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Big Rounded Portrait of the Author */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Glowing backdrop aura */}
                  <div className="absolute -inset-3 bg-gradient-to-tr from-gold/20 via-[#4a6778]/30 to-transparent rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Rounded Portrait Frame */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden border-3 border-white/20 shadow-2xl ring-4 ring-white/5">
                    <Image
                      src={current.image}
                      alt={`Portrait of ${current.author}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      priority
                      quality={75}
                      sizes="(max-width: 768px) 176px, (max-width: 1024px) 224px, 240px"
                    />
                  </div>

                  {/* Floating Outcome Badge on Portrait */}
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-[#1B2932]/95 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-white tracking-wide">
                      {current.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Horizontal Navigation Controls & Pagination ─── */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          {/* Slide Counter */}
          <div className="text-xs font-mono font-bold tracking-widest text-white/60">
            <span className="text-gold text-sm font-black">0{currentIndex + 1}</span>
            <span className="mx-1.5 text-white/30">/</span>
            <span>0{testimonials.length}</span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={idx}
                onClick={() => goToTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1} by ${item.author}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-gold"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Previous / Next Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold text-white hover:text-charcoal backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold text-white hover:text-charcoal backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
