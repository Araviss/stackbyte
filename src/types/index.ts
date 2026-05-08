export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export interface EngagementModel {
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  honeypot?: string;
}
