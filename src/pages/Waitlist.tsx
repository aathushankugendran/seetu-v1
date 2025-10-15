import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight, Users, Clock, Star, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { waitlistService, WaitlistSubmission } from '@/services/waitlistService';

// Country data with flags (using country codes for flag emojis)
const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
  { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: 'SK', name: 'Slovakia', flag: '🇸🇰' },
  { code: 'LT', name: 'Lithuania', flag: '🇱🇹' },
  { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
  { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
  { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
  { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱' },
  { code: 'MK', name: 'North Macedonia', flag: '🇲🇰' },
  { code: 'ME', name: 'Montenegro', flag: '🇲🇪' },
  { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
  { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: 'XK', name: 'Kosovo', flag: '🇽🇰' },
].sort((a, b) => a.name.localeCompare(b.name));

const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const submissionData: WaitlistSubmission = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        country: formData.country
      };
      
      const response = await waitlistService.submitToWaitlist(submissionData);
      
      if (response.success) {
        setIsSubmitted(true);
      } else {
        setError(response.message || 'Failed to join waitlist');
      }
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Logo - positioned exactly like in Layout component */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 pb-4 pt-4">
            <div className="bg-[#1851fc] backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-6 py-3" style={{ width: '85%' }}>
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                  <img 
                    src="/logos/white-logo.svg" 
                    alt="Seetu Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-nunito">
              You're on the list! 🎉
            </h1>
            
            <p className="text-base text-gray-600 mb-6">
              Thank you for joining our waitlist. We'll notify you as soon as Seetu launches!
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center space-x-2 text-[#1851fc] mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">What's next?</span>
              </div>
              <p className="text-sm text-gray-600">
                We'll send you early access, exclusive updates, and special launch offers.
              </p>
            </div>
            
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-[#1851fc] hover:bg-[#1444d9] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
              {/* Logo - positioned exactly like in Layout component */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 pb-4 pt-4">
            <div className="bg-[#1851fc] backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-6 py-3" style={{ width: '12%' }}>
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                  <img 
                    src="/logos/white-logo.svg" 
                    alt="Seetu Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-nunito">
              Join the
              <span className="text-[#1851fc]"> Waitlist</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience the future of group savings. 
              Get early access and exclusive launch benefits.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600 text-sm">Be the first to try Seetu when we launch</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Exclusive Updates</h3>
              <p className="text-gray-600 text-sm">Get insider information about new features</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Launch Benefits</h3>
              <p className="text-gray-600 text-sm">Special offers and bonuses for early adopters</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <Label htmlFor="country" className="text-gray-700 font-medium">
                  Country
                </Label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full h-12 border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 bg-white"
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || !formData.firstName || !formData.lastName || !formData.email || !formData.country}
                className="w-full h-12 bg-[#1851fc] hover:bg-[#1444d9] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Joining Waitlist...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-6">
              By joining the waitlist, you agree to receive updates about Seetu's launch.
              We respect your privacy and will never spam you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist; 