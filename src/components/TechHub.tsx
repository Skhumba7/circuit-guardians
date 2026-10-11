'use client';

import { motion } from 'framer-motion';
import { Smartphone, Settings, Code2, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'repairs',
    title: 'Mobile & Laptop Repairs',
    badge: 'Hardware & Diagnostics',
    description: 'Precision troubleshooting, screen replacements, battery service, and board-level repairs for devices you rely on daily.',
    icon: Smartphone,
    color: 'cyan',
    iconBg: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    ctaText: 'Book repair inspection',
    ctaHref: 'https://wa.me/27662774937?text=Hi%20Circuit%20Guardians,%20I%20need%20help%20with%20a%20device%20repair.',
    isExternal: true,
    features: [
      'Fast turnaround & diagnostic triage',
      'Screen, battery & charging port replacement',
      'Data safety & confidentiality first',
    ],
  },
  {
    id: 'it-support',
    title: 'Software & IT Support',
    badge: 'Operations & Setup',
    description: 'Operating system installations, virus elimination, software setup, and responsive remote or on-site IT assistance for professionals and teams.',
    icon: Settings,
    color: 'violet',
    iconBg: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
    ctaText: 'Discuss IT support',
    ctaHref: 'https://wa.me/27662774937?text=Hi%20Circuit%20Guardians,%20I%20need%20IT%20support%20or%20software%20help.',
    isExternal: true,
    features: [
      'OS setup, clean installs & backups',
      'Virus, malware & bloatware cleanup',
      'Network, printer & peripheral troubleshooting',
    ],
  },
  {
    id: 'development',
    title: 'Custom Web & App Development',
    badge: 'Digital Products',
    description: 'Tailor-made web applications and cross-platform mobile apps engineered with Next.js and React to turn operational ideas into scalable revenue drivers.',
    icon: Code2,
    color: 'cyan-highlight',
    iconBg: 'bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300 border-cyan-300/30',
    ctaText: 'Explore portfolio',
    ctaHref: '#work',
    isExternal: false,
    featured: true,
    features: [
      'High-performance Next.js & React web platforms',
      'Clean UI/UX with mobile-first responsive architecture',
      'Payment gateways, databases & API integrations',
    ],
  },
];

export default function TechHub() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-slate-900/60 px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

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
            Services & Expertise
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Solutions built for reliability and growth.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            From emergency repairs that restore your daily workflow to custom web software that expands your business reach.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? 'border-cyan-300/30 bg-gradient-to-b from-slate-900/95 to-slate-950 shadow-[0_0_35px_rgba(103,232,249,0.15)] hover:border-cyan-300/50'
                    : 'border-white/10 bg-slate-950/80 shadow-xl backdrop-blur-sm hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl border ${service.iconBg}`}>
                      <Icon size={26} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm">
                        <CheckCircle2 size={16} className="shrink-0 text-cyan-300 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={service.ctaHref}
                    target={service.isExternal ? '_blank' : undefined}
                    rel={service.isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                      service.featured
                        ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.3)]'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick WhatsApp Support Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:flex-row sm:p-7"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
              <MessageCircle size={24} />
            </span>
            <div>
              <h4 className="text-base font-semibold text-white">
                Not sure what kind of fix or build you need?
              </h4>
              <p className="text-xs text-slate-400 sm:text-sm">
                Chat directly with our tech team on WhatsApp. Plain language, quick answers, no obligations.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/27662774937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <MessageCircle size={17} />
            <span>Chat on WhatsApp (066 277 4937)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
