'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real results, real impact
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Project 1 */}
          <motion.a
            href="https://www.justice.gov.za"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
              <div className="text-6xl">⚖️</div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Department of Justice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Official government website for the Department of Justice and Constitutional Development
              </p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                <span>Visit Website</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                www.justice.gov.za
              </p>
            </div>
          </motion.a>

          {/* Project 2 */}
          <motion.a
            href="https://www.lindachirwaattorneys.co.za"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
              <div className="text-6xl">⚖️</div>
            </div>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Linda Chirwa Attorneys
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Professional legal services website for Linda Chirwa Attorneys
              </p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                <span>Visit Website</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                www.lindachirwaattorneys.co.za
              </p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}