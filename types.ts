import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Automation' | 'Manual' | 'Tools' | 'Languages';
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}