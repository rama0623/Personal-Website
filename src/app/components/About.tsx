import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from '../../images/Amazon summit.jpeg';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-3">(About Me)</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-black mb-6">
              A Deep Dive into My Life's Experiences and Lessons Learned
            </h2>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden mb-6 aspect-[4/3]">
              <ImageWithFallback
                src={profile}
                alt="Rama Bhaskara portrait"
                className="w-full"
              />

              <ImageWithFallback
                          src={profile}
                          alt="Rama Bhaskara"
                          className="w-full h-full object-cover rounded-full"
                        />
            </div>

            <p className="text-black/70 leading-relaxed mb-4">
              I'm a Software Engineering student at Newcastle University with a passion for
              creating impactful digital solutions. My time at the Monetary Authority of
              Singapore gave me real-world experience in full-stack development, where I
              improved workflow efficiency by 70% through thoughtful UI/UX design and
              implementation.
            </p>
            <p className="text-black/70 leading-relaxed">
              I specialize in building scalable web applications using React, Python, and
              modern cloud technologies. Whether it's developing AI-driven features or
              optimizing CI/CD pipelines, I'm always eager to tackle challenging problems and
              deliver high-quality solutions. Outside of code, I've led community initiatives
              supporting Indonesian students settling into life in Newcastle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
