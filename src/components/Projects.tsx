import React from 'react';
import { ExternalLink, Github, Brain, Activity, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website Using Python Full Stack',
      description: '',
      longDescription: 'Developed a feature-rich e-commerce web application with end-to-end functionality including product listing, user authentication, cart management, and secure checkout. The system integrates frontend, backend, and database layers for a seamless shopping experience.',
      impact: [
        'Streamlined user purchase flow across multiple devices',
        'Enabled secure and scalable transactions for over 1,000 products',
        'Implemented real-time inventory and order tracking',
        'Built with modular design for easy scalability and future integrations'
      ],
      technologies: ['Python', 'Django', 'HTML/CSS/JavaScript', 'Postman', 'PostgreSQL'],
      icon: <Brain className="text-blue-600" size={24} />,
      gradient: 'from-blue-500 to-indigo-600',
      liveDemo: 'https://ecommerce-website-livid-tau.vercel.app/',
      codeUrl: 'https://github.com/sandeepdarla-2004/Ecommerce-website',
    },
    {
      title: 'Emergency Ward Management System',
      description: 'Intelligent healthcare management system using ML to predict patient inflow and optimize resource allocation.',
      longDescription: 'Built a predictive analytics system for emergency ward management that uses machine learning algorithms to forecast patient inflow patterns and optimize resource allocation in real-time.',
      impact: [
        'Optimized resource allocation',
        'Improved patient flow management',
        'Reduced waiting times',
        'Enhanced operational efficiency'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'Healthcare Systems', 'Predictive Modeling'],
      icon: <Activity className="text-green-600" size={24} />,
      gradient: 'from-green-500 to-emerald-600',
      liveDemo: 'https://emergency-ward-mng-sytem.vercel.app/login',
      codeUrl: 'https://github.com/sandeepdarla-2004/Emergency-Ward-Mng-Sytem',
    },
    {
      title: 'Coding Hub – Open Code Sharing Platform',
      description: '',
      longDescription: 'Coding Hub is a collaborative web platform designed for developers to share, explore, and contribute code snippets. The project enables users to seamlessly add new code samples, categorize them (e.g., Python, JavaScript, C++), and make them accessible for others to view and learn from. It empowers a community-driven approach where anyone can submit code via a user-friendly interface, fostering an ecosystem of peer-to-peer learning and open-source contribution.',
      impact: [
        'Add New Code: Users can easily submit code snippets through the web UI.',
        'Categorized Snippets: Codes are organized by language or topic for quick discovery',
        'Collaborative Sharing: Contributors can upload, edit, and view code shared by others',
        'Search & Filter: Quickly find code examples relevant to your needs.'
      ],
      technologies: ['Python (Flask)', 'HTML/CSS', 'SQLite/PostgreSQL', 'Git/GitHub'],
      icon: <Users className="text-blue-400" size={24} />, 
      gradient: 'from-blue-200 to-blue-400',
      liveDemo: 'https://codinghub122.netlify.app/',
      codeUrl: 'https://github.com/sandeepdarla-2004/Coding_Hub',
    },
    {
      title: '📉 Customer Churn Prediction',
      description: '',
      longDescription: 'A machine learning web app that predicts whether a customer is likely to leave based on their input data. It provides quick churn predictions to help businesses improve customer retention.',
      impact: [
        'Helps businesses identify at-risk customers early and take proactive steps.',
        'Provides instant insights using an interactive web interface.',
        'Empowers teams to make informed marketing and support interventions.'
      ],
      technologies: ['Next.js', 'Netlify', 'Python', 'Python + Pickle'],
      icon: <Users className="text-blue-400" size={24} />, 
      gradient: 'from-blue-200 to-blue-400',
      liveDemo: 'https://studio--churnforecaster-j0wv9.us-central1.hosted.app',
      codeUrl: 'https://github.com/sandeepdarla-2004/crumprediction.git',
    },
    {
      title: '🪴 EchoSpace – Thought Organization Web App',
      description: '',
      longDescription: 'EchoSpace is a clean and interactive digital garden where users can log in, create and manage their personal thoughts, organize them into gardens, and visualize connections between ideas. It supports shared spaces, timeline tracking, and a friendly UI for mindful reflection and growth.',
      impact: [
        'Enhanced Personal Growth: Helps users reflect, organize thoughts, and track their mental growth over time',
        'Shared spaces allow users to co-create and explore ideas together, encouraging collective thinking.Categorized Snippets: Codes are organized by language or topic for quick discovery',
        'Interactive visualizations make it easier to connect and navigate through complex thoughts and concepts.'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Lovable.dev', 'Git/GitHub'],
      icon: <Users className="text-blue-400" size={24} />, 
      gradient: 'from-blue-200 to-blue-400',
      liveDemo: 'https://lovable.dev/projects/45b0441b-28d8-49e2-988c-a400f71d2323',
      codeUrl: 'https://github.com/sandeepdarla-2004/EchoSpace.git',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Innovative solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${project.gradient} p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1 animate-fade-in-up magnetic hover-lift`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <div className="bg-white p-8 rounded-xl h-full hover:bg-gradient-to-br hover:from-white hover:to-blue-50 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Info */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className="animate-bounce">{project.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-3">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 magnetic"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-lg magnetic"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      ) : (
                        <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-lg magnetic" disabled>
                          <Github size={20} />
                          View Code
                        </button>
                      )}
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-2 transform hover:scale-105 magnetic"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      ) : (
                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-2 transform hover:scale-105 magnetic" disabled>
                          <ExternalLink size={20} />
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover-lift">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="text-blue-500 mr-2 animate-bounce" size={20} />
                        Project Impact
                      </h4>
                      <ul className="space-y-3">
                        {project.impact.map((item, impactIndex) => (
                          <li
                            key={impactIndex}
                            className="flex items-start text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {index === 0 && (
                        <img
                          src="/images/left.png"
                          alt="E-commerce Website Preview"
                          className="mt-6 w-32 h-32 object-contain rounded-xl shadow-lg mx-auto"
                        />
                      )}
                      {index === 1 && (
                        <img
                          src="/images/right.png"
                          alt="Emergency Ward Management Preview"
                          className="mt-6 w-32 h-32 object-contain rounded-xl shadow-lg mx-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-float magnetic hover-lift"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-particle-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-indigo-300 rounded-full opacity-20 animate-particle-float animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-particle-float animation-delay-500"></div>
      </div>
    </section>
  );
};

export default Projects;