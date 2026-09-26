"use client";

import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft, Check, UploadCloud, ShieldCheck, Clock, Award } from "lucide-react";

type FormData = {
  subject: string;
  educationLevel: string;
  selfPaced: string;
  completionWeeks: string;
  durationWeeks: string;
  courseStarted: string;
  services: string[];
  
  // Discussions
  discussionParticipation: string;
  discussionWeekly: string;
  discussionMinWords: string;
  discussionPeerResponses: string;
  discussionPeerMinWords: string;
  
  // Exams
  examsRequired: string;
  examsRemaining: string;
  examsTotal: string;
  examsAvgQuestions: string;
  examsProctored: string;
  examsRespondus: string;
  
  // Quizzes
  quizzesRequired: string;
  quizzesRemaining: string;
  quizzesTotal: string;
  quizzesAvgQuestions: string;
  quizzesProctored: string;
  quizzesRespondus: string;
  
  // Simulations
  simulationsIncluded: string;
  simulationsCount: string;
  
  // Essays
  essaysRequired: string;
  essaysRemaining: string;
  essaysTotal: string;
  essaysAvgWords: string;
  
  // Group
  groupActivities: string;
  
  // Details
  additionalInfo: string;
  email: string;
  phone: string;
};

const INITIAL_DATA: FormData = {
  subject: "", educationLevel: "", selfPaced: "", completionWeeks: "", durationWeeks: "8", courseStarted: "",
  services: [],
  discussionParticipation: "", discussionWeekly: "", discussionMinWords: "", discussionPeerResponses: "", discussionPeerMinWords: "",
  examsRequired: "", examsRemaining: "", examsTotal: "", examsAvgQuestions: "", examsProctored: "", examsRespondus: "",
  quizzesRequired: "", quizzesRemaining: "", quizzesTotal: "", quizzesAvgQuestions: "", quizzesProctored: "", quizzesRespondus: "",
  simulationsIncluded: "", simulationsCount: "",
  essaysRequired: "", essaysRemaining: "", essaysTotal: "", essaysAvgWords: "",
  groupActivities: "", additionalInfo: "", email: "", phone: ""
};

const SUBJECTS = [
  "Agriculture", "Architecture", "Business", "Communications and Journalism", "Culinary and Personal Services",
  "Education", "Legal", "Liberal Arts and Humanities", "Physical Sciences", "Transportation and Distribution",
  "Visual and Performing Arts", "Mechanic Repair and Technologies", "Computer Sciences", "Medical and Health",
  "Biological and Biomedical Sciences", "Engineering", "Other"
];

const EDUCATION_LEVELS = ["Associate Degree", "Bachelor's Degree", "Master's Degree", "Doctoral Degree", "Other"];
const SERVICES = [
  "Take my entire class", "Complete my writing assignments", "Write my discussion posts", 
  "Take my exams/quizzes/tests", "Complete my laboratory exercises/games/simulations"
];

