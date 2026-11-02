import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Building2, 
  Menu, 
  X, 
  Eye, 
  Type
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: () => void;
  highContrast: boolean;
  onToggleHighContrast: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAuditModal,
  highContrast,
  onToggleHighContrast,
  fontSize,
  onChangeFontSize,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontMenuOpen, setFontMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About & Leadership' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'insights', label: 'Civic Audit & Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1B365D] text-white border-b border-[#2C4872] shadow-sm transition-colors">
      {/* Accessibility Sub-Strip (Quiet, accessible utility) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#12243E] text-xs text-slate-300 border-b border-[#1E375B]">
        <div className="flex items-center gap-4">
          <span>South Australia Local Government & Statutory Comms Advisory</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Victoria Square / Tarntanyangga, Adelaide SA 5000</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>LGA Procurement Panel Registered</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Accessibility:</span>
          {/* High Contrast Toggle */}
          <button
            onClick={onToggleHighContrast}
            aria-pressed={highContrast}
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs transition-colors ${
              highContrast 
                ? 'bg-amber-400 text-slate-950 font-bold' 
                : 'bg-[#1E375B] text-slate-200 hover:bg-[#2A4872]'
            }`}
            title="Toggle High Contrast Display (WCAG 2.1 AA)"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{highContrast ? 'High Contrast ON' : 'High Contrast'}</span>
          </button>

          {/* Text Size Switcher */}
          <div className="relative inline-block">
            <button
              onClick={() => setFontMenuOpen(!fontMenuOpen)}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#1E375B] text-slate-200 hover:bg-[#2A4872] text-xs transition-colors"
              aria-haspopup="true"
              aria-expanded={fontMenuOpen}
              title="Adjust Text Sizing for Legibility"
            >
              <Type className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Text: {fontSize === 'normal' ? '100%' : fontSize === 'large' ? '115%' : '130%'}</span>
            </button>
            {fontMenuOpen && (
              <div 
                className="absolute right-0 mt-1 w-32 bg-white text-slate-900 rounded-md shadow-lg border border-slate-200 py-1 z-50 text-xs"
                role="menu"
              >
                <button
                  onClick={() => { onChangeFontSize('normal'); setFontMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'normal' ? 'font-bold text-teal-700 bg-teal-50' : ''}`}
                  role="menuitem"
                >
                  Standard (100%)
                </button>
                <button
                  onClick={() => { onChangeFontSize('large'); setFontMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'large' ? 'font-bold text-teal-700 bg-teal-50' : ''}`}
                  role="menuitem"
                >
                  Large (115%)
                </button>
                <button
                  onClick={() => { onChangeFontSize('xlarge'); setFontMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'xlarge' ? 'font-bold text-teal-700 bg-teal-50' : ''}`}
                  role="menuitem"
                >
                  Extra Large (130%)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md py-1 shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-inner font-bold border border-teal-400/30">
              <Building2 className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                Adelaide CivicComms
              </span>
              <span className="block text-xs font-medium text-teal-300 tracking-wider uppercase">
                Advisory & PR
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`whitespace-nowrap transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded ${
                    isActive
                      ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-teal-400'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Fast-Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAuditModal}
              className="px-4 py-2.5 text-xs lg:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B365D] whitespace-nowrap"
            >
              Book Civic Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleHighContrast}
              aria-pressed={highContrast}
              className="p-2 text-slate-200 hover:text-white"
              title="Toggle High Contrast"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#24426E] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2C4872] bg-[#12243E] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-800 text-white font-semibold'
                    : 'text-slate-200 hover:bg-[#1E375B] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-[#1E375B]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow transition-colors"
            >
              Book Civic Audit (30 Mins)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
