import React, { useState } from 'react';
import { PageId, AuditQuestion, AuditResult } from '../../types';
import { CIVIC_AUDIT_QUESTIONS, INSIGHT_ARTICLES } from '../../data/civicData';
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
  ShieldAlert,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface InsightsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  // Audit State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [auditSubmitted, setAuditSubmitted] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

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

    const percentage = totalScore; // since 4 questions x 25 = 100 max
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
    setAuditSubmitted(false);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#1B365D] text-white py-14 lg:py-18 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <span>Diagnostic Tools & Executive Intelligence</span>
              <span aria-hidden="true">·</span>
              <span>South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              SA Council Digital Compliance Self-Audit & Whitepapers.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Evaluate your local government body's exposure to digital statutory risks, comment liability, and accessibility mandates in under 3 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Audit Header */}
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                <ClipboardCheck className="w-4 h-4" />
                <span>Interactive Executive Instrument</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                SA Local Government Digital Compliance Self-Audit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Four questions assessing WCAG 2.1 AA accessibility, social media moderation legality, closing-the-loop reporting, and chamber crisis protocols.
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
            {CIVIC_AUDIT_QUESTIONS.map((question, qIdx) => (
              <div key={question.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-100">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
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
                            ? 'border-teal-600 bg-teal-50/70 shadow-xs ring-1 ring-teal-600'
                            : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div className="space-y-1 flex-1">
                          <span className={`block text-sm font-semibold ${isSelected ? 'text-teal-950 font-bold' : 'text-slate-900'}`}>
                            {opt.label}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed">
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
              <div className="mt-12 pt-8 border-t-2 border-teal-600/30 space-y-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                {/* Score Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                      Official Civic Readiness Assessment
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {result.ratingLabel}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                      {result.summary}
                    </p>
                  </div>

                  <div className="shrink-0 bg-white p-6 rounded-xl border border-slate-200 text-center shadow-xs">
                    <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider mb-1">
                      Readiness Score
                    </span>
                    <div className={`text-4xl sm:text-5xl font-extrabold font-mono tabular-nums ${
                      result.percentage >= 80 ? 'text-teal-700' : result.percentage >= 50 ? 'text-amber-600' : 'text-red-600'
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
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Tailored Statutory Recommendations by Practice Pillar:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.breakdown.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-white rounded-xl border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">
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
                        <p className="text-xs text-slate-600 leading-relaxed">
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Executive Audit Brief</span>
                    </button>
                    <button
                      onClick={onOpenAuditModal}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
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

      {/* Curated Whitepapers & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Civic Intelligence Briefings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            South Australian Local Government Policy Whitepapers
          </h2>
          <p className="text-sm text-slate-600">
            Authoritative analysis written specifically for Mayors, Council CEOs, and Governance Directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHT_ARTICLES.map((article) => {
            const isSelected = selectedArticleId === article.id;
            return (
              <div 
                key={article.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-teal-500 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="text-teal-700 font-semibold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Expandable Key Takeaway */}
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
                    onClick={onOpenAuditModal}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    <span>Request Full Whitepaper</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
