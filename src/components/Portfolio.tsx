'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'hardware',
      title: 'iPhone X Screen Repair',
      before: '📱 Cracked Display',
      after: '✨ Like New',
    },
    {
      id: 2,
      category: 'software',
      title: 'E-Commerce Platform',
      before: 'Concept',
      after: 'Live at www.example.com',
    },
    {
      id: 3,
      category: 'hardware',
      title: 'MacBook Keyboard Replacement',
      before: '⌨️ Non-functional Keys',
      after: '✅ Fully Operational',
    },
    {
      id: 4,
      category: 'software',
      title: 'Mobile Fitness App',
      before: 'App Store Ready',
      after: '4.8★ Rating • 50K+ Downloads',
    },
    {
      id: 5,
      category: 'hardware',
      title: 'Laptop Battery Replacement',
      before: '🔋 30 min Battery Life',
      after: '⚡ 8 Hours Usage',
    },
    {
      id: 6,
      category: 'software',
      title: 'SaaS Dashboard',
      before: 'Business Idea',
      after: '$50K MRR • 500+ Clients',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

            {/* Filter Buttons */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
            >
            {[
                { label: 'All Projects', value: 'all' },
                { label: 'Hardware Rescues', value: 'hardware' },
                { label: 'Software Launches', value: 'software' },
            ].map((filter) => (
                <motion.button
                key={filter.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                    activeFilter === filter.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
                >
                <Filter size={18} />
                {filter.label}
                </motion.button>
            ))}
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Before</p>
                        <p className="text-3xl font-bold">{project.before}</p>
                    </motion.div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                    <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                            ✓ After:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">{project.after}</span>
                        </div>
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mt-3">
                        {project.category === 'hardware' ? '🔧 Hardware' : '💻 Software'}
                        </span>
                    </div>
                    </div>

                    <motion.div
                    className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>
        </div>
    </section>
  );
}
