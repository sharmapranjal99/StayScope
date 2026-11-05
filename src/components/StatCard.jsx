/** Headline statistic card. */
export default function StatCard({ label, value, sub, accent = false }) {
  return (
    <div className={`rounded-xl border px-4 py-3.5 ${accent ? 'border-coral/25 bg-coral-soft/50' : 'border-line bg-surface'}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted">{label}</span>
      <div className="mt-1.5 font-mono text-2xl font-medium tracking-tight text-ink tabular">{value}</div>
      {sub && <div className="mt-1 text-xs text-muted">{sub}</div>}
    </div>
  );
}
