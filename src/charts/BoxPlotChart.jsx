import { useState } from 'react';
import useWidth from './useWidth.js';
import { TooltipBox } from './ChartTooltip.jsx';
import { VERIFICATION_COLORS } from './palette.js';

/**
 * sns.boxplot equivalent (custom SVG — Recharts has no box-plot primitive).
 * boxes: [{ status, min, q1, median, q3, max, n }] — whiskers at matplotlib's 1.5×IQR rule.
 */
export default function BoxPlotChart({ boxes, xLabel, yLabel, yDomain = [0.8, 5.2], yTicks = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5], height = 360 }) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const m = { top: 14, right: 16, bottom: 52, left: 70 };
  const iw = Math.max(200, width - m.left - m.right);
  const ih = height - m.top - m.bottom;
  const y = (v) => m.top + ih - ((v - yDomain[0]) / (yDomain[1] - yDomain[0])) * ih;
  const band = iw / boxes.length;
  const boxW = Math.min(band * 0.8, 220);

  return (
    <div ref={ref} className="relative w-full min-w-0 overflow-hidden">
      <svg width={width} height={height} role="img" aria-label={`Box plot of ${yLabel} by ${xLabel}`}>
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={m.left} x2={m.left + iw} y1={y(t)} y2={y(t)} stroke="var(--chart-grid)" />
            <text x={m.left - 8} y={y(t)} dy="0.32em" textAnchor="end" fontSize="12" fill="var(--chart-tick)" className="tabular">{t.toFixed(1)}</text>
          </g>
        ))}
        <line x1={m.left} x2={m.left + iw} y1={m.top + ih} y2={m.top + ih} stroke="var(--chart-axis)" />
        {boxes.map((b, i) => {
          const cx = m.left + band * i + band / 2;
          const x0 = cx - boxW / 2;
          const capW = boxW * 0.5;
          return (
            <g key={b.status} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'default' }}>
              <rect x={cx - band / 2} y={m.top} width={band} height={ih} fill={hover === i ? 'rgba(255,90,95,0.05)' : 'transparent'} />
              {/* whiskers */}
              <line x1={cx} x2={cx} y1={y(b.max)} y2={y(b.q3)} stroke="var(--airbnb-dark)" strokeWidth="1.5" />
              <line x1={cx} x2={cx} y1={y(b.q1)} y2={y(b.min)} stroke="var(--airbnb-dark)" strokeWidth="1.5" />
              <line x1={cx - capW / 2} x2={cx + capW / 2} y1={y(b.max)} y2={y(b.max)} stroke="var(--airbnb-dark)" strokeWidth="1.5" />
              <line x1={cx - capW / 2} x2={cx + capW / 2} y1={y(b.min)} y2={y(b.min)} stroke="var(--airbnb-dark)" strokeWidth="1.5" />
              {/* box */}
              <rect x={x0} y={y(b.q3)} width={boxW} height={y(b.q1) - y(b.q3)} fill={VERIFICATION_COLORS[b.status] ?? "var(--airbnb-coral)"} stroke="var(--airbnb-dark)" strokeWidth="1.5" rx="2" />
              {/* median */}
              <line x1={x0} x2={x0 + boxW} y1={y(b.median)} y2={y(b.median)} stroke="var(--airbnb-dark)" strokeWidth="2" />
              <text x={cx} y={m.top + ih + 20} textAnchor="middle" fontSize="12" fill="var(--chart-tick)">{b.status}</text>
            </g>
          );
        })}
        <text x={m.left + iw / 2} y={height - 10} textAnchor="middle" className="recharts-label" fontSize="12.5" fontWeight="500" fill="var(--color-ink-2)">{xLabel}</text>
        <text transform={`translate(18 ${m.top + ih / 2}) rotate(-90)`} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="var(--color-ink-2)">{yLabel}</text>
      </svg>
      {hover != null && (
        <div className="absolute" style={{ left: Math.min(m.left + band * hover + band / 2 + boxW / 2 + 8, width - 180), top: m.top + 10 }}>
          <TooltipBox
            title={boxes[hover].status}
            rows={[
              ['Upper whisker', boxes[hover].max.toFixed(1)],
              ['Q3 (75%)', boxes[hover].q3.toFixed(1)],
              ['Median', boxes[hover].median.toFixed(1)],
              ['Q1 (25%)', boxes[hover].q1.toFixed(1)],
              ['Lower whisker', boxes[hover].min.toFixed(1)],
              ['Observations', boxes[hover].n.toLocaleString('en-US')],
            ]}
          />
        </div>
      )}
    </div>
  );
}
