'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
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

  const testimonials = [
    {
      quote:
        "GrnLYFT has transformed our company's transportation needs while helping us achieve our sustainability goals. Their electric fleet is reliable, professional, and has reduced our carbon footprint by 60% in just six months.",
      name: 'Rajiv Mehta',
      title: 'Operations Director, Sunrise Technologies',
      image: '/testimonial-1.jpg',
    },
    {
      quote:
        "Switching to GrnLYFT for our executive transportation was one of the best decisions we've made. Not only do we save on operational costs, but our clients are impressed by our commitment to sustainable business practices.",
      name: 'Priya Sharma',
      title: 'CEO, EcoSolutions India',
      image: '/testimonial-2.jpg',
    },
    {
      quote:
        "The reliability and professionalism of GrnLYFT's service have exceeded our expectations. Their drivers are punctual and courteous, and the management platform gives us complete control and visibility of our transportation needs.",
      name: 'Vikram Singh',
      title: 'Head of Procurement, Global Innovations Ltd',
      image: '/testimonial-3.jpg',
    },
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
              What Our <span className="text-green-600">Clients Say</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-16"></div>
          </div>

          <div className="relative">
            {/* Quote Icon - Moved behind content */}
            <div
              className={`absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ${
                isDarkMode ? 'text-gray-800' : 'text-gray-100'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              } shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              } shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Testimonials Container */}
            <div
              className={`relative max-w-4xl mx-auto px-16 md:px-20 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000`}
            >
              <div className="relative h-80 md:h-72">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 text-center transition-all duration-700 ease-in-out transform ${
                      activeIndex === index
                        ? 'translate-x-0 opacity-100 z-10'
                        : index < activeIndex
                        ? '-translate-x-full opacity-0 z-0'
                        : 'translate-x-full opacity-0 z-0'
                    }`}
                    style={{ transitionDelay: index === activeIndex ? '200ms' : '0ms' }}
                  >
                    <div className="relative z-10 bg-opacity-90 rounded-lg p-8">
                      <p
                        className={`text-xl md:text-2xl italic mb-8 leading-relaxed ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
                        &quot;{testimonial.quote}&quot;
                      </p>

                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-3 border-green-500 shadow-lg">
                          <div
                            className={`w-full h-full flex items-center justify-center ${
                              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`text-2xl font-semibold ${
                                isDarkMode ? 'text-green-400' : 'text-green-600'
                              }`}
                            >
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4
                            className={`font-bold text-lg mb-1 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          >
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots - Moved below content with proper z-index */}
            {/* <div className="flex justify-center mt-8 space-x-3 relative z-20">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    activeIndex === index 
                      ? 'bg-green-600 w-8 h-3' 
                      : isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500 w-3 h-3' 
                        : 'bg-gray-400 hover:bg-gray-500 w-3 h-3'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div> */}

            {/* Progress indicator */}
            {/* <div className={`mt-6 mx-auto w-64 h-1 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div 
                className="h-full bg-green-600 transition-all duration-8000 ease-linear"
                style={{ 
                  width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  animation: 'progress 8s linear infinite'
                }}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
