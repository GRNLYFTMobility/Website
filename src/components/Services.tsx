'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Dedicated EV Fleets',
      description: 'Custom-sized electric vehicle fleets dedicated to your business needs with zero emissions and lower operational costs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      delay: 0
    },
    {
      title: 'Professional Drivers',
      description: 'Highly trained and certified drivers specialized in EV operation, ensuring efficient and safe transportation for your business.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
          <path d="M3 12h14v4" />
          <path d="M5 8l2 4" />
        </svg>
      ),
      delay: 100
    },
    {
      title: 'On-site Charging',
      description: 'Convenient charging infrastructure installed at your business location, ensuring your fleet is always ready when you need it.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 9a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2z" />
          <path d="M13 5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2z" />
          <path d="M13 13a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2z" />
          <path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2" />
          <path d="M11 2v8" />
          <path d="M13 10V4" />
        </svg>
      ),
      delay: 200
    },
    {
      title: 'Management Platform',
      description: 'Advanced digital platform for real-time fleet monitoring, scheduling, and optimization to maximize efficiency and reduce costs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="16" x2="12" y2="20" />
        </svg>
      ),
      delay: 300
    },
    {
      title: 'Custom Programs',
      description: 'Tailored transportation solutions designed to meet your specific business requirements, schedule, and budget constraints.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      delay: 400
    },
    {
      title: 'Sustainability Reporting',
      description: 'Comprehensive reports on carbon emissions reduction and environmental impact to support your ESG goals and corporate reporting.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.62 2.62" />
          <path d="M21 3v9h-9" />
          <path d="M7 14.5l3 3 7-7" />
        </svg>
      ),
      delay: 500
    }
  ];

  return (
    <section id="services" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="text-green-600">Services</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className={`text-center max-w-3xl mx-auto mb-16 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Comprehensive electric vehicle solutions designed to transform your business transportation
              while reducing your environmental impact and operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} 
                  p-8 rounded-xl shadow-lg transition-all duration-500 transform 
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
                  hover:-translate-y-2 hover:shadow-xl`}
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="#contact" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Request Custom Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 