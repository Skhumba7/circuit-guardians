'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [{ href: '#services', label: 'Services' }, { href: '#work', label: 'Our work' }, { href: '#about', label: 'Why us' }];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur-xl"><nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation"><a href="#top" className="flex items-center gap-3" aria-label="Circuit Guardians home"><Image src="/logo.png" alt="" width={46} height={46} priority className="h-11 w-11 rounded-xl" /><span className="text-sm font-bold tracking-wide sm:text-base">CIRCUIT<br className="sm:hidden" /> GUARDIANS</span></a><div className="hidden items-center gap-8 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">{link.label}</a>)}<a href="#contact" className="rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Request a quote</a></div><button className="rounded-lg p-2 text-white md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen}>{isOpen ? <X /> : <Menu />}</button></nav>{isOpen && <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/10">{link.label}</a>)}<a href="#contact" onClick={closeMenu} className="mt-2 rounded-lg bg-cyan-300 px-3 py-3 text-center font-bold text-slate-950">Request a quote</a></div></div>}</header>;
}
