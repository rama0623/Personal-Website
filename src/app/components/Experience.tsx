import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, Link } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Icon Train Smarter',
      role: 'QA Intern',
      location: 'United Kingdom',
      period: 'Jul 2026 - Present',
      highlights: [
        'Conducted comprehensive testing of the Icon Train Smarter platform, identifying and documenting bugs and issues to ensure a seamless user experience.',
        'Collaborated with the development team to provide feedback and suggestions for improving the UX design and functionality of the platform, resulting in a more intuitive and user-friendly interface.',
        'Participated in team meetings and discussions, gaining valuable insights into the software development lifecycle and QA best practices.',
      ],
      link: 'https://www.icontraining.app/',
    },
    {
      company: 'Monetary Authority of Singapore',
      role: 'Full-Stack Developer',
      location: 'Singapore',
      period: 'Jul 2023 - Jan 2024',
      highlights: [
        "Developed front-end features for MAS-FxO using React, helped in UI designs and collaborated with UI designers using Figma, which improved the workflow of MAS financial officers' efficiency by 70%",
        'Collaborated on the backend using C# to persist data from SQL databases for integration into Azure cloud solutions using web services to build microservices for front-end functionality',
        'Conducted rigorous testing with the team on CI-CD pipelines, ensuring a bug-free rollout during launch day with 95% user satisfaction',
        'Created an MVP statistics dashboard using ChartJS in React, applying agile practices and cross-functional teamwork to help MAS officers track regulatory document submissions, increasing risk management visibility by 60%',
      ],
      link: 'https://mastx.mas.gov.sg',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-black/50 mb-3">(Experience)</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-black mb-12">
            Where I've Put My Skills to Work
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-2xl p-6 md:p-8"
                style={{ backgroundColor: 'var(--brand-gray)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-black/70">
                      <span className="font-medium">{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-black/70 hover:text-black/90 underline ml-0 sm:ml-3"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Link size={14} />
                            <span>View Company</span>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-black/50 text-sm md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-sm text-black/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--brand-yellow)' }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
