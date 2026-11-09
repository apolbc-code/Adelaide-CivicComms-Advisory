export type PageId = 'home' | 'about' | 'services' | 'case-studies' | 'insights' | 'elections' | 'contact';

export interface AuditQuestionOption {
  id: string;
  label: string;
  description: string;
  score: number; // 0 to 25
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  recommendation: string;
}

export interface AuditQuestion {
  id: string;
  pillar: string;
  title: string;
  question: string;
  statutoryReference: string;
  options: AuditQuestionOption[];
}

export interface AuditResult {
  totalScore: number;
  percentage: number;
  ratingLabel: string;
  summary: string;
  breakdown: {
    pillar: string;
    score: number;
    maxScore: number;
    recommendation: string;
    riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  }[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  clientType: 'Councils & Government' | 'Not-For-Profit' | 'Political & Election' | 'Statutory Authority';
  location: string;
  statutoryMandate: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    metric: string;
    label: string;
    context: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
    organization: string;
  };
  tags: string[];
}

export interface ServicePillar {
  id: string;
  letter: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
  benefits: string[];
  statutoryFocus: string;
  idealFor: string[];
  deliveredMetric: string;
}

export interface AudiencePainPoint {
  segment: string;
  subtitle: string;
  points: string[];
  solution: string;
  ctaText: string;
  targetPage: PageId;
}

export interface DownloadableResource {
  id: string;
  title: string;
  category: string;
  format: string;
  pages: string;
  description: string;
  downloadCount: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  author: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  keyTakeaway: string;
  contentSnippet?: string[];
}

export interface BriefingFormData {
  fullName: string;
  organization: string;
  roleTitle: string;
  email: string;
  phone: string;
  sector: 'Council / Local Government' | 'Government Agency' | 'Not-for-Profit / Community' | 'Candidate / Elected Official';
  consultationArea: string;
  estimatedTimeline: string;
  message: string;
  subscribeNewsletter: boolean;
}

export interface BookingSlotData {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  meetingType: 'Virtual Teams/Webex' | 'In-Person (Victoria Square)' | 'On-Site at Chambers/Office';
  focusArea: string;
  preliminaryNotes: string;
}
