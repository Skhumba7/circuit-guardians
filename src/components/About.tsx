'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Lightbulb, Wrench } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'Hardware Expertise',
    description: 'We breathe new life into computers, laptops, and cell phones, ensuring your daily tools stay operational.',
  },
  {
    icon: Lightbulb,
    title: 'Software Innovation',
    description: 'Beyond installation, we also build the software. Whether it\'s a bespoke website or a high-performance application, we turn your vision into a digital reality.',
  },
  {
    icon: Shield,
    title: 'Reliability First',
    description: 'Our name is our promise. We guard your data, your devices, and your digital presence with industry-leading standards.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Guardians of Your Digital World
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Circuit Guardians, we believe that technology should be a tool for progress, not a source of frustration. 
            Based on the principle of "Total Tech Care," we have bridged the gap between physical hardware reliability and 
            cutting-edge software innovation.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Who We Are
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We are a team of technicians, developers, and problem-solvers. Whether it's a shattered smartphone screen 
              that holds your precious memories or a complex business idea that needs a custom digital solution to thrive, 
              we treat every circuit and every line of code with the same level of precision.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                <span>Expert team with years of industry experience</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                <span>Passion for solving complex technical challenges</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                <span>Commitment to customer satisfaction</span>
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="text-6xl mb-4">🛡️</div>
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Total Tech Care
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              From the motherboard to the user interface, we are your one-stop tech partners dedicated to your success.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us - Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose the Guardians?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <Icon size={40} className="text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Circuit Guardians: Your Tech Heroes
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your tech challenges into opportunities?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:shadow-lg transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
