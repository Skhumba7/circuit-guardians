'use client';

import { motion } from 'framer-motion';
import { Zap, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                From Broken Screens
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">to Custom Apps</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                We've Got You!
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you need hardware repairs, software solutions, or a complete digital transformation, Circuit Guardians is your one-stop tech partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                <Zap size={20} />
                Repair My Device
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                <Code size={20} />
                Start a Project
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - 3D Circuit Board Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Circuit Board Background */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              <rect width="400" height="400" fill="url(#grad1)" rx="20" />

              {/* Circuit Paths */}
              <motion.path
                d="M 50 200 L 150 200 L 150 100 L 250 100"
                stroke="url(#grad1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.path
                d="M 350 200 L 250 200 L 250 300 L 150 300"
                stroke="url(#grad1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Nodes */}
              <motion.circle
                cx="50"
                cy="200"
                r="8"
                fill="#3b82f6"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.circle
                cx="150"
                cy="100"
                r="8"
                fill="#a855f7"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle
                cx="250"
                cy="100"
                r="8"
                fill="#ec4899"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle
                cx="350"
                cy="200"
                r="8"
                fill="#3b82f6"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.circle
                cx="250"
                cy="300"
                r="8"
                fill="#a855f7"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle
                cx="150"
                cy="300"
                r="8"
                fill="#ec4899"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="10"
                fill="#ef4444"
                animate={{ r: [10, 15, 10], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Text */}
              <text
                x="200"
                y="380"
                textAnchor="middle"
                className="text-sm fill-gray-600 dark:fill-gray-400"
                fontSize="14"
              >
                Repair • Build • Support
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
