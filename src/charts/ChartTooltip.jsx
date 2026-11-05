// Shared tooltip shell used by Recharts and the custom SVG charts.
export function TooltipBox({ title, rows }) {
  return (
    <div className="pointer-events-none min-w-[160px] rounded-lg border border-line bg-white/97 px-3 py-2 text-xs shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]">
      {title != null && <div className="mb-1 font-semibold text-ink">{title}</div>}
      <div className="space-y-0.5">
        {rows.map(([label, value, color], i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 text-ink-2">
              {color && <span className="inline-block h-2 w-2 rounded-[2px]" style={{ background: color }} />}
              {label}
            </span>
            <span className="font-mono font-medium text-ink tabular">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Recharts `content` adapter. rowsFor(payloadItem) -> [[label, value, color]] */
export function makeRechartsTooltip(rowsFor, titleFor) {
  return function RechartsTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    const rows = payload.flatMap((p) => rowsFor(p));
    return <TooltipBox title={titleFor ? titleFor(label, payload) : label} rows={rows} />;
  };
}
