import React, { useState } from 'react';
import { PageId, BriefingFormData } from '../../types';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText,
  Send,
  UserCheck
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [receiptCode, setReceiptCode] = useState<string>('');
  const [formData, setFormData] = useState<BriefingFormData>({
    fullName: '',
    organization: '',
    roleTitle: '',
    email: '',
    phone: '',
    consultationArea: 'Community Consultation & YourSAy',
    estimatedTimeline: 'Immediate (Next 1-2 Weeks)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ADL-CIVIC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReceiptCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      roleTitle: '',
      email: '',
      phone: '',
      consultationArea: 'Community Consultation & YourSAy',
      estimatedTimeline: 'Immediate (Next 1-2 Weeks)',
      message: '',
    });
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#1B365D] text-white py-14 lg:py-18 border-b border-[#284873]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <span>Adelaide Headquarters & Formal Procurement</span>
              <span aria-hidden="true">·</span>
              <span>Victoria Square</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Direct Counsel for South Australian Civic Leaders.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Engage our principal advisory desk confidentially for immediate crisis de-escalation, upcoming consultation architecture, or standing offer procurement inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Briefing Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            {submitted ? (
              /* Submission Receipt */
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Statutory Receipt Logged
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Briefing Successfully Registered
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your confidential inquiry on behalf of <strong>{formData.organization}</strong> has been transmitted directly to our Principal Advisor.
                  </p>
                </div>

                {/* Receipt Details Box */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2.5 max-w-lg mx-auto text-slate-700">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Official Lodgement Ref:</span>
                    <span className="font-mono font-bold text-slate-900">{receiptCode}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Practice Area:</span>
                    <span className="font-semibold text-slate-900">{formData.consultationArea}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Timeline / Horizon:</span>
                    <span className="font-semibold text-slate-900">{formData.estimatedTimeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Advisory Response SLA:</span>
                    <span className="font-semibold text-teal-700">Within 4 Statutory Business Hours</span>
                  </div>
                </div>

                {/* Next Steps Checklist */}
                <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl text-left text-xs text-teal-950 max-w-lg mx-auto space-y-2">
                  <div className="flex items-center gap-2 font-bold text-teal-900">
                    <UserCheck className="w-4 h-4 text-teal-700" />
                    <span>Next Steps for Your Administration:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 leading-relaxed">
                    <li>Our team conducts an immediate statutory probity and ward conflict-of-interest check.</li>
                    <li>You will receive an encrypted executive calendar invitation for an initial 30-minute discovery session.</li>
                    <li>We provide a pre-briefing questionnaire to ensure your council's time is maximized.</li>
                  </ol>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1B365D] hover:bg-[#12243E] text-white text-xs font-semibold rounded-lg shadow transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Briefing Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Submit Formal Consultation Briefing
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    All correspondence is managed in strict confidence under SA Local Government Act probity requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adrian Walker"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Role Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mayor / CEO / Comms Director"
                      value={formData.roleTitle}
                      onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Council or Organisation Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City of Port Adelaide Enfield"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adrian.walker@council.sa.gov.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(08) 8xxx xxxx or mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Advisory Practice Area
                    </label>
                    <select
                      value={formData.consultationArea}
                      onChange={(e) => setFormData({ ...formData, consultationArea: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900 bg-white"
                    >
                      <option value="Community Consultation & YourSAy">Community Consultation & YourSAy</option>
                      <option value="Strategic PR & Chamber Crisis Mitigation">Strategic PR & Chamber Crisis Mitigation</option>
                      <option value="Social Marketing & Behaviour Change">Social Marketing & Behaviour Change</option>
                      <option value="Caretaker & Election Period Governance">Caretaker & Election Period Governance</option>
                      <option value="Full Digital Compliance & WCAG 2.1 AA Overhaul">Full Digital Compliance & WCAG Overhaul</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Timeline / Project Horizon
                  </label>
                  <select
                    value={formData.estimatedTimeline}
                    onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900 bg-white"
                  >
                    <option value="Immediate Emergency (< 72 Hours)">Immediate Emergency (&lt; 72 Hours)</option>
                    <option value="Next 1-2 Weeks">Next 1–2 Weeks</option>
                    <option value="Upcoming Council Quarter / Business Plan">Upcoming Council Quarter / Business Plan</option>
                    <option value="2026 Caretaker & Municipal Election Prep">2026 Caretaker & Municipal Election Prep</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Confidential Briefing Scope & Key Challenges <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline the matter: e.g. Contentious suburban master plan consultation, code of conduct media fallout, or organics waste contamination campaign..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Briefing</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Adelaide Office & Procurement Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Adelaide Executive Office Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  Adelaide Advisory Suite
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Tarntanyangga / Victoria Square
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Civic Executive Chambers</span>
                    <span>Victoria Square / Tarntanyangga</span>
                    <span className="block text-slate-500">Adelaide SA 5000, Australia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Civic Comms Switchboard</span>
                    <span>(08) 8212 9400</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Statutory Correspondence</span>
                    <span className="text-teal-700 font-medium">advisory@civiccomms.sa.gov.au</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Advisory Hours</span>
                    <span>Mon – Fri: 08:30 – 17:30 ACST (24/7 Crisis Hotline for Retained Clients)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-3 bg-[#1B365D] hover:bg-[#12243E] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Book 30-Minute Civic Strategy Audit</span>
                </button>
              </div>
            </div>

            {/* Procurement & Panel Verification Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Procurement Panels & Compliance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adelaide CivicComms Advisory is pre-registered on major South Australian local government procurement frameworks, simplifying council purchasing under Section 49 of the Local Government Act 1999:
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>LGA Procurement Professional Services Panel #LGA-PR-2024</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>SA Tenders & Contracts Registered Supplier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Independent Commission Against Corruption (ICAC) probity compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>$20M Professional Indemnity & Public Liability Insurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
