'use client';

import { motion } from 'framer-motion';
import { MessageSquareText, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Consult & Triage',
    subtitle: 'Free Initial Assessment',
    description: 'We listen to what is going wrong with your device, or review your development goals. Clear diagnosis in plain terms with zero pressure.',
    deliverable: 'Upfront diagnosis & honest quote',
    icon: MessageSquareText,
    accent: 'text-cyan-300 border-cyan-400/25 bg-cyan-400/10',
  },
  {
    step: '02',
    title: 'Precision Execution',
    subtitle: 'Hardware & Code Craftsmanship',
    description: 'Our technicians repair your hardware with quality parts, or our developers build and test your digital product with clean Next.js architecture.',
    deliverable: 'Rigorous testing & data integrity',
    icon: Cpu,
    accent: 'text-violet-300 border-violet-400/25 bg-violet-400/10',
  },
  {
    step: '03',
    title: 'Handoff & Ongoing Support',
    subtitle: 'Guaranteed Reliability',
    description: 'We return your restored device or launch your application, backing our work with ongoing responsiveness whenever you need a Guardian.',
    deliverable: 'Workmanship warranty & support access',
    icon: CheckCircle,
    accent: 'text-emerald-300 border-emerald-400/25 bg-emerald-400/10',
  },
];

export default function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900/80 px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-200 uppercase">
            How It Works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A transparent path from problem to solution.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            No jargon, no hidden fees, and no guessing. Three clear steps so you always know what comes next.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-300/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-cyan-300">
                      PHASE {item.step}
                    </span>
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl border ${item.accent}`}>
                      <Icon size={22} />
                    </span>
                  </div>

                  <span className="mt-6 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <span className="block text-xs font-medium uppercase tracking-wider text-cyan-300">
                    GUARANTEE
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">
                    {item.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Trigger Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/27662774937?text=Hi%20Circuit%20Guardians,%20I'd%20like%20to%20start%20with%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.35)]"
          >
            <span>Start Step 1: Tell us your problem</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
