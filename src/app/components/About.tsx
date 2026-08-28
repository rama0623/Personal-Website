import { motion } from 'motion/react';
import { GraduationCap, Code, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="flex justify-center mb-4">
                <GraduationCap size={48} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">B.S.C Computer Science (Software Engineering)</p>
              <p className="text-gray-500">Newcastle University</p>
              <p className="text-gray-500">Expected Jul 2027</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-indigo-50">
              <div className="flex justify-center mb-4">
                <Code size={48} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Full-Stack Developer</p>
              <p className="text-gray-500">Monetary Authority of Singapore</p>
              <p className="text-gray-500">Jul 2023 - Jan 2024</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="flex justify-center mb-4">
                <Lightbulb size={48} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">Building innovative solutions using modern technologies</p>
              <p className="text-gray-500">AI/ML, Web Development, Data Analytics</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              I'm a Software Engineering student at Newcastle University with a passion for creating 
              impactful digital solutions. My experience at the Monetary Authority of Singapore has 
              equipped me with real-world skills in full-stack development, where I improved workflow 
              efficiency by 70% through innovative UI/UX design and implementation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in building scalable web applications using React, Python, and modern cloud 
              technologies. Whether it's developing AI-driven features or optimizing CI/CD pipelines, 
              I'm always eager to tackle challenging problems and deliver high-quality solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
