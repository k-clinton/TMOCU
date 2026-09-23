"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    title: "Online Class Management",
    description:
      "Full support for your online classes — from logging in to submitting work on time, we keep your coursework on track.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Assignment Assistance",
    description:
      "Well researched, properly formatted assignments submitted before your deadlines. Quality work you can rely on.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Quiz & Exam Support",
    description:
      "Prepared, focused support for your quizzes and examinations. We help you approach assessments with confidence.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Discussion Board Posts",
    description:
      "Thoughtful, well-written discussion responses that demonstrate understanding and meet participation requirements.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Coursework Support",
    description:
      "End-to-end coursework guidance covering lectures, readings, projects, and ongoing academic tasks throughout the term.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Grade Monitoring",
    description:
      "We keep a close eye on your grades and academic progress, proactively addressing issues before they become problems.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="services"
      className="bg-cream-warm py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[600px] mb-14">
          <SectionLabel
            className={
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }
          >
            Our Services
          </SectionLabel>
          <h2
            id="services-heading"
            className={`text-3xl md:text-4xl font-bold text-navy mt-4 tracking-tight ${
              isVisible
                ? "animate-fade-in-up animation-delay-100"
                : "opacity-0"
            }`}
          >
            Comprehensive Academic Support, Tailored to You
          </h2>
          <p
            className={`text-text-secondary mt-4 leading-relaxed ${
              isVisible
                ? "animate-fade-in-up animation-delay-200"
                : "opacity-0"
            }`}
          >
            From daily coursework to high-stakes exams, we cover every aspect
            of your online academic experience so you can stay focused on
            what matters.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${
            isVisible ? "" : "opacity-0"
          }`}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
