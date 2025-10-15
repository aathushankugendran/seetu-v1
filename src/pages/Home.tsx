

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, DollarSign, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Content - Centered */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-nunito">
              The Traditional Savings Circle,
              <br />
              <span className="text-[#1851fc]">
                Rebuilt for the Digital Age
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-inter font-medium">
              Seetu brings group savings into the 21st century — with built-in fraud protection, verified members, and guaranteed payouts.
            </p>
            
            <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto font-inter">
              Join the waitlist to be first to access our private beta.
            </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button 
                  className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[160px] text-center"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Contact Us →
                  </Link>
                </button>
                <button 
                  className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[160px] text-center"
                  onClick={() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ 
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


      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#1851fc] text-sm font-medium mb-4 tracking-wide uppercase">
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
                  <div className="w-16 h-16 bg-[#1851fc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#1851fc] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#1851fc] text-sm font-medium mb-4 tracking-wide uppercase">
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
                description: "Advanced identity verification and secure escrow system protect every transaction"
              },
              {
                icon: TrendingUp,
                title: "Transparent System",
                description: "All bids, payouts, and group activities are recorded and visible to members"
              },
              {
                icon: Users,
                title: "Community Verified",
                description: "Every member is verified and groups are built on trust and accountability"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 bg-[#1851fc] group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-32 bg-[#1851fc] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-nunito">
            Ready to Transform Your Savings?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of community members who trust Seetu for their rotating savings groups today!
          </p>
          <div className="flex justify-center items-center">
            <button 
              className="bg-white text-[#1851fc] hover:bg-gray-50 font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[180px] text-center"
            >
              <Link to="/waitlist" className="flex items-center justify-center gap-2">
                Early Access →
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
