// Common types used across the application

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  name: string;
  type: 'individual' | 'community' | 'business';
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}

export type Theme = 'light' | 'dark' | 'system';

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
  children?: NavigationItem[];
}

export interface SeetuColors {
  primary: string;
  'primary-hover': string;
  success: string;
  'success-light': string;
  background: string;
  navy: string;
}
