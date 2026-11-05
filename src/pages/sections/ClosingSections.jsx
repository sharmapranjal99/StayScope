import { AlertTriangle, ArrowUpRight, Lightbulb } from 'lucide-react';
import Section from '../../components/Section.jsx';
import RichText from '../../components/RichText.jsx';
import { questions } from '../../data/overview.js';
import { conclusionClosing, conclusionIntro, furtherWork, keyFindings, limitations } from '../../data/conclusion.js';

const qNum = Object.fromEntries(questions.map((q, i) => [q.id, i + 1]));

export function FindingsSection() {
  return (
    <Section
      id="findings"
      eyebrow="Results"
      title="Key Findings"
      intro="The main takeaways from the analysis."
      tone="plane"
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keyFindings.map((f) => (
          <li key={f.q} className="flex flex-col rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex h-7 w-9 items-center justify-center rounded-md bg-ink font-mono text-xs font-medium text-white">Q{qNum[f.q]}</span>
              <a href={`#${f.q}`} className="inline-flex items-center gap-0.5 text-xs font-medium text-muted hover:text-coral">
                View analysis <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <p className="flex-1 text-[15px] font-medium leading-relaxed text-ink">{f.text}</p>
            {f.flag && (
              <p className="mt-4 flex gap-2 rounded-lg border border-orange/30 bg-orange-soft px-3 py-2 text-xs leading-relaxed text-ink-2">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange" aria-hidden />
                <span>{f.flag}</span>
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function LimitationsSection() {
  return (
    <Section
      id="limitations"
      eyebrow="Caveats"
      title="Limitations"
      intro="Caveats to keep in mind when reading the results."
    >
      <div className="overflow-hidden rounded-2xl border border-line">
        {limitations.map((l) => (
          <div key={l.area} className="grid gap-2 border-b border-line bg-white px-5 py-4 last:border-0 md:grid-cols-[220px_1fr] md:items-start md:gap-6">
            <span className="text-sm font-semibold text-ink">{l.area}</span>
            <p className="text-[14.5px] leading-relaxed text-ink-2"><RichText text={l.text} /></p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ConclusionSection() {
  return (
    <Section id="conclusion" eyebrow="Summary" title="Conclusion" tone="plane">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-5 text-[16px] leading-relaxed text-ink-2">
          <p className="font-display text-xl leading-relaxed text-ink">{conclusionIntro}</p>
          <p>{conclusionClosing}</p>
        </div>
        <aside className="rounded-2xl border border-line bg-white p-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-teal" aria-hidden />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Further work</h3>
          </div>
          <p className="text-[14.5px] leading-relaxed text-ink-2">{furtherWork}</p>
        </aside>
      </div>
    </Section>
  );
}
