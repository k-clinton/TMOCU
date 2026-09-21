"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CTA() {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-cream py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent circle in corner */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel
                className={
                  isVisible ? "animate-fade-in-up text-gold-light" : "opacity-0"
                }
              >
                Get Started Today
              </SectionLabel>
              <h2
                id="cta-heading"
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight ${
                  isVisible
                    ? "animate-fade-in-up animation-delay-100"
                    : "opacity-0"
                }`}
              >
                Ready to Take the Pressure Off Your Shoulders?
              </h2>
              <p
                className={`text-base md:text-lg text-gray-300 leading-relaxed max-w-lg ${
                  isVisible
                    ? "animate-fade-in-up animation-delay-200"
                    : "opacity-0"
                }`}
              >
                Send us your syllabus, upcoming deadlines, or coursework requirements. We will review your materials and get back to you with a tailored plan.
              </p>

              <div
                className={`space-y-4 pt-4 border-t border-white/10 ${
                  isVisible
                    ? "animate-fade-in-up animation-delay-300"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>support@takemyonlineclassusa.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Fast Response Time — Usually within 1 hour</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact / Inquiry Form */}
            <div
              className={`lg:col-span-6 ${
                isVisible
                  ? "animate-fade-in-up animation-delay-300"
                  : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-navy shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-navy">Request Received</h3>
                    <p className="text-text-secondary text-sm max-w-sm mx-auto">
                      Thank you for reaching out! Our academic coordinator will review your class details and contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-gold font-semibold hover:underline mt-4 inline-block"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-navy mb-1">
                      Request Class Assistance
                    </h3>
                    <p className="text-xs text-text-secondary mb-4">
                      Fill out the form below for a free estimate and plan.
                    </p>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">
                        Subject / Course Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Business Statistics 101, Nursing Fundamentals"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">
                        What do you need help with?
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your class, upcoming assignments, or full course management needs..."
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:border-navy focus:ring-1 focus:ring-navy outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-gold hover:bg-gold-hover text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] mt-2"
                    >
                      Submit Class Inquiry
                    </button>
                    <p className="text-[11px] text-center text-text-muted">
                      We respect your privacy. All submissions are 100% confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
