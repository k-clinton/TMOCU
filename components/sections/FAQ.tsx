"use client";

import { useState } from "react";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "Is this safe and can my school detect cheating?",
    answer:
      "Our services are 100% safe. We use secure RDPs, proxies and dedicated IP addresses based on your current geolocation to access your classes.",
  },
  {
    question: "Is takemyonlineclassusa legit?",
    answer:
      "Yes, we're a legit USA business. Our clients pay only when grades are posted. We've been doing this for years with success and promise to keep you coming back!",
  },
  {
    question: "How does this work?",
    answer: `Step 1. Give us details about your online class.\nStep 2. We'll give you the price quote.\nStep 3. We'll start to handle the class as you pay weekly.`,
  },
  {
    question: "What payment methods are available?",
    answer: "Currently, we accept PayPal only.",
  },
  {
    question: "Can I pay someone to take my online exam?",
    answer: "No. We only take full classes or write essay assignments.",
  },
  {
    question: "How quickly can you start managing my class?",
    answer:
      "We can typically begin within 24 hours of receiving your course details and confirming payment. Reach out and we'll get you onboarded the same day.",
  },
  {
    question: "Will my grades be guaranteed?",
    answer:
      "Yes. We offer grade guarantees on all managed coursework. If we fall short of the agreed target, we'll work the remaining balance at no extra charge until it's met.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-[#EAECEF] last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-charcoal group-hover:text-gold transition-colors duration-200 leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 border-charcoal/20 group-hover:border-gold flex items-center justify-center transition-all duration-300 ${
            open ? "bg-gold border-gold rotate-45" : ""
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors duration-200 ${open ? "text-white" : "text-charcoal/60 group-hover:text-gold"}`}
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
      <ScrollReveal animation="fade-up" className="text-center mb-12 sm:mb-16">
        <span className="overline-tag mb-4">FAQ</span>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mt-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          Everything you need to know before getting started.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto bg-white rounded-[28px] border border-[#EAECEF] shadow-sm px-6 sm:px-10 py-2">
        {faqs.map((faq, i) => (
          <FAQItem key={i} index={i} {...faq} />
        ))}
      </div>
    </section>
  );
}
