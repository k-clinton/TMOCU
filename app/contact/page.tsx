import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import HeroImageBackdrop from "@/components/ui/HeroImageBackdrop";

export const metadata: Metadata = {
  title: "Request Class Support — Free Confidential Quote | TMOCU",
  description:
    "Submit your syllabus, assignment prompt, or course details for a fast, free evaluation and confidential price estimate.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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
            Consultation & Quote
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Request Class Support
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Submit your syllabus, assignment prompt, or course details for a fast, free evaluation and confidential price estimate.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact / Intake Form */}
            <div className="lg:col-span-7">
              <ContactClient />
            </div>

            {/* Right: Direct Information & Guarantees */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F8F9FA] rounded-[28px] p-8 border border-[#EAECEF] space-y-6">
                <span className="overline-tag">DIRECT CHANNELS</span>
                <h3 className="text-xl font-bold text-charcoal">
                  Connect Directly With Academic Coordination
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center shrink-0">
                      ✉
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium">Official Support Email</p>
                      <a
                        href="mailto:support@takemyonlineclassusa.com"
                        className="text-sm font-bold text-charcoal hover:text-gold transition-colors"
                      >
                        support@takemyonlineclassusa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center shrink-0">
                      ⚡
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium">Response Time</p>
                      <p className="text-sm font-bold text-charcoal">
                        Under 1 Hour (24/7 Available)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Guarantee Card */}
              <div className="bg-charcoal text-white rounded-[28px] p-8 border border-white/10 space-y-4">
                <span className="text-xs font-bold text-gold uppercase tracking-widest">
                  Privacy Pledge
                </span>
                <h4 className="text-lg font-bold text-white">
                  100% Confidentiality Assured
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  We never share, sell, or disclose your academic information to third parties. All portal interactions use dedicated residential IP matching corresponding with your institution&apos;s geographic area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
