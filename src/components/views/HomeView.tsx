import React, { useState } from 'react';
import { PageId } from '../../types';
import { civicImages } from '../../assets/images';
import { WHY_US_PILLARS, AUDIENCE_PAIN_POINTS } from '../../data/civicData';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Scale, 
  HelpCircle,
  Vote,
  Sparkles,
  TrendingUp,
  MessageSquare,
  AlertCircle,
  FileCheck2,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [selectedAudienceIdx, setSelectedAudienceIdx] = useState(0);

  const expertiseCards = [
    {
      num: '01',
      title: 'Community Engagement',
      desc: 'IAP2-certified consultation frameworks, deliberative citizen juries, and state YourSAy-aligned portals that transform complex proposals into informed consensus.',
      target: 'services' as PageId
    },
    {
      num: '02',
      title: 'Strategic PR & Public Affairs',
      desc: 'High-stakes media management, ministerial liaison, speechwriting, and rapid-response reputation defense for CEOs, Mayors, and public agencies.',
      target: 'services' as PageId
    },
    {
      num: '03',
      title: 'Social Marketing',
      desc: 'Behaviour change campaigns leveraging behavioural economics and hyper-local storytelling to shift real-world civic habits in waste, health, and road safety.',
      target: 'services' as PageId
    },
    {
      num: '04',
      title: 'Election Communications',
      desc: 'Ethical, compliant campaign strategy, candidate branding, digital voter outreach, and debate preparation for local government candidates and civic leaders.',
      target: 'elections' as PageId,
      highlight: true
    },
    {
      num: '05',
      title: 'Reputation Management',
      desc: 'Protecting council chambers and public servants from misinformation, bad-faith attacks, and digital hostility under High Court publisher precedents.',
      target: 'services' as PageId
    },
    {
      num: '06',
      title: 'Stakeholder Engagement',
      desc: 'Strategic mapping, quiet majority engagement, and structured dialogue with government departments, industry peak bodies, and resident associations.',
      target: 'services' as PageId
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#003B5C] text-white overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Tagline */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4A017] uppercase">
                <span>Adelaide, South Australia</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Public Sector & Civic Specialist</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading" style={{ textWrap: 'balance' }}>
                Strategic Communications for South Australia's Public Sector and Community Leaders
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                Helping councils, government agencies, elected representatives and not-for-profits engage communities, strengthen trust and deliver measurable outcomes.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onOpenAuditModal()}
                  className="px-6 py-3.5 bg-[#0077B6] hover:bg-[#005B8C] active:bg-[#004870] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap text-center"
                >
                  Book a Civic Strategy Audit
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap text-center flex items-center justify-center gap-2"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A017]" />
                </button>
              </div>

              {/* Credibility Trust Strip */}
              <div className="pt-6 border-t border-white/15">
                <p className="text-xs text-slate-300 font-medium flex flex-wrap items-center gap-y-1.5 gap-x-3">
                  <span className="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                    <span>18+ Years Public Affairs Experience</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span>Aligned with SA Local Government Act Standards</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="text-[#D4A017]">WCAG 2.1 AA Accessible</span>
                </p>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
                <img
                  src={civicImages.hero}
                  alt="Historic Adelaide Town Hall on King William Street, the municipal seat and local government structure of Adelaide South Australia"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                  <span className="font-bold text-white block font-heading">Adelaide Town Hall · Local Government Civic Seat</span>
                  <span className="text-slate-300 text-[11px]">King William Street · Municipal centre for South Australian civic governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Adelaide CivicComms - 6 Key Differentiators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-2 font-heading">
            The Public Affairs Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
            Why South Australian Leaders Choose Adelaide CivicComms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A boutique consultancy combining deep public sector expertise with modern digital capabilities — offering an authoritative alternative to generic marketing agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_PILLARS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-[#0077B6] hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Pain Points & Tailored Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200 p-6 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#003B5C] uppercase tracking-wider block mb-1 font-heading">
              Tailored Sector Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              Solving Real Communication Bottlenecks
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Select your organisation type to see how we address your specific governance and engagement challenges.
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-3xl mx-auto mb-8 p-1.5 bg-white rounded-xl border border-slate-200">
            {AUDIENCE_PAIN_POINTS.map((ap, idx) => (
              <button
                key={ap.segment}
                onClick={() => setSelectedAudienceIdx(idx)}
                className={`w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg text-xs font-bold transition-all text-center whitespace-nowrap font-heading ${
                  selectedAudienceIdx === idx
                    ? 'bg-[#003B5C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {ap.segment}
              </button>
            ))}
          </div>

          {/* Active Audience Card */}
          {(() => {
            const current = AUDIENCE_PAIN_POINTS[selectedAudienceIdx];
            return (
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {current.segment}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {current.subtitle}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Common Operational & Reputation Pain Points:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <AlertCircle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-blue-50/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block">
                      The Adelaide CivicComms Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {current.solution}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate(current.targetPage)}
                    className="px-5 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-sm whitespace-nowrap transition-colors flex items-center gap-1.5"
                  >
                    <span>{current.ctaText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Featured Civic Impact Metric Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#003B5C] via-[#004D73] to-[#002840] rounded-2xl text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
                <span>Featured Civic Impact Highlight</span>
                <span aria-hidden="true">·</span>
                <span>Metro Adelaide</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-heading">
                Urban Rezoning Consultation for Metro Adelaide
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                How our deliberative consultation framework de-escalated intense suburban anxiety surrounding tree canopy protection and medium-density infill, resulting in unanimous council chamber adoption under the PDI Act.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors"
                >
                  <span>Read Full Case Study & Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0 lg:pl-6 lg:border-l lg:border-white/15">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#D4A017] font-mono tabular-nums">
                  +310%
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Validated Submissions
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Verified ratepayer inputs compared to previous municipal benchmark consultations.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#D4A017] font-mono tabular-nums">
                  62%
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Misinformation Drop
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Measured reduction in false planning claims circulating across suburban forums.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#D4A017] font-mono tabular-nums">
                  100%
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Unanimous Adoption
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Chamber passed the revised code amendment without statutory appeals or delay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise / Service Overview (6 Pillars Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-1 font-heading">
              Our Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              End-to-End Strategic Communications & Public Affairs
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0077B6] hover:text-[#005B8C] transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCards.map((card) => (
            <div 
              key={card.num}
              className={`bg-white rounded-xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                card.highlight 
                  ? 'border-[#D4A017] bg-gradient-to-b from-white to-amber-50/20 shadow-md' 
                  : 'border-slate-200 hover:border-[#0077B6] shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0077B6]">
                    {card.num}. PRACTICE
                  </span>
                  {card.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4A017] text-slate-950 uppercase tracking-wide">
                      Specialist
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug font-heading">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(card.target)}
                  className="text-xs font-bold text-[#0077B6] hover:text-[#005B8C] inline-flex items-center gap-1"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenAuditModal(card.title)}
                  className="text-[11px] font-medium text-slate-500 hover:text-slate-900"
                >
                  Book Audit →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Quick Audit Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-[#0077B6]/30 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#003B5C] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#0077B6]" />
              <span>Interactive Civic Diagnostic</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Is Your Council's Digital Communications Architecture Legally Resilient?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Take our 4-question self-audit evaluating WCAG 2.1 AA accessibility, social moderation house rules, constituent feedback loops, and chamber crisis protocols. Receive an instant Civic Readiness Score (0–100%) and tailored legislative recommendations.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('insights')}
              className="px-6 py-3.5 bg-[#0077B6] hover:bg-[#005B8C] text-white font-bold text-sm rounded-lg shadow transition-colors text-center whitespace-nowrap"
            >
              Start 4-Question Audit (2 Mins)
            </button>
            <button
              onClick={() => onOpenAuditModal()}
              className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm rounded-lg transition-colors text-center whitespace-nowrap"
            >
              Book In-Person Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
