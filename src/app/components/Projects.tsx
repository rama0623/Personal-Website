import { motion } from 'motion/react';
import { Code, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'D.A.D (Dialect accent Directory',
      organization: 'Claude Builder Club Hackathon project',
      description: '',
      highlights: [
        'Developed and integrated AI-driven using Python recommendation models that suggested relevant groups and optimized inter-group connections, increasing user engagement potential and laying the groundwork for scalable community growth algorithms',
        'Collaborated on distributed deployment using modern UI frameworks to ensure a responsive and intuitive user experience, while also preprocessing and structuring AI training datasets to improve model prediction by 30% during prototype testing',
        'Architected data pipelines and modular backend components to support future scalability and analytics integration, enabling expansion into enterprise, educational, or city-level community networks'
      ],
      tags: ['React', 'FastAPI', 'Supabase', 'AI',"MAPBox GL JS"],
      github:'https://github.com/rama0623/D.A.D'
    },
    {
      title: 'Fire-Sense',
      organization: 'Oliver Wyman Challenge',
      description: 'A data analytics project that created predictive models for marathon performance optimization',
      highlights: [
        'Created a linear regression model within 3 hours during the Oliver Wyman challenge using Great North Run data, generating actionable insights for enhancing marathon preparedness',
        'Used numpy to display the linear regression model as well as displayed other graphs and charts to support linear regression model findings'
      ],
      tags: ['Python', 'NumPy', 'Data Science', 'Machine Learning'],
      github:'https://github.com/rama0623/Fire-Sense'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code className="text-blue-600" size={28} />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.organization}</p>
                    </div>
                  </div>

                  
                  {project.github && (
  <button
    className="text-blue-600 hover:text-blue-700"
    onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
  >
    <ExternalLink size={20} />
  </button>
)}
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
