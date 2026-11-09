import React, { useState } from 'react';
import { PageId, AuditQuestion, AuditResult, DownloadableResource } from '../../types';
import { 
  CIVIC_AUDIT_QUESTIONS, 
  INSIGHT_ARTICLES, 
  INSIGHT_CATEGORIES, 
  DOWNLOADABLE_RESOURCES 
} from '../../data/civicData';
import { ResourceDownloadModal } from '../ResourceDownloadModal';
import { 
  ClipboardCheck, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  Download, 
  Printer, 
  RefreshCw, 
  ArrowRight, 
  FileText, 
  BookOpen,
  ShieldCheck,
  ChevronRight,
  Filter,
  Sparkles
} from 'lucide-react';

interface InsightsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  // Audit State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [activeDownloadResource, setActiveDownloadResource] = useState<DownloadableResource | null>(null);

  // Handle Option Selection
  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Calculate Audit Result
  const calculateResult = (): AuditResult => {
    let totalScore = 0;
    const breakdown = CIVIC_AUDIT_QUESTIONS.map(q => {
      const selectedOptionId = selectedAnswers[q.id];
      const selectedOpt = q.options.find(o => o.id === selectedOptionId) || q.options[q.options.length - 1];
      totalScore += selectedOpt.score;

      return {
        pillar: q.pillar,
        score: selectedOpt.score,
        maxScore: 25,
        recommendation: selectedOpt.recommendation,
        riskLevel: selectedOpt.riskLevel,
      };
    });

    const percentage = totalScore;
    let ratingLabel = 'Statutory Risk / Urgent Remediation Required';
    let summary = 'Your council communications architecture shows severe vulnerabilities in digital accessibility, social media moderation liability, or chamber crisis escalation. Immediate executive intervention is recommended to prevent statutory complaints.';

    if (percentage >= 85) {
      ratingLabel = 'Exemplary Civic Governance / Institutional Benchmark';
      summary = 'Your organisation maintains exceptional alignment with the SA Local Government Act 1999, WCAG 2.1 AA mandates, and proactive democratic feedback loops. Continue refining ward-level participation.';
    } else if (percentage >= 60) {
      ratingLabel = 'Moderate Compliance / Critical Gaps Detected';
      summary = 'Your council possesses foundational communication policies, but unmonitored digital channels or non-remediated PDF documents create exposure to FOI disputes and constituent disenfranchisement.';
    }

    return {
      totalScore,
      percentage,
      ratingLabel,
      summary,
      breakdown,
    };
  };

  const isComplete = Object.keys(selectedAnswers).length === CIVIC_AUDIT_QUESTIONS.length;
  const result = isComplete ? calculateResult() : null;

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSelectedAnswers({});
  };

  const filteredArticles = selectedCategory === 'All Categories'
    ? INSIGHT_ARTICLES
    : INSIGHT_ARTICLES.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(a.category.toLowerCase()));

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#003B5C] text-white py-14 lg:py-18 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <span>Insights Hub, Toolkits & Whitepapers</span>
              <span aria-hidden="true">·</span>
              <span>South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Civic Intelligence, Downloadable Toolkits & Compliance Tools.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Practical resources, legal checklists, and diagnostic self-audits designed to elevate public sector communication, community consultation, and election integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0077B6] uppercase tracking-wider mb-1 font-heading">
            <FileText className="w-4 h-4" />
            <span>Executive Toolkits & Checklists</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
            Free South Australian Governance Templates
          </h2>
          <p className="mt-1 text-sm text-slate-600 font-normal">
            Authoritative documents designed for council CEOs, community engagement directors, and campaign coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADABLE_RESOURCES.map((res) => (
            <div 
              key={res.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[#0077B6] font-bold">{res.category}</span>
                  <span className="font-mono">{res.pages}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug font-heading">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {res.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{res.downloadCount}</span>
                <button
                  onClick={() => setActiveDownloadResource(res)}
                  className="px-3.5 py-1.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Toolkit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tool Section: SA Council Digital Compliance Self-Audit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Audit Header */}
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#003B5C] uppercase tracking-wider font-heading">
                <ClipboardCheck className="w-4 h-4 text-[#0077B6]" />
                <span>Executive Diagnostic Tool</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                SA Local Government Digital Compliance Self-Audit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Four critical questions assessing WCAG 2.1 AA accessibility, comment moderation legality, closing-the-loop reporting, and chamber crisis protocols.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500">
                Progress: {Object.keys(selectedAnswers).length} / {CIVIC_AUDIT_QUESTIONS.length} Answered
              </span>
              {Object.keys(selectedAnswers).length > 0 && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded border border-slate-300 hover:bg-slate-100"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Audit Content / Form */}
          <div className="p-6 sm:p-10 space-y-10">
            {CIVIC_AUDIT_QUESTIONS.map((question) => (
              <div key={question.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {question.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    Ref: {question.statutoryReference}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {question.question}
                </p>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-3 pt-1">
                  {question.options.map((opt) => {
                    const isSelected = selectedAnswers[question.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(question.id, opt.id)}
                        className={`text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-[#0077B6] bg-blue-50/70 shadow-xs ring-1 ring-[#0077B6]'
                            : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'border-[#0077B6] bg-[#0077B6] text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div className="space-y-1 flex-1">
                          <span className={`block text-sm font-semibold ${isSelected ? 'text-[#003B5C] font-bold' : 'text-slate-900'}`}>
                            {opt.label}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {opt.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Audit Completion / Result Reveal */}
            {isComplete && result && (
              <div className="mt-12 pt-8 border-t-2 border-[#0077B6]/30 space-y-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                {/* Score Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#003B5C] uppercase tracking-wider font-heading">
                      Official Civic Readiness Scorecard
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">
                      {result.ratingLabel}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xl leading-relaxed font-normal">
                      {result.summary}
                    </p>
                  </div>

                  <div className="shrink-0 bg-white p-6 rounded-xl border border-slate-200 text-center shadow-xs">
                    <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider mb-1 font-heading">
                      Readiness Score
                    </span>
                    <div className={`text-4xl sm:text-5xl font-extrabold font-mono tabular-nums ${
                      result.percentage >= 80 ? 'text-[#2A9D8F]' : result.percentage >= 50 ? 'text-[#D4A017]' : 'text-red-600'
                    }`}>
                      {result.percentage}%
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {result.totalScore} / 100 Points
                    </span>
                  </div>
                </div>

                {/* Pillar Breakdown & Tailored Recommendations */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
                    Tailored Statutory Recommendations by Practice Pillar:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.breakdown.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-white rounded-xl border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 font-heading">
                            {item.pillar}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            item.riskLevel === 'low'
                              ? 'bg-teal-50 text-teal-700 border border-teal-200'
                              : item.riskLevel === 'moderate'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            {item.riskLevel} Risk ({item.score}/25)
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          <strong>Advisory Action:</strong> {item.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Report Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={handlePrint}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Executive Audit Brief</span>
                    </button>
                    <button
                      onClick={() => onOpenAuditModal('Audit Results Review')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
                    >
                      <span>Book Review with Principal Advisor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">
                    Audited under SA LGA 1999 & PDI Act standards
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog & Whitepapers Section with 8 Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0077B6] uppercase tracking-wider mb-1 font-heading">
              <BookOpen className="w-4 h-4" />
              <span>Civic Intelligence Briefings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              Articles, Whitepapers & Case Briefs
            </h2>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl mb-8 max-w-4xl">
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap font-heading ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[#0077B6] font-bold">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug font-heading">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {article.summary}
                </p>

                {/* Key Takeaway */}
                <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">
                    Statutory Takeaway:
                  </span>
                  <p className="italic">{article.keyTakeaway}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">{article.date}</span>
                <button
                  onClick={() => onOpenAuditModal(article.title)}
                  className="text-xs font-bold text-[#0077B6] hover:text-[#005B8C] inline-flex items-center gap-1"
                >
                  <span>Request Full Whitepaper</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resource Download Modal */}
      <ResourceDownloadModal
        resource={activeDownloadResource}
        onClose={() => setActiveDownloadResource(null)}
      />
    </div>
  );
};
