

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Settings, Calendar, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const HowItWorksCommunities = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ marginTop: '-4rem' }}>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <p className="text-[#1851fc] text-sm font-medium mb-4 tracking-wide uppercase">
                For Communities
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Digitize Your
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1851fc] mb-8 leading-tight">
                Community Fund
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Digitize your existing rotating savings groups with powerful management tools. 
              Perfect for families, religious groups, cultural organizations, and close-knit communities.
            </p>
            
            <div className="flex justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-[#1851fc] text-white hover:bg-[#1444d9] font-semibold px-8 py-4 text-base min-w-[220px] h-14 rounded-lg shadow-lg transition-all duration-200"
              >
                Organize Your Group
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Perfect for Your Organization
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Whether you're a temple committee, family group, or professional network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">{group.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Simple Setup for Organizers
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Complete control over your group settings and member management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-14 h-14 bg-[#1851fc] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1851fc] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-seetu-navy mb-4">
              Flexible Interest Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Choose the system that works best for your community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-seetu-primary rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-seetu-navy">Bidding System</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  Members bid to receive early payouts. Lowest bidder wins, and interest is distributed among other members.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">Fair and transparent bidding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">Interest rewards for lenders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">Flexible payout timing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-seetu-success rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-seetu-navy">Fixed Order</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  Pre-determined payout order with no interest bidding. Simple and traditional approach.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">Predictable payout schedule</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">No interest complications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-seetu-success" />
                    <span className="text-gray-600 text-sm">Traditional community style</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust and Safety */}
      <section className="py-32 bg-seetu-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-seetu-navy mb-6">
              Built for Community Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You know your members, we provide the security and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-seetu-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-seetu-navy mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-seetu-primary to-seetu-primary-hover text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Digitize Your Community Fund?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join religious groups, families, and organizations already using Seetu to manage their rotating savings
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-seetu-primary hover:bg-gray-50 hover:text-seetu-primary-hover font-semibold px-8 py-4 text-lg min-w-[220px] h-14 rounded-lg shadow-lg transition-all duration-200"
            >
              Start Your Group Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksCommunities;
