import React from 'react';
import { Code, Cog, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['Python', 'C', 'SQL']
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Cog className="text-green-600" size={24} />,
      skills: ['Machine Learning', 'MySQL', 'Agile Development']
    },
    {
      title: 'Cloud & Tools',
      icon: <Cloud className="text-purple-600" size={24} />,
      skills: ['AWS', 'Data Analysis', 'Cloud Computing']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-orange-600" size={24} />,
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A comprehensive toolkit for modern software development and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 magnetic hover-lift animate-fade-in-up"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white ml-3">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-200 text-lg font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;