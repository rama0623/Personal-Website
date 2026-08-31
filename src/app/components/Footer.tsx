import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerColumns = [
    {
      title: 'Get In Touch',
      links: [
        { label: 'ramabhaskara23@gmail.com', href: 'mailto:ramabhaskara23@gmail.com' },
        { label: '+44 7405 196320', href: 'tel:+447405196320' },
        { label: 'Newcastle upon Tyne, UK', href: undefined },
      ],
    },
  ];

  return (
    <footer id="footer" className="pt-24 pb-10 bg-[var(--brand-black)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center sm:text-left">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {footerColumns.map((col, index) => (
            <div key={index}>
              <h4 className="text-white text-sm font-semibold mb-4 text-center sm:text-left">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white/60 hover:text-white transition-colors text-center sm:text-left"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-sm text-white/60 text-center sm:text-left">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-start-4">
            <h4 className="text-white text-sm font-semibold mb-4 text-center sm:text-left md:text-right">Stay Connected</h4>
            <div className="flex gap-3 justify-center sm:justify-start md:justify-end">
              <a
                href="https://github.com/rama0623"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={16} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/rama-bhaskara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a
                href="mailto:ramabhaskara6@gmail.com"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail size={16} className="text-white" />
              </a>
              <a
                href="tel:+447405196320"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Phone size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-white/50 text-center sm:text-left">
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <MapPin size={14} /> Newcastle upon Tyne, UK
          </p>
          <p className="justify-center">© 2026 Rama Bhaskara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
