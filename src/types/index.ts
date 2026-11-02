export type PageId = 'home' | 'about' | 'services' | 'case-studies' | 'insights' | 'contact';

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
  title: string;
  subtitle: string;
  clientType: 'Metropolitan Council' | 'Regional LGA' | 'Statutory Authority' | 'Not-For-Profit';
  location: string;
  statutoryMandate: string;
  challenge: string;
  intervention: string;
  outcomes: {
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

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  statutoryFramework: string;
  deliverables: string[];
  idealFor: string[];
  metricsDelivered: string;
}

export interface BriefingFormData {
  fullName: string;
  organization: string;
  roleTitle: string;
  email: string;
  phone: string;
  consultationArea: string;
  estimatedTimeline: string;
  message: string;
}

export interface BookingSlotData {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  meetingType: 'Virtual Teams/Webex' | 'In-Person (Victoria Square)' | 'At Council Chambers';
  focusArea: string;
  preliminaryNotes: string;
}
