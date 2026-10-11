'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Department of Justice',
    clientType: 'Public Sector / Institutional',
    url: 'https://www.justice.gov.za',
    displayUrl: 'justice.gov.za',
    category: 'Government & Citizen Services',
    icon: '⚖️',
    description: 'Official digital platform for the Department of Justice and Constitutional Development, delivering critical legal information, constitutional resources, gazettes, and public citizen notices.',
    deliverables: [
      'Enterprise Microsoft IIS & ASP.NET infrastructure support',
      'Bootstrap-powered responsive citizen portal & document discovery',
      'High-traffic public legal services & constitutional archive',
    ],
    tech: ['Microsoft IIS', 'ASP.NET', 'Bootstrap', 'jQuery', 'Google Tag Manager'],
    gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  },
  {
    title: 'Linda Chirwa Attorneys',
    clientType: 'Legal & Professional Services',
    url: 'https://www.lindachirwaattorneys.co.za',
    displayUrl: 'lindachirwaattorneys.co.za',
    category: 'Corporate Legal Practice',
    icon: '🏛️',
    description: 'Professional legal practice website built for fast mobile load times, consultation discovery, and direct client enquiry intake for conveyancing, notarial, and corporate legal counsel.',
    deliverables: [
      'Custom vanilla JavaScript with IntersectionObserver scroll reveals',
      'Preloaded modern typography (Raleway & Inter WOFF2) for rapid LCP',
      'PWA-ready web manifest, structured Open Graph meta & lead capture',
    ],
    tech: ['HTML5 / Semantic Web', 'Custom CSS3', 'Vanilla JavaScript (ES6+)', 'Apache HTTP Server', 'Web Manifest / PWA'],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* Background glow and subtle grid */}
      <div className="hero-grid absolute inset-0 -z-10 opacity-30" />
      <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />

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
            Proof of Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Digital experiences engineered for trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Real systems built for South African organizations and businesses where uptime, reputation, and clarity cannot be compromised.
          </p>
        </motion.div>

        {/* Portfolio Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-slate-900/90 sm:p-9"
            >
              <div className={`absolute top-0 right-0 left-0 h-32 bg-gradient-to-b ${project.gradient} opacity-50 transition-opacity group-hover:opacity-80`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                      {project.icon}
                    </span>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                        {project.clientType}
                      </span>
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950"
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
                  {project.description}
                </p>

                {/* Scope & Deliverables */}
                <div className="mt-6 space-y-2.5 rounded-2xl border border-white/5 bg-slate-950/60 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Outcomes Delivered
                  </span>
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm">
                      <CheckCircle2 size={16} className="shrink-0 text-cyan-300 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  <span>Visit {project.displayUrl}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 text-center sm:p-10"
        >
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Need a reliable web platform or custom application?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            We architect and build bespoke software using React, Next.js, and modern APIs—tailored specifically to how your business functions.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/27662774937?text=Hi%20Circuit%20Guardians,%20I%20would%20like%20to%20discuss%20a%20website%20or%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(103,232,249,0.3)]"
            >
              Discuss your project on WhatsApp
              <ArrowUpRight size={17} />
            </a>
            <a
              href="tel:+27662774937"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call 066 277 4937
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
