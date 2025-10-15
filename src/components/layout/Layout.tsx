

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const howItWorksItems = [
    {
      key: 'communities',
      title: 'For Communities',
      description: 'Neighborhood and group savings',
      icon: Heart,
      path: '/how-it-works/communities',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white" style={{ margin: 0, padding: 0, marginTop: '-8rem' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 pb-4 pt-4">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 px-6 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img 
                  src="/logos/black-logo.svg" 
                  alt="Seetu Logo"
                  className="h-10 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 ml-12">
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-[#1851fc]' : 'text-gray-700 hover:text-[#1851fc]'
                  }`}
                >
                  Home
                </Link>
                
                {/* How It Works Mega Menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsHowItWorksOpen(true)}
                  onMouseLeave={() => setIsHowItWorksOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#1851fc] transition-colors py-2">
                    <span>How It Works</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isHowItWorksOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isHowItWorksOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      {/* Invisible bridge to prevent gap */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-transparent"></div>
                      
                      <div className="p-6">
                        <div className="space-y-4">
                          {howItWorksItems.map((item) => (
                            <Link
                              key={item.key}
                              to={item.path}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group"
                              onClick={() => setIsHowItWorksOpen(false)}
                            >
                              <div className="w-10 h-10 bg-[#1851fc] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-[#1851fc] transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/about') ? 'text-[#1851fc]' : 'text-gray-700 hover:text-[#1851fc]'
                  }`}
                >
                  About Seetu
                </Link>
                <Link
                  to="/contact"
                  className={`text-sm font-medium transition-colors ${
                    isActive('/contact') ? 'text-[#1851fc]' : 'text-gray-700 hover:text-[#1851fc]'
                  }`}
                >
                  Contact
                </Link>
              </div>

              {/* Buttons */}
              <div className="hidden lg:flex items-center ml-8">
                <Button 
                  size="sm" 
                  asChild
                  className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/waitlist" className="flex items-center gap-2">
                    Join The Waitlist →
                  </Link>
                </Button>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-gray-700 hover:text-[#1851fc] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="text-gray-700 hover:text-[#1851fc] font-medium transition-colors">
                    Home
                  </Link>
                  <Link to="/how-it-works/communities" className="text-gray-700 hover:text-[#1851fc] font-medium transition-colors">
                    How It Works
                  </Link>
                  <Link to="/about" className="text-gray-700 hover:text-[#1851fc] font-medium transition-colors">
                    About Seetu
                  </Link>
                  <Link to="/contact" className="text-gray-700 hover:text-[#1851fc] font-medium transition-colors">
                    Contact
                  </Link>
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button 
                      size="sm" 
                      asChild
                      className="bg-[#1851fc] hover:bg-[#1444d9] text-white font-medium rounded-full shadow-lg"
                    >
                      <Link to="/waitlist" className="flex items-center gap-2 justify-center">
                        Join The Waitlist →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main content with enhanced responsive top padding */}
      <main className="pt-56 sm:pt-60 md:pt-56 lg:pt-52 xl:pt-48">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logos/white-logo.svg" 
                  alt="Seetu Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Community-powered savings, modernized. Join rotating savings groups with built-in fraud protection and guaranteed payouts.
              </p>
              <div className="text-sm text-gray-500">
                Coming Soon: Mobile App
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-white">Platform</h3>
              <div className="space-y-3 text-sm">
                <Link to="/how-it-works/communities" className="block text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-white">Support</h3>
              <div className="space-y-3 text-sm">
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Seetu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

