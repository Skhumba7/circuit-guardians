'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, HeartHandshake, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Consult',
    description: 'We listen to your needs and understand your goals.',
    icon: MessageSquare,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
  },
  {
    number: 2,
    title: 'Execute',
    description: 'Our experts deliver solutions with precision and care.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
  },
  {
    number: 3,
    title: 'Support',
    description: 'We stand by our work with continuous support.',
    icon: HeartHandshake,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900',
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Three simple steps to your solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <svg
            className="absolute top-20 left-0 right-0 w-full h-12 hidden md:block"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 50 Q 500 50 950 50"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Container */}
                <div className={`bg-gradient-to-br ${step.bgColor} p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center h-full`}>
                  {/* Circle Number */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="flex justify-center mb-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon size={32} className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight size={24} className="text-purple-600 dark:text-purple-400" />
                    </motion.div>
                  )}

                  {/* Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="md:hidden flex justify-center mt-4"
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight size={24} className="text-purple-600 dark:text-purple-400 rotate-90" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
