import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TooltipBox } from './ChartTooltip.jsx';

import { ROOM_TYPE_COLORS } from './palette.js';

/**
 * sns.barplot(x=group, y=value, hue=series, errorbar=None).
 * Missing (group, series) combinations are left empty, exactly as seaborn does.
 */
export default function GroupedBarChart({ rows, xOrder, hueOrder, xLabel, yLabel, legendTitle, tickAngle = 25, height = 420 }) {
  const data = xOrder.map((g) => {
    const o = { group: g };
    for (const h of hueOrder) {
      const r = rows.find((x) => x.group === g && x.roomType === h);
      if (r) {
        o[h] = r.averageReviewRate;
        o[`${h}__n`] = r.listingCount;
      }
    }
    return o;
  });

  const Tip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    const rowsOut = payload.map((p) => [
      `${p.dataKey} · ${p.payload[`${p.dataKey}__n`].toLocaleString('en-US')} listings`,
      p.value.toFixed(6),
      p.color,
    ]);
    return <TooltipBox title={label} rows={rowsOut} />;
  };

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 12, left: 8, bottom: 22 }} barCategoryGap="18%" barGap={2}>
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey="group"
            interval={0}
            tickLine={false}
            axisLine={{ stroke: 'var(--chart-axis)' }}
            angle={-tickAngle}
            textAnchor="end"
            height={64}
            tickMargin={4}
            label={{ value: xLabel, position: 'insideBottom', offset: -16 }}
          />
          <YAxis
            domain={[0, 4]}
            ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]}
            tickLine={false}
            axisLine={false}
            width={64}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 4, style: { textAnchor: 'middle' } }}
          />
          <Tooltip cursor={{ fill: 'rgba(255,90,95,0.06)' }} content={<Tip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="square"
            iconSize={10}
            wrapperStyle={{ fontSize: 12, paddingBottom: 12 }}
            content={({ payload }) => (
              <div className="mb-3 flex flex-wrap items-center justify-end gap-x-4 gap-y-1 px-2 text-xs text-ink-2">
                <span className="font-medium text-muted">{legendTitle}</span>
                {payload.map((p) => (
                  <span key={p.value} className="inline-flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-[2px]" style={{ background: p.color }} />
                    {p.value}
                  </span>
                ))}
              </div>
            )}
          />
          {hueOrder.map((h) => (
            <Bar key={h} dataKey={h} name={h} fill={ROOM_TYPE_COLORS[h]} radius={[3, 3, 0, 0]} isAnimationActive={false} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
