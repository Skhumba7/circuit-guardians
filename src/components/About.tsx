'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Wrench, Code2, HeartHandshake, ArrowRight } from 'lucide-react';

const corePillars = [
  {
    icon: Wrench,
    title: 'Hardware Precision',
    description: 'From shattered screens to motherboard logic-board faults, we repair laptops, cell phones, and workstations with precision tools and tested components.',
    metric: 'Hardware & Components',
  },
  {
    icon: Code2,
    title: 'Software & Digital Products',
    description: 'We build modern web applications and mobile apps with Next.js, React, and robust cloud APIs—translating business logic into fast, secure products.',
    metric: 'Full-Stack Development',
  },
  {
    icon: Shield,
    title: 'Data Privacy & Uptime',
    description: 'We treat every customer’s device, personal photos, business databases, and source code with strict confidentiality and professional diligence.',
    metric: 'Security-First Culture',
  },
];

const credentials = [
  'Skilled technicians with hands-on repair diagnostics',
  'Experienced developers building production-grade web systems',
  'Prompt communication with transparent, quote-first pricing',
  'South African local support ready via WhatsApp and call',
];

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* Visual background accents */}
      <div className="hero-grid absolute inset-0 -z-10 opacity-25" />
      <div className="absolute top-1/3 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-200 uppercase">
            About Circuit Guardians
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            The Guardians of your digital world.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            We bridge the gap between physical hardware reliability and custom digital software development under one roof.
          </p>
        </motion.div>

        {/* Story & Value Proposition Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-white">
              Why people and businesses depend on us.
            </h3>
            <p className="text-base leading-7 text-slate-300">
              Technology should enable your daily life and accelerate your business—not generate friction and downtime. Circuit Guardians was established on the principle of <strong className="text-white">&ldquo;Total Tech Care&rdquo;</strong>: whether you need a broken phone screen replaced before an important meeting or an enterprise-grade web application to scale your operations, our team delivers with equal accountability.
            </p>
            <p className="text-base leading-7 text-slate-300">
              We talk to you in plain language, inspect issues thoroughly, and provide transparent quotes before turning a screw or writing a line of code.
            </p>

            <div className="space-y-3 pt-2">
              {credentials.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero-style Guardian Assurance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/15 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md sm:p-10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300 border border-cyan-300/20">
                  <HeartHandshake size={24} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-white">Our Service Promise</h4>
                  <p className="text-xs text-slate-400">Total Tech Care Standard</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                100% Committed
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
                <h5 className="font-semibold text-white">No Hidden Costs</h5>
                <p className="mt-1 text-xs text-slate-400">
                  Clear itemized estimates prior to any hardware repair or software project commencement.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
                <h5 className="font-semibold text-white">Confidentiality Assured</h5>
                <p className="mt-1 text-xs text-slate-400">
                  Strict internal protocols ensuring your personal data and business documents remain private.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
                <h5 className="font-semibold text-white">Rapid Communication</h5>
                <p className="mt-1 text-xs text-slate-400">
                  Direct communication channels so you speak to the person actually handling your tech.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl backdrop-blur-sm transition hover:border-cyan-300/30"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={26} />
                </div>
                <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {pillar.metric}
                </span>
                <h4 className="mt-1 text-2xl font-semibold text-white">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 sm:flex-row sm:p-10"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Ready to work with your Tech Heroes?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Get in touch today for fast device repairs or custom web and app development.
            </p>
          </div>
          <a
            href="https://wa.me/27662774937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.3)]"
          >
            <span>Message on WhatsApp</span>
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
