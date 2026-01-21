'use client';

import { motion } from 'framer-motion';
import { Zap, Code } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 min-h-screen flex items-start justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              From Broken Screens
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-100">to Custom Apps</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              We've Got You!
            </span>
          </h1>

<p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mx-auto max-w-2xl">
            Whether you need hardware repairs, software solutions, or a complete digital transformation, Circuit Guardians is your one-stop tech partner.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                <Zap size={20} />
                Repair My Device
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
              >
                <Code size={20} />
                Start a Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
