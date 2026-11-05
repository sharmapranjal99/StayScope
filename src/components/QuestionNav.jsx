import { useEffect, useRef } from 'react';
import { questions } from '../data/overview.js';

/** Sticky sidebar (desktop) listing all nine questions with active highlighting. */
export function QuestionSidebar({ active }) {
  return (
    <nav aria-label="Research questions" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 lg:block">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Questions</p>
      <ol className="space-y-0.5 border-l border-line">
        {questions.map((q, i) => {
          const on = active === q.id;
          return (
            <li key={q.id}>
              <a
                href={`#${q.id}`}
                aria-current={on ? 'true' : undefined}
                className={`-ml-px flex items-baseline gap-2.5 border-l-2 py-2 pl-3 pr-2 text-[13.5px] leading-snug transition-colors ${
                  on ? 'border-coral font-medium text-coral' : 'border-transparent text-ink-2 hover:border-line-2 hover:text-ink'
                }`}
              >
                <span className={`font-mono text-[11px] ${on ? 'text-coral' : 'text-muted'}`}>Q{i + 1}</span>
                <span>{q.short}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Horizontal sticky chip bar (mobile/tablet). */
export function QuestionChips({ active }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current?.querySelector('[aria-current="true"]');
    if (el && ref.current) {
      const box = ref.current;
      const left = el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2;
      box.scrollTo({ left, behavior: 'smooth' });
    }
  }, [active]);
  return (
    <nav aria-label="Research questions" className="sticky top-16 z-30 -mx-4 border-y border-line bg-white/95 backdrop-blur sm:-mx-6 lg:hidden">
      <div ref={ref} className="scroll-x flex gap-1.5 px-4 py-2 sm:px-6" style={{ scrollbarWidth: 'none' }}>
        {questions.map((q, i) => {
          const on = active === q.id;
          return (
            <a
              key={q.id}
              href={`#${q.id}`}
              aria-current={on ? 'true' : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                on ? 'border-coral bg-coral text-white' : 'border-line bg-white text-ink-2'
              }`}
            >
              Q{i + 1} · {q.short}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
