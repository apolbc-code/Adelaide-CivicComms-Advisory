import React from 'react';
import { PageId } from '../../types';
import { civicImages } from '../../assets/images';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  FileText, 
  Scale, 
  HelpCircle,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-[#1B365D] text-white overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Tagline (No pill - clean unboxed typography) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-300 uppercase">
                <span>Adelaide, South Australia</span>
                <span aria-hidden="true">·</span>
                <span>LGA & Statutory Sector Specialist</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Strategic Digital Marketing & Public Relations for Adelaide’s Civic Sector.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Bridging statutory public accountability, ethical constituent engagement, and measurable social impact across South Australian councils and not-for-profits.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenAuditModal}
                  className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 whitespace-nowrap text-center"
                >
                  Request a 30-Minute Civic Strategy Audit
                </button>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-lg border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap text-center flex items-center justify-center gap-2"
                >
                  <span>View Public Sector Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-teal-300" />
                </button>
              </div>

              {/* Trust Strip */}
              <div className="pt-6 border-t border-white/15">
                <p className="text-xs text-slate-300 font-medium flex flex-wrap items-center gap-y-1 gap-x-3">
                  <span className="inline-flex items-center gap-1.5 text-teal-300">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Proven Parliamentary Comms Rigour</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span>Aligned with SA Local Government Act Standards</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span>WCAG 2.1 AA Accessible</span>
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
                  <span className="font-semibold text-white block">Adelaide Town Hall · Local Government Civic Seat</span>
                  <span className="text-slate-300 text-[11px]">King William Street · Historic municipal seat for Adelaide local governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Institutional Problem vs. Solution (3 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-2">
            The Public Administration Dilemma
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Institutional Challenges Demand Institutional Rigour
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            South Australian councils and statutory bodies face unprecedented public pressure. Standard digital agency solutions fail to understand statutory mandates, caretaker restrictions, and democratic accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Problem 01 · Signal vs Distortion
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Noise vs. Meaningful Consultation
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vocal activist minorities and algorithm-fuelled social media hostility drown out quiet ratepayer majorities. Unstructured feedback creates an illusion of controversy that paralyzes council voting chambers.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide block mb-1">
                The CivicComms Solution
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Deploying verified constituent polling, deliberative mini-publics, and IAP2-aligned YourSAy workflows that translate noisy commentary into statistically defensible consultation data.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Problem 02 · Compliance & Exposure
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Legislative & Risk Governance
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A single ill-timed Facebook post during statutory caretaker periods, an unlawful comment deletion, or a high-court publisher liability issue can trigger Ombudsman investigations and ICAC referrals.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide block mb-1">
                The CivicComms Solution
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Watertight caretaker freeze protocols under SA LGA Act 1999 s91A, defensible moderation policies, and proactive FOI disclosure logs safeguarding executive leadership.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Problem 03 · Operational Strain
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Resource & Team Capacity Gaps
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Lean municipal comms teams of 1 to 3 officers are expected to manage daily PR, graphic production, event logistics, and simultaneous 24/7 chamber crisis incidents without specialized backup.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/80 -mx-6 -mb-6 p-6 rounded-b-xl">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide block mb-1">
                The CivicComms Solution
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Acting as an agile strategic force multiplier: stepping in during major Annual Business Plan consultations, heated rezoning disputes, or sudden chamber controversies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Civic Impact Metric Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1B365D] via-[#162D4E] to-[#12243E] rounded-2xl text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-[#284873]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
                <span>Featured Civic Impact Highlight</span>
                <span aria-hidden="true">·</span>
                <span>Metro Adelaide</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Urban Rezoning Consultation for Metro Adelaide
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                How our deliberative consultation framework de-escalated intense suburban anxiety surrounding tree canopy protection and medium-density infill, resulting in unanimous council chamber adoption under the PDI Act.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-white transition-colors"
                >
                  <span>Read Full Case Study & Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 lg:pt-0 lg:pl-6 lg:border-l lg:border-white/15">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-300 font-mono tabular-nums">
                  +310%
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  Validated Submissions
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Verified ratepayer inputs compared to previous municipal benchmark consultations.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-300 font-mono tabular-nums">
                  62%
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  Misinformation Drop
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Measured reduction in false planning claims circulating across suburban forums.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-300 font-mono tabular-nums">
                  100%
                </div>
                <div className="text-sm font-semibold text-white mt-1">
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

      {/* Core Services Teaser (Interactive Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Purpose-Built for South Australian Governance
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>Explore All 4 Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 01 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-600 transition-all">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-teal-600 block">
                01. PRACTICE AREA
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Community Consultation & YourSAy Integration
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designing IAP2-compliant consultation frameworks for contentious municipal plans, masterplans, and rate modeling. Blending online engagement with physical deliberative forums.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>YourSAy & Social Pinpoint portal configuration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>"You Said, We Did" closing-the-loop reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Statutory notice design for print and digital channels</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">PDI Act & LGA s50 compliant</span>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-teal-700 hover:underline"
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Service 02 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-600 transition-all">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-teal-600 block">
                02. PRACTICE AREA
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Strategic PR & 24/7 Digital Crisis Mitigation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Protecting institutional credibility, chamber decorum, and public servants from toxic social media hostility, code of conduct leaks, and aggressive media coverage.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>24/7 chamber disruption holding lines & media Q&A</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Livestream buffer protocol & defamation safeguards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Proactive Freedom of Information release counsel</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Sub-20m crisis response SLA</span>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-teal-700 hover:underline"
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Service 03 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-600 transition-all">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-teal-600 block">
                03. PRACTICE AREA
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                Social Marketing & Public Behaviour Change
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Evidence-driven awareness campaigns that move the needle on community outcomes — from FOGO organic waste separation to bushfire safety and active transport.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Behavioral nudges & ratepayer segmentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Green Industries SA circular economy compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Pre- and post-campaign weighbridge auditing</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Measurable diversion rates</span>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-teal-700 hover:underline"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Audit Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border-2 border-teal-600/30 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>Interactive Civic Assessment Tool</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Is Your Council’s Digital Communications Architecture Legally Resilient?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Take our 4-question self-audit evaluating WCAG 2.1 AA accessibility, social moderation house rules, constituent feedback loops, and chamber crisis protocols. Receive an instant Civic Readiness Score (0–100%) and tailored legislative recommendations.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('insights')}
              className="px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-lg shadow transition-colors text-center whitespace-nowrap"
            >
              Start 4-Question Audit (2 Mins)
            </button>
            <button
              onClick={onOpenAuditModal}
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
