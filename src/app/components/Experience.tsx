import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Projects } from './Projects';

export function Experience() {
  const experiences = [

    {
      company: 'Icon Train Smarter',
      role: 'QA intern',
      location: 'United Kingdom',
      period: 'Jul 2026 - Present',
      highlights: [
        'Conducted comprehensive testing of the Icon Train Smarter platform, identifying and documenting bugs and issues to ensure a seamless user experience.',
        'Collaborated with the development team to provide feedback and suggestions for improving the UX design and functionality of the platform, resulting in a more intuitive and user-friendly interface.',
        'Participated in team meetings and discussions, gaining valuable insights into the software development lifecycle and QA best practices.'
      ],
      link: 'https://www.icontrainsmarter.com/'
    },

    {
      company: 'Monetary Authority of Singapore',
      role: 'Full-Stack Developer',
      location: 'Singapore',
      period: 'Jul 2023 - Jan 2024',
      highlights: [
        'Developed front-end features for website MAS-FxO using React, helped in UI designs and collaborated with UI designers using Figma, which improved the workflow of MAS financial officers\' efficiency by 70%',
        'Collaborated alongside the backend of the website using C# to help persist data from SQL database for realistic integration into Azure cloud solutions using Web Services to help build microservices for front-end functionality usage',
        'Conducted rigorous testing with the team in deployment on CI-CD pipelines, ensuring a bug-free rollout of our website during the launch day with 95% user satisfaction',
        'Created an MVP Statistics Dashboard project within the website, using the ChartJS library from React. Additionally, applied agile practices and cross-functional teamwork to deliver a high-impact tool for MAS officers allowing them to track regulatory document submissions from Financial Institutions, increasing risk management by 60%'
      ]
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Briefcase size={18} />
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-gray-500 md:text-right mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div>
          <Projects />
        </div>
      </div>
    </section>

  );
}
