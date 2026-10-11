'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, Wrench } from 'lucide-react';

const assurances = ['Clear, practical advice', 'Built around your goals', 'Support when you need it'];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 px-5 pb-20 pt-28 text-white sm:px-8 sm:pt-36">
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -right-40 top-10 -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -bottom-56 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />Total tech care for people and growing businesses</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Tech that works.<span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent"> Business that moves.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">From a device that needs attention to a digital product that needs building, Circuit Guardians gives you a capable team, plain-language guidance, and a reliable path forward.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_30px_rgba(103,232,249,.3)]">Talk to a Guardian <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a><a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Explore our services</a></div>
          <ul className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">{assurances.map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 size={17} className="shrink-0 text-cyan-300" />{item}</li>)}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-md"><div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-2xl" /><div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/80 p-6 shadow-2xl backdrop-blur"><div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[.2em] text-cyan-300">Circuit Guardians</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Ready to help</span></div><div className="space-y-4"><div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><Wrench className="mb-4 text-cyan-300" /><h2 className="text-xl font-semibold">Keep your tools working</h2><p className="mt-2 text-sm leading-6 text-slate-300">Repairs, installations, and responsive IT support for the tech you rely on.</p></div><div className="ml-8 rounded-2xl border border-violet-300/15 bg-violet-300/5 p-5"><Code2 className="mb-4 text-violet-300" /><h2 className="text-xl font-semibold">Build what&apos;s next</h2><p className="mt-2 text-sm leading-6 text-slate-300">Thoughtful websites and applications made for the way your business actually operates.</p></div></div></div></motion.div>
      </div>
    </section>
  );
}
