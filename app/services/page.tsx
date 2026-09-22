import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Services & Coursework Support | TMOCU",
  description:
    "Explore our full suite of online class management, assignment help, exam support, and discussion board services for university students.",
  alternates: {
    canonical: "/services",
  },
};

const serviceDetails = [
  {
    id: "management",
    title: "Full Online Class Management",
    tagline: "End to end semester oversight from syllabus to final grades.",
    description:
      "We handle every facet of your online portal: weekly modules, reading assignments, video lectures, and deadline tracking. Perfect for working professionals juggling rigorous full time careers with degree completion.",
    features: [
      "Weekly portal check-ins and module completion",
      "On time submission for all syllabus milestones",
      "Proactive grade monitoring and score alerts",
      "Direct communication with your assigned specialist",
    ],
  },
  {
    id: "assignments",
    title: "Assignments, Papers & Problem Sets",
    tagline: "High caliber research and computational problem solving.",
    description:
      "From complex case studies and research papers to coding labs, calculus problem sets, and statistical models in SPSS/R, our subject specialists craft accurate, well formatted work formatted to APA, MLA, Chicago, or IEEE standards.",
    features: [
      "Original research and rigorous citations",
      "Quantitative accuracy in mathematics, engineering & accounting",
      "Detailed step by step working notes",
      "Free revisions based on instructor feedback",
    ],
  },
  {
    id: "exams",
    title: "Quiz & Examination Support",
    tagline: "Comprehensive preparation and execution for critical assessments.",
    description:
      "Whether you are facing weekly knowledge checks, timed online quizzes, or comprehensive midterms and finals, our specialists are equipped to prepare thoroughly and achieve the target score required for your GPA.",
    features: [
      "Timed test readiness and subject reviews",
      "Multiple choice, short answer, and essay exam coverage",
      "Experience with LockDown Browser, Proctorio & Honorlock guidelines",
      "Targeted score benchmarks",
    ],
  },
  {
    id: "discussions",
    title: "Discussion Board & Forum Posts",
    tagline: "Engaging, well researched peer contributions.",
    description:
      "Never lose participation points again. We author thoughtful initial discussion posts addressing the prompt with academic citations, followed by required peer responses that demonstrate critical thinking.",
    features: [
      "Strict compliance with weekly word-count minimums",
      "Relevant academic citations and references",
      "Timely replies to instructor and classmate questions",
      "Consistent academic tone",
    ],
  },
];

const subjectDisciplines = [
  {
    category: "Business & Management",
    courses: ["Financial Accounting", "Corporate Finance", "Marketing Strategy", "MBA Capstones", "Economics (Micro/Macro)"],
  },
  {
    category: "Healthcare & Nursing",
    courses: ["Pharmacology", "Pathophysiology", "Nursing Informatics", "Evidence-Based Practice", "Public Health"],
  },
  {
    category: "STEM & Computer Science",
    courses: ["Python & Java Programming", "Calculus I-III", "Database Systems", "Physics & Chemistry", "Data Structures"],
  },
  {
    category: "Humanities & Social Sciences",
    courses: ["Psychology", "Sociology", "American History", "Political Science", "Philosophy & Ethics"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#1E2B34] text-white pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-architecture.jpg"
            alt="University architecture"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2932]/95 via-[#23333E]/80 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2932]/40 via-transparent to-black/25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-white/90">
            Our Academic Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Services & Disciplines
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Tailored academic assistance for every stage of your college education, from individual assignments to full semester class management.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#F8F9FA] border border-[#EAECEF] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between hover:border-charcoal/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gold uppercase tracking-widest">
                      Service 0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-charcoal/70 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border-subtle mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                        <span className="text-gold font-bold">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white hover:bg-gold rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Request this service</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Disciplines Matrix */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="overline-tag">SUBJECT COVERAGE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-3">
                Disciplines We Support
              </h2>
              <p className="text-sm text-text-secondary mt-3">
                Our network of academic specialists holds advanced degrees across all major higher education fields.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjectDisciplines.map((disc) => (
                <div
                  key={disc.category}
                  className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#EAECEF]"
                >
                  <h3 className="text-base font-bold text-charcoal mb-4 pb-2 border-b border-border-subtle">
                    {disc.category}
                  </h3>
                  <ul className="space-y-2">
                    {disc.courses.map((course) => (
                      <li key={course} className="text-xs text-text-secondary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Photo & CTA Banner */}
          <div className="bg-[#121417] text-white rounded-[32px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">
                Custom Syllabi Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Have a specialized or accelerated course?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Upload your syllabus or describe your class schedule for a personalized feasibility review.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-charcoal hover:bg-gold hover:text-white rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-xl"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
