import { motion } from 'motion/react';
import { Users, Award, Calendar } from 'lucide-react';

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Experience</h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-blue-600" size={32} />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Head of Membership Division</h3>
                      <p className="text-lg text-blue-600">Indonesian Student Association of Newcastle</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span>Oct 2024 - Oct 2025</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span>
                    Facilitated the adaptation of incoming Indonesian students to Newcastle by organizing city tours 
                    and serving as the primary point of contact for emergencies, resulting in smoother transitions 
                    and increased student confidence during their first weeks
                  </span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span>
                    Developed and maintained a comprehensive Excel database of Indonesian students in Newcastle 
                    and Sunderland, enabling rapid emergency communication and supporting data-driven event planning 
                    through interest-based charts and reports
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Event Planning', 'Data Management', 'Crisis Management', 'Community Building'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
