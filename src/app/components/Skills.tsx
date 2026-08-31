import { motion } from 'motion/react';
import { Layout, Search, Palette, MousePointerClick } from 'lucide-react';

export function Skills() {
  const features = [
    {
      icon: Layout,
      title: 'Full-Stack Development',
      description:
        'I build responsive, production-ready apps end to end with React, FastAPI, and modern cloud tooling.',
    },
    {
      icon: Search,
      title: 'AI & Data Integration',
      description:
        'From recommendation models to predictive analytics, I turn data into features that actually help users.',
    },
    {
      icon: Palette,
      title: 'UI/UX Collaboration',
      description:
        'I work closely with designers in Figma to translate ideas into clean, intuitive interfaces.',
    },
    {
      icon: MousePointerClick,
      title: 'DevOps & Delivery',
      description:
        'CI/CD pipelines, cloud deployment, and rigorous testing keep releases smooth and reliable.',
    },
  ];

  const languages = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript / TypeScript', level: 90 },
  ];

  const tools = [
    'React', 'FastAPI', 'Figma', 'Azure', 'C#', '.NET',
    'KNIME', 'Excel (VBA)', 'Jenkins', 'GitHub',
    'MongoDB', 'Microsoft Office 365', 'AWS',
    'ChartJS', 'CI/CD Pipelines',
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-start mb-14"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-3">Our Features</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight text-black">
              I Have Expertise to Tackle Challenges
            </h2>
          </div>
          <p className="text-black/60 md:text-right md:self-end">
            With experience across the stack, I can tackle challenges and provide solutions.
            My skills enhance my problem-solving and make me a valuable asset to any team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'var(--brand-gray)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--brand-yellow)' }}
                >
                  <Icon size={18} className="text-black" />
                </div>
                <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="font-display text-xl text-black mb-6">Programming Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-black/80">{lang.name}</span>
                    <span className="text-black/50">{lang.level}%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ backgroundColor: 'var(--brand-gray)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: 'var(--brand-yellow)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-black mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="px-4 py-2 rounded-full text-sm text-black/80 border border-black/10"
                  style={{ backgroundColor: 'var(--brand-gray)' }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
