import React, { useState } from 'react';
import { PageId } from '../../types';
import { SERVICE_PILLARS } from '../../data/civicData';
import { civicImages } from '../../assets/images';
import { 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Sparkles,
  Vote,
  Users,
  MessageSquare,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  // Scope Calculator State
  const [orgType, setOrgType] = useState<'metro' | 'regional' | 'statutory' | 'nfp' | 'candidate'>('metro');
  const [practiceFocus, setPracticeFocus] = useState<'consultation' | 'crisis' | 'behaviour' | 'elections'>('consultation');
  const [timelineUrgency, setTimelineUrgency] = useState<'immediate' | 'project' | 'annual'>('project');

  // Calculation estimates
  const getScopeDetails = () => {
    let reachEstimate = '45,000 – 120,000 Residents';
    let timeline = '6 – 8 Weeks';
    let keyDeliverable = 'IAP2-compliant YourSAy consultation portal & "You Said, We Did" council agenda digest';

    if (orgType === 'regional') {
      reachEstimate = '12,000 – 35,000 Ratepayers across rural wards and townships';
      keyDeliverable = 'Hybrid print rate notices, township workshops, and accessible mobile surveys';
    } else if (orgType === 'statutory') {
      reachEstimate = 'State-wide South Australian stakeholders & industry peak bodies';
      keyDeliverable = 'Statutory notification, ministerial briefing packs, and risk matrix';
    } else if (orgType === 'nfp') {
      reachEstimate = '20,000+ Community members, clients, and disability advocacy networks';
      keyDeliverable = 'Easy Read resources, WCAG 2.1 AA certified constituent feedback mechanism';
    } else if (orgType === 'candidate') {
      reachEstimate = '15,000 – 40,000 Ward voters & local residents';
      keyDeliverable = 'Candidate branding, core policy platform, digital hub, and door-knocking toolkit';
    }

    if (practiceFocus === 'crisis') {
      timeline = timelineUrgency === 'immediate' ? '24 – 48 Hours Rapid Mobilization' : '4 Weeks Chamber Protocol Review';
      keyDeliverable = '24/7 Livestream broadcast buffer, defamation shield moderation rules, and CEO holding statements';
    } else if (practiceFocus === 'behaviour') {
      timeline = '12 – 16 Weeks (Multi-Phase Campaign)';
      keyDeliverable = 'FOGO bin contamination reduction nudges, social reels, and weighbridge outcome reports';
    } else if (practiceFocus === 'elections') {
      timeline = '8 – 12 Weeks (Pre-Polling to Election Day)';
      keyDeliverable = 'Candidate positioning manifesto, ECSA-compliant ad campaign, and volunteer mobilization plan';
    }

    return { reachEstimate, timeline, keyDeliverable };
  };

  const scope = getScopeDetails();

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#003B5C] text-white py-14 lg:py-18 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <span>Our 4 Service Pillars</span>
              <span aria-hidden="true">·</span>
              <span>South Australian Expertise</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Specialist Public Sector & Political Communication Services.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Unlike traditional marketing agencies, we understand government accountability, community consultation frameworks, Caretaker conventions, and election communications across South Australia.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Service Pillars Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICE_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              id={pillar.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:border-[#0077B6] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Pillar Overview & Benefits */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#0077B6]">
                      PILLAR {pillar.letter}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">/</span>
                    <span className="text-xs text-slate-500 font-medium">Core Practice</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug font-heading">
                    {pillar.title}
                  </h2>

                  <p className="text-sm font-semibold text-[#0077B6]">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Measurable Benefits */}
                  <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-[#003B5C] uppercase tracking-wider block font-heading">
                      Client & Community Benefits:
                    </span>
                    <ul className="space-y-1.5">
                      {pillar.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-0.5">Statutory & Regulatory Alignment:</span>
                    <span>{pillar.statutoryFocus}</span>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#003B5C] block mb-1">Demonstrated Benchmark:</span>
                    <p className="text-xs text-slate-600 italic">"{pillar.deliveredMetric}"</p>
                  </div>
                </div>

                {/* Right: Specific Services & Deliverables */}
                <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-heading">
                      Specialized Services & Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {pillar.services.map((srv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                          <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-heading">
                      Who Engages Pillar {pillar.letter}:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {pillar.idealFor.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenAuditModal(pillar.title)}
                      className="px-5 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
                    >
                      Book Pillar {pillar.letter} Consultation
                    </button>
                    {pillar.id === 'election-communications' && (
                      <button
                        onClick={() => onNavigate('elections')}
                        className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-[#003B5C] text-xs font-bold rounded-lg border border-[#D4A017] transition-colors flex items-center gap-1.5"
                      >
                        <Vote className="w-3.5 h-3.5 text-[#D4A017]" />
                        <span>View Dedicated Election Hub</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Scope Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#003B5C] via-[#004D73] to-[#002840] rounded-2xl text-white p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope Planning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
              SA Civic & Campaign Scope Estimator
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Select your organisation type, primary governance or campaign challenge, and timeline to preview constituent reach, statutory milestones, and advisory architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Org Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                  1. Organisation or Campaign Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'metro', label: 'Metro Council' },
                    { id: 'regional', label: 'Regional LGA' },
                    { id: 'statutory', label: 'Government Agency' },
                    { id: 'nfp', label: 'Not-For-Profit / NFP' },
                    { id: 'candidate', label: 'Election Candidate' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setOrgType(item.id as any)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all border text-center font-heading ${
                        orgType === item.id
                          ? 'bg-[#D4A017] text-slate-950 border-[#D4A017] shadow'
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
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                  2. Primary Strategic Challenge
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'consultation', label: 'Community Engagement (YourSAy)' },
                    { id: 'crisis', label: 'Chamber PR & Crisis Mitigation' },
                    { id: 'behaviour', label: 'Social Marketing & Waste Habits' },
                    { id: 'elections', label: 'Election & Candidate Visibility' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPracticeFocus(item.id as any)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-bold transition-all border text-left font-heading ${
                        practiceFocus === item.id
                          ? 'bg-[#D4A017] text-slate-950 border-[#D4A017] shadow'
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
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-heading">
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
                          ? 'bg-[#D4A017] text-slate-950 border-[#D4A017] font-bold'
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
                <span className="text-xs font-bold text-[#D4A017] uppercase tracking-wider font-heading">
                  Estimated Engagement Scope
                </span>
                <span className="text-[11px] text-slate-300 font-mono">SA Model</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">Projected Audience Reach:</span>
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
                  <span className="text-xs text-slate-400 block mb-1">Core Recommended Deliverable:</span>
                  <p className="text-xs text-slate-200 leading-relaxed bg-black/20 p-3 rounded-lg border border-white/10">
                    {scope.keyDeliverable}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAuditModal('Scope Estimator Booking')}
                  className="w-full py-3 bg-[#D4A017] hover:bg-[#B88A12] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors text-center"
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
            <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider font-heading">
              Statutory Decorum & Chamber Safety
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight font-heading">
              Prepared for the Realities of Local Council Chambers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Under Section 90 and 91 of the SA Local Government Act 1999, council meetings must remain open to the public unless strictly defined confidentiality grounds are triggered. When controversial matters appear on the public agenda, we ensure the Mayor, Chief Executive Officer, and Elected Members are equipped with calm, legally tested protocols.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenAuditModal('Chamber Incident Protocol')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0077B6] hover:text-[#005B8C]"
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
