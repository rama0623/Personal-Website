import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.a
              href="mailto:ramaBhaskara23@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="flex justify-center mb-4">
                <Mail className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 break-all">ramaBhaskara23@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+447405196320"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="flex justify-center mb-4">
                <Phone className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+44 7405196320</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/LINKEDN"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="flex justify-center mb-4">
                <Linkedin className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">Connect with me</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="flex justify-center mb-4">
                <MapPin className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-sm text-gray-600">Newcastle upon Tyne, UK</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500">© 2026 Rama Bhaskara. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
