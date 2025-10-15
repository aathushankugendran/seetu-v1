

import { Globe, Users, Shield, Heart, Building, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight font-nunito">
              About 
              <span className="text-[#1851fc]">
                Seetu
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're modernizing traditional community finance to make it secure, scalable, and accessible for diaspora communities across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Horizontal Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl text-gray-900 mb-3">Traditional Wisdom</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                For centuries, communities worldwide have used rotating savings groups — susu, kootu, pardner, chit funds — 
                to build wealth through collective trust and mutual support.
              </p>
            </div>

            {/* Story Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl text-gray-900 mb-3">Modern Security</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                We're digitizing these time-tested practices with built-in fraud protection, verified members, 
                and guaranteed payouts — preserving cultural traditions while adding modern safeguards.
              </p>
            </div>

            {/* Story Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl text-gray-900 mb-3">Community First</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Building a financial system rooted in community trust, not institutional extraction. 
                An accessible alternative to predatory credit that honors collective savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Horizontal */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Our <span className="text-[#1851fc]">Values</span>
            </h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600 text-sm">Collective action and mutual support</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">Open, honest operations with no hidden fees</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Cultural Respect</h3>
              <p className="text-gray-600 text-sm">Honoring traditional practices while adding modern security</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Financial tools that work for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Horizontal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Our <span className="text-[#1851fc]">Approach</span>
            </h2>
            <p className="text-gray-600">Two platforms for different community needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Organization Seetu</h3>
              <p className="text-gray-600 leading-relaxed">
                For existing communities who want to manage their rotating savings digitally. 
                Perfect for families, temples, and cultural organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1851fc] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Marketplace Seetu</h3>
              <p className="text-gray-600 leading-relaxed">
                For individuals seeking savings groups, matched by our AI system. 
                Connect with like-minded savers in your community.
              </p>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-[#1851fc]">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
