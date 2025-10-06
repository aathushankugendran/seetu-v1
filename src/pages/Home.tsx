

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, DollarSign, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WaitlistButton, CTAButton, ContactButton } from '@/components/ui/buttons';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="topographic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M20,70 Q40,40 60,70 T100,70" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topographic)" />
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl space-y-10">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-nunito">
              The Traditional Savings Circle,
              <br />
              <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                Rebuilt for the Digital Age
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl font-inter font-medium">
              Seetu brings group savings into the 21st century — with built-
              <br />
              in fraud protection, verified members, and guaranteed payouts.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl font-inter">
              Join the waitlist to be first to access our private beta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
              <ContactButton asChild>
                <Link to="/contact">Talk to our team</Link>
              </ContactButton>
              <WaitlistButton />
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md h-96 lg:h-[500px] relative">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 400 400" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="figureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                
                {/* Community circle with people */}
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#figureGradient)" strokeWidth="3" strokeDasharray="10,5" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" values="0 200 200;360 200 200" dur="20s" repeatCount="indefinite"/>
                </circle>
                
                {/* People figures around circle */}
                <g stroke="url(#figureGradient)" strokeWidth="2" fill="none">
                  <circle cx="200" cy="80" r="15" fill="url(#figureGradient)" opacity="0.8"/>
                  <path d="M200,95 L200,140 M185,120 L215,120 M200,140 L185,165 M200,140 L215,165" strokeLinecap="round"/>
                  
                  <circle cx="320" cy="200" r="15" fill="url(#figureGradient)" opacity="0.8"/>
                  <path d="M320,215 L320,260 M305,240 L335,240 M320,260 L305,285 M320,260 L335,285" strokeLinecap="round"/>
                  
                  <circle cx="200" cy="320" r="15" fill="url(#figureGradient)" opacity="0.8"/>
                  <path d="M200,335 L200,380 M185,360 L215,360 M200,380 L185,405 M200,380 L215,405" strokeLinecap="round"/>
                  
                  <circle cx="80" cy="200" r="15" fill="url(#figureGradient)" opacity="0.8"/>
                  <path d="M80,215 L80,260 M65,240 L95,240 M80,260 L65,285 M80,260 L95,285" strokeLinecap="round"/>
                </g>
                
                {/* Central phone with dollar signs */}
                <rect x="180" y="170" width="40" height="60" rx="8" fill="url(#phoneGradient)" opacity="0.9"/>
                <rect x="185" y="175" width="30" height="40" rx="2" fill="white" opacity="0.3"/>
                
                {/* Dollar signs floating around */}
                <text x="160" y="150" fontSize="24" fill="url(#figureGradient)" fontWeight="bold" opacity="0.8">$</text>
                <text x="240" y="180" fontSize="20" fill="url(#figureGradient)" fontWeight="bold" opacity="0.7">$</text>
                <text x="170" y="250" fontSize="18" fill="url(#figureGradient)" fontWeight="bold" opacity="0.6">$</text>
                <text x="220" y="240" fontSize="22" fill="url(#figureGradient)" fontWeight="bold" opacity="0.8">$</text>
                
                {/* Animated connecting lines */}
                <g stroke="url(#figureGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <line x1="200" y1="140" x2="200" y2="170">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="305" y1="200" x2="220" y2="200">
                    <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                  </line>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="relative py-24 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/70 text-sm mb-8 uppercase tracking-wide">
            Trusted by communities worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {[
              'Community Bank', 'FinTech Partners', 'Savings Alliance', 
              'Digital Trust', 'SafeFunds', 'Community Finance'
            ].map((partner, index) => (
              <div key={index} className="text-white/60 font-semibold text-lg hover:text-white/80 transition-colors duration-300">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              The Process
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              How Seetu Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to start saving and building wealth with your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: Users,
                title: "Sign Up & Verify",
                description: "Create your account and complete our secure identity verification process"
              },
              {
                step: 2,
                icon: DollarSign,
                title: "Join or Create",
                description: "Browse existing groups or start your own rotating savings fund"
              },
              {
                step: 3,
                icon: Clock,
                title: "Bid for Payouts",
                description: "Participate in fair bidding when you need early access to funds"
              },
              {
                step: 4,
                icon: CheckCircle,
                title: "Receive Safely",
                description: "Get guaranteed payouts with fraud protection and transparency"
              }
            ].map((item) => (
              <Card key={item.step} className="relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 font-nunito">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-32 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-blue-600 text-sm font-medium mb-4 tracking-wide uppercase">
              Security First
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              What Makes Seetu Safe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with security, transparency, and community trust at its core
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Fraud Protection Guarantee",
                description: "Advanced identity verification and secure escrow system protect every transaction",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Transparent System",
                description: "All bids, payouts, and group activities are recorded and visible to members",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: Users,
                title: "Community Verified",
                description: "Every member is verified and groups are built on trust and accountability",
                gradient: "from-purple-600 to-blue-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardContent className="p-10 text-center">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-700 via-teal-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z" fill="white" opacity="0.1"/>
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-nunito">
            Ready to Transform Your Savings?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of community members who trust Seetu for their rotating savings groups
          </p>
          <div className="flex justify-center items-center">
            <CTAButton />
          </div>
        </div>
      </section>
      
      {/* Bottom padding to extend gradient */}
      <div className="h-32 bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400"></div>
    </div>
  );
};

export default Home;
