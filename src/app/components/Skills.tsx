import { motion } from 'motion/react';
import { Code2, Wrench } from 'lucide-react';

export function Skills() {
  const skills = {
    languages: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript/TypeScript', level: 90 }
    ],
    tools: [
      'React', 'FastAPI', 'Figma', 'Azure', 'C#', '.NET',
      'KNIME', 'Excel (VBA)', 'Jenkins', 'GitHub',
      'MongoDB', 'Microsoft Office 365', 'Amazon Web Services (AWS)',
      'ChartJS', 'CI/CD Pipelines'
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-600" size={32} />
                <h3 className="text-2xl font-semibold text-gray-900">Programming Languages</h3>
              </div>

              <div className="space-y-4">
                {skills.languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-gray-500">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="text-blue-600" size={32} />
                <h3 className="text-2xl font-semibold text-gray-900">Tools & Technologies</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
