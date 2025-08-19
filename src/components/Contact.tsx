'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm('xyzpqyvo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div
                className={`p-8 rounded-lg shadow-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Send us a message
                </h3>

                {state.succeeded && (
                  <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                    <p>Your message has been sent successfully! We will get back to you shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} aria-label="Contact form">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className={`block mb-2 font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={formData.name === ''}
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className={`block mb-2 font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={formData.email === ''}
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className={`block mb-2 font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className={`block mb-2 font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={formData.message === ''}
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    aria-live="polite"
                    className={`w-full py-3 px-6 rounded-md bg-green-600 text-white font-medium transition-all 
                    ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'}`}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`transition-all duration-700 delay-400 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div
                className={`h-full flex flex-col justify-between ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <div>
                  <h3
                    className={`text-2xl font-semibold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Contact Information
                  </h3>

                  <p className="mb-8">
                    Ready to transform your business transportation with sustainable solutions?
                    Contact our team today to discuss how we can tailor our services to your needs.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-medium mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Office Address
                        </h4>
                        <a
                          href="https://maps.google.com/?q=1,+Meher+Ali+Road,+1st+Floor,+Kolkata+700017,+India"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:text-green-600 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <p>1, Meher Ali Road, 1st Floor</p>
                          <p>Kolkata 700017</p>
                          <p>India</p>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-medium mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Email
                        </h4>
                        <a
                          href="mailto:info@grnlyft.com?source=website"
                          className={`hover:text-green-600 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          info@grnlyft.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-medium mb-1 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Phone
                        </h4>
                        <a
                          href="tel:+919663377673"
                          className={`block hover:text-green-600 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          +91 96633 77673
                        </a>
                        <a
                          href="tel:+919477336606"
                          className={`block hover:text-green-600 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          +91 94773 36606
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/50">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Business Hours
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
