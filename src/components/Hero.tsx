'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Animated background */}
      <div className={`absolute inset-0 z-0 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-50 via-green-50 to-white'
      } animate-gradient`}>
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern */}
          <div className="h-full w-full bg-[linear-gradient(rgba(0,255,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-400 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-300 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 pt-24 pb-12 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-2 md:mt-6">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Transforming Business Transportation
              <br />
              <span className="text-green-600 bg-clip-text">With Sustainable Solutions</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-10 max-w-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Elevate your business with our zero-emission fleet services. 
              Efficient, eco-friendly transportation that reduces your carbon footprint 
              while enhancing your brand image.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="#solutions" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-center"
              >
                Explore Solutions
              </Link>
              <Link 
                href="#contact" 
                className={`border-2 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-center
                ${isDarkMode 
                  ? 'border-green-600 text-green-400 hover:bg-green-600 hover:text-white' 
                  : 'border-green-600 text-green-700 hover:bg-green-600 hover:text-white'
                }`}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          
          {/* Interactive element */}
          <div className={`hidden md:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className={`relative w-full max-w-md mx-auto h-80 rounded-2xl overflow-hidden animate-pulse-slow
              ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
              shadow-lg`}>
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-5 left-5 w-20 h-20 rounded-full bg-green-500 opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-green-400 opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg className="w-32 h-32 text-green-500 opacity-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={`absolute bottom-4 inset-x-4 h-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full overflow-hidden`}>
                  <div className="h-full w-1/2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-8 w-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 