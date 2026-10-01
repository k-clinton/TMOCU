import Link from "next/link";
import type { Metadata } from "next";
import HeroImageBackdrop from "@/components/ui/HeroImageBackdrop";
import AnimatedImageCard from "@/components/ui/AnimatedImageCard";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us — Academic Support & Student Success | TMOCU",
  description:
    "Discover TMOCU's mission, our network of academic specialists, and our unwavering commitment to student success, confidentiality, and quality.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — Academic Support & Student Success | TMOCU",
    description:
      "Learn how TMOCU's network of 50+ degree-verified academic specialists helps busy students achieve their grade targets with total confidentiality.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Academic Support & Student Success | TMOCU",
    description:
      "Learn how TMOCU's network of 50+ degree-verified academic specialists helps busy students achieve their grade targets with total confidentiality.",
  },
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
    desc: "We prioritize early turnaround so you never suffer penalty deductions or last minute deadline anxiety.",
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
      <section className="relative bg-[#1E2B34] text-white pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <HeroImageBackdrop
          src="/images/hero-architecture.jpg"
          alt="University campus architecture"
          priority
        />

        <div className="relative z-10 max-w-[1280px] mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-white/90">
            About Our Organization
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Empowering Higher Education Students
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            TakeMyOnlineClassUSA (TMOCU) was founded to provide dependable, high caliber academic management for modern students navigating demanding workloads.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Mission & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <ScrollReveal animation="fade-left" className="lg:col-span-6 space-y-6">
              <span className="overline-tag">OUR MISSION</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                Bridging the Gap Between Career Demands and Academic Goals
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Today&apos;s higher education landscape is filled with non traditional students: healthcare workers working 12 hour hospital shifts, full time working parents completing online degrees, and professionals pursuing career advancing MBAs.
              </p>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We believe that life responsibilities should not derail your academic aspirations. TMOCU provides the dedicated support structure you need to maintain stellar grades while keeping your career and personal life on track.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-6">
              <AnimatedImageCard
                src="/images/students-collaboration.jpg"
                alt="Students studying collaboratively"
                aspectRatio="aspect-[4/3]"
                badge={{
                  text: "Active Student Community & Collaboration",
                  dotColor: "bg-gold",
                  pulse: true,
                  position: "bottom-left",
                }}
                secondaryBadge="Mission Driven"
              />
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="mb-24">
            <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-14">
              <span className="overline-tag">OUR STANDARDS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mt-3">
                Built On Trust and Academic Rigor
              </h2>
            </ScrollReveal>

            <ScrollRevealStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <ScrollRevealItem key={pillar.title}>
                  <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#EAECEF] hover:border-charcoal/30 hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
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
                </ScrollRevealItem>
              ))}
            </ScrollRevealStagger>
          </div>

          {/* Anti-Scam & Student Protection Pillar (Original TMOCU Core Promise) */}
          <ScrollReveal animation="fade-up" className="mb-24">
            <div className="bg-[#FAF0ED] border border-[#F5D5CB] rounded-[32px] p-8 sm:p-14">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C83820] bg-white/80 px-3 py-1 rounded-full border border-[#F5D5CB] inline-block mb-3">
                  Student Safety Warning &amp; Protection
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                  Hire Us, Avoid Scammers
                </h2>
                <p className="text-sm sm:text-base text-charcoal/80 mt-3 leading-relaxed">
                  We&apos;ve been in the higher education support industry for years and have seen it all when it comes to online scams. There are fraudulent sites with deceptive representatives that pretend they will help, but really want nothing more than to scam and blackmail unsuspecting students.
                </p>
                <p className="text-sm sm:text-base text-charcoal/80 mt-3 leading-relaxed">
                  <span className="font-semibold text-charcoal">&ldquo;Pay someone to take my class?&rdquo;</span> is not a decision to take lightly. It requires careful research into finding verified, legitimate academic specialists. With TMOCU, you are assured of genuine, confidential, and stress free service. Do not let predatory scams compromise your academic career, we are here to protect you.
                </p>
              </div>

              {/* 3 Comparison / Security Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#F5D5CB]">
                <div className="bg-white rounded-2xl p-6 border border-[#F5D5CB] shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#C83820]/10 text-[#C83820] flex items-center justify-center font-bold text-sm">
                    ✕
                  </div>
                  <h3 className="text-sm font-bold text-charcoal">Common Industry Scams</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Unverified overseas call centers, bait and switch pricing, non delivery, and extortion threats using stolen portal data.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#C59B27]/40 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h3 className="text-sm font-bold text-charcoal">The TMOCU Guarantee</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Verified degree holding specialists in USA &amp; Canada, strict NDAs, encrypted credentials, and regional IP protection.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-emerald-300/40 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    🛡
                  </div>
                  <h3 className="text-sm font-bold text-charcoal">100% Stress Free &amp; Legit</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Dedicated academic coordinators, weekly verifiable grade audits, and guaranteed peace of mind from day one.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Academic Specialist Network */}
          <ScrollReveal animation="scale-up" className="mb-24">
            <div className="bg-[#121417] text-white rounded-[32px] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
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
                  <span className="text-xs text-white/70">Degree Verified Subject Specialists</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <span className="text-2xl font-bold text-white block">&lt; 1hr</span>
                  <span className="text-xs text-white/70">Average Academic Coordinator Response Time</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Action */}
          <ScrollReveal animation="fade-up" className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white hover:bg-gold rounded-full font-bold text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Connect With an Academic Advisor</span>
              <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
