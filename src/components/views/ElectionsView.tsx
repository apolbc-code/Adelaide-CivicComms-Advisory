import React from 'react';
import { PageId } from '../../types';
import { ELECTION_SECTIONS } from '../../data/civicData';
import { civicImages } from '../../assets/images';
import { 
  Vote, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Video, 
  MessageSquare, 
  Megaphone, 
  Award,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ElectionsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const ElectionsView: React.FC<ElectionsViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#003B5C] text-white py-14 lg:py-20 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <Vote className="w-4 h-4 text-[#D4A017]" />
              <span>Specialist Political & Civic Marketing</span>
              <span aria-hidden="true">·</span>
              <span>South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Helping Community Leaders Connect With Voters
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Strategic communication, digital engagement and campaign visibility solutions for South Australian candidates, community independents, and civic leaders.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenAuditModal('Election Communications & Candidate Strategy')}
                className="px-6 py-3.5 bg-[#0077B6] hover:bg-[#005B8C] text-white font-bold text-sm rounded-lg shadow-md transition-all text-center whitespace-nowrap"
              >
                Book a Campaign Strategy Session
              </button>
              <button
                onClick={() => onNavigate('case-studies')}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors text-center whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span>Candidate Case Study (#04)</span>
                <ArrowRight className="w-4 h-4 text-[#D4A017]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Candidate Engagement Feature Anchor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative bg-slate-900 min-h-[360px] lg:min-h-[420px]">
            <img
              src={civicImages.candidateEngagement}
              alt="South Australian community candidate and civic leader in dialogue with diverse local residents at an open-air parkland forum"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
              <span className="font-bold block font-heading">Adelaide City & Suburban Ward Engagement</span>
              <span className="text-slate-300 text-[11px]">Connecting community independents with voters through authentic grassroots dialogue</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider font-heading">
              Ethical & Strategic Positioning
            </span>
            <h2 className="text-2xl font-bold text-slate-900 leading-snug font-heading">
              Stand Out With Credibility, Not Partisan Spin
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Local government elections demand hyper-local empathy, clear policy priorities, and disciplined message delivery. We help mayoral hopefuls, council candidates, and incumbent councillors build high-visibility campaigns compliant with the <strong>Local Government (Elections) Act 1999 (SA)</strong> and ECSA authorisations.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>Non-partisan, community-focused candidate branding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>Watertight electoral authorization and donation disclosure advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>Zero negative campaigning — 100% positive policy advocacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Core Election Communications Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-1 font-heading">
            Our 5-Pillar Campaign Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
            Full-Spectrum Campaign Communications Architecture
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-normal">
            Everything a candidate needs to build momentum, engage community members, and succeed on ballot day.
          </p>
        </div>

        <div className="space-y-8">
          {ELECTION_SECTIONS.map((sec) => (
            <div 
              key={sec.number}
              className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs hover:border-[#0077B6] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono text-xs font-bold text-[#D4A017] block">
                  SECTION {sec.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {sec.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sec.description}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3 lg:pl-6 lg:border-l lg:border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-heading">
                  Key Strategic Deliverables:
                </span>
                <ul className="space-y-2">
                  {sec.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <CheckCircle className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Strategy Session CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#003B5C] rounded-2xl text-white p-8 sm:p-12 shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Confidential Campaign Briefing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to Connect With Your Community and Win Voter Trust?
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Schedule a confidential 30-minute campaign strategy session with our Principal Public Affairs Advisor. We’ll review your ward dynamics, core policy priorities, and establish an initial campaign communication roadmap.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onOpenAuditModal('Election Communications & Candidate Strategy')}
              className="px-6 py-3.5 bg-[#D4A017] hover:bg-[#B88A12] text-slate-950 font-bold text-sm rounded-lg shadow transition-colors text-center whitespace-nowrap"
            >
              Book a Campaign Strategy Session
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors text-center whitespace-nowrap"
            >
              Direct Campaign Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
