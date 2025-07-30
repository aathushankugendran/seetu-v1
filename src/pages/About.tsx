
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Shield, TrendingUp, Heart, Building, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden" style={{ marginTop: '-4rem' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pt-32 lg:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,350 Q250,250 500,350 T1000,350 L1000,0 L0,0 Z"
              fill="url(#aboutGrad)"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-nunito leading-tight">
              About 
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Seetu
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're modernizing traditional community finance to make it secure, scalable, and accessible for diaspora communities across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-nunito">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Seetu digitizes ROSCAs (Rotating Savings and Credit Associations) — known by different names globally: 
                susu, kootu, pardner, chit funds, and more. These trust-based community lending groups have existed for centuries 
                across South Asian, African, Caribbean, and other diaspora communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're building a financial system rooted in community trust, not institutional extraction, 
                offering an accessible alternative to predatory credit while preserving the cultural importance of collective savings.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: Globe, title: "Global", subtitle: "Tradition", gradient: "from-blue-500 to-blue-600" },
                { icon: Shield, title: "Modern", subtitle: "Security", gradient: "from-cyan-500 to-cyan-600" },
                { icon: Users, title: "Community", subtitle: "Powered", gradient: "from-teal-500 to-teal-600" },
                { icon: TrendingUp, title: "Accessible", subtitle: "Finance", gradient: "from-blue-600 to-cyan-600" }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg font-bold text-gray-900 font-nunito">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Community First",
                description: "We believe in the power of collective action and mutual support",
                icon: Heart,
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Cultural Respect",
                description: "Honoring traditional practices while adding modern security",
                icon: Globe,
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Transparency",
                description: "Open, honest operations with no hidden fees or surprises",
                icon: Shield,
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                title: "Accessibility",
                description: "Financial tools that work for everyone, regardless of credit history",
                icon: Users,
                gradient: "from-teal-500 to-teal-600"
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900 font-nunito">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two complementary platforms serving different community needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-lg animate-fade-in">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-nunito">Organization Seetu</h3>
                <p className="text-gray-700 mb-6">
                  For existing communities who already run informal rotating savings and want to manage them digitally.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Families, temples, cultural organizations",
                    "Organizer controls all settings and members",
                    "Flexible rules and payout systems",
                    "Basic verification, community trust"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-cyan-50 to-teal-50 border-0 shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-nunito">Marketplace Seetu</h3>
                <p className="text-gray-700 mb-6">
                  For individuals who want to join rotating savings groups with strangers, matched by our AI system.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Individual users seeking saving groups",
                    "AI-powered matching based on goals and capacity",
                    "Standardized bidding system and rules",
                    "Enhanced verification and credit checks"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path d="M0,150 C300,50 600,250 1200,150 L1200,400 L0,400 Z" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-nunito animate-fade-in">
            Backed by 
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Seetu.ca is incorporated in Canada and mentored by industry leaders who understand both traditional finance and emerging fintech.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white font-nunito">Sarah Chen</div>
                  <div className="text-sm text-white/80">Chief Investment Officer, Maple Capital</div>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Seetu represents the future of community finance — where traditional wisdom meets modern security."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
