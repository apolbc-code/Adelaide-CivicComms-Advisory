/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { CaseStudiesView } from './components/views/CaseStudiesView';
import { InsightsView } from './components/views/InsightsView';
import { ElectionsView } from './components/views/ElectionsView';
import { ContactView } from './components/views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditModalFocus, setAuditModalFocus] = useState<string>('Community Consultation & YourSAy');
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Handle URL hash routing on initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'case-studies', 'insights', 'elections', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when navigating and scroll to top
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuditModal = (focusArea?: string) => {
    if (focusArea) {
      setAuditModalFocus(focusArea);
    }
    setIsAuditModalOpen(true);
  };

  // High contrast effect on root
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Font size scale factor
  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-[112%]';
    if (fontSize === 'xlarge') return 'text-[125%]';
    return 'text-[100%]';
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F7F9FB] text-[#333333] transition-all duration-150 ${getFontSizeClass()}`}>
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#0077B6] focus:text-white focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
      >
        Skip to main content
      </a>

      {/* Persistent Sticky Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuditModal={handleOpenAuditModal}
        highContrast={highContrast}
        onToggleHighContrast={() => setHighContrast(!highContrast)}
        fontSize={fontSize}
        onChangeFontSize={(size) => setFontSize(size)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'insights' && (
          <InsightsView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'elections' && (
          <ElectionsView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenAuditModal={handleOpenAuditModal}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Global 30-Minute Civic Strategy Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialFocus={auditModalFocus}
      />
    </div>
  );
}
