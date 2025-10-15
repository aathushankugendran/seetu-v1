import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className='min-h-screen bg-white relative overflow-hidden'
      style={{ marginTop: '-4rem' }}
    >
      {/* Hero Section */}
      <section className='relative overflow-hidden pt-24 pb-20'>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div>
            <div className='w-16 h-16 bg-[#1851fc] rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <MessageSquare className='w-8 h-8 text-white' />
            </div>
            <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-nunito leading-tight'>
              Get in
              <span className='text-[#1851fc]'>
                Touch
              </span>
            </h1>
            <p className='text-lg lg:text-xl text-gray-600'>
              Ready to modernize your community's savings? We're here to help
              you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <Card className='shadow-lg border-0 bg-white'>
                <CardContent className='p-8'>
                  <div className='flex items-center mb-6'>
                    <div className='w-12 h-12 bg-[#1851fc] rounded-xl flex items-center justify-center mr-4'>
                      <Send className='w-6 h-6 text-white' />
                    </div>
                    <h2 className='text-xl font-bold text-gray-900 font-nunito'>
                      Send us a Message
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <Label
                          htmlFor='name'
                          className='text-gray-900 font-medium font-nunito'
                        >
                          Full Name *
                        </Label>
                        <Input
                          id='name'
                          name='name'
                          type='text'
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className='mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                          placeholder='Your full name'
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor='email'
                          className='text-gray-900 font-medium font-nunito'
                        >
                          Email Address *
                        </Label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                          placeholder='your@email.com'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <Label
                          htmlFor='organization'
                          className='text-gray-900 font-medium font-nunito'
                        >
                          Organization (Optional)
                        </Label>
                        <Input
                          id='organization'
                          name='organization'
                          type='text'
                          value={formData.organization}
                          onChange={handleChange}
                          className='mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                          placeholder='Temple, family group, etc.'
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor='phone'
                          className='text-gray-900 font-medium font-nunito'
                        >
                          Phone Number
                        </Label>
                        <Input
                          id='phone'
                          name='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={handleChange}
                          className='mt-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg'
                          placeholder='+1 (555) 123-4567'
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor='inquiryType'
                        className='text-gray-900 font-medium font-nunito'
                      >
                        How can we help? *
                      </Label>
                      <select
                        id='inquiryType'
                        name='inquiryType'
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className='mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                      >
                        <option value='general'>General Information</option>
                        <option value='organization'>
                          Set up Organization Group
                        </option>
                        <option value='marketplace'>Join Marketplace</option>
                        <option value='demo'>Schedule a Demo</option>
                        <option value='partnership'>Partnership Inquiry</option>
                        <option value='support'>Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <Label
                        htmlFor='message'
                        className='text-gray-900 font-medium font-nunito'
                      >
                        Message *
                      </Label>
                      <textarea
                        id='message'
                        name='message'
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className='mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        placeholder='Tell us about your community and how we can help...'
                      />
                    </div>

                    <Button
                      type='submit'
                      size='lg'
                      className='w-full bg-[#1851fc] hover:bg-[#1444d9] text-white font-semibold py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-nunito'
                    >
                      Send Message
                      <Send className='ml-2 w-5 h-5' />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
              <Card className='bg-[#1851fc] text-white border-0 shadow-lg'>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-4 font-nunito'>
                    Contact Information
                  </h3>

                  <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center'>
                        <Mail className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <div className='font-medium font-nunito'>Email Us</div>
                        <div className='text-white/80 text-sm'>
                          hello@seetu.ca
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center'>
                        <MapPin className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <div className='font-medium font-nunito'>Location</div>
                        <div className='text-white/80 text-sm'>
                          Toronto, Ontario, Canada
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center'>
                        <Clock className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <div className='font-medium font-nunito'>
                          Response Time
                        </div>
                        <div className='text-white/80 text-sm'>
                          Within 24 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-white border-0 shadow-md'>
                <CardContent className='p-6'>
                  <h3 className='text-base font-semibold text-gray-900 mb-3 font-nunito'>
                    Quick Start Options
                  </h3>

                  <div className='space-y-4'>
                    <div>
                      <div className='font-medium text-gray-900 mb-1 font-nunito'>
                        For Communities
                      </div>
                      <p className='text-sm text-gray-600 mb-2'>
                        Already have a group? Set up your digital fund in
                        minutes.
                      </p>
                      <Button
                        size='sm'
                        className='w-full bg-[#1851fc] hover:bg-[#1444d9] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-nunito'
                      >
                        Create Organization Group
                      </Button>
                    </div>

                    <hr className='border-gray-200' />

                    <div>
                      <div className='font-medium text-gray-900 mb-1 font-nunito'>
                        For Individuals
                      </div>
                      <p className='text-sm text-gray-600 mb-2'>
                        Looking to join? Get matched with compatible groups.
                      </p>
                      <Button
                        size='sm'
                        className='w-full bg-[#1851fc] hover:bg-[#1444d9] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-nunito'
                      >
                        Join Marketplace
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
