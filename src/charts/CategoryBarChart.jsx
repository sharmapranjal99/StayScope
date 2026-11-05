import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { makeRechartsTooltip } from './ChartTooltip.jsx';
import { BRAND } from './palette.js';

/**
 * Single-series categorical bar chart (matplotlib plt.bar equivalent) with value labels
 * above each bar (plt.bar_label). Category order is taken from `data` as given.
 * `colors` maps category name -> colour (same mapping as the notebook); otherwise `color`.
 */
export default function CategoryBarChart({
  data,
  xKey,
  yKey,
  xLabel,
  yLabel,
  labelFormat = (v) => v.toLocaleString('en-US'),
  tooltipRows,
  yDomain = [0, 'auto'],
  yTicks,
  yTickFormat = (v) => v.toLocaleString('en-US'),
  tickAngle = 0,
  height = 360,
  color = BRAND.coral,
  colors,
  xTickHeight,
}) {
  const angled = tickAngle !== 0;
  const tickH = xTickHeight ?? (angled ? 70 : 30);
  const fillFor = (d) => (colors ? colors[d[xKey]] : color);
  const Tip = makeRechartsTooltip(
    tooltipRows
      ? (p) => tooltipRows(p, fillFor(p.payload))
      : (p) => [[yLabel, labelFormat(p.value), fillFor(p.payload)]],
  );
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 26, right: 12, left: 8, bottom: 22 }} barCategoryGap="22%">
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey={xKey}
            interval={0}
            tickLine={false}
            axisLine={{ stroke: 'var(--chart-axis)' }}
            angle={-tickAngle}
            textAnchor={angled ? 'end' : 'middle'}
            height={tickH}
            tickMargin={6}
            label={{ value: xLabel, position: 'insideBottom', offset: -16 }}
          />
          <YAxis
            domain={yDomain}
            ticks={yTicks}
            tickFormatter={yTickFormat}
            tickLine={false}
            axisLine={false}
            width={76}
            allowDataOverflow={false}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 4, style: { textAnchor: 'middle' } }}
          />
          <Tooltip cursor={{ fill: 'rgba(255,90,95,0.06)' }} content={<Tip />} />
          <Bar dataKey={yKey} radius={[4, 4, 0, 0]} maxBarSize={72} isAnimationActive={false}>
            {data.map((d) => (
              <Cell key={d[xKey]} fill={fillFor(d)} />
            ))}
            <LabelList dataKey={yKey} position="top" offset={6} formatter={labelFormat} className="tabular" style={{ fill: 'var(--airbnb-dark)', fontSize: 12, fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