export default function PriceCalculatorClient() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [step, setStep] = useState(1);

  const updateData = (fields: Partial<FormData>) => setData(prev => ({ ...prev, ...fields }));
  const toggleService = (srv: string) => {
    setData(prev => ({
      ...prev,
      services: prev.services.includes(srv) ? prev.services.filter(s => s !== srv) : [...prev.services, srv]
    }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 11));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // --------------------------------------------------------------------------
  // TODO: PLACEHOLDERS FOR PRICING LOGIC
  // Insert your actual pricing math in these variables.
  // --------------------------------------------------------------------------
  const { totalPrice, weeklyPrice } = useMemo(() => {
    let calculatedTotal = 0;
    
    // Example logic placeholder:
    if (data.services.length > 0) calculatedTotal += data.services.length * 75;
    if (data.examsRequired === "Yes") calculatedTotal += (Number(data.examsRemaining) || 1) * 45;
    if (data.quizzesRequired === "Yes") calculatedTotal += (Number(data.quizzesRemaining) || 1) * 25;
    if (data.essaysRequired === "Yes") calculatedTotal += (Number(data.essaysRemaining) || 1) * 50;

    const weeks = Number(data.durationWeeks) || 1;
    return { 
      totalPrice: calculatedTotal, 
      weeklyPrice: weeks > 0 ? (calculatedTotal / weeks) : 0 
    };
  }, [data]);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">What subject do you need help with?</h2>
              <p className="text-xs text-text-secondary mt-1">Select the primary academic field of study.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[260px] overflow-y-auto pr-1">
              {SUBJECTS.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => updateData({ subject: s })}
                  className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                    data.subject === s 
                      ? 'border-charcoal bg-charcoal text-white shadow-sm' 
                      : 'border-gray-200 bg-white hover:border-gray-300 text-charcoal'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Educational level of your course</h2>
              <p className="text-xs text-text-secondary mt-1">Choose the academic level for appropriate specialist assignment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EDUCATION_LEVELS.map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => updateData({ educationLevel: lvl })}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                    data.educationLevel === lvl 
                      ? 'border-charcoal bg-charcoal text-white shadow-sm' 
                      : 'border-gray-200 bg-white hover:border-gray-300 text-charcoal'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-3.5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Course Timeline</h2>
              <p className="text-xs text-text-secondary mt-0.5">Specify pacing and estimated durations.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">Is the course self-paced?</label>
                <div className="flex gap-2">
                  <YesNo val={data.selfPaced} setVal={v => updateData({ selfPaced: v })} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">Has your course started?</label>
                <div className="flex gap-2">
                  <YesNo val={data.courseStarted} setVal={v => updateData({ courseStarted: v })} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-charcoal">Course duration (weeks)</label>
                  <span className="text-xs font-bold text-gold">{data.durationWeeks || 0} Weeks</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={data.durationWeeks} 
                  onChange={e => updateData({ durationWeeks: e.target.value })} 
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-charcoal" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Desired completion (weeks)</label>
                <input 
                  type="number" 
                  placeholder="e.g. 8" 
                  value={data.completionWeeks} 
                  onChange={e => updateData({ completionWeeks: e.target.value })} 
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white" 
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-3.5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">What type of service do you need?</h2>
              <p className="text-xs text-text-secondary mt-0.5">Select all that apply to your coursework requirements.</p>
            </div>
            <div className="grid gap-2">
              {SERVICES.map(srv => {
                const selected = data.services.includes(srv);
                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => toggleService(srv)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      selected 
                        ? 'border-charcoal bg-charcoal text-white shadow-sm' 
                        : 'border-gray-200 bg-white hover:border-gray-300 text-charcoal'
                    }`}
                  >
                    <span className="text-xs font-medium">{srv}</span>
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                      selected ? 'bg-gold border-gold text-white' : 'border-gray-300'
                    }`}>
                      {selected && <Check size={12} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Discussion Posts</h2>
              <p className="text-xs text-text-secondary mt-0.5">Participation and peer response requirements.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Is discussion participation required?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.discussionParticipation} setVal={v => updateData({ discussionParticipation: v })} />
              </div>
            </div>
            {data.discussionParticipation === 'Yes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 animate-in fade-in">
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Weekly submission required?</label>
                  <div className="flex gap-2"><YesNo val={data.discussionWeekly} setVal={v => updateData({ discussionWeekly: v })} /></div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Min words per post?</label>
                  <input type="number" placeholder="e.g. 250" value={data.discussionMinWords} onChange={e => updateData({ discussionMinWords: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Peer responses per post?</label>
                  <input type="number" placeholder="e.g. 2" value={data.discussionPeerResponses} onChange={e => updateData({ discussionPeerResponses: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Min words per peer reply?</label>
                  <input type="number" placeholder="e.g. 100" value={data.discussionPeerMinWords} onChange={e => updateData({ discussionPeerMinWords: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
              </div>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Exams & Tests</h2>
              <p className="text-xs text-text-secondary mt-0.5">Details on upcoming midterm/final exam coverage.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Are you required to take exams?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.examsRequired} setVal={v => updateData({ examsRequired: v })} />
              </div>
            </div>
            {data.examsRequired === 'Yes' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 animate-in fade-in">
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Remaining exams?</label>
                  <input type="number" placeholder="e.g. 2" value={data.examsRemaining} onChange={e => updateData({ examsRemaining: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Total exams?</label>
                  <input type="number" placeholder="e.g. 4" value={data.examsTotal} onChange={e => updateData({ examsTotal: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Avg questions?</label>
                  <input type="number" placeholder="e.g. 50" value={data.examsAvgQuestions} onChange={e => updateData({ examsAvgQuestions: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Proctored?</label>
                  <div className="flex gap-2"><YesNo val={data.examsProctored} setVal={v => updateData({ examsProctored: v })} /></div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Respondus Lockdown?</label>
                  <div className="flex gap-2"><YesNo val={data.examsRespondus} setVal={v => updateData({ examsRespondus: v })} /></div>
                </div>
              </div>
            )}
          </div>
        );

      case 7:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Quizzes</h2>
              <p className="text-xs text-text-secondary mt-0.5">Frequent quiz assessments and formats.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Are you required to take quizzes?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.quizzesRequired} setVal={v => updateData({ quizzesRequired: v })} />
              </div>
            </div>
            {data.quizzesRequired === 'Yes' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 animate-in fade-in">
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Remaining quizzes?</label>
                  <input type="number" placeholder="e.g. 5" value={data.quizzesRemaining} onChange={e => updateData({ quizzesRemaining: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Total quizzes?</label>
                  <input type="number" placeholder="e.g. 10" value={data.quizzesTotal} onChange={e => updateData({ quizzesTotal: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Avg questions?</label>
                  <input type="number" placeholder="e.g. 20" value={data.quizzesAvgQuestions} onChange={e => updateData({ quizzesAvgQuestions: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Proctored?</label>
                  <div className="flex gap-2"><YesNo val={data.quizzesProctored} setVal={v => updateData({ quizzesProctored: v })} /></div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Respondus Lockdown?</label>
                  <div className="flex gap-2"><YesNo val={data.quizzesRespondus} setVal={v => updateData({ quizzesRespondus: v })} /></div>
                </div>
              </div>
            )}
          </div>
        );

      case 8:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Simulations & Labs</h2>
              <p className="text-xs text-text-secondary mt-0.5">Interactive software exercises, game simulations, and labs.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Are simulation-based assignments included?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.simulationsIncluded} setVal={v => updateData({ simulationsIncluded: v })} />
              </div>
            </div>
            {data.simulationsIncluded === 'Yes' && (
              <div className="pt-2 animate-in fade-in max-w-sm">
                <label className="block text-xs font-semibold text-charcoal mb-1">Number of simulation assignments?</label>
                <input type="number" placeholder="e.g. 4" value={data.simulationsCount} onChange={e => updateData({ simulationsCount: e.target.value })} className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200" />
              </div>
            )}
          </div>
        );

      case 9:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Writing & Essays</h2>
              <p className="text-xs text-text-secondary mt-0.5">Term papers, case studies, and research essays.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Are you required to write essays/papers?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.essaysRequired} setVal={v => updateData({ essaysRequired: v })} />
              </div>
            </div>
            {data.essaysRequired === 'Yes' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 animate-in fade-in">
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Essays remaining?</label>
                  <input type="number" placeholder="e.g. 3" value={data.essaysRemaining} onChange={e => updateData({ essaysRemaining: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Total essay count?</label>
                  <input type="number" placeholder="e.g. 5" value={data.essaysTotal} onChange={e => updateData({ essaysTotal: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal mb-1">Avg word count?</label>
                  <input type="number" placeholder="e.g. 1500" value={data.essaysAvgWords} onChange={e => updateData({ essaysAvgWords: e.target.value })} className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" />
                </div>
              </div>
            )}
          </div>
        );

      case 10:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Group Activities</h2>
              <p className="text-xs text-text-secondary mt-0.5">Collaboration requirements with other students.</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Is participation in group-based activities required?</label>
              <div className="flex gap-2 max-w-xs">
                <YesNo val={data.groupActivities} setVal={v => updateData({ groupActivities: v })} />
              </div>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="space-y-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-charcoal">Final Details & Contact</h2>
              <p className="text-xs text-text-secondary mt-0.5">Provide contact info to receive your quote confirmation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-charcoal mb-1">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="student@university.edu" 
                  value={data.email} 
                  onChange={e => updateData({ email: e.target.value })} 
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-charcoal mb-1">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={data.phone} 
                  onChange={e => updateData({ phone: e.target.value })} 
                  className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200" 
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-[11px] font-semibold text-charcoal mb-1">Additional Notes</label>
                <textarea 
                  rows={2} 
                  placeholder="Any specific instructions, portal info, or syllabus details..." 
                  value={data.additionalInfo} 
                  onChange={e => updateData({ additionalInfo: e.target.value })} 
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200" 
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
      {/* Wizard Form Section */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-sm p-5 sm:p-6 flex flex-col justify-between min-h-[360px] sm:min-h-[380px]">
          {/* Top Progress */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <span className="text-[11px] font-bold text-gold tracking-widest uppercase">
                Step {step} of 11
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i + 1 === step 
                        ? 'bg-gold w-5' 
                        : i + 1 < step 
                        ? 'bg-charcoal w-2.5' 
                        : 'bg-gray-200 w-2.5'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Step Content */}
            <div className="py-1">
              {renderStepContent()}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-gray-100">
            <button 
              type="button"
              onClick={prevStep} 
              disabled={step === 1}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <ChevronLeft size={16} /> Back
            </button>
            
            {step < 11 ? (
              <button 
                type="button"
                onClick={nextStep} 
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-charcoal text-white hover:bg-charcoal/90 transition shadow-sm"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                type="button"
                className="flex items-center gap-1.5 px-6 py-2 rounded-xl text-xs font-bold bg-gold text-white hover:bg-gold/90 transition shadow-md hover:shadow-lg"
              >
                Submit Estimate <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Summary Section */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/80 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">
              Live Estimate
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Guaranteed Quote
            </span>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-3 border border-gray-100">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-2xl sm:text-3xl font-black text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
              <span className="text-[10px] font-bold text-text-secondary uppercase">USD Total</span>
            </div>
            <div className="flex items-baseline justify-between text-xs">
              <span className="font-semibold text-charcoal/70">
                ${weeklyPrice.toFixed(2)} / week
              </span>
              <span className="text-[10px] text-text-secondary">({data.durationWeeks || 0} wks)</span>
            </div>
          </div>

          {/* Quick Selection Summary */}
          <div className="space-y-1.5 text-xs">
            <SummaryRow label="Subject" value={data.subject || "Not selected"} />
            <SummaryRow label="Level" value={data.educationLevel || "Not selected"} />
            <div className="flex items-center justify-between py-1 border-b border-gray-100 text-xs">
              <span className="text-[11px] text-text-secondary">Services</span>
              <span className="text-[11px] font-semibold text-charcoal truncate max-w-[130px]" title={data.services.join(", ")}>
                {data.services.length > 0 ? `${data.services.length} selected` : "None"}
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="pt-1 grid grid-cols-3 gap-1 text-center border-t border-gray-100 text-[9px] text-text-secondary">
            <div className="flex flex-col items-center gap-0.5 p-1 rounded bg-[#F8F9FA]">
              <ShieldCheck size={14} className="text-charcoal" />
              <span>100% Private</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 p-1 rounded bg-[#F8F9FA]">
              <Clock size={14} className="text-charcoal" />
              <span>24/7 Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 p-1 rounded bg-[#F8F9FA]">
              <Award size={14} className="text-charcoal" />
              <span>Grade A/B</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function YesNo({ val, setVal }: { val: string; setVal: (v: string) => void }) {
  return (
    <>
      {['Yes', 'No'].map(opt => (
        <button 
          key={opt} 
          type="button"
          onClick={() => setVal(opt)} 
          className={`flex-1 py-1.5 px-3 rounded-lg border text-xs font-semibold transition-all ${
            val === opt 
              ? 'border-charcoal bg-charcoal text-white shadow-sm' 
              : 'border-gray-200 bg-white hover:border-gray-300 text-charcoal'
          }`}
        >
          {opt}
        </button>
      ))}
    </>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0 text-xs">
      <span className="text-[11px] text-text-secondary">{label}</span>
      <span className="text-[11px] font-semibold text-charcoal truncate max-w-[140px]" title={value}>
        {value}
      </span>
    </div>
  );
}
