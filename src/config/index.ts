// Application configuration

import { QueryClient } from '@tanstack/react-query';

// Query client configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: unknown) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as { status: number }).status;
          if (status >= 400 && status < 500) {
            return false;
          }
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Environment configuration
export const ENV = {
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  VITE_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME || 'Seetu',
  VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
} as const;

// Feature flags
export const FEATURES = {
  ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  DEBUG_MODE: import.meta.env.NODE_ENV === 'development',
  MAINTENANCE_MODE: import.meta.env.VITE_MAINTENANCE_MODE === 'true',
} as const;
