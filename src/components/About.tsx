import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const strengths = [
    'Creativity', 'Interactive Skills', 'Work Ethics', 'Problem-solving',
    'Communication', 'Time Management', 'Teamwork'
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Passionate about technology and driven by a growth mindset
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm a dedicated Software Engineer based in Andhra Pradesh, INDIA, currently pursuing my 
              Bachelor's in Computer Science at KL University. My passion lies in machine learning 
              and software development, where I strive to create innovative solutions that make a 
              real impact.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              I believe in continuous learning and growth, always seeking opportunities to enhance 
              my skills while contributing meaningfully to organizational success. My approach 
              combines technical expertise with strong collaborative skills and a commitment to excellence.
            </p>

            {/* Strengths */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((strength, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 cursor-default magnetic animate-fade-in-up"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>            

            {/* Professional Excellence */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-2">Professional Excellence</h4>
              <p className="text-gray-600 text-sm">
                Demonstrated expertise in backend development, cloud computing, and AI, with a proven track record of delivering scalable solutions and driving innovation. Adept at collaborating in cross-functional teams, adapting to new technologies, and maintaining high standards of code quality and project delivery. Recognized for strong problem-solving skills, effective communication, and a commitment to continuous professional growth.
              </p>
            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 magnetic hover-lift animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3 animate-bounce" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900">Bachelor of Computer Science</h5>
                  <p className="text-gray-700">KL University</p>
                  <div className="flex items-center text-gray-600 text-sm mt-1 gap-4">
                    <span className="flex items-center"><Calendar size={16} className="mr-1" />Expected May 2025</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold ml-2">CGPA: 8.69</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 magnetic hover-lift animate-fade-in-up animation-delay-800">
              <div className="flex items-center mb-4">
                <Award className="text-green-600 mr-3 animate-pulse" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Certifications</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Python Certification</span>
                  <span className="text-sm text-gray-600">HackerRank</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Python Certification</span>
                  <span className="text-sm text-gray-600">IBM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Google Cloud Associate Engineer</span>
                  <span className="text-sm text-gray-600">Google Cloud</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Oracle Cloud Infrastructure Foundations</span>
                  <span className="text-sm text-gray-600">Oracle</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Salesforce AI Associate</span>
                  <span className="text-sm text-gray-600">Salesforce</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 magnetic hover-lift animate-fade-in-up animation-delay-1000">
              <div className="flex items-center">
                <MapPin className="text-purple-600 mr-3 animate-ping" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">Andhra Pradesh, INDIA</p>
                  <p className="text-gray-600 text-sm">Proficient in English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-particle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-300 rounded-full opacity-20 animate-particle-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-particle-float animation-delay-500"></div>
      </div>
    </section>
  );
};

export default About;