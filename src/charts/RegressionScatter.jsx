import { useMemo, useState } from 'react';
import useWidth, { niceTicks } from './useWidth.js';
import { TooltipBox } from './ChartTooltip.jsx';

/**
 * sns.regplot equivalent (custom SVG).
 *
 * `points` holds every observation as unique [x, y, count] coordinates. Matplotlib draws
 * each of the `count` overlapping markers at the same spot with opacity `alpha`; the
 * composited result is 1 - (1 - alpha)^count, which is what we render — so the visual
 * density matches the notebook while keeping the DOM small.
 */
export default function RegressionScatter({
  points,
  line,
  alpha,
  radius = 3,
  pointColor = 'var(--airbnb-coral)',
  lineColor = 'var(--airbnb-dark)',
  lineWidth = 2.25,
  xLabel,
  yLabel,
  xDomain,
  yDomain,
  xFormat = (v) => v.toLocaleString('en-US'),
  yFormat = (v) => v.toLocaleString('en-US'),
  aspect = 0.55,
  minHeight = 300,
}) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const height = Math.max(minHeight, Math.round(width * aspect));
  const m = { top: 12, right: 18, bottom: 50, left: 70 };
  const iw = Math.max(160, width - m.left - m.right);
  const ih = height - m.top - m.bottom;

  const xs = (v) => m.left + ((v - xDomain[0]) / (xDomain[1] - xDomain[0])) * iw;
  const ys = (v) => m.top + ih - ((v - yDomain[0]) / (yDomain[1] - yDomain[0])) * ih;
  const xTicks = useMemo(() => niceTicks(xDomain[0], xDomain[1], width < 520 ? 4 : 7), [xDomain, width]);
  const yTicks = useMemo(() => niceTicks(yDomain[0], yDomain[1], 6), [yDomain]);

  const projected = useMemo(
    () => points.map(([x, y, n]) => ({ x, y, n, px: xs(x), py: ys(y), o: 1 - (1 - alpha) ** n })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [points, width, height, alpha],
  );

  const onMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - box.left;
    const my = e.clientY - box.top;
    let best = null;
    let bd = 14 * 14;
    for (const p of projected) {
      const d = (p.px - mx) ** 2 + (p.py - my) ** 2;
      if (d < bd) { bd = d; best = p; }
    }
    setHover(best);
  };

  return (
    <div ref={ref} className="relative w-full min-w-0 overflow-hidden">
      <svg width={width} height={height} onMouseMove={onMove} onMouseLeave={() => setHover(null)} role="img" aria-label={`Scatter plot of ${yLabel} against ${xLabel} with fitted regression line`}>
        <defs>
          <clipPath id={`clip-${xLabel.replace(/\W/g, '')}`}>
            <rect x={m.left} y={m.top} width={iw} height={ih} />
          </clipPath>
        </defs>
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line x1={m.left} x2={m.left + iw} y1={ys(t)} y2={ys(t)} stroke="var(--chart-grid)" />
            <text x={m.left - 8} y={ys(t)} dy="0.32em" textAnchor="end" fontSize="12" fill="var(--chart-tick)" className="tabular">{yFormat(t)}</text>
          </g>
        ))}
        {xTicks.map((t) => (
          <g key={`x${t}`}>
            <line x1={xs(t)} x2={xs(t)} y1={m.top} y2={m.top + ih} stroke="var(--chart-grid)" />
            <text x={xs(t)} y={m.top + ih + 18} textAnchor="middle" fontSize="12" fill="var(--chart-tick)" className="tabular">{xFormat(t)}</text>
          </g>
        ))}
        <line x1={m.left} x2={m.left + iw} y1={m.top + ih} y2={m.top + ih} stroke="var(--chart-axis)" />
        <g clipPath={`url(#clip-${xLabel.replace(/\W/g, '')})`}>
          {projected.map((p, i) => (
            <circle key={i} cx={p.px} cy={p.py} r={radius} fill={pointColor} fillOpacity={p.o} />
          ))}
          <line x1={xs(line[0][0])} y1={ys(line[0][1])} x2={xs(line[1][0])} y2={ys(line[1][1])} stroke="#fff" strokeWidth={lineWidth + 2} strokeLinecap="round" />
          <line x1={xs(line[0][0])} y1={ys(line[0][1])} x2={xs(line[1][0])} y2={ys(line[1][1])} stroke={lineColor} strokeWidth={lineWidth} strokeLinecap="round" />
        </g>
        {hover && (
          <circle cx={hover.px} cy={hover.py} r={radius + 3} fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
        )}
        <text x={m.left + iw / 2} y={height - 10} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="var(--color-ink-2)">{xLabel}</text>
        <text transform={`translate(18 ${m.top + ih / 2}) rotate(-90)`} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="var(--color-ink-2)">{yLabel}</text>
      </svg>
      {hover && (
        <div
          className="absolute"
          style={{
            left: Math.min(Math.max(hover.px + 12, 0), width - 200),
            top: Math.max(hover.py - 80, 0),
          }}
        >
          <TooltipBox
            rows={[
              [xLabel, xFormat(hover.x)],
              [yLabel, yFormat(hover.y)],
              ['Listings at this point', hover.n.toLocaleString('en-US')],
            ]}
          />
        </div>
      )}
    </div>
  );
}
