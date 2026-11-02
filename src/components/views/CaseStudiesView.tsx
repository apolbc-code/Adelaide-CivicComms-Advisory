import React, { useState } from 'react';
import { PageId, CaseStudy } from '../../types';
import { CIVIC_CASE_STUDIES } from '../../data/civicData';
import { civicImages } from '../../assets/images';
import { 
  Building2, 
  MapPin, 
  Scale, 
  Quote, 
  ArrowRight, 
  Filter,
  CheckCircle2
} from 'lucide-react';

interface CaseStudiesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Metropolitan Council',
    'Regional LGA',
    'Statutory Authority',
    'Not-For-Profit',
  ];

  const filteredStudies = selectedFilter === 'All'
    ? CIVIC_CASE_STUDIES
    : CIVIC_CASE_STUDIES.filter(cs => cs.clientType === selectedFilter);

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#1B365D] text-white py-14 lg:py-18 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <span>Public Sector Proof & Evidenced Outcomes</span>
              <span aria-hidden="true">·</span>
              <span>South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Measurable Democratic Impact Across South Australian LGAs.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Real-world case studies demonstrating how structured consultation, crisis insulation, and accessible communication safeguard councils and deliver tangible ratepayer value.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-teal-600" />
            <span>Filter by Sector Mandate:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-lg">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12 mt-8">
          {filteredStudies.map((study) => (
            <article 
              key={study.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-teal-500 transition-all overflow-hidden"
            >
              <div className="p-8 sm:p-10 lg:p-12 space-y-8">
                {/* Header Information */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="text-teal-700 font-bold">{study.clientType}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{study.location}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-base text-teal-800 font-medium">
                    {study.subtitle}
                  </p>
                </div>

                {/* Statutory Mandate Callout */}
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start gap-2.5">
                  <Scale className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Statutory Mandate:</strong> {study.statutoryMandate}
                  </div>
                </div>

                {/* Challenge & Intervention Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      The Institutional Challenge
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      The Strategic Intervention
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {study.intervention}
                    </p>
                  </div>
                </div>

                {/* Quantified Outcomes Grid */}
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Verified Outcomes & Ratepayer Evidence:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.outcomes.map((outcome, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-50/80 p-5 rounded-xl border border-slate-200"
                      >
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] font-mono tabular-nums">
                          {outcome.metric}
                        </div>
                        <div className="text-sm font-bold text-slate-900 mt-1">
                          {outcome.label}
                        </div>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {outcome.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="pt-6 border-t border-slate-100 bg-teal-50/40 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 lg:-mx-12 lg:-mb-12 p-8 sm:p-10 lg:p-12">
                  <div className="flex items-start gap-4 max-w-4xl">
                    <Quote className="w-8 h-8 text-teal-600 shrink-0 mt-1 opacity-70" />
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed">
                        "{study.quote.text}"
                      </p>
                      <div className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900 block">{study.quote.author}</span>
                        <span>{study.quote.role} · {study.quote.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Visual Consultation Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative bg-slate-900 min-h-[340px]">
            <img
              src={civicImages.consultation}
              alt="South Australian community consultation workshop with citizens and urban planners"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Deliberative Public Workshops
            </span>
            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
              Bridging the Digital and Physical Town Hall Experience
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Statutory engagement under the PDI Act Community Engagement Charter requires proactive inclusion of demographics often excluded from conventional public meetings. We design hybrid town hall models that synthesize digital polling data with structured small-group citizen juries.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                <span>Request Case Study Methodology Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
