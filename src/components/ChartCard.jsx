/** Card wrapper for a chart: title, the chart, and an optional reader-facing caption. */
export default function ChartCard({ title, children, caption }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
      <figcaption className="border-b border-line px-4 py-3.5 text-[15px] font-semibold leading-snug text-ink sm:px-5">{title}</figcaption>
      <div className="px-2 pb-3 pt-4 sm:px-4">{children}</div>
      {caption && (
        <p className="border-t border-line bg-plane/50 px-4 py-2.5 text-xs leading-relaxed text-muted sm:px-5">{caption}</p>
      )}
    </figure>
  );
}
