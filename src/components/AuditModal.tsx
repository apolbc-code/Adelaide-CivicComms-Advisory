import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Building, Shield, Video, MapPin, User, Mail, Phone, Vote } from 'lucide-react';
import { BookingSlotData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, initialFocus = 'Community Consultation & YourSAy' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingSlotData>({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    date: '2026-11-17',
    timeSlot: '10:00 AM ACST',
    meetingType: 'Virtual Teams/Webex',
    focusArea: initialFocus,
    preliminaryNotes: '',
  });

  useEffect(() => {
    if (initialFocus) {
      setFormData(prev => ({ ...prev, focusArea: initialFocus }));
    }
  }, [initialFocus, isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM ACST',
    '10:30 AM ACST',
    '01:30 PM ACST',
    '03:00 PM ACST',
    '04:15 PM ACST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#003B5C] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0077B6] flex items-center justify-center text-white">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#D4A017] uppercase tracking-wider block">
                Executive Civic Advisory
              </span>
              <h2 id="audit-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight font-heading">
                Book a Free 30-Minute Civic Strategy Audit
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-teal-50 text-[#2A9D8F] rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#003B5C] font-heading">
                Civic Strategy Audit Confirmed
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.contactName}</strong>. Your confidential 30-minute session for <strong>{formData.organization}</strong> has been scheduled with our Victoria Square executive advisory desk.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs space-y-2 max-w-md mx-auto text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="font-semibold text-slate-900">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Format:</span>
                <span className="font-semibold text-slate-900">{formData.meetingType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Practice Focus:</span>
                <span className="font-semibold text-[#0077B6]">{formData.focusArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Official Confirmation Ref:</span>
                <span className="font-mono font-bold text-[#2A9D8F]">SA-CIVIC-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-950 text-left max-w-md mx-auto flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
              <span>
                <strong>Statutory Caretaker Guarantee:</strong> All discussions remain strictly confidential and privileged under South Australian public sector and political communications probity standards.
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#003B5C] hover:bg-[#002840] text-white text-xs font-semibold rounded-lg shadow transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span><strong>Pre-qualifications:</strong> LGA Procurement Panel #LGA-PR-2024</span>
              <span className="text-[#0077B6] font-semibold">Free 30-Min Executive Review</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Council, Agency, NFP or Campaign <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. City of Adelaide / Campaign for Mayor"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name & Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe (CEO / Candidate)"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    placeholder="name@council.sa.gov.au or personal"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Direct Telephone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(08) 8xxx xxxx / mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Strategic Focus & Meeting Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Audit Focus Area
                </label>
                <select
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900 bg-white"
                >
                  <option value="Community Engagement & Consultation">Pillar A: Community Engagement & Consultation</option>
                  <option value="Strategic PR & Public Affairs">Pillar B: Strategic PR & Public Affairs</option>
                  <option value="Social Marketing & Behaviour Change">Pillar C: Social Marketing & Behaviour Change</option>
                  <option value="Election Communications & Candidate Strategy">Pillar D: Election Communications & Candidate Strategy</option>
                  <option value="Caretaker & Statutory Governance">Caretaker & Statutory Governance</option>
                  <option value="Full Digital Compliance & WCAG Audit">Full Digital Compliance & WCAG Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Meeting Setting
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingType: 'Virtual Teams/Webex' })}
                    className={`p-2 rounded border flex items-center justify-center gap-1.5 transition-colors ${
                      formData.meetingType === 'Virtual Teams/Webex'
                        ? 'border-[#0077B6] bg-blue-50 text-[#003B5C] font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-[#0077B6]" />
                    <span>MS Teams / Webex</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingType: 'In-Person (Victoria Square)' })}
                    className={`p-2 rounded border flex items-center justify-center gap-1.5 transition-colors ${
                      formData.meetingType === 'In-Person (Victoria Square)'
                        ? 'border-[#0077B6] bg-blue-50 text-[#003B5C] font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#0077B6]" />
                    <span>Victoria Square Office</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Available Time (Adelaide ACST)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                        formData.timeSlot === slot
                          ? 'border-[#0077B6] bg-[#0077B6] text-white font-medium'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot.replace(' ACST', '')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preliminary Context */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Context / Key Objective (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Upcoming council consultation on rate reform, municipal election campaign in Eastern Ward, or crisis protocol review..."
                value={formData.preliminaryNotes}
                onChange={(e) => setFormData({ ...formData, preliminaryNotes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none text-slate-900"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-sm font-bold rounded-lg shadow transition-colors"
              >
                Confirm 30-Minute Audit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
