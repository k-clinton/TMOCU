"use client";

import { useState, useMemo } from "react";
import { ChevronRight, ChevronLeft, Check, UploadCloud } from "lucide-react";

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
  subject: "", educationLevel: "", selfPaced: "", completionWeeks: "", durationWeeks: "0", courseStarted: "",
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
  "Take my exams/quizzes/tests", "Complete my laboratory exercises/games/simulations?"
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

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  // --------------------------------------------------------------------------
  // TODO: PLACEHOLDERS FOR PRICING LOGIC
  // Insert your actual pricing math in these variables.
  // --------------------------------------------------------------------------
  const { totalPrice, weeklyPrice } = useMemo(() => {
    let calculatedTotal = 0;
    
    // Example logic to replace:
    // if (data.subject === "Engineering") calculatedTotal += 50;
    // if (data.educationLevel === "Master's Degree") calculatedTotal *= 1.5;
    // if (data.examsRequired === "Yes") calculatedTotal += (Number(data.examsRemaining) * 40);
    // ...

    return { 
      totalPrice: calculatedTotal, 
      weeklyPrice: data.durationWeeks ? (calculatedTotal / (Number(data.durationWeeks) || 1)) : 0 
    };
  }, [data]);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">What subject do you need help with?</h2>
            <select 
              className="w-full p-4 rounded-xl border border-gray-200 bg-white"
              value={data.subject}
              onChange={e => updateData({ subject: e.target.value })}
            >
              <option value="" disabled>Select one...</option>
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Educational level of your course</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_LEVELS.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => updateData({ educationLevel: lvl })}
                  className={`p-4 rounded-xl border text-left transition-all ${data.educationLevel === lvl ? 'border-charcoal bg-charcoal text-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Course Timeline</h2>
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-charcoal">Is the course self-paced? (e.g. StraighterLine)</label>
              <div className="flex gap-4">
                {['Yes', 'No'].map(opt => (
                  <button key={opt} onClick={() => updateData({ selfPaced: opt })} className={`flex-1 p-3 rounded-xl border transition-all ${data.selfPaced === opt ? 'border-charcoal bg-charcoal text-white' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>{opt}</button>
                ))}
              </div>
              
              <label className="block text-sm font-semibold text-charcoal pt-4">Duration of your course in weeks</label>
              <input type="range" min="0" max="20" value={data.durationWeeks} onChange={e => updateData({ durationWeeks: e.target.value })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-charcoal" />
              <div className="text-right font-bold text-charcoal">{data.durationWeeks} Weeks</div>

              <label className="block text-sm font-semibold text-charcoal pt-4">Desired completion date in weeks</label>
              <input type="number" placeholder="E.g. 8" value={data.completionWeeks} onChange={e => updateData({ completionWeeks: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200 bg-white" />

              <label className="block text-sm font-semibold text-charcoal pt-4">Has your course started?</label>
              <div className="flex gap-4">
                {['Yes', 'No'].map(opt => (
                  <button key={opt} onClick={() => updateData({ courseStarted: opt })} className={`flex-1 p-3 rounded-xl border transition-all ${data.courseStarted === opt ? 'border-charcoal bg-charcoal text-white' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>{opt}</button>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">What type of service do you need?</h2>
            <div className="grid gap-3">
              {SERVICES.map(srv => (
                <button
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${data.services.includes(srv) ? 'border-charcoal bg-charcoal text-white' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                >
                  <span>{srv}</span>
                  {data.services.includes(srv) && <Check size={18} />}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Discussion Posts</h2>
            <label className="block text-sm font-semibold text-charcoal">Is participation in discussion posts a requirement?</label>
            <div className="flex gap-4 mb-4">
              <YesNo val={data.discussionParticipation} setVal={v => updateData({discussionParticipation: v})} />
            </div>
            {data.discussionParticipation === 'Yes' && (
              <div className="space-y-4 animate-in fade-in pt-2">
                <label className="block text-sm font-semibold text-charcoal">Is weekly submission required?</label>
                <div className="flex gap-4"><YesNo val={data.discussionWeekly} setVal={v => updateData({discussionWeekly: v})} /></div>
                
                <label className="block text-sm font-semibold text-charcoal">Min required number of words for each post?</label>
                <input type="number" value={data.discussionMinWords} onChange={e => updateData({ discussionMinWords: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">How many peer responses required for each discussion?</label>
                <input type="number" value={data.discussionPeerResponses} onChange={e => updateData({ discussionPeerResponses: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />

                <label className="block text-sm font-semibold text-charcoal">Min word count for one peer response?</label>
                <input type="number" value={data.discussionPeerMinWords} onChange={e => updateData({ discussionPeerMinWords: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
              </div>
            )}
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Exams</h2>
            <label className="block text-sm font-semibold text-charcoal">Are you required to take exams?</label>
            <div className="flex gap-4 mb-4"><YesNo val={data.examsRequired} setVal={v => updateData({examsRequired: v})} /></div>
            
            {data.examsRequired === 'Yes' && (
              <div className="space-y-4 animate-in fade-in pt-2">
                <label className="block text-sm font-semibold text-charcoal">Remaining number of exams?</label>
                <input type="number" value={data.examsRemaining} onChange={e => updateData({ examsRemaining: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Total number of exams in course?</label>
                <input type="number" value={data.examsTotal} onChange={e => updateData({ examsTotal: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Average number of questions per exam?</label>
                <input type="number" value={data.examsAvgQuestions} onChange={e => updateData({ examsAvgQuestions: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />

                <label className="block text-sm font-semibold text-charcoal">Are exams proctored?</label>
                <div className="flex gap-4"><YesNo val={data.examsProctored} setVal={v => updateData({examsProctored: v})} /></div>

                <label className="block text-sm font-semibold text-charcoal">Required to use Respondus Lockdown Browser?</label>
                <div className="flex gap-4"><YesNo val={data.examsRespondus} setVal={v => updateData({examsRespondus: v})} /></div>
              </div>
            )}
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Quizzes</h2>
            <label className="block text-sm font-semibold text-charcoal">Are you required to take quizzes?</label>
            <div className="flex gap-4 mb-4"><YesNo val={data.quizzesRequired} setVal={v => updateData({quizzesRequired: v})} /></div>
            
            {data.quizzesRequired === 'Yes' && (
              <div className="space-y-4 animate-in fade-in pt-2">
                <label className="block text-sm font-semibold text-charcoal">Remaining number of quizzes?</label>
                <input type="number" value={data.quizzesRemaining} onChange={e => updateData({ quizzesRemaining: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Total quizzes to complete?</label>
                <input type="number" value={data.quizzesTotal} onChange={e => updateData({ quizzesTotal: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Average number of questions per quiz?</label>
                <input type="number" value={data.quizzesAvgQuestions} onChange={e => updateData({ quizzesAvgQuestions: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />

                <label className="block text-sm font-semibold text-charcoal">Are quizzes proctored?</label>
                <div className="flex gap-4"><YesNo val={data.quizzesProctored} setVal={v => updateData({quizzesProctored: v})} /></div>

                <label className="block text-sm font-semibold text-charcoal">Required to use Respondus Lockdown Browser?</label>
                <div className="flex gap-4"><YesNo val={data.quizzesRespondus} setVal={v => updateData({quizzesRespondus: v})} /></div>
              </div>
            )}
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Simulations & Lab Exercises</h2>
            <label className="block text-sm font-semibold text-charcoal">Are there simulation-based assignments included?</label>
            <div className="flex gap-4 mb-4"><YesNo val={data.simulationsIncluded} setVal={v => updateData({simulationsIncluded: v})} /></div>
            
            {data.simulationsIncluded === 'Yes' && (
              <div className="space-y-4 animate-in fade-in pt-2">
                <label className="block text-sm font-semibold text-charcoal">How many simulation-based assignments required?</label>
                <input type="number" value={data.simulationsCount} onChange={e => updateData({ simulationsCount: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
              </div>
            )}
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Writing Assignments / Essays</h2>
            <label className="block text-sm font-semibold text-charcoal">Are you required to complete writing assignments/essays?</label>
            <div className="flex gap-4 mb-4"><YesNo val={data.essaysRequired} setVal={v => updateData({essaysRequired: v})} /></div>
            
            {data.essaysRequired === 'Yes' && (
              <div className="space-y-4 animate-in fade-in pt-2">
                <label className="block text-sm font-semibold text-charcoal">How many writing assignments left?</label>
                <input type="number" value={data.essaysRemaining} onChange={e => updateData({ essaysRemaining: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Total essay assignments required?</label>
                <input type="number" value={data.essaysTotal} onChange={e => updateData({ essaysTotal: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
                
                <label className="block text-sm font-semibold text-charcoal">Average word count for essay assignments?</label>
                <input type="number" value={data.essaysAvgWords} onChange={e => updateData({ essaysAvgWords: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
              </div>
            )}
          </div>
        );
      case 10:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Group Activities</h2>
            <label className="block text-sm font-semibold text-charcoal">Is participation in group-based activities a requirement?</label>
            <div className="flex gap-4"><YesNo val={data.groupActivities} setVal={v => updateData({groupActivities: v})} /></div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-6 animate-in fade-in">
            <h2 className="text-2xl font-bold text-charcoal">Final Details</h2>
            
            <label className="block text-sm font-semibold text-charcoal">Additional Information</label>
            <textarea placeholder="Provide any additional relevant information..." value={data.additionalInfo} onChange={e => updateData({ additionalInfo: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200 min-h-[100px]" />
            
            <label className="block text-sm font-semibold text-charcoal">Upload Course Syllabus</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition cursor-pointer">
              <UploadCloud size={32} className="mb-2" />
              <p className="text-sm">Drop files here or click to browse</p>
              <p className="text-xs mt-1 opacity-70">Max size: 30MB</p>
            </div>

            <label className="block text-sm font-semibold text-charcoal pt-4">Email Address</label>
            <input type="email" value={data.email} onChange={e => updateData({ email: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
            
            <label className="block text-sm font-semibold text-charcoal">Phone Number</label>
            <input type="tel" value={data.phone} onChange={e => updateData({ phone: e.target.value })} className="w-full p-4 rounded-xl border border-gray-200" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Wizard Content */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm font-bold text-gold tracking-widest uppercase">
              Step {step} of 11
            </div>
            <div className="flex gap-1">
              {Array.from({length: 11}).map((_, i) => (
                <div key={i} className={`h-1.5 w-4 rounded-full transition-all ${i + 1 === step ? 'bg-gold w-8' : i + 1 < step ? 'bg-charcoal' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
          
          <div className="min-h-[400px]">
            {renderStepContent()}
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <button 
              onClick={prevStep} 
              disabled={step === 1}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-charcoal hover:bg-gray-100 disabled:opacity-30 transition"
            >
              <ChevronLeft size={18} /> Back
            </button>
            
            {step < 11 ? (
              <button 
                onClick={nextStep} 
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-charcoal text-white hover:bg-charcoal/90 transition shadow-md"
              >
                Next <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-gold text-white hover:bg-gold/90 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Submit Request <Check size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Summary */}
      <div className="lg:col-span-4 relative">
        <div className="sticky top-32 bg-[#F8F9FA] rounded-[32px] border border-[#EAECEF] p-8 shadow-sm">
          <span className="overline-tag mb-4 inline-block">ESTIMATED QUOTE</span>
          
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-black text-charcoal">${totalPrice.toFixed(2)}</span>
            <span className="text-xs font-bold text-text-secondary mb-1 uppercase tracking-wider">USD Total</span>
          </div>
          
          <div className="flex items-end gap-2 mb-8">
            <span className="text-2xl font-bold text-charcoal/70">${weeklyPrice.toFixed(2)}</span>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">USD / Week</span>
          </div>

          <div className="space-y-3 mb-6">
            <SummaryRow label="Subject" value={data.subject || "—"} />
            <SummaryRow label="Level" value={data.educationLevel || "—"} />
            <SummaryRow label="Duration" value={data.durationWeeks ? `${data.durationWeeks} Weeks` : "—"} />
            <div className="py-2 border-b border-gray-200">
              <span className="block text-xs text-text-secondary font-medium mb-1">Services Selected:</span>
              <span className="block text-sm font-bold text-charcoal truncate">
                {data.services.length > 0 ? data.services.join(', ') : "None"}
              </span>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-xs leading-relaxed text-yellow-800">
            <strong>Configuration Needed:</strong> The final price calculation logic is pending your mathematical formula. The variables are ready in <code>PriceCalculatorClient.tsx</code>.
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
          onClick={() => setVal(opt)} 
          className={`flex-1 p-3 rounded-xl border transition-all ${val === opt ? 'border-charcoal bg-charcoal text-white shadow-md' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
        >
          {opt}
        </button>
      ))}
    </>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
      <span className="text-xs text-text-secondary font-medium">{label}</span>
      <span className="text-sm font-bold text-charcoal truncate max-w-[150px]" title={value}>{value}</span>
    </div>
  );
}
