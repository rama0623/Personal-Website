import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profile from '../../images/profile.jpg';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-32 pb-16 flex flex-col"
      style={{
        background:
          'radial-gradient(120% 100% at 50% 0%, var(--brand-yellow) 0%, var(--brand-yellow-soft) 45%, #ffffff 85%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display uppercase leading-[0.85] tracking-tight text-black text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 9.5rem)' }}
        >
          Bhaskara<span className="align-top text-[0.35em]">©</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm sm:text-base text-black/70 max-w-4xl mx-auto w-full mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:max-w-xs"
          >
            Hi, I'm Rama Bhaskara — a Computer Science student in Newcastle. I build full-stack
            apps and explore AI-driven solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:max-w-xs md:text-right"
          >
            I bring ideas to life through clean engineering, thoughtful design, and hands-on
            collaboration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-40 sm:w-56 md:w-64 aspect-square rounded-full overflow-hidden"
        >
          <ImageWithFallback
            src={profile}
            alt="Rama Bhaskara"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
