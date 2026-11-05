import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { makeRechartsTooltip } from './ChartTooltip.jsx';

const usd = (v) => `$${v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** plt.plot(year, avg_price, marker="o", linewidth=1) with plt.grid(alpha=0.25). */
export default function ConstructionLineChart({ data, xLabel, yLabel, height = 380 }) {
  const vals = data.map((d) => d.avgPrice);
  // y-axis auto-scaled to the data (matplotlib default — not anchored at zero)
  const lo = Math.floor(Math.min(...vals) / 5) * 5;
  const hi = Math.ceil(Math.max(...vals) / 5) * 5;
  const yTicks = [];
  for (let t = lo; t <= hi; t += 5) yTicks.push(t);
  const years = data.map((d) => d.year);
  const Tip = makeRechartsTooltip(
    (p) => [['Average listing price', usd(p.value), 'var(--airbnb-coral)']],
    (label) => `Construction year ${label}`,
  );
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 16, right: 16, left: 8, bottom: 22 }}>
          <CartesianGrid stroke="var(--chart-grid)" />
          <XAxis
            dataKey="year"
            type="number"
            domain={[years[0] - 0.5, years[years.length - 1] + 0.5]}
            ticks={years.filter((y) => y % 2 === 1)}
            tickLine={false}
            axisLine={{ stroke: 'var(--chart-axis)' }}
            tickMargin={6}
            label={{ value: xLabel, position: 'insideBottom', offset: -14 }}
          />
          <YAxis
            domain={[lo, hi]}
            ticks={yTicks}
            tickFormatter={(v) => `$${v}`}
            tickLine={false}
            axisLine={false}
            width={76}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 4, style: { textAnchor: 'middle' } }}
          />
          <Tooltip content={<Tip />} cursor={{ stroke: 'var(--chart-axis)', strokeDasharray: '3 3' }} />
          <Line
            dataKey="avgPrice"
            stroke="var(--airbnb-coral)"
            strokeWidth={2}
            dot={{ r: 4, fill: 'var(--airbnb-coral)', stroke: '#fff', strokeWidth: 1.5 }}
            activeDot={{ r: 6, fill: 'var(--airbnb-coral)', stroke: '#fff', strokeWidth: 2 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
