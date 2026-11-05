import { ArrowRight, Database, FileSpreadsheet, Layers, ListChecks, Target } from 'lucide-react';
import { brandName, objectives, problemStatement, projectTitle, questions, questionsIntro } from '../../data/overview.js';
import { cleanedShape, originalShape } from '../../data/dataset.js';
import { cleaningStats } from '../../data/cleaning.js';

const fmt = (n) => n.toLocaleString('en-US');

export default function OverviewSection() {
  const facts = [
    { icon: FileSpreadsheet, label: 'Original dataset', value: `${fmt(originalShape.rows)} × ${originalShape.columns}`, sub: 'rows × columns' },
    { icon: Layers, label: 'After cleaning', value: `${fmt(cleanedShape.rows)} × ${cleanedShape.columns}`, sub: 'rows × columns' },
    { icon: Database, label: 'Duplicates removed', value: fmt(cleaningStats.duplicatesRemoved), sub: 'duplicate records' },
    { icon: ListChecks, label: 'Research questions', value: String(questions.length), sub: 'explored in this analysis' },
  ];

  return (
    <section id="overview" className="scroll-mt-20 bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-line">
        {/* one soft coral glow — the only decorative element */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: 'var(--airbnb-coral)' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <p className="mb-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-white py-1.5 pl-3 pr-4 text-xs font-medium text-ink-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <img src="./airbnb-logo.webp" alt="Airbnb" width="330" height="103" className="h-4 w-auto" />
            <span aria-hidden className="h-3.5 w-px bg-line-2" />
            New York City · Airbnb Open Data · Exploratory analysis
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {brandName}
            <span className="text-coral">.</span>
          </h1>
          <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-coral sm:text-3xl">{projectTitle}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            A research presentation of the data cleaning, exploratory analysis and visualizations used to answer nine questions about the New York City Airbnb lodging market.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#questions" className="inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_-6px_rgba(255,90,95,0.6)] transition hover:brightness-95">
              Explore the nine questions <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#data" className="inline-flex items-center gap-2 rounded-lg border border-teal bg-white px-5 py-3 text-sm font-semibold text-teal transition-colors hover:bg-teal-soft">
              Dataset & cleaning
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {facts.map(({ icon: Icon, label, value, sub }, i) => (
              <div key={label} className="rounded-xl border border-line bg-white/90 p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_6px_16px_-10px_rgba(0,0,0,0.12)]">
                <Icon className={`h-4 w-4 ${['text-coral', 'text-teal', 'text-orange', 'text-ink'][i]}`} aria-hidden />
                <dt className="mt-3 text-xs font-medium uppercase tracking-wider text-muted">{label}</dt>
                <dd className="mt-1 font-mono text-xl font-medium tracking-tight text-ink tabular sm:text-2xl">{value}</dd>
                <dd className="text-xs text-muted">{sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Problem statement + objectives */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-coral">Problem statement</p>
          <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Introduction</h2>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-ink-2">
            {problemStatement.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-line bg-plane p-6">
            <div className="mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-teal" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Project objectives</h3>
            </div>
            <ul className="space-y-3">
              {objectives.map((o) => (
                <li key={o} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-teal" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Dataset overview</h3>
            </div>
            <dl className="divide-y divide-line text-sm">
              {[
                ['Data', 'Airbnb Open Data'],
                ['Scope', 'New York City Airbnb listings'],
                ['Raw dataset', `${fmt(originalShape.rows)} rows · ${originalShape.columns} columns`],
                ['After cleaning', `${fmt(cleanedShape.rows)} rows · ${cleanedShape.columns} columns`],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-medium text-ink sm:text-right tabular">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Question navigation */}
      <div className="border-t border-line bg-plane">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-coral">Questions</p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Nine research questions</h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-2">{questionsIntro}</p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {questions.map((q, i) => (
              <li key={q.id}>
                <a
                  href={`#${q.id}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-[0_10px_30px_-16px_rgba(0,0,0,0.25)]"
                >
                  <span className="mb-3 inline-flex h-7 w-9 items-center justify-center rounded-md bg-coral-soft font-mono text-xs font-medium text-coral">Q{i + 1}</span>
                  <span className="flex-1 text-[14.5px] font-medium leading-snug text-ink">{q.text}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted group-hover:text-coral">
                    View analysis <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
