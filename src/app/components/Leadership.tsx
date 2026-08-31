import { motion } from 'motion/react';
import { Users, Award, Calendar } from 'lucide-react';

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-black/50 mb-3">(Leadership)</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-black mb-12">
            Leading Beyond the Codebase
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-8 max-w-4xl"
            style={{ backgroundColor: 'var(--brand-gray)' }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--brand-yellow)' }}
                >
                  <Users size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Head of Membership Division</h3>
                  <p className="text-black/60">Indonesian Student Association of Newcastle</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-black/50 text-sm">
                <Calendar size={14} />
                <span>Oct 2024 - Oct 2025</span>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-black/70">
                <Award size={16} className="shrink-0 mt-0.5 text-black/40" />
                <span>
                  Facilitated the adaptation of incoming Indonesian students to Newcastle by
                  organizing city tours and serving as the primary point of contact for
                  emergencies, resulting in smoother transitions and increased student
                  confidence during their first weeks.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-black/70">
                <Award size={16} className="shrink-0 mt-0.5 text-black/40" />
                <span>
                  Developed and maintained a comprehensive database of Indonesian students in
                  Newcastle and Sunderland, enabling rapid emergency communication and
                  supporting data-driven event planning through interest-based charts and
                  reports.
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-black/10">
              <h4 className="text-xs uppercase tracking-wide text-black/50 mb-3">
                Key Skills Developed
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Event Planning', 'Data Management', 'Crisis Management', 'Community Building'].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full text-xs text-black/70 bg-white border border-black/10"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
