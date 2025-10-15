

import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Shield, TrendingUp, Heart, Building, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ marginTop: '-4rem' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pt-32 lg:pt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 font-nunito leading-tight">
              About 
              <span className="text-[#1851fc]">
                Seetu
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're modernizing traditional community finance to make it secure, scalable, and accessible for diaspora communities across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-nunito">
                Our <span className="text-[#1851fc]">Mission</span>
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Seetu digitizes ROSCAs (Rotating Savings and Credit Associations) — known by different names globally: 
                susu, kootu, pardner, chit funds, and more. These trust-based community lending groups have existed for centuries 
                across South Asian, African, Caribbean, and other diaspora communities.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                We're building a financial system rooted in community trust, not institutional extraction, 
                offering an accessible alternative to predatory credit while preserving the cultural importance of collective savings.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, title: "Global", subtitle: "Tradition" },
                { icon: Shield, title: "Modern", subtitle: "Security" },
                { icon: Users, title: "Community", subtitle: "Powered" },
                { icon: TrendingUp, title: "Accessible", subtitle: "Finance" }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#1851fc] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-base font-bold text-gray-900 font-nunito">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-nunito">
              Our <span className="text-[#1851fc]">Values</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Community First",
                description: "We believe in the power of collective action and mutual support",
                icon: Heart
              },
              {
                title: "Cultural Respect",
                description: "Honoring traditional practices while adding modern security",
                icon: Globe
              },
              {
                title: "Transparency",
                description: "Open, honest operations with no hidden fees or surprises",
                icon: Shield
              },
              {
                title: "Accessibility",
                description: "Financial tools that work for everyone, regardless of credit history",
                icon: Users
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1851fc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-base mb-3 text-gray-900 font-nunito">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-nunito">
              Our <span className="text-[#1851fc]">Approach</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Two complementary platforms serving different community needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1851fc] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">Organization Seetu</h3>
                <p className="text-gray-600 mb-6">
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
                      <div className="w-2 h-2 bg-[#1851fc] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#1851fc] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-nunito">Marketplace Seetu</h3>
                <p className="text-gray-600 mb-6">
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
                      <div className="w-2 h-2 bg-[#1851fc] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-[#1851fc] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-nunito">
            Backed by 
            <span className="block text-white">
              Experts
            </span>
          </h2>
          <p className="text-base text-white/90 mb-8">
            Seetu.ca is incorporated in Canada and mentored by industry leaders who understand both traditional finance and emerging fintech.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#1851fc]" />
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
