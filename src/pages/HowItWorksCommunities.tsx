

import { Card, CardContent } from '@/components/ui/card';
import { Users, Settings, Calendar, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const HowItWorksCommunities = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-nunito">
              Perfect for Your
              <br />
              <span className="text-[#1851fc]">
                Organization
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a temple committee, family group, or professional network
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[160px] text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started →
                </span>
              </button>
              <button 
                className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[160px] text-center"
                onClick={() => {
                  document.getElementById('community-details')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Details */}
      <section id="community-details" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">
              Community <span className="text-[#1851fc]">Types</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏛️",
                title: "Religious Groups",
                description: "Temple committees, church groups, mosque communities"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Networks", 
                description: "Extended families, cousin circles, multi-generational groups"
              },
              {
                icon: "🌍",
                title: "Cultural Organizations",
                description: "Diaspora communities, cultural associations, ethnic groups"
              },
              {
                icon: "💼",
                title: "Professional Groups",
                description: "Workplace teams, industry associations, alumni networks"
              }
            ].map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{group.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{group.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">
              Simple Setup for <span className="text-[#1851fc]">Organizers</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Complete control over your group settings and member management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: Users,
                title: "Set Group Details",
                description: "Define group name, member count, and monthly contribution amount"
              },
              {
                step: 2,
                icon: Calendar,
                title: "Choose Schedule",
                description: "Set start date and frequency (monthly, bi-weekly, etc.)"
              },
              {
                step: 3,
                icon: Settings,
                title: "Customize Rules",
                description: "Enable/disable bidding, set payout order, allow mid-cycle joining"
              },
              {
                step: 4,
                icon: Shield,
                title: "Manage Members",
                description: "Invite members and manage their participation throughout the cycle"
              }
            ].map((item) => (
              <Card key={item.step} className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1851fc] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1851fc] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-base text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">
              Flexible Interest <span className="text-[#1851fc]">Systems</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Choose the system that works best for your community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#1851fc] rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900">Bidding System</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Members bid to receive early payouts. Lowest bidder wins, and interest is distributed among other members.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">Fair and transparent bidding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">Interest rewards for lenders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">Flexible payout timing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#1851fc] rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900">Fixed Order</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Pre-determined payout order with no interest bidding. Simple and traditional approach.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">Predictable payout schedule</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">No interest complications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#1851fc]" />
                    <span className="text-gray-600 text-sm">Traditional community style</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust and Safety */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl text-gray-900 mb-4">
              Built for Community <span className="text-[#1851fc]">Trust</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              You know your members, we provide the security and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Basic Verification",
                description: "All members complete identity verification, no credit checks required"
              },
              {
                icon: Users,
                title: "Community Control",
                description: "Organizers are responsible for vetting and managing their group members"
              },
              {
                icon: Settings,
                title: "Flexible Management",
                description: "Complete control over group rules, member permissions, and payout settings"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1851fc] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1851fc] text-white">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl mb-6">
            Ready to Digitize Your Community Fund?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Join religious groups, families, and organizations already using Seetu to manage their rotating savings
          </p>
          <div className="flex justify-center items-center">
            <button 
              className="bg-white text-[#1851fc] hover:bg-gray-50 font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[180px] text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Group Today →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksCommunities;
