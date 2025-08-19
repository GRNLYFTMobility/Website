'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('benefits');
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

  const benefits = [
    {
      title: 'Cost Reduction',
      description:
        'Lower operational expenses with energy-efficient vehicles that reduce fuel costs by up to 70% compared to traditional fleets.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      delay: 0,
    },
    {
      title: 'Zero Hassle',
      description:
        'Full-service solution with maintenance, charging, and driver management handled entirely by our dedicated team.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      delay: 100,
    },
    {
      title: 'Reliability',
      description:
        'Consistent, dependable service with 99.5% uptime guarantee and advanced predictive maintenance to prevent disruptions.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      delay: 200,
    },
    {
      title: 'Better Experience',
      description:
        'Premium transportation experience with quiet, modern vehicles and professionally trained drivers committed to excellence.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      delay: 300,
    },
    {
      title: 'Brand Image',
      description:
        "Enhance your company's reputation with eco-friendly transportation that demonstrates your commitment to sustainability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      delay: 400,
    },
    {
      title: 'Government Alignment',
      description:
        'Stay ahead of regulatory changes and align with government initiatives on carbon reduction and sustainable transportation.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mb-4 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      ),
      delay: 500,
    },
  ];

  return (
    <section id="benefits" className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Why Choose <span className="text-green-600">GrnLYFT</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p
              className={`text-center max-w-3xl mx-auto mb-16 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Experience the advantages of our sustainable transportation solutions that benefit
              your business, customers, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-green-50'
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`p-8 rounded-xl mx-auto max-w-3xl ${
                isDarkMode ? 'bg-gray-700' : 'bg-green-50'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Ready to Transform Your Transportation?
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Join the growing number of businesses choosing GrnLYFT for sustainable, efficient,
                and cost-effective transportation solutions.
              </p>
              <a
                href="#contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
