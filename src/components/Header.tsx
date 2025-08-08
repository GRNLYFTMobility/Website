'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();
  const sidebarRef = useRef<HTMLElement>(null);

  // Close mobile menu when changing screen size to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll for sticky header and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'benefits', 'testimonials', 'clients', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Add click outside handler to close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && 
          !sidebarRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Benefits', href: '#benefits', section: 'benefits' },
    { name: 'Testimonials', href: '#testimonials', section: 'testimonials' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-sm shadow-md' 
            : 'bg-white/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 relative z-10">
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="GrnLYFT Logo - Sustainable B2B EV Transportation Solutions" 
              width={800} 
              height={220} 
              className="h-28 w-auto md:h-40 object-contain"
              priority
              quality={100}
            />
            {/* Decorative element */}
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${
              isDarkMode ? 'bg-green-500/20' : 'bg-green-500/10'
            } animate-pulse-slow hidden md:block`} aria-hidden="true"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`relative px-4 py-2 rounded-md transition-all duration-300 font-medium group ${
                activeSection === item.section
                  ? isDarkMode 
                    ? 'text-green-400' 
                    : 'text-green-600'
                  : isDarkMode 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-800 hover:text-green-600'
              }`}
            >
              <span>{item.name}</span>
              {activeSection === item.section && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform scale-x-100 transition-transform"></span>
              )}
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                activeSection === item.section ? 'hidden' : ''
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <DarkModeToggle />
          <Link 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium flex items-center"
          >
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button 
            className={`hover:text-green-600 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-200' : 'bg-gray-800'
              } ${isMenuOpen ? 'absolute rotate-45' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 ${
                isDarkMode ? 'bg-gray-200' : 'bg-gray-800'
              } ${isMenuOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-200' : 'bg-gray-800'
              } ${isMenuOpen ? 'absolute -rotate-45' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed to full height of viewport */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar container */}
        <nav 
          ref={sidebarRef}
          className={`fixed right-0 top-0 bottom-0 w-4/5 max-w-sm h-full flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl overflow-y-auto`}
          style={{ position: 'fixed', height: '100vh', overflowY: 'auto' }}
        >
          {/* Menu header with close button */}
          <div className={`sticky top-0 z-10 flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="GrnLYFT Logo" 
                width={600} 
                height={150} 
                className="h-28 w-auto object-contain"
              />
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation links */}
          <div className="flex-1 py-6 px-4 overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`animate-fadeIn text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.section
                      ? isDarkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-100 text-green-600'
                      : isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Action button and footer */}
          <div className={`sticky bottom-0 border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} p-4`}>
            <Link 
              href="#contact" 
              className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
            
            <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} GrnLYFT. All rights reserved.
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
} 