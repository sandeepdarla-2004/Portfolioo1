import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold magnetic">
              Sandeep<span className="text-blue-400 animate-pulse">.</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Software Engineer & ML Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              Projects
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              Experience
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 magnetic">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Sandeep Darla. All rights reserved.
              </p>

              {/* Made with love */}
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="text-red-500 mx-1 animate-pulse" size={16} fill="currentColor" />
                <span>and</span>
                <Code className="text-blue-400 mx-1 animate-bounce" size={16} />
                <span>powered by</span>
                <Coffee className="text-orange-600 ml-1 animate-pulse" size={16} />
              </div>
            </div>
          </div>

          {/* Back to top */}
          <div className="mt-8">
            <a
              href="#home"
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-pulse magnetic"
            >
              ↑
            </a>
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-particle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-20 animate-particle-float animation-delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-particle-float animation-delay-500"></div>
      </div>
    </footer>
  );
};

export default Footer;