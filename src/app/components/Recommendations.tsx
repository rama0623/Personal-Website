import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'D.A.D — Dialect Accent Directory',
      category: 'Claude Builder Club Hackathon',
      description:
        'AI-driven recommendation platform that connects communities through dialect and accent-based matching.',
      highlights: [
        'Built AI-driven recommendation models in Python that suggested relevant groups and optimized inter-group connections, laying groundwork for scalable community growth algorithms',
        'Collaborated on distributed deployment with modern UI frameworks for a responsive experience, and preprocessed AI training datasets to improve model prediction by 30% during prototype testing',
        'Architected data pipelines and modular backend components to support future scalability into enterprise, educational, or city-level networks',
      ],
      tags: ['React', 'FastAPI', 'Supabase', 'AI', 'Mapbox GL JS'],
      github: 'https://github.com/rama0623/D.A.D',
    },
    {
      title: 'FireSense',
      category: 'Newcastle University',
      description:
        'A real fire monitoring app that displays ongoing fire incidents and alerts.',
      highlights: [
        'Developed a real time interactive fire monitoring website displaying fires across the globe',
        'Implemented a real time alert system that notifies users of nearby fires using Python and NumPy',
        'Added a Chatbot that provides users with information about fire safety and prevention, using AI and machine learning techniques',
      ],
      tags: ['Python', 'NumPy', 'Data Science', 'Machine Learning'],
      github: 'https://github.com/rama0623/Fire-Sense',
    },
  ];

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: 'var(--brand-black)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none text-white">
            My Best Projects
          </h2>
          {/* <p className="text-white/60 max-w-sm">
            Whether it's building an AI feature, a full-stack app, or a data pipeline, I strive
            to understand the problem and deliver results that resonate.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-black mb-1">{project.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-black/50">
                    {project.category}
                  </p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--brand-yellow)' }}
                  >
                    <ExternalLink size={16} className="text-black" />
                  </a>
                )}
              </div>

              <p className="text-sm text-black/70 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-5">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex gap-2 text-sm text-black/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/40 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 rounded-full text-xs text-black/70 border border-black/10"
                    style={{ backgroundColor: 'var(--brand-gray)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
