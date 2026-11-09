import React, { useState } from 'react';
import { PageId } from '../../types';
import { civicImages } from '../../assets/images';
import { TIMELINE_PHASES, CORE_VALUES } from '../../data/civicData';
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  CheckCircle, 
  MapPin, 
  Calendar,
  FileCheck2,
  ExternalLink,
  Target,
  HeartHandshake,
  Compass
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#003B5C] text-white py-14 lg:py-18 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <span>About Adelaide CivicComms Advisory</span>
              <span aria-hidden="true">·</span>
              <span>Leadership & Public Affairs Pedigree</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              18+ Years of Parliamentary Communications Discipline, Built for South Australia.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Combining high-stakes government public relations, ministerial press gallery experience, and community consultation rigor to help civic leaders communicate with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Statement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#F7F9FB] p-2 border border-slate-200 shadow-xs shrink-0 flex items-center justify-center">
            <img
              src={civicImages.logo}
              alt="Adelaide CivicComms Advisory Official Brand Mark"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0077B6] uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Our Foundational Mission</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003B5C] font-heading">
              "To help public sector, community and civic organisations communicate more effectively, build trust and create meaningful engagement."
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We reject shallow political spin and generic lifestyle marketing in favour of evidence-based consultation, statutory compliance, and democratic accountability.
            </p>
          </div>
          <button
            onClick={() => onOpenAuditModal('General Consultation')}
            className="shrink-0 px-6 py-3 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Meet With Principal Advisor
          </button>
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
                alt="Principal Advisor & Founder of Adelaide CivicComms Advisory in Adelaide executive office overlooking parklands"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-lg font-bold block font-heading">Victoria M. Stirling FAICD</span>
                <span className="text-xs text-[#D4A017] font-semibold">
                  Principal & Founder · Adelaide CivicComms Advisory
                </span>
                <span className="text-[11px] text-slate-300 block mt-1">
                  18+ Years Parliamentary PR, Ministerial Press Secretary & Civic Engagement Director
                </span>
              </div>
            </div>

            {/* Founder Bio Copy */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0077B6] uppercase tracking-wider">
                  <span>Founder Story</span>
                  <span aria-hidden="true">·</span>
                  <span>Public Affairs Leadership</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug font-heading">
                  High-Stakes Parliamentary Experience Meets Modern Digital Inclusivity
                </h2>

                <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed font-normal">
                  <p>
                    Adelaide CivicComms Advisory was established by a senior public administration and communications specialist with over <strong>18 years of direct experience in parliamentary public relations, ministerial press offices, and state government communications</strong>.
                  </p>
                  <p>
                    Having guided Cabinet Ministers, Members of Parliament, and departmental heads through contentious infrastructure rollouts, public inquiries, and royal commissions, Victoria recognized that South Australia's civic sector — from local councils to community not-for-profits and independent election candidates — required communications counsel grounded in real institutional reality.
                  </p>
                  <p>
                    Unlike traditional creative agencies that treat civic governance like retail consumer marketing, we understand the <strong>South Australian Local Government Act 1999</strong>, statutory Caretaker restrictions, State Records Act archival duties, the Planning, Development and Infrastructure Act Community Engagement Charter, and strict Freedom of Information (FOI) transparency.
                  </p>
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block font-heading">18+ Years</span>
                  <span className="text-slate-500 text-[11px]">Parliamentary & Government Public Relations</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block font-heading">90+ Projects</span>
                  <span className="text-slate-500 text-[11px]">Delivered Across SA Councils & NFPs</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block font-heading">Zero Breaches</span>
                  <span className="text-slate-500 text-[11px]">Electoral Caretaker Protocol Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (5 Pillars matching brief) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-1 font-heading">
            Ethical Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
            Our Core Values
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Five principles that govern every consultation campaign, crisis protocol, and candidate engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={val.title}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#D4A017] block">
                  0{idx + 1}. VALUE
                </span>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Experience Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-1 font-heading">
            Career Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
            Three Phases of Public Affairs Leadership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Select a career phase to explore key milestones in state communications, digital governance, and advisory practice.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-3xl mx-auto mb-8 p-1.5 bg-slate-200/70 rounded-xl">
          {TIMELINE_PHASES.map((phase, idx) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg text-xs font-bold transition-all text-center whitespace-nowrap font-heading ${
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
                  <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider font-heading">
                    {current.phase} · {current.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading">
                    {current.title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium self-start sm:self-auto">
                  {current.tag}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {current.summary}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-heading">
                  Key Legislative & Strategic Milestones:
                </span>
                <ul className="space-y-2.5">
                  {current.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-normal">
                      <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })()}
      </section>

      {/* LGA Panel Procurement Pre-Qualifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#003B5C] uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4 text-[#0077B6]" />
                <span>Statutory Procurement Ready</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Pre-Qualified for South Australian Local Government Procurement
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Council Chief Executive Officers, Directors of Corporate Services, and Procurement Leads can engage Adelaide CivicComms Advisory directly or via established standing offer panels. We meet all South Australian public sector probity, professional indemnity ($20M), and public liability requirements.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenAuditModal('Standing Offer Briefing')}
                className="w-full px-5 py-3 bg-[#003B5C] hover:bg-[#002840] text-white font-bold text-xs rounded-lg shadow transition-colors text-center"
              >
                Request Standing Offer Rates
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-300 rounded-lg transition-colors text-center"
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
