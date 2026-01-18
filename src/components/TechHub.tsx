'use client';

import { motion } from 'framer-motion';
import { Smartphone, Settings, Code2, MessageCircle, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TechHub() {
  return (
    <section id="tech-hub" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Tech Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your one-stop solution for all things tech
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
        >
          {/* Card 1: Mobile & Laptop Repairs */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 lg:row-span-2 flex flex-col"
          >
            <Smartphone size={32} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Mobile & Laptop Repairs
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              From cracked screens to hardware replacements, we fix it all with precision and care.
            </p>
            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="mt-auto w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Book Now
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Card 2: Software Installation & IT Support */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <Settings size={32} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Software & IT Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Professional installation and continuous technical support.
            </p>
            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="mt-auto w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Card 3: Large - Mobile App & Web Development */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 p-8 rounded-2xl border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col"
          >
            <Code2 size={40} className="text-pink-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Mobile App & Web Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
              Custom-built solutions tailored to your business needs. From concept to launch, we bring your digital vision to life.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-pink-600 rounded-full" />
                React & Next.js Web Applications
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-pink-600 rounded-full" />
                Native & Cross-Platform Mobile Apps
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-pink-600 rounded-full" />
                Cloud Integration & Deployment
              </div>
            </div>
            <motion.a
              whileHover={{ x: 5 }}
              href="#portfolio"
              className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              View Portfolio
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Card 4: WhatsApp Quick Link */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-2xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <MessageCircle size={40} className="text-green-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Quick Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Message us directly on WhatsApp
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/27662774937"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              066 277 4937
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
