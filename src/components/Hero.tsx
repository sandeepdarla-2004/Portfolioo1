import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Meteors } from './magicui/meteors';
import { TextAnimate } from './magicui/text-animate';
import { VideoText } from './magicui/video-text';
import { SmoothCursor } from "./magicui/smooth-cursor";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle-float';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      
      heroRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SmoothCursor />
      <section 
        ref={heroRef}
        id="home" 
        className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative overflow-hidden"
      >
      {/* Side Images */}
      {/* Meteors Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={50} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-cursor-glow hover:animate-bounce transition-all duration-300 magnetic overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          {/* Main Content with Video Text and Text Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
              Hi, I'm SANDEEP DARLA
            </h1>
          </div>
          <div className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            <TextAnimate animation="blurInUp" by="word" once>
              Software Engineer&nbsp;&nbsp;&amp;&nbsp;&nbsp;ML Enthusiast
            </TextAnimate>
            <noscript>
              <span>Software Engineer &amp; ML Enthusiast</span>
            </noscript>
          </div>
          <div className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <TextAnimate animation="fadeInUp" by="word" once>
              Seeking growth opportunities while contributing to organizational success through 
              innovative machine learning solutions and software development.
            </TextAnimate>
          </div>
          <div className="flex items-center justify-center text-gray-500 mb-12 animate-fade-in-up animation-delay-600">
            <span className="flex items-center">
              📍 Andhra Pradesh, INDIA
            </span>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-800">
            <a
              href="#projects"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-float magnetic hover-lift"
            >
              View My Projects
            </a>
            <a
              href="mailto:darlasunny26@gmail.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-2 transform hover:scale-105 magnetic"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
          {/* Scroll Indicator */}
          <div className="animate-bounce hover:animate-pulse magnetic">
            <ArrowDown className="mx-auto text-blue-500 hover:text-blue-600 transition-colors duration-300" size={24} />
          </div>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-15 animate-particle-float animation-delay-1500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-blue-300 rounded-full opacity-25 animate-particle-float animation-delay-2000"></div>
      </div>
    </section>
    </>
  );
};

export default Hero;