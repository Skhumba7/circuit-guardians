import { ClipboardCheck, MessageSquareText, ShieldCheck } from 'lucide-react';

const expectations = [
  {
    icon: MessageSquareText,
    title: 'Start with the real problem',
    description: 'Tell us what is getting in the way. We listen first, then help you choose a practical next step.',
  },
  {
    icon: ClipboardCheck,
    title: 'Know what happens next',
    description: 'Whether you need support or a new digital product, we keep the process clear from the first conversation.',
  },
  {
    icon: ShieldCheck,
    title: 'Get support that stays human',
    description: 'No jargon for its own sake. Just capable people focused on making technology easier to use and trust.',
  },
];

export default function Expectations() {
  return (
    <section className="bg-slate-950 px-5 py-24 text-white sm:px-8" aria-labelledby="expectations-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">A better starting point</p>
          <h2 id="expectations-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Tech help should feel straightforward.</h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">We are here to replace uncertainty with a clear conversation and an informed decision.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {expectations.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon size={25} className="text-cyan-300" aria-hidden="true" />
              <h3 className="mt-8 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
