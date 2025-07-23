import React from 'react';
import { Briefcase, Award, Users, Cloud, Heart } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AICTE - AI&ML Virtual Internship',
      type: 'Technical Internship',
      description: 'Focused on cloud computing and machine learning with AWS, gaining hands-on experience with cutting-edge technologies.',
      highlights: [
        'Cloud Computing with AWS',
        'Machine Learning Implementation',
        'Data Processing & Analytics',
        'Technical Documentation'
      ],
      icon: <Cloud className="text-blue-600" size={24} />,
      color: 'blue'
    },
    {
      title: 'Software Developer Internship',
      type: 'Backend Development – Python',
      description: 'Worked at Nxtwave company contributing to backend systems using Python, with a focus on scalable APIs and efficient database management.',
      highlights: [
        'API Development & Integration',
        'Database Design & Optimization',
        'Backend Architecture',
        'Performance & Code Quality Testing'
      ],
      icon: <Heart className="text-pink-600" size={24} />,
      color: 'pink'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse internship experiences combining technical expertise with social impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {exp.icon}
                      <div className="ml-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className={`text-${exp.color}-600 font-medium`}>
                          {exp.type}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-center text-gray-600 text-sm"
                          >
                            <div className={`w-2 h-2 bg-${exp.color}-500 rounded-full mr-2`}></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-white shadow-lg z-10`}></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Strong foundation in ML, cloud computing, and software development
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Social Impact</h4>
                <p className="text-gray-600 text-sm">
                  Experience in community development and social empowerment
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Growth Mindset</h4>
                <p className="text-gray-600 text-sm">
                  Continuous learning and adaptation to new challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;