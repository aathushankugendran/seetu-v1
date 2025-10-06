// Waitlist API service for AWS Lambda integration
export interface WaitlistSubmission {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    createdAt: string;
  };
  errors?: string[];
}

export interface WaitlistStats {
  success: boolean;
  data?: {
    totalSignups: number;
    recentSignups: number;
    lastUpdated: string;
  };
  message?: string;
}

class WaitlistService {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = import.meta.env.VITE_WAITLIST_API_URL || 'http://localhost:3000';
    this.timeout = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000', 10);
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: `HTTP ${response.status}: ${response.statusText}`,
        }));
        throw new Error(errorData.message || 'Request failed');
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - please try again');
        }
        throw error;
      }
      
      throw new Error('An unexpected error occurred');
    }
  }

  async submitToWaitlist(data: WaitlistSubmission): Promise<WaitlistResponse> {
    try {
      return await this.makeRequest<WaitlistResponse>('/waitlist', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Waitlist submission error:', error);
      
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.message.includes('already registered')) {
          throw new Error('This email is already registered for our waitlist');
        }
        if (error.message.includes('timeout')) {
          throw new Error('Request timed out. Please check your connection and try again');
        }
        if (error.message.includes('Failed to fetch')) {
          throw new Error('Unable to connect to our servers. Please try again later');
        }
      }
      
      throw new Error('Failed to join waitlist. Please try again');
    }
  }

  async getWaitlistStats(): Promise<WaitlistStats> {
    try {
      return await this.makeRequest<WaitlistStats>('/waitlist/stats', {
        method: 'GET',
      });
    } catch (error) {
      console.error('Get waitlist stats error:', error);
      throw new Error('Failed to fetch waitlist statistics');
    }
  }
}

export const waitlistService = new WaitlistService();
