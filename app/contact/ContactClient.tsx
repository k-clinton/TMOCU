"use client";

import { useState } from "react";

export default function ContactClient() {
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
  );
}
