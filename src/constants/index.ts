// Application constants

export const APP_CONFIG = {
  name: 'Seetu',
  description: 'Digital rotating savings platform with modern UI',
  version: '1.0.0',
  author: 'Seetu Team',
  url: 'https://seetu.com',
} as const;

export const API_ENDPOINTS = {
  WAITLIST: '/waitlist',
  WAITLIST_STATS: '/waitlist/stats',
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  WAITLIST: '/waitlist',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  PRICING: '/pricing',
  HOW_IT_WORKS: {
    INDIVIDUALS: '/how-it-works/individuals',
    COMMUNITIES: '/how-it-works/communities',
    BUSINESSES: '/how-it-works/businesses',
  },
} as const;

export const WAITLIST_TYPES = {
  INDIVIDUAL: 'individual',
  COMMUNITY: 'community',
  BUSINESS: 'business',
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
