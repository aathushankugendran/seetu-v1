
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Search, DollarSign, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksIndividuals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden" style={{ marginTop: '-4rem' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pt-32 lg:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,300 Q250,200 500,300 T1000,300 L1000,0 L0,0 Z"
              fill="url(#grad1)"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q250,400 500,500 T1000,500 L1000,0 L0,0 Z"
              fill="url(#grad1)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20 mb-6">
              For Individuals
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-nunito leading-tight">
              Smart Savings
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Marketplace
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join our marketplace to connect with verified savers and build wealth through rotating savings groups. 
            Perfect for individuals looking to save systematically with community support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-nunito min-w-[200px]"
            >
              Join the Marketplace
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 font-nunito min-w-[200px]"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              Your Journey to 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Smart Savings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get matched with like-minded savers based on your goals and financial capacity
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Profile Setup",
                description: "Complete identity verification and set your monthly savings goals",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "AI Matching",
                description: "Get matched with compatible group members based on your profile",
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "All groups managed by Seetu with full fraud protection",
                gradient: "from-teal-500 to-teal-600"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              Simple <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From signup to your first payout in just a few steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: CheckCircle,
                title: "Complete Profile",
                description: "Identity verification and soft credit check for group matching"
              },
              {
                step: 2,
                icon: Users,
                title: "Get Matched",
                description: "AI connects you with compatible savers based on your goals"
              },
              {
                step: 3,
                icon: DollarSign,
                title: "Start Saving",
                description: "Begin monthly contributions with your matched group"
              },
              {
                step: 4,
                icon: TrendingUp,
                title: "Receive Payouts",
                description: "Get your turn to receive the pooled savings amount"
              }
            ].map((item, index) => (
              <Card key={item.step} className="relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg font-nunito">
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

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path d="M0,100 C300,200 600,0 1200,100 L1200,400 L0,400 Z" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-nunito animate-fade-in">
            Ready to Start Saving 
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Smarter?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join our marketplace and get matched with your perfect savings group today
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-nunito"
            >
              Join Marketplace Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksIndividuals;
