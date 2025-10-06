
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      category: "Getting Started",
      question: "What is Seetu and how does it work?",
      answer: "Seetu is a digital platform for rotating savings groups (also known as ROSCAs, susu, kootu, or chit funds). Members contribute a fixed amount monthly, and each cycle, one person receives the full pot. We add modern security, fraud protection, and transparent bidding to this traditional system."
    },
    {
      category: "Getting Started",
      question: "How do I join Seetu?",
      answer: "You can join either through our marketplace (for individuals) or create an organization group. For the marketplace, you'll complete identity verification and get matched with compatible groups. For organizations, you can set up your own group with existing community members."
    },
    {
      category: "Getting Started",
      question: "What's the minimum commitment?",
      answer: "Our starter tier begins at $100/month for new users. This allows you to learn how the system works before joining higher-value groups. Most groups run for 6-12 months depending on the number of members."
    },
    
    {
      category: "Safety & Security",
      question: "How does Seetu protect against fraud?",
      answer: "We use multiple layers of protection: mandatory identity verification (KYC), secure escrow-style holding, transparent bidding systems, and real-time monitoring. All transactions are tracked and members can see group activity in real-time."
    },
    {
      category: "Safety & Security",
      question: "What happens if someone stops paying?",
      answer: "For marketplace groups, Seetu can temporarily cover missed payments while applying late fees. If a member defaults, they're removed from the group and banned from future groups. For organization groups, the organizer manages these situations with our support tools."
    },
    {
      category: "Safety & Security",
      question: "Is my money insured?",
      answer: "While we don't offer traditional insurance, we use secure escrow-style systems and fraud protection measures. Our verification processes and transparent tracking significantly reduce risk compared to informal rotating savings groups."
    },
    
    {
      category: "How It Works",
      question: "How does the bidding system work?",
      answer: "When it's time for a payout, eligible members can bid by offering to pay interest to receive the pot early. The lowest bidder wins, and the interest is distributed among other group members. This system is fair and transparent to all participants."
    },
    {
      category: "How It Works",
      question: "Can I join multiple groups?",
      answer: "Yes, once you've successfully completed one cycle and built a good reputation on the platform, you can join additional groups. However, we assess your financial capacity to ensure you can meet all commitments."
    },
    {
      category: "How It Works",
      question: "What if I need my money early but don't win the bid?",
      answer: "You can continue bidding in future rounds. The bidding system ensures fair access to early payouts based on how much interest you're willing to pay. You can also plan your financial needs around your expected payout timing."
    },
    
    {
      category: "Fees & Pricing",
      question: "What fees does Seetu charge?",
      answer: "We charge a 1.5% platform fee on the total pot each month (split among all members) and a 10% fee on the interest amount for winning bidders only. For example, in a $2,500 pot, the platform fee is $37.50 total, or about $3.75 per member."
    },
    {
      category: "Fees & Pricing",
      question: "Are there any hidden fees?",
      answer: "No hidden fees. Our pricing is completely transparent: 1.5% platform fee and 10% interest fee for bidding winners only. The starter tier ($100/month groups) may have a small flat fee structure to keep it sustainable."
    },
    {
      category: "Fees & Pricing",
      question: "How do you make money?",
      answer: "Seetu generates revenue through our transparent fee structure: platform fees and interest fees. As we grow, we may add premium features and take a small percentage of interest spreads, but always with full transparency to our users."
    },
    
    {
      category: "Community Groups",
      question: "Can my temple/family group use Seetu?",
      answer: "Absolutely! Our Organization Seetu is perfect for existing communities like temples, families, cultural organizations, and professional groups. You maintain full control over member selection and group rules while gaining digital management tools."
    },
    {
      category: "Community Groups",
      question: "Do community groups need credit checks?",
      answer: "No, organization groups only require basic identity verification. Since you're organizing with people you know and trust, we don't require credit checks. The organizer is responsible for vetting group members."
    },
    {
      category: "Community Groups",
      question: "Can we customize our group rules?",
      answer: "Yes! You can set your own contribution amounts, payout schedules, enable or disable bidding, set fixed payout orders, and decide whether to allow mid-cycle joining. We provide the platform, you set the rules."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden" style={{ marginTop: '-4rem' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pt-32 lg:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="faqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q250,300 500,400 T1000,400 L1000,0 L0,0 Z"
              fill="url(#faqGrad)"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-nunito leading-tight">
              Frequently Asked 
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to know about Seetu and rotating savings groups
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gradient-to-r from-blue-500 to-cyan-500 font-nunito">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {category}
                </span>
              </h2>
              
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Card key={globalIndex} className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                        <CardContent className="p-0">
                          <button
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 rounded-lg"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <h3 className="font-semibold text-gray-900 pr-4 font-nunito group-hover:text-blue-600 transition-colors">
                              {faq.question}
                            </h3>
                            <div className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-white" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6 animate-fade-in">
                              <div className="border-t border-gray-100 pt-4">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path d="M0,200 C300,100 600,300 1200,200 L1200,400 L0,400 Z" fill="currentColor" className="animate-pulse" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-nunito animate-fade-in">
            Still Have 
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Our team is here to help you understand how Seetu can work for your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl font-nunito"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/30 font-nunito"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
