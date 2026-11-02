import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Shield, Video, MapPin, User, Mail, Phone } from 'lucide-react';
import { BookingSlotData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, initialFocus = 'Community Consultation' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingSlotData>({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    date: '2026-11-10',
    timeSlot: '10:00 AM ACST',
    meetingType: 'Virtual Teams/Webex',
    focusArea: initialFocus,
    preliminaryNotes: '',
  });

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
        <div className="bg-[#1B365D] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Calendar className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <h2 id="audit-modal-title" className="text-lg font-bold text-white leading-tight">
                Request 30-Minute Civic Strategy Audit
              </h2>
              <p className="text-xs text-teal-200">
                Confidential executive briefing for Mayors, CEOs & Senior Comms Leads
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-md hover:bg-[#284873] transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                Civic Strategy Audit Confirmed
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.contactName}</strong>. Your confidential 30-minute session for <strong>{formData.organization}</strong> has been logged with our Victoria Square executive advisory desk.
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
                <span className="font-semibold text-slate-900">{formData.focusArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Official Confirmation Ref:</span>
                <span className="font-mono font-bold text-teal-700">SA-LGA-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-900 text-left max-w-md mx-auto flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span>
                <strong>Statutory Caretaker Guarantee:</strong> All discussions remain strictly confidential and privileged under SA public sector professional confidentiality guidelines.
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1B365D] hover:bg-[#12243E] text-white text-sm font-semibold rounded-lg shadow transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center justify-between">
              <span><strong>Pre-qualifications:</strong> LGA Procurement Panel #LGA-PR-2024</span>
              <span className="text-teal-700 font-medium">Free 30-Min Executive Review</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Organization / Council <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. City of Adelaide / regional LGA"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name & Official Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe (CEO / Comms Director)"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
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
                    placeholder="name@council.sa.gov.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Direct Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(08) 8xxx xxxx / mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
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
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900 bg-white"
                >
                  <option value="Community Consultation & YourSAy">Community Consultation & YourSAy</option>
                  <option value="24/7 Digital Crisis & Chamber PR">24/7 Digital Crisis & Chamber PR</option>
                  <option value="Social Marketing & Waste Behaviour">Social Marketing & Behaviour Change</option>
                  <option value="Caretaker & Election Governance">Caretaker & Election Governance</option>
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
                        ? 'border-teal-600 bg-teal-50 text-teal-800 font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>MS Teams / Webex</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingType: 'In-Person (Victoria Square)' })}
                    className={`p-2 rounded border flex items-center justify-center gap-1.5 transition-colors ${
                      formData.meetingType === 'In-Person (Victoria Square)'
                        ? 'border-teal-600 bg-teal-50 text-teal-800 font-bold'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
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
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900 bg-white"
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
                          ? 'border-teal-600 bg-teal-600 text-white font-medium'
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
                Context / Specific Challenge (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Upcoming Annual Business Plan consultation, tree canopy code amendment, or caretaker protocol review..."
                value={formData.preliminaryNotes}
                onChange={(e) => setFormData({ ...formData, preliminaryNotes: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-slate-900"
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
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-lg shadow transition-colors"
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
