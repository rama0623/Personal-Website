import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const footerColumns = [
    {
      title: 'Get In Touch',
      links: [
        { label: 'ramabhaskara23@gmail.com', href: 'mailto:ramabhaskara23@gmail.com' },
        { label: '+44 7405 196320', href: 'tel:+447405196320' },
        { label: 'Newcastle upon Tyne, UK', href: undefined },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Experience', href: '/experience' },
        { label: 'Projects', href: '/projects' },
        { label: 'Leadership', href: '/leadership' },
        { label: 'Skills', href: '/skills' },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { label: 'GitHub', href: 'https://github.com/rama0623' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/rama-bhaskara' },
      ],
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-10" style={{ backgroundColor: 'var(--brand-black)' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20"
        >
          <svg
            viewBox="0 0 1200 460"
            className="w-full h-auto"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,460 C0,300 60,90 300,35 C480,-5 720,-5 900,35 C1140,90 1200,300 1200,460 Z"
              fill="var(--brand-yellow)"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-6 text-center">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl leading-tight text-black mb-6 max-w-2xl">
              Let's Build Something Great Together
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:ramabhaskara23@gmail.com"
                className="px-6 py-3 rounded-full bg-black text-white text-sm hover:bg-black/80 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/rama0623"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-black text-black text-sm hover:bg-black hover:text-white transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
