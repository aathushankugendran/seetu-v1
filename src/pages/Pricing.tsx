import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Individual',
      price: 'Free',
      period: '',
      description: 'Perfect for personal savings goals',
      features: [
        'Join up to 3 savings groups',
        'Basic fraud protection',
        'Mobile app access',
        'Email support',
        'Standard payout processing'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Community',
      price: '$9',
      period: '/month',
      description: 'Ideal for active community savers',
      features: [
        'Join unlimited savings groups',
        'Premium fraud protection',
        'Priority support',
        'Advanced analytics',
        'Fast payout processing',
        'Group management tools'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organizations and large groups',
      features: [
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced reporting',
        'Custom compliance features',
        'API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 pt-32 sm:pt-40 md:pt-32 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-nunito">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your savings goals. All plans include our core security features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
              plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 font-nunito">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-nunito">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Is there a free trial?',
                answer: 'Yes! The Community plan includes a 30-day free trial with full access to all features.'
              },
              {
                question: 'Can I change plans anytime?',
                answer: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and digital wallets for your convenience.'
              },
              {
                question: 'Is my money safe?',
                answer: 'Yes, all funds are held in FDIC-insured accounts and we use bank-level security measures.'
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 font-nunito">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">
            Ready to start saving smarter?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of community members who trust Seetu for their savings goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
