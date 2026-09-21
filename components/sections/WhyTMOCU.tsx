"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/useScrollReveal";

const benefits = [
  {
    number: "01",
    title: "Save Your Time",
    description:
      "Between work, family, and personal commitments, online classes can feel overwhelming. We take on the workload so you can reclaim your schedule.",
  },
  {
    number: "02",
    title: "Peace of Mind",
    description:
      "Stop stressing over deadlines and due dates. Know that your coursework is being handled professionally and submitted on time, every time.",
  },
  {
    number: "03",
    title: "Grade Focused",
    description:
      "We don't just complete assignments — we aim for the best possible outcomes. Your academic success is what drives our work.",
  },
  {
    number: "04",
    title: "Discreet & Reliable",
    description:
      "Your information stays confidential. We work behind the scenes with full discretion, communicating with you every step of the way.",
  },
];

export default function WhyTMOCU() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="why-us"
      className="bg-cream py-24 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — Image */}
          <div
            className={`lg:col-span-5 ${
              isVisible
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl bg-navy/5"
                aria-hidden="true"
              />
              <Image
                src="/images/why-tmocu.jpg"
                alt="Illustration of a student celebrating academic success with completed tasks and time saved"
                width={600}
                height={400}
                className="relative rounded-xl shadow-lg"
                quality={85}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <SectionLabel
              className={
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }
            >
              Why Choose Us
            </SectionLabel>
            <h2
              id="why-heading"
              className={`text-3xl md:text-4xl font-bold text-navy mt-4 mb-10 tracking-tight ${
                isVisible
                  ? "animate-fade-in-up animation-delay-100"
                  : "opacity-0"
              }`}
            >
              Your Academic Workload, Professionally Managed
            </h2>

            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.number}
                  className={`flex gap-5 ${
                    isVisible
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-gold">
                      {benefit.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-10 ${
                isVisible
                  ? "animate-fade-in-up animation-delay-500"
                  : "opacity-0"
              }`}
            >
              <Button href="#contact" variant="secondary">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
