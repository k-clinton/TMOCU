import type { Metadata } from "next";
import HeroImageBackdrop from "@/components/ui/HeroImageBackdrop";
import PriceCalculatorClient from "./PriceCalculatorClient";

export const metadata: Metadata = {
  title: "Price Calculator | TMOCU",
  description: "Calculate the estimated price for TMOCU services.",
  alternates: {
    canonical: "/price-calculator",
  },
};

export default function PriceCalculatorPage() {
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
            Price Calculator
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Get an Estimate
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Use our interactive calculator to get an estimated price for your academic needs. 
            All quotes are 100% confidential.
          </p>
        </div>
      </section>

      {/* ─── Main Content Surface ─── */}
      <div className="relative z-20 -mt-8 bg-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 pb-28 shadow-xl">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <PriceCalculatorClient />
        </div>
      </div>
    </div>
  );
}
