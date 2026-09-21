"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseName: "",
    platform: "Canvas",
    serviceType: "Full Class Management",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFB]">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-[#476678] text-white pt-32 md:pt-40 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-architecture.jpg"
            alt="University campus architecture"
            fill
            className="object-cover object-center opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#344D5B] via-[#476678]/95 to-[#476678]/85" />
        </div>

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
              <div className="bg-[#F8F9FA] rounded-[28px] p-8 sm:p-12 border border-[#EAECEF]">
                {submitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                      Inquiry Received Successfully
                    </h2>
                    <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your course details. An academic coordinator is reviewing your requirements and will reach out via email within 1 hour with a customized plan.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-wider text-gold hover:underline pt-4"
                    >
                      Submit Another Course
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mb-2">
                        Course Information Form
                      </h2>
                      <p className="text-xs sm:text-sm text-text-secondary">
                        All information submitted is 100% confidential and encrypted.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jordan Taylor"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jordan@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                          Course / Subject Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.courseName}
                          onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                          placeholder="e.g. Statistics 301, Organic Chem"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                          Course Platform / LMS
                        </label>
                        <select
                          value={formData.platform}
                          onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all"
                        >
                          <option value="Canvas">Canvas LMS</option>
                          <option value="Blackboard">Blackboard Learn</option>
                          <option value="Brightspace D2L">Brightspace D2L</option>
                          <option value="Moodle">Moodle</option>
                          <option value="Pearson MyLab">Pearson MyLab / Mastering</option>
                          <option value="McGraw-Hill">McGraw-Hill Connect</option>
                          <option value="Other">Other / Custom Portal</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                        Assistance Type Needed
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none transition-all"
                      >
                        <option value="Full Class Management">Entire Semester / Class Management</option>
                        <option value="Assignment & Essay Help">Specific Assignments / Essays</option>
                        <option value="Quiz & Exam Support">Quizzes, Midterms & Final Exams</option>
                        <option value="Discussion Board Posts">Discussion Forum Posts & Responses</option>
                        <option value="Lab & Coding Projects">Labs, Problem Sets, Coding Projects</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                        Syllabus Details & Upcoming Deadlines *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please paste your syllabus highlights, upcoming due dates, or specific requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border-subtle text-sm text-charcoal focus:border-charcoal focus:ring-1 focus:ring-charcoal outline-none resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-8 bg-charcoal hover:bg-gold text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Submit For Immediate Evaluation
                    </button>
                  </form>
                )}
              </div>
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
