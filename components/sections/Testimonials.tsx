"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { Star, ShieldCheck, CheckCircle2, GraduationCap, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  program: string;
  discipline: string;
  outcome: string;
  platform: string;
  rating: number;
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
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal(0.06);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 border-t border-border-subtle"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="overline-tag">STUDENT SUCCESS & REVIEWS</span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-charcoal tracking-tight mt-3 mb-4"
          >
            Proven Results Across 500+ Online Courses
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Read verified experiences from working professionals, adult learners, and full-time university students who achieved their academic goals with TMOCU.
          </p>

          {/* Social Proof Aggregate Badges */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-charcoal">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>4.9 / 5.0 Star Rating</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 size={16} />
              <span>98.4% Target Grade Success</span>
            </div>

            <div className="flex items-center gap-1.5 text-charcoal/80">
              <ShieldCheck size={16} className="text-gold" />
              <span>100% Confidential & Private</span>
            </div>
          </div>
        </div>

        {/* 3x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F8F9FA] rounded-[28px] p-7 sm:p-8 border border-[#EAECEF] hover:border-charcoal/20 hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between relative group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              <div>
                {/* Top Discipline Tag & Grade Outcome */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-200/70">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider truncate">
                    {item.discipline}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[10px] font-bold tracking-tight whitespace-nowrap">
                    {item.outcome}
                  </span>
                </div>

                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-charcoal/10 group-hover:text-gold/40 transition-colors" />
                </div>

                {/* Narrative Quote */}
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Student Details & Platform Info */}
              <div className="pt-4 border-t border-gray-200/70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xs tracking-wider">
                      {item.author.slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <span className="text-gold text-[10px]" title="Verified Student">✓</span>
                      </div>
                      <div className="text-[11px] text-text-secondary">
                        {item.program}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-charcoal/50 font-medium">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={12} className="text-charcoal/40" />
                    {item.role}
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-md border border-gray-200">
                    {item.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
