import React, { useState } from 'react';
import { PageId } from '../types';
import { civicImages } from '../assets/images';
import { 
  Building2, 
  Menu, 
  X, 
  Eye, 
  Type,
  Vote,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuditModal: (focusArea?: string) => void;
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

  const navLinks: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'insights', label: 'Insights Hub' },
    { id: 'elections', label: 'Election Comms', highlight: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#003B5C] text-white border-b border-[#002840] shadow-sm transition-colors">
      {/* Accessibility Sub-Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#002840] text-xs text-slate-300 border-b border-white/10">
        <div className="flex items-center gap-4 text-[11px]">
          <span>South Australia Strategic Communications, Public Affairs & Civic Advisory</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Victoria Square / Tarntanyangga, Adelaide SA 5000</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-[#D4A017] font-semibold">LGA Procurement Pre-Qualified</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-[11px]">Accessibility:</span>
          {/* High Contrast Toggle */}
          <button
            onClick={onToggleHighContrast}
            aria-pressed={highContrast}
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] transition-colors ${
              highContrast 
                ? 'bg-[#D4A017] text-slate-950 font-bold' 
                : 'bg-white/10 text-slate-200 hover:bg-white/15'
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
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-slate-200 hover:bg-white/15 text-[11px] transition-colors"
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
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'normal' ? 'font-bold text-[#0077B6] bg-blue-50' : ''}`}
                  role="menuitem"
                >
                  Standard (100%)
                </button>
                <button
                  onClick={() => { onChangeFontSize('large'); setFontMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'large' ? 'font-bold text-[#0077B6] bg-blue-50' : ''}`}
                  role="menuitem"
                >
                  Large (115%)
                </button>
                <button
                  onClick={() => { onChangeFontSize('xlarge'); setFontMenuOpen(false); }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-slate-100 ${fontSize === 'xlarge' ? 'font-bold text-[#0077B6] bg-blue-50' : ''}`}
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
          {/* Zone 1: Responsive Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md py-1 shrink-0 group"
            aria-label="Adelaide CivicComms Advisory Home"
          >
            {/* Desktop: Full Adelaide CivicComms Advisory logo with tagline */}
            <div className="hidden md:flex items-center gap-3">
              <div className="h-14 w-14 rounded-lg bg-white p-1 shadow-xs flex items-center justify-center shrink-0 border border-white/20 transition-transform group-hover:scale-102">
                <img
                  src={civicImages.logo}
                  alt="Adelaide CivicComms Advisory - Full Brand Logo with Tagline"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="hidden xl:flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight leading-tight font-heading">
                  Adelaide CivicComms
                </span>
                <span className="text-[10px] text-[#D4A017] font-semibold tracking-wider uppercase">
                  Advisory & Public Affairs
                </span>
              </div>
            </div>

            {/* Mobile: Approved compact logo version (icon and Adelaide CivicComms only) */}
            <div className="flex md:hidden items-center">
              <div className="h-11 w-auto rounded-lg bg-white px-2 py-1 shadow-xs flex items-center justify-center shrink-0 border border-white/20">
                <img
                  src={civicImages.logoCompact}
                  alt="Adelaide CivicComms - Approved Compact Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`whitespace-nowrap transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded text-xs lg:text-sm ${
                    isActive
                      ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4A017]'
                      : link.highlight
                      ? 'text-teal-300 hover:text-white font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {link.highlight && <Vote className="w-3.5 h-3.5 text-[#D4A017]" />}
                    <span>{link.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Fast-Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAuditModal()}
              className="px-4 py-2.5 text-xs lg:text-sm font-bold text-white bg-[#0077B6] hover:bg-[#005B8C] active:bg-[#004870] rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 whitespace-nowrap"
            >
              Book Civic Strategy Audit
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
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
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
        <div className="md:hidden border-t border-white/10 bg-[#002840] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#0077B6] text-white font-bold'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4A017] text-slate-950 uppercase">
                    Elections
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-[#0077B6] hover:bg-[#005B8C] rounded-lg shadow transition-colors"
            >
              Book a Civic Strategy Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
