import React, { useState } from 'react';
import { PageId, BriefingFormData } from '../../types';
import { civicImages } from '../../assets/images';
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
  UserCheck,
  Linkedin,
  Vote,
  Sparkles
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
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
    sector: 'Council / Local Government',
    consultationArea: 'Pillar A: Community Engagement',
    estimatedTimeline: 'Immediate (Next 1-2 Weeks)',
    message: '',
    subscribeNewsletter: true,
  });

  // Calendly-style inline date/time picker state
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM ACST');
  const [selectedDate, setSelectedDate] = useState('2026-11-17');
  const [slotBooked, setSlotBooked] = useState(false);

  const availableSlots = [
    '09:00 AM ACST',
    '10:30 AM ACST',
    '01:30 PM ACST',
    '03:00 PM ACST',
    '04:15 PM ACST',
  ];

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
      sector: 'Council / Local Government',
      consultationArea: 'Pillar A: Community Engagement',
      estimatedTimeline: 'Immediate (Next 1-2 Weeks)',
      message: '',
      subscribeNewsletter: true,
    });
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-[#003B5C] text-white py-14 lg:py-18 border-b border-[#002840]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              <span>Confidential Executive Engagement</span>
              <span aria-hidden="true">·</span>
              <span>Victoria Square, Adelaide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Let's Strengthen Your Community Communication.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Engage our senior advisory desk for councils, government agencies, not-for-profits, elected representatives, and political candidates across South Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Calendly/Office Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Briefing Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            {submitted ? (
              /* Submission Receipt */
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 bg-teal-50 text-[#2A9D8F] rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider font-heading">
                    Confidential Briefing Registered
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-heading">
                    Inquiry Successfully Lodged
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
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
                    <span className="text-slate-500">Client Sector:</span>
                    <span className="font-semibold text-slate-900">{formData.sector}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Practice Focus:</span>
                    <span className="font-semibold text-slate-900">{formData.consultationArea}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Timeline / Horizon:</span>
                    <span className="font-semibold text-slate-900">{formData.estimatedTimeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Advisory Response SLA:</span>
                    <span className="font-semibold text-[#0077B6]">Within 4 Statutory Business Hours</span>
                  </div>
                </div>

                {/* Next Steps Checklist */}
                <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-left text-xs text-blue-950 max-w-lg mx-auto space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#003B5C] font-heading">
                    <UserCheck className="w-4 h-4 text-[#0077B6]" />
                    <span>Next Steps for Your Organisation:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 leading-relaxed font-normal">
                    <li>Our principal team conducts an immediate conflict-of-interest and probity check.</li>
                    <li>You will receive an encrypted calendar invitation for an initial discovery briefing.</li>
                    <li>We prepare preliminary background research on your council ward, agency, or campaign.</li>
                  </ol>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#003B5C] hover:bg-[#002840] text-white text-xs font-bold rounded-lg shadow transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Briefing Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight font-heading">
                    Confidential Briefing Request
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
                    All correspondence is held in strict confidence under SA public administration probity and caretaker confidentiality standards.
                  </p>
                </div>

                {/* Sector Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-heading">
                    Select Your Client Sector <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Council / Local Government',
                      'Government Agency',
                      'Not-for-Profit / Community',
                      'Candidate / Elected Official',
                    ].map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: sec as any })}
                        className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                          formData.sector === sec
                            ? 'border-[#0077B6] bg-blue-50 text-[#003B5C] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Official Role Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CEO / Director / Mayoral Candidate"
                      value={formData.roleTitle}
                      onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Council, Agency, NFP or Campaign <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City of Burnside / Campaign for Council"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Official Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@council.sa.gov.au or personal"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Direct Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(08) 8xxx xxxx or mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Primary Advisory Practice Area
                    </label>
                    <select
                      value={formData.consultationArea}
                      onChange={(e) => setFormData({ ...formData, consultationArea: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900 bg-white"
                    >
                      <option value="Pillar A: Community Engagement">Pillar A: Community Engagement (YourSAy)</option>
                      <option value="Pillar B: Strategic PR & Public Affairs">Pillar B: Strategic PR & Public Affairs</option>
                      <option value="Pillar C: Social Marketing & Behaviour Change">Pillar C: Social Marketing & Behaviour Change</option>
                      <option value="Pillar D: Election Communications & Candidate Strategy">Pillar D: Election Communications & Candidate Strategy</option>
                      <option value="Caretaker Period & Electoral Governance">Caretaker Period & Electoral Governance</option>
                      <option value="Full Digital Compliance & WCAG 2.1 AA Overhaul">Full Digital Compliance & WCAG 2.1 AA Overhaul</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                    Timeline / Project Horizon
                  </label>
                  <select
                    value={formData.estimatedTimeline}
                    onChange={(e) => setFormData({ ...formData, estimatedTimeline: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900 bg-white"
                  >
                    <option value="Immediate Emergency (< 72 Hours)">Immediate Emergency (&lt; 72 Hours)</option>
                    <option value="Next 1-2 Weeks">Next 1–2 Weeks</option>
                    <option value="Upcoming Council Quarter / Business Plan">Upcoming Council Quarter / Business Plan</option>
                    <option value="2026 Local Government Elections Campaign">2026 Local Government Elections Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                    Confidential Briefing Scope & Key Challenges <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Outline your situation: e.g. Contentious masterplan consultation, code of conduct media fallout, council election candidate campaign in East Ward..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                    className="w-4 h-4 text-[#0077B6] border-slate-300 rounded focus:ring-[#0077B6]"
                  />
                  <label htmlFor="newsletter" className="text-xs text-slate-600">
                    Subscribe to our quarterly South Australian Civic Communications Intelligence Dispatch.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#0077B6] hover:bg-[#005B8C] text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Briefing</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Brand Logo, Calendly-Style Schedule Picker & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Official Brand Logo & Symbolism Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Responsive Logo with clear space on light background */}
                <div className="w-full">
                  {/* Desktop: Full Adelaide CivicComms Advisory Logo with Tagline */}
                  <div className="hidden md:block p-5 bg-[#F7F9FB] rounded-xl border border-slate-200 shadow-xs max-w-xs mx-auto">
                    <img
                      src={civicImages.logo}
                      alt="Adelaide CivicComms Advisory - Full Brand Logo with Tagline"
                      className="w-full h-auto object-contain mx-auto"
                    />
                    <div className="mt-2 text-center text-[10px] text-slate-500 font-medium">
                      Desktop Standard: Full Brand Logo with Official Tagline
                    </div>
                  </div>

                  {/* Mobile: Approved Compact Logo (Icon and Adelaide CivicComms) */}
                  <div className="block md:hidden p-4 bg-[#F7F9FB] rounded-xl border border-slate-200 shadow-xs max-w-[260px] mx-auto">
                    <img
                      src={civicImages.logoCompact}
                      alt="Adelaide CivicComms - Approved Compact Logo"
                      className="w-full h-auto object-contain mx-auto"
                    />
                    <div className="mt-2 text-center text-[10px] text-slate-500 font-medium">
                      Mobile Standard: Approved Compact Version
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#D4A017] uppercase tracking-wider block font-heading">
                    The CivicComms Emblem
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Symbolism & Institutional Meaning
                  </h3>
                </div>
              </div>

              {/* 4 Symbolic Elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                  <span className="font-bold text-[#003B5C] block font-heading">Civic Building</span>
                  <p className="text-[11px] text-slate-600 font-normal">Represents governance, local councils, and public affairs.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                  <span className="font-bold text-[#0077B6] block font-heading">Speech Bubble</span>
                  <p className="text-[11px] text-slate-600 font-normal">Represents democratic communication and constituent engagement.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                  <span className="font-bold text-[#2A9D8F] block font-heading">Community Figures</span>
                  <p className="text-[11px] text-slate-600 font-normal">Represents stakeholders, voters, and diverse communities.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                  <span className="font-bold text-[#D4A017] block font-heading">Flowing Lines</span>
                  <p className="text-[11px] text-slate-600 font-normal">Represents collaboration, forward momentum, and strategic outcomes.</p>
                </div>
              </div>
            </div>

            {/* Calendly-Style Fast Schedule Picker */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#D4A017] uppercase tracking-wider block font-heading">
                  Instant Executive Booking
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Book Your Free 30-Minute Civic Strategy Audit
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Select an available slot on our advisory calendar or use the full booking modal.
                </p>
              </div>

              {slotBooked ? (
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#2A9D8F] mx-auto" />
                  <p className="text-xs font-bold text-slate-900">
                    Slot Reserved: {selectedDate} at {selectedSlot}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Please submit your briefing form on the left to confirm your organization details.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Select Available Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 font-heading">
                      Available Time Slots (Adelaide ACST)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-3 py-2 text-xs rounded-lg border text-center transition-all ${
                            selectedSlot === slot
                              ? 'border-[#0077B6] bg-[#0077B6] text-white font-bold'
                              : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenAuditModal('Instant Audit')}
                      className="w-full py-3 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#D4A017]" />
                      <span>Launch Full Booking Calendar</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Adelaide Executive Office Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider block mb-1 font-heading">
                  Adelaide Advisory Suite
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Tarntanyangga / Victoria Square
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0077B6] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block font-heading">Civic Executive Chambers</span>
                    <span>Victoria Square / Tarntanyangga</span>
                    <span className="block text-slate-500 text-xs">Adelaide SA 5000, Australia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0077B6] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block font-heading">Advisory Switchboard</span>
                    <span className="text-xs">(08) 8212 9400</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0077B6] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block font-heading">Official Correspondence</span>
                    <span className="text-xs text-[#0077B6] font-medium">advisory@adelaideciviccomms.com.au</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#D4A017] shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 block font-heading">Professional Network</span>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-[#0077B6] hover:underline"
                    >
                      Adelaide CivicComms Advisory on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Map Representation */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center justify-between font-bold text-slate-900 font-heading">
                  <span>Victoria Square Civic Precinct</span>
                  <span className="text-[#0077B6]">SA 5000</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Adjacent to Adelaide Town Hall, Supreme Court precinct, and King William Street tram connection.
                </p>
              </div>
            </div>

            {/* Procurement & Panel Verification Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                <span>Statutory Procurement Ready</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Adelaide CivicComms Advisory is pre-registered on major South Australian local government procurement frameworks, simplifying council purchasing under Section 49 of the Local Government Act 1999:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>LGA Procurement Professional Services Panel #LGA-PR-2024</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>SA Tenders & Contracts Registered Supplier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
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
