import { ChevronUp } from 'lucide-react';

/** One research-question section: number, exact question text, then content. */
export default function QuestionBlock({ id, number, question, children }) {
  return (
    <article id={id} className="scroll-mt-32 border-b border-line py-14 first:pt-4 last:border-0 lg:scroll-mt-24">
      <header className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-coral px-2 font-mono text-sm font-semibold text-white">
            Q{number}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Research question {number} of 9</span>
        </div>
        <h3 className="max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.7rem]">{question}</h3>
      </header>
      <div className="space-y-6">{children}</div>
      <div className="mt-8 flex justify-end">
        <a href="#questions" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-coral">
          <ChevronUp className="h-3.5 w-3.5" /> All questions
        </a>
      </div>
    </article>
  );
}
