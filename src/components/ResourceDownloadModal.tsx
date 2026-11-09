import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DownloadableResource } from '../types';

interface ResourceDownloadModalProps {
  resource: DownloadableResource | null;
  onClose: () => void;
}

export const ResourceDownloadModal: React.FC<ResourceDownloadModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleTitle: '',
  });

  if (!resource) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  const handleReset = () => {
    setDownloaded(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#003B5C] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2A9D8F] flex items-center justify-center text-white">
              <FileText className="w-5 h-5 text-teal-50" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#D4A017] uppercase tracking-wider block">
                Executive Civic Resource
              </span>
              <h2 id="resource-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                {resource.title}
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

        {downloaded ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-teal-50 text-[#2A9D8F] rounded-full flex items-center justify-center mx-auto border-2 border-teal-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#003B5C]">
                Resource Ready for Download
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. A copy of <strong>{resource.title}</strong> has been prepared for <strong>{formData.organization}</strong> and emailed to <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-left space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Document Format:</span>
                <span className="font-semibold">{resource.format} ({resource.pages})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Statutory Standard:</span>
                <span className="font-semibold text-[#0077B6]">SA LGA Act 1999 & WCAG 2.1 AA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Verification Hash:</span>
                <span className="font-mono text-slate-500">SHA-256 Verified</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#download-complete"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading: ${resource.title}.pdf (${resource.pages})\nCompliments of Adelaide CivicComms Advisory.`);
                  handleReset();
                }}
                className="px-5 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-semibold rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save PDF File Now</span>
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="p-6 space-y-4">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-900">{resource.description}</p>
              <div className="flex items-center gap-3 text-slate-500 text-[11px] pt-1">
                <span>{resource.format}</span>
                <span>·</span>
                <span>{resource.pages}</span>
                <span>·</span>
                <span>Used by {resource.downloadCount}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Adams"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@council.sa.gov.au or org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Council / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. City of Burnside"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Role Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Comms Manager / Candidate"
                    value={formData.roleTitle}
                    onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>Zero spam · Strictly confidential</span>
              </span>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0077B6] hover:bg-[#005B8C] text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Instant Download</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
