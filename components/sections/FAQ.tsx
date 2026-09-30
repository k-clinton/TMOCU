"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "Is this safe and can my school detect cheating?",
    answer:
      "Our services are 100% safe. We use secure RDPs, proxies and dedicated IP addresses based on your current geolocation to access you classes.",
  },
  {
    question: "Is takemyonlineclassusa legit?",
    answer:
      "Yes, we're legit USA business. Our clients pay only when grades are posted. We've been doing this for years with success and promise to keep you coming back!",
  },
  {
    question: "How does this work?",
    answer:
      "Step 1. Give us details about your online class.\nStep 2. We'll give you the price quote.\nStep 3. We'll start to handle the class as you pay weekly.",
  },
  {
    question: "What payment methods are available?",
    answer: "Currently, we accept PayPal only.",
  },
  {
    question: "Can I pay someone to take my online exam?",
    answer: "No. We only take full classes or write essay assignments.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#EAECEF] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-charcoal group-hover:text-gold transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-charcoal/25 group-hover:border-gold flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-charcoal text-white border-charcoal" : "text-charcoal/60"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="2" x2="6" y2="10" />
            <line x1="2" y1="6" x2="10" y2="6" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed pb-5 sm:pb-6 whitespace-pre-line max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 border-t border-border-subtle" aria-labelledby="faq-heading">
      <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
        <span className="overline-tag mb-4">FAQ</span>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mt-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          We&apos;re the best way to get an A in online classes and essays.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto bg-white rounded-[28px] border border-[#EAECEF] shadow-sm px-6 sm:px-10 py-2">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
