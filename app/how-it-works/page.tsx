import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Step by Step Class Management Process | TMOCU",
  description:
    "Learn how our online class management workflow works from syllabus intake to grade delivery and continuous communication.",
  alternates: {
    canonical: "/how-it-works",
  },
};

const steps = [
  {
    number: "01",
    phase: "Intake & Review",
    title: "Submit Your Class or Assignment Details",
    description:
      "Share your course syllabus, upcoming assignment prompts, portal requirements, or target exam dates via our secure intake form or direct coordinator chat.",
    details: [
      "Upload PDF syllabus or assignment rubrics",
      "Specify your target grade benchmarks",
      "Receive a transparent quote with zero hidden fees",
    ],
  },
  {
    number: "02",
    phase: "Specialist Matching",
    title: "Dedicated Subject Expert Assigned",
    description:
      "We pair your course with a verified academic specialist holding advanced credentials in your specific discipline (e.g. Master of Science in Nursing, MBA, Computer Science MS).",
    details: [
      "Rigorous subject-matter qualification check",
      "Familiarity with your LMS portal (Canvas, Blackboard, D2L)",
      "Dedicated schedule blocking for all course milestones",
    ],
  },
  {
    number: "03",
    phase: "Active Management",
    title: "Systematic Coursework Execution",
    description:
      "Your specialist logs in, completes weekly assignments, authors thoughtful discussion posts with citations, and takes tests well ahead of published deadlines.",
    details: [
      "Weekly submissions submitted at least 12-24 hours early",
      "Strict plagiarism and AI detection scans on written essays",
      "Timely peer responses to maintain full participation points",
    ],
  },
  {
    number: "04",
    phase: "Verification & Reporting",
    title: "Progress Updates & Grade Tracking",
    description:
      "Receive continuous progress reports, confirmation screenshots, and grade updates so you are always aware of your class status without the stress.",
    details: [
      "Real-time confirmation of all submitted items",
      "Proactive feedback review and free instructor revisions",
      "Direct coordinator support available 24/7",
    ],
  },
];

const faqs = [
  {
    q: "How do you ensure complete privacy and security?",
    a: "We maintain strict privacy protocols. All account details are encrypted, and we match your school's geographic region using dedicated US residential connections to ensure normal portal login activity.",
  },
  {
    q: "Can you help with full semester classes or just individual assignments?",
    a: "Both! We support everything from a single urgent research paper or quiz to managing entire 8 week or 16 week online courses from syllabus to final exam.",
  },
  {
    q: "What happens if an assignment requires revision?",
    a: "If your professor provides feedback requiring adjustments, our specialist completes all necessary revisions promptly at no extra charge.",
  },
  {
    q: "How fast can you start working on my class?",
    a: "Once you approve the action plan, we can have a subject specialist assigned to your course within 1 to 2 hours.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#476678] text-white pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-architecture.jpg"
            alt="University architecture"
            fill
            className="object-cover object-center opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#344D5B] via-[#476678]/95 to-[#476678]/85" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-white/90">
            Transparent Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            A seamless, stress-free 4 stage process designed to give you complete peace of mind throughout your academic semester.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* 4 Steps Vertical Grid */}
          <div className="space-y-12 mb-24">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 rounded-[28px] bg-[#F8F9FA] border border-[#EAECEF] items-center"
              >
                <div className="lg:col-span-2 flex items-center justify-between lg:flex-col lg:items-start">
                  <span className="text-5xl sm:text-6xl font-black text-charcoal/20 font-mono">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-widest mt-2">
                    {step.phase}
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">
                    {step.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-border-subtle space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 block mb-2">
                    Key Highlights
                  </span>
                  {step.details.map((detail) => (
                    <div key={detail} className="text-xs text-charcoal flex items-start gap-2">
                      <span className="text-gold font-bold">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Security & Confidentiality Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 p-8 sm:p-12 bg-charcoal text-white rounded-[32px]">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">
                Student Safety Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Discretion, Privacy, and Regional IP Matching
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                We understand that privacy is paramount. Our specialists use secure, dedicated connections matching your school&apos;s geographic location, preventing unexpected location flags on university LMS portals. Your personal data is never shared with third parties.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/student-study-2.jpg"
                alt="Student studying with privacy and ease"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="overline-tag">COMMON QUESTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-[#EAECEF]"
                >
                  <h3 className="text-base sm:text-lg font-bold text-charcoal mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white hover:bg-gold rounded-full font-bold text-sm transition-all shadow-xl"
            >
              <span>Get Started With Your Syllabus</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
