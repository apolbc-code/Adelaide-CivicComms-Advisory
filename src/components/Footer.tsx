import React, { useState } from 'react';
import { PageId } from '../types';
import { civicImages } from '../assets/images';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  FileCheck, 
  Linkedin, 
  Send, 
  CheckCircle2,
  Vote
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#002840] text-slate-300 border-t border-[#001F33]">
      {/* Acknowledgment of Country */}
      <div className="bg-[#001F33] py-4 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>
            <strong className="text-slate-200">Acknowledgment of Country:</strong> Adelaide CivicComms Advisory acknowledges the Kaurna Meyunna people as the traditional custodians of the Adelaide Plains (Tarntanya) where our Victoria Square office stands. We pay our respects to Elders past, present, and emerging.
          </p>
          <span className="shrink-0 text-slate-400 text-[11px] font-medium">
            Tarntanyangga · Victoria Square, Adelaide SA 5000
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mandate */}
          <div className="lg:col-span-2 space-y-4">
            {/* Responsive Official Branding */}
            <div>
              {/* Desktop: Full Adelaide CivicComms Advisory logo with tagline */}
              <div className="hidden md:flex items-center gap-4">
                <div className="h-20 w-20 rounded-xl bg-white p-2 shadow-sm flex items-center justify-center shrink-0 border border-white/20">
                  <img
                    src={civicImages.logo}
                    alt="Adelaide CivicComms Advisory - Full Logo with Tagline"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white tracking-tight leading-tight font-heading">
                    Adelaide CivicComms Advisory
                  </span>
                  <span className="text-xs text-[#D4A017] font-semibold tracking-wider uppercase block">
                    Strategic Communications for a Stronger South Australia
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Public Affairs · Community Engagement · Elections
                  </span>
                </div>
              </div>

              {/* Mobile: Approved compact logo version (icon and Adelaide CivicComms only) */}
              <div className="flex md:hidden items-center gap-3">
                <div className="h-12 w-auto rounded-lg bg-white p-1.5 shadow-xs flex items-center justify-center shrink-0 border border-white/20">
                  <img
                    src={civicImages.logoCompact}
                    alt="Adelaide CivicComms - Approved Compact Logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="block text-base font-bold text-white tracking-tight leading-tight font-heading">
                    Adelaide CivicComms
                  </span>
                  <span className="text-xs text-[#D4A017] font-semibold tracking-wider uppercase">
                    Advisory & Public Affairs
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Integrity-led community engagement, strategic communications, public affairs, and election communications backed by over 18 years of real public sector and parliamentary experience across South Australia.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>SA Local Government Act 1999 & Caretaker Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span>LGA Procurement Registered Advisory Vendor</span>
              </div>
            </div>

            {/* Newsletter Lead Capture */}
            <div className="pt-4 max-w-sm">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">
                SA Civic Comms Dispatch
              </span>
              <p className="text-xs text-slate-400 mb-2">
                Quarterly policy intelligence, consultation insights, and caretaker guidance.
              </p>
              {newsletterSubscribed ? (
                <div className="p-2.5 bg-[#2A9D8F]/20 border border-[#2A9D8F] rounded-lg text-xs text-teal-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
                  <span>Subscribed! Check your inbox for the latest edition.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="name@council.sa.gov.au"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#0077B6] hover:bg-[#005B8C] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Website Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  About & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Services & 4 Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Case Studies & Evidence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Insights Hub & Toolkits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('elections')}
                  className="hover:text-white hover:underline transition-colors text-left text-teal-300 font-medium flex items-center gap-1.5"
                >
                  <Vote className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Election Communications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Contact & Briefing
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Our 4 Practice Pillars
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="hover:text-slate-200">
                <strong className="text-white block font-medium">Pillar A: Community Engagement</strong>
                <span>Public consultation, YourSAy, citizen juries</span>
              </li>
              <li className="hover:text-slate-200">
                <strong className="text-white block font-medium">Pillar B: Strategic PR & Public Affairs</strong>
                <span>Crisis mitigation, issues management, media</span>
              </li>
              <li className="hover:text-slate-200">
                <strong className="text-white block font-medium">Pillar C: Social Marketing</strong>
                <span>Behaviour change, waste diversion, social reels</span>
              </li>
              <li className="hover:text-slate-200">
                <strong className="text-white block font-medium">Pillar D: Election Communications</strong>
                <span>Candidate branding, voter outreach, ECSA compliance</span>
              </li>
            </ul>
          </div>

          {/* Adelaide Office & Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Adelaide Office
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span className="text-xs">
                  Victoria Square / Tarntanyangga<br />
                  Adelaide SA 5000, Australia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span className="text-xs">(08) 8212 9400</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <span className="text-xs text-blue-200 hover:underline">
                  advisory@adelaideciviccomms.com.au
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Linkedin className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-slate-300 hover:text-white hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => onOpenAuditModal()}
                className="w-full text-center px-3.5 py-2 text-xs font-bold text-white bg-[#0077B6] hover:bg-[#005B8C] rounded-lg shadow-sm transition-colors"
              >
                Book 30-Min Civic Audit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Adelaide CivicComms Advisory Pty Ltd. All rights reserved. ABN 42 618 920 114.
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
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
