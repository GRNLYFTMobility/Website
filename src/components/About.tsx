'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About <span className="text-green-600">GrnLYFT</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>
          </div>

          {/* Company Mission and Atmanirbhar Bharat Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div 
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Vision for <span className="text-green-600">India&apos;s Sustainable Future</span>
              </h3>
              
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                At GrnLYFT, we&apos;re committed to transforming business transportation through cutting-edge electric vehicle technology. Our mission aligns perfectly with the principles of Atmanirbhar Bharat (Self-Reliant India), as we strive to create sustainable transportation solutions that are developed and manufactured within India.
              </p>
              
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We proudly support the Make in India initiative by partnering with local manufacturers and tech innovators to build our EV fleet. This not only reduces our carbon footprint but also creates jobs and fosters technological innovation within our country.
              </p>
              
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong className="text-green-600">GrnLYFT&apos;s Contribution to Atmanirbhar Bharat:</strong>
              </p>
              
              <ul className={`list-disc pl-6 mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2">Sourcing 80% of our EV components from Indian manufacturers</li>
                <li className="mb-2">Creating employment opportunities in the green technology sector</li>
                <li className="mb-2">Investing in R&D to develop India-specific EV solutions</li>
                <li className="mb-2">Supporting local startups that focus on sustainable mobility</li>
                <li>Building charging infrastructure across both urban and rural areas</li>
              </ul>
            </div>
            
            <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative h-full w-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/atmanirbhar-bharat.jpg"
                  alt="Atmanirbhar Bharat - Self-Reliant India"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className={`absolute inset-0 flex items-end ${isDarkMode ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-t from-white/70 to-transparent'}`}>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 ${isDarkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
                      #MakeInIndia
                    </span>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Driving Atmanirbhar Bharat Forward
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission', 
                content: 'To transform business transportation with eco-friendly solutions that reduce carbon footprints while enhancing operational efficiency and supporting India\'s self-reliance.',
                icon: (
                  <svg className="w-8 h-8 mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                  </svg>
                ),
                delay: 0
              },
              {
                title: 'Atmanirbhar Approach', 
                content: 'Leveraging local talent, technology, and manufacturing to build a sustainable and self-reliant EV ecosystem that reduces dependency on imports.',
                icon: (
                  <svg className="w-8 h-8 mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path>
                  </svg>
                ),
                delay: 200
              },
              {
                title: 'Our Values', 
                content: 'Sustainability, innovation, reliability, and customer-centricity guide our approach, all while contributing to India\'s vision of clean energy and technological advancement.',
                icon: (
                  <svg className="w-8 h-8 mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                ),
                delay: 400
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 