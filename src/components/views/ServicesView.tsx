import React, { useState } from 'react';
import { PageId } from '../../types';
import { CORE_SERVICES } from '../../data/civicData';
import { civicImages } from '../../assets/images';
import { 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  FileText,
  Sliders,
  Sparkles
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  // Scope Calculator State
  const [orgType, setOrgType] = useState<'metro' | 'regional' | 'statutory' | 'nfp'>('metro');
  const [practiceFocus, setPracticeFocus] = useState<'consultation' | 'crisis' | 'behaviour' | 'caretaker'>('consultation');
  const [timelineUrgency, setTimelineUrgency] = useState<'immediate' | 'project' | 'annual'>('project');

  // Calculation estimates
  const getScopeDetails = () => {
    let reachEstimate = '45,000 – 120,000 Residents';
    let timeline = '6 – 8 Weeks';
    let keyDeliverable = 'IAP2-compliant YourSAy consultation portal & "You Said, We Did" council agenda digest';

    if (orgType === 'regional') {
      reachEstimate = '12,000 – 35,000 Ratepayers across townships & rural wards';
      keyDeliverable = 'Hybrid print rate notices, township town halls, and mobile-friendly survey portals';
    } else if (orgType === 'statutory') {
      reachEstimate = 'State-wide South Australian stakeholders & industry peak bodies';
      keyDeliverable = 'Statutory notification, ministerial briefing packs, and risk matrix';
    } else if (orgType === 'nfp') {
      reachEstimate = '20,000+ Community members, clients, and disability advocacy networks';
      keyDeliverable = 'Easy Read resources, WCAG 2.1 AA certified constituent feedback mechanism';
    }

    if (practiceFocus === 'crisis') {
      timeline = timelineUrgency === 'immediate' ? '24 – 48 Hours Rapid Mobilization' : '4 Weeks Chamber Protocol Review';
      keyDeliverable = '24/7 Livestream broadcast buffer, defamation shield moderation rules, and CEO holding statements';
    } else if (practiceFocus === 'behaviour') {
      timeline = '12 – 16 Weeks (Multi-Phase Campaign)';
      keyDeliverable = 'FOGO bin contamination reduction nudges, social reels, and weighbridge outcome reports';
    } else if (practiceFocus === 'caretaker') {
      timeline = '8 Weeks Pre-Electoral Period';
      keyDeliverable = 'LGA SA Caretaker compliance audit, social media freeze rules, and candidate neutrality desk';
    }

    return { reachEstimate, timeline, keyDeliverable };
  };

  const scope = getScopeDetails();

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#1B365D] text-white py-14 lg:py-18 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <span>Practice Areas & Specialized Solutions</span>
              <span aria-hidden="true">·</span>
              <span>Local Government Expertise</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Advisory Services Aligned to South Australian Statutory Realities.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              From deliberative urban infill consultations to high-stakes council chamber crisis protocols, our practice areas insulate institutions and elevate constituent trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {CORE_SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:border-teal-500 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Summary & Statutory Reference */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-teal-700">
                      SERVICE {service.number}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">/</span>
                    <span className="text-xs text-slate-500 font-medium">SA LGA Specialty</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-teal-800">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-0.5">Governing Statutory Framework:</span>
                    <span>{service.statutoryFramework}</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-teal-900 block mb-1">Demonstrated Benchmark:</span>
                    <p className="text-xs text-slate-600 italic">"{service.metricsDelivered}"</p>
                  </div>
                </div>

                {/* Right: Deliverables & Suitable Councils */}
                <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Core Institutional Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Typically Engaged By:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={onOpenAuditModal}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      Brief Advisor on Service {service.number}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Council Scope Estimator / Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#1B365D] to-[#12243E] rounded-2xl text-white p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Interactive Planning Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              SA Council Engagement Scope Estimator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Select your organisation type, primary governance challenge, and delivery horizon to preview estimated constituent reach, statutory milestones, and project architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Org Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  1. Organization Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'metro', label: 'Metro Council' },
                    { id: 'regional', label: 'Regional LGA' },
                    { id: 'statutory', label: 'Statutory Body' },
                    { id: 'nfp', label: 'Advocacy NFP' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setOrgType(item.id as any)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold transition-all border text-center ${
                        orgType === item.id
                          ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold shadow'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Practice Focus Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  2. Primary Strategic Challenge
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'consultation', label: 'Community Consultation (YourSAy)' },
                    { id: 'crisis', label: 'Chamber Crisis & Livestream Shield' },
                    { id: 'behaviour', label: 'Waste / Social Behaviour Change' },
                    { id: 'caretaker', label: 'Caretaker & Election Compliance' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPracticeFocus(item.id as any)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold transition-all border text-left ${
                        practiceFocus === item.id
                          ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold shadow'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  3. Engagement Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'immediate', label: 'Immediate (<72h)' },
                    { id: 'project', label: 'Project (4-8 Wks)' },
                    { id: 'annual', label: 'Annual Retainer' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTimelineUrgency(item.id as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all border text-center ${
                        timelineUrgency === item.id
                          ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-white/10 rounded-xl border border-white/15 p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Estimated Engagement Blueprint
                </span>
                <span className="text-[11px] text-slate-300 font-mono">SA LGA Model</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">Projected Constituent Reach:</span>
                  <p className="text-base font-bold text-white font-mono">
                    {scope.reachEstimate}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">Estimated Advisory Timeframe:</span>
                  <p className="text-base font-bold text-teal-300 font-mono">
                    {scope.timeline}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">Recommended Statutory Output:</span>
                  <p className="text-xs text-slate-200 leading-relaxed bg-black/20 p-3 rounded-lg border border-white/10">
                    {scope.keyDeliverable}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors text-center"
                >
                  Schedule Scope Briefing
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Includes preliminary probity review & council panel quote reference
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council Chamber Visual Anchor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative bg-slate-900 min-h-[300px]">
            <img
              src={civicImages.chamber}
              alt="South Australian local government council chamber with Australian and SA state flags"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Statutory Decorum & Chamber Safety
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              Prepared for the Reality of Modern Public Council Meetings
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Under Section 90 and 91 of the SA Local Government Act 1999, council meetings must remain open to the public unless strictly defined confidentiality grounds are triggered. When controversial matters appear on the public agenda, we ensure the Mayor, Chief Executive Officer, and Elected Members are equipped with calm, legally tested protocols.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                <span>Request Chamber Incident Escalation Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
