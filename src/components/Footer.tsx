'use client';

import { ArrowUpRight, Clock, MessageCircle, Phone, ShieldCheck, Zap } from 'lucide-react';

const directContacts = [
  {
    href: 'https://wa.me/27662774937',
    label: 'WhatsApp',
    value: '066 277 4937',
    description: 'Fastest way to get a quote, repair status or advice',
    icon: MessageCircle,
    action: 'Start chat',
    primary: true,
  },
  {
    href: 'tel:+27662774937',
    label: 'Call us',
    value: '066 277 4937',
    description: 'Immediate assistance during business hours',
    icon: Phone,
    action: 'Call now',
    primary: false,
  },
];

const highlights = [
  {
    icon: Zap,
    title: 'Fast diagnostic triage',
    desc: 'Rapid fault assessment for phones, laptops, and IT infrastructure.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent upfront quotes',
    desc: 'Clear scope and pricing before any repair or development work begins.',
  },
  {
    icon: Clock,
    title: 'Flexible service options',
    desc: 'Remote IT support, on-site diagnostics, and secure collect-and-repair.',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Heading and Context */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">
              Let&apos;s solve it
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring us the problem. We&apos;ll help you find the right next move.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Tell us what you need—device repair, software support, or a purpose-built web and mobile application—and connect directly with our technicians and developers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                Direct technician access
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                Based in South Africa
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
                Fast turnaround
              </span>
            </div>
          </div>

          {/* Right Column: Direct Contact & Instant Actions */}
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Direct Contact
              </span>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                Get in touch with us
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Reach us directly via WhatsApp or phone call for instant assistance.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {directContacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 transition ${
                      contact.primary
                        ? 'border-cyan-300/40 bg-cyan-300/10 hover:border-cyan-300 hover:bg-cyan-300/20'
                        : 'border-white/10 bg-slate-900/80 hover:border-white/25 hover:bg-slate-900'
                    }`}
                  >
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                        contact.primary
                          ? 'bg-cyan-300 text-slate-950'
                          : 'bg-white/10 text-cyan-300'
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          {contact.label}
                        </span>
                        {contact.primary && (
                          <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                            Fastest Response
                          </span>
                        )}
                      </div>
                      <span className="block truncate font-semibold text-white sm:text-lg">
                        {contact.value}
                      </span>
                      <span className="block text-xs text-slate-400">
                        {contact.description}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlights Row: Clean 3-column banner spanning full width */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20">
                <Icon size={22} className="text-cyan-300 mb-3" />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Circuit Guardians. All rights reserved.</span>
          <span>South Africa · Repairs · IT support · Digital products</span>
        </div>
      </div>
    </footer>
  );
}
