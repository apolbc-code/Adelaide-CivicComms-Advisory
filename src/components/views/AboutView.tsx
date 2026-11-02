import React, { useState } from 'react';
import { PageId } from '../../types';
import { civicImages } from '../../assets/images';
import { TIMELINE_PHASES, GOVERNANCE_PILLARS } from '../../data/civicData';
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  CheckCircle, 
  MapPin, 
  Calendar,
  FileCheck2,
  ExternalLink
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#1B365D] text-white py-14 lg:py-18 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <span>About Adelaide CivicComms Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Leadership & Pedigree</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              18+ Years of Parliamentary Communications Discipline, Built for Adelaide.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We bring the unyielding rigor, media law adherence, and rapid-response discipline of federal and state parliamentary communications into South Australia’s local government sector.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile & Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Founder Image */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[380px] lg:min-h-full">
              <img
                src={civicImages.founder}
                alt="Principal Advisor & Founder of Adelaide CivicComms Advisory in Adelaide executive office"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-lg font-bold block">Victoria M. Stirling FAICD</span>
                <span className="text-xs text-teal-300">
                  Principal & Founder · Adelaide CivicComms Advisory
                </span>
                <span className="text-[11px] text-slate-300 block mt-1">
                  Former Director of Public Affairs & Ministerial Press Secretary
                </span>
              </div>
            </div>

            {/* Founder Bio Copy */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                  <span>Founder & Principal Counsel</span>
                  <span aria-hidden="true">·</span>
                  <span>Parliamentary Pedigree</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  "Democracy does not fail because of disagreement. It fails when public institutions lose the ability to explain themselves with dignity."
                </h2>

                <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Founded by a senior public administration and communications specialist with over <strong>18 years of high-stakes Parliamentary PR experience</strong> (serving Member of Parliament equivalents, managing ministerial press offices, and directing official government web and constituent social platforms).
                  </p>
                  <p>
                    Having advised Cabinet Ministers through contentious infrastructure rollouts, Royal Commission inquiries, and high-pressure media scrums, Victoria Stirling established Adelaide CivicComms Advisory to address a growing crisis in South Australian public administration: the erosion of trust between local councils and their constituents in the digital age.
                  </p>
                  <p>
                    Unlike generic advertising agencies who treat local government like a consumer lifestyle brand, our advisory operates with statutory precision. We understand the South Australian Local Government Act 1999, the Planning, Development and Infrastructure Act 2016 Community Engagement Charter, State Records Act mandates, and strict Caretaker Conventions.
                  </p>
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block">18+ Years</span>
                  <span className="text-slate-500">Parliamentary & Ministerial Press Experience</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">90+ Engagements</span>
                  <span className="text-slate-500">Delivered Across SA LGAs & NFPs</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Zero Breaches</span>
                  <span className="text-slate-500">Caretaker & Electoral Protocol Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Experience Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
            Career Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            The Three Phases of Civic Discipline
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select a career phase to explore the legislative crises, digital innovations, and South Australian advisory milestones.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-3xl mx-auto mb-8 p-1.5 bg-slate-200/70 rounded-xl">
          {TIMELINE_PHASES.map((phase, idx) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all text-center whitespace-nowrap ${
                activePhaseIndex === idx
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="block font-bold">{phase.phase} ({phase.period})</span>
              <span className="text-[11px] font-normal text-slate-500">{phase.tag}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Card */}
        {(() => {
          const current = TIMELINE_PHASES[activePhaseIndex];
          return (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    {current.phase} · {current.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {current.title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium self-start sm:self-auto">
                  {current.tag}
                </span>
              </div>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {current.summary}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Key Legislative & Strategic Milestones:
                </span>
                <ul className="space-y-2.5">
                  {current.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })()}
      </section>

      {/* The 4 Governance Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
            Our Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            The 4 Governance Pillars
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Every engagement, social marketing strategy, and chamber protocol is underpinned by four unshakeable constitutional tenets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOVERNANCE_PILLARS.map((pillar, i) => (
            <div 
              key={pillar.pillar}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-teal-600 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-teal-700 block">
                  PILLAR 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {pillar.pillar}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {pillar.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Pre-Qualifications & Panel Registration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-teal-700" />
                <span>Statutory Procurement Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Pre-Qualified for South Australian Local Government Procurement
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Council Chief Executive Officers and Procurement Directors can engage Adelaide CivicComms Advisory directly or via established standing offer panels. We meet all South Australian public sector probity, professional indemnity ($20M), and public liability requirements.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenAuditModal}
                className="w-full px-5 py-3 bg-[#1B365D] hover:bg-[#12243E] text-white font-semibold text-xs rounded-lg shadow transition-colors text-center"
              >
                Request Standing Offer Rates
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs border border-slate-300 rounded-lg transition-colors text-center"
              >
                Contact Victoria Square Office
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
