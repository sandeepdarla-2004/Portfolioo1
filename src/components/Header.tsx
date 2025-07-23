import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGreenWave, setShowGreenWave] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      // Get the scroll position
      const scrollY = window.scrollY;
      // If at the very top or hash is #home, show the image
      setShowGreenWave(scrollY < 100 || window.location.hash === '#home' || window.location.hash === '');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('scroll', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('scroll', checkHash);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      {/* White Navbar Background */}
      <div className="absolute inset-0 w-full h-full bg-white shadow-sm" style={{zIndex: -1}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 magnetic">
            Sandeep<span className="text-blue-600 animate-pulse">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group magnetic after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-indigo-600 after:transition-all after:duration-300 group-hover:after:w-full after:rounded-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 magnetic hover-lift"
              style={{textDecoration: 'none'}}
            >
              <span>Download CV</span>
            </a>
            <a
              href="https://www.instagram.com/mr_.sunny.___/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 magnetic"
            >
              <Instagram size={20} />
            </a>
            <a
              href="http://github.com/sandeepdarla-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:rotate-12 magnetic"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.threads.net/@mr_.sunny.___"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 magnetic"
              style={{fontSize: 0}}
            >
              <span style={{fontSize: 20, display: 'inline-block', lineHeight: 1}}>𝕋</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-darla-36a93225b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 magnetic"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:darlasunny26@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 magnetic"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 magnetic"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium magnetic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <a
                  href="https://linkedin.com/in/sandeep-darla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 magnetic"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:darlasunny26@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 magnetic"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Decorative Image at Left Corner Below Navbar - Only on Home Page */}
      {/**
      {showGreenWave && (
        <img
          src="/images/green-wave.png"
          alt="Decorative Green Wave"
          className="absolute left-0 top-full w-80 h-auto select-none pointer-events-none"
          style={{objectFit: 'cover', zIndex: 0}}
        />
      )}
      */}
    </header>
  );
};

export default Header;