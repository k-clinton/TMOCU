"use client";

import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/useScrollReveal";
import AnimatedImageCard from "@/components/ui/AnimatedImageCard";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      className="relative bg-cream pt-[72px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1A2B4A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="relative max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content — 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overline pill */}
            <div
              className={`${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs font-semibold text-navy tracking-wide">
                  Online Class Support
                </span>
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-extrabold text-navy leading-[1.1] tracking-tight ${
                isVisible
                  ? "animate-fade-in-up animation-delay-100"
                  : "opacity-0"
              }`}
            >
              Focus on Your Life.
              <br />
              <span className="text-gold">We&apos;ll Handle</span> Your
              Online Classes.
            </h1>

            {/* Supporting Text */}
            <p
              className={`text-lg text-text-secondary leading-relaxed max-w-[520px] ${
                isVisible
                  ? "animate-fade-in-up animation-delay-200"
                  : "opacity-0"
              }`}
            >
              We provide professional online class support for busy students
              who need help managing their academic workload. Our priority is
              your grades and your peace of mind.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-4 ${
                isVisible
                  ? "animate-fade-in-up animation-delay-300"
                  : "opacity-0"
              }`}
            >
              <Button href="#contact" size="lg">
                Get Started
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Trust strip */}
            <div
              className={`flex items-center gap-6 pt-4 ${
                isVisible
                  ? "animate-fade-in-up animation-delay-400"
                  : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-text-secondary font-medium">
                  All Subjects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-text-secondary font-medium">
                  Fast Response
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-text-secondary font-medium">
                  Confidential
                </span>
              </div>
            </div>
          </div>

          {/* Right Illustration — 5 columns */}
          <div
            className={`lg:col-span-5 ${
              isVisible
                ? "animate-fade-in-up animation-delay-300"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Decorative background glow */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gold/10 blur-xl opacity-70 animate-pulse-glow"
                aria-hidden="true"
              />
              <AnimatedImageCard
                src="/images/hero-illustration.jpg"
                alt="Student studying at a desk with laptop and books, representing online class support"
                aspectRatio="aspect-[4/3]"
                priority
                badge={{
                  text: "Online Course Assistance",
                  dotColor: "bg-gold",
                  pulse: true,
                  position: "bottom-left",
                }}
                secondaryBadge="Guaranteed Quality"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-warm to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
