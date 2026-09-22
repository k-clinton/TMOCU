import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Academic Support & Student Success | TMOCU",
  description:
    "Discover TMOCU's mission, our network of academic specialists, and our unwavering commitment to student success, confidentiality, and quality.",
};

const pillars = [
  {
    title: "Subject Matter Mastery",
    desc: "Every course is handled by an academic who holds verified degrees in your exact field of study.",
  },
  {
    title: "Absolute Confidentiality",
    desc: "We maintain military grade encryption and regional IP protection so your identity is never compromised.",
  },
  {
    title: "Punctual Delivery",
    desc: "We prioritize early turnaround so you never suffer penalty deductions or last-minute deadline anxiety.",
  },
  {
    title: "Continuous Collaboration",
    desc: "Transparent milestone tracking, weekly grade logs, and around-the-clock coordinator communication.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#476678] text-white pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-architecture.jpg"
            alt="University campus architecture"
            fill
            className="object-cover object-center opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#344D5B] via-[#476678]/95 to-[#476678]/85" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-white/90">
            About Our Organization
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Empowering Higher Education Students
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            TakeMyOnlineClassUSA (TMOCU) was founded to provide dependable, high-caliber academic management for modern students navigating demanding workloads.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Mission & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline-tag">OUR MISSION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                Bridging the Gap Between Career Demands and Academic Goals
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Today&apos;s higher education landscape is filled with non-traditional students: healthcare workers working 12-hour hospital shifts, full time working parents completing online degrees, and professionals pursuing career advancing MBAs.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We believe that life responsibilities should not derail your academic aspirations. TMOCU provides the dedicated support structure you need to maintain stellar grades while keeping your career and personal life on track.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-black/5 aspect-[4/3]">
                <Image
                  src="/images/students-collaboration.jpg"
                  alt="Students studying collaboratively"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="overline-tag">OUR STANDARDS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-3">
                Built On Trust and Academic Rigor
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#EAECEF] hover:border-charcoal/30 transition-colors"
                >
                  <span className="text-2xl font-black text-charcoal/20 font-mono mb-4 block">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-bold text-charcoal mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Specialist Network */}
          <div className="bg-[#121417] text-white rounded-[32px] p-8 sm:p-14 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">
                Our Specialist Network
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Vetted Academic Specialists Across 50+ Disciplines
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our academic network is comprised of qualified graduates, educators, and subject experts holding advanced master&apos;s and doctoral credentials. Each specialist undergoes rigorous background and knowledge assessments before managing coursework.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <span className="text-2xl font-bold text-white block">100%</span>
                <span className="text-xs text-white/70">Degree-Verified Subject Specialists</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                <span className="text-2xl font-bold text-white block">&lt; 1hr</span>
                <span className="text-xs text-white/70">Average Academic Coordinator Response Time</span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white hover:bg-gold rounded-full font-bold text-sm transition-all shadow-xl"
            >
              <span>Connect With an Academic Advisor</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
