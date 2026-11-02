import React from 'react';
import { PageId } from '../types';
import { Building2, MapPin, Mail, Phone, ShieldCheck, FileCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <footer className="bg-[#12243E] text-slate-300 border-t border-[#1E375B]">
      {/* Acknowledgment of Country */}
      <div className="bg-[#0D1A2D] py-4 px-4 sm:px-6 lg:px-8 border-b border-[#1A304F] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            <strong className="text-slate-300">Acknowledgment of Country:</strong> Adelaide CivicComms Advisory acknowledges the Kaurna Meyunna people as the traditional custodians of the Adelaide Plains (Tarntanya) where we live, advise, and operate. We pay our respects to Elders past, present, and emerging.
          </p>
          <span className="shrink-0 text-slate-500 text-[11px]">
            Tarntanyangga · Victoria Square, Adelaide SA 5000
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mandate */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                <Building2 className="w-5 h-5 text-teal-100" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white tracking-tight leading-none">
                  Adelaide CivicComms
                </span>
                <span className="text-xs text-teal-400 font-medium tracking-wider uppercase">
                  Advisory & Public Relations
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Strategic public relations, digital engagement, and crisis mitigation tailored specifically to South Australian local councils (LGAs), statutory authorities, and community not-for-profits.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>SA Local Government Act 1999 & Caretaker Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>LGA Procurement Registered Advisory Vendor</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  About & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Services & Scope
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Civic Audit & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Contact & Briefing
                </button>
              </li>
            </ul>
          </div>

          {/* Advisory Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Community Consultation & YourSAy</li>
              <li>24/7 Digital Crisis Mitigation</li>
              <li>Social Marketing & Behaviour Change</li>
              <li>Caretaker Period Governance</li>
              <li>WCAG 2.1 AA Digital Remediation</li>
              <li>Council Chamber PR Protocols</li>
            </ul>
          </div>

          {/* Adelaide Office & Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Adelaide Office
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Victoria Square / Tarntanyangga<br />
                  Adelaide SA 5000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>(08) 8212 9400</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-teal-300 hover:underline">
                  advisory@civiccomms.sa.gov.au
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenAuditModal}
                className="w-full text-center px-3.5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-colors"
              >
                Schedule 30-Min Audit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1E375B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Adelaide CivicComms Advisory Pty Ltd. All rights reserved. ABN 42 618 920 114.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Statutory Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>WCAG 2.1 AA Certified</span>
            <span aria-hidden="true">·</span>
            <span>Freedom of Information Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
