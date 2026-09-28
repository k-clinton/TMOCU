import type { Metadata } from "next";
import Link from "next/link";
import HeroImageBackdrop from "@/components/ui/HeroImageBackdrop";
import PriceCalculatorClient from "./PriceCalculatorClient";
import { ShieldCheck, Award, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Price Calculator | TMOCU",
  description: "Calculate an instant, estimated price for TMOCU online class management and academic coursework support.",
  alternates: {
    canonical: "/price-calculator",
  },
  openGraph: {
    title: "Academic Price Calculator | TMOCU",
    description:
      "Get an instant price estimate for online class management, assignment help, or exam support. Free, confidential, and no commitment required.",
    url: "/price-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Price Calculator | TMOCU",
    description:
      "Get an instant price estimate for online class management, assignment help, or exam support. Free, confidential, and no commitment required.",
  },
};

const heroTraits = [
  { icon: ShieldCheck, label: "100% Confidential & Secure" },
  { icon: Award, label: "Grade A/B Benchmark Guarantee" },
  { icon: Clock, label: "24/7 Dedicated Support" },
  { icon: Sparkles, label: "Zero Hidden Fees" },
];

export default function PriceCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#1E2B34] text-white pt-8 pb-16 md:pb-20 px-6 lg:px-12 overflow-hidden">
        <HeroImageBackdrop
          src="/images/hero-architecture.jpg"
          alt="University campus architecture"
          priority
        />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          {/* Top Brand & Back Bar */}
          <div className="flex items-center justify-between pb-8 mb-6 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-1.5 group tracking-tight"
              aria-label="TMOCU Home"
            >
              <span className="text-xl font-bold text-white tracking-tight">
                tmocu<span className="text-gold">°</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-medium tracking-widest uppercase text-white/70">
                / USA
              </span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10"
            >
              <span>← Back to Website</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-white/90">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Instant Quote Estimator
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Academic Price Calculator
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              Customize your course details below to generate a transparent, tailored estimate for your online class management or coursework support.
            </p>

            {/* Hero Traits Row */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/90">
              {heroTraits.map((trait, idx) => {
                const Icon = trait.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon size={15} className="text-gold" />
                    <span>{trait.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <main className="relative z-20 -mt-8 bg-white rounded-t-[32px] sm:rounded-t-[44px] pt-10 pb-16 px-6 lg:px-12 shadow-xl flex-1">
        <div className="max-w-[1200px] mx-auto">
          <PriceCalculatorClient />
        </div>
      </main>
    </div>
  );
}
