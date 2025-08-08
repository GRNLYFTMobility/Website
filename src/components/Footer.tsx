'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`pt-16 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GrnLYFT</span>
              </div>
              <p className="mb-6 pr-4">
                GrnLYFT is leading the transition to sustainable transportation for businesses across India. Our electric vehicle solutions reduce costs, carbon emissions, and operational complexity.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-green-600 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="#benefits" className="hover:text-green-600 transition-colors">Benefits</Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-green-600 transition-colors">Testimonials</Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-green-600 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Dedicated EV Fleets</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Professional Drivers</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">On-site Charging</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Management Platform</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Custom Programs</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-600 transition-colors">Sustainability Reporting</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">EV Knowledge Base</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">Case Studies</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">Sustainability Reports</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">Media Kit</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-8 mb-8`}>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span className="text-sm">Zero Emission</span>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-sm">Govt. Approved</span>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm">Fast Charging Network</span>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm">Secure Operations</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-8`}>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <p className="text-sm mb-4 md:mb-0">
                &copy; {currentYear} GrnLYFT. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 