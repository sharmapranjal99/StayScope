import Section from '../../components/Section.jsx';
import DataTable from '../../components/DataTable.jsx';
import { edaIntro } from '../../data/overview.js';
import { describeNote, describeRows, describeStats } from '../../data/eda.js';

export default function EdaSection() {
  return (
    <Section id="eda" eyebrow="Exploratory data analysis" title="Exploratory Data Analysis" intro={edaIntro}>
      <h3 className="text-lg font-semibold tracking-tight text-ink">Summary statistics</h3>
      <p className="mb-5 mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-2">
        Summary statistics for the numeric columns of the cleaned dataset. {describeNote.replace('Descriptive statistics for numeric columns; m', 'M')}
      </p>
      <DataTable
        title="Summary statistics"
        dense
        columns={[
          { key: 'col', label: 'Variable', mono: true, strong: true },
          ...describeStats.map((s, i) => ({ key: i, label: s, align: 'right', mono: true })),
        ]}
        rows={describeRows.map(([col, ...vals]) => ({ col, ...Object.fromEntries(vals.map((v, i) => [i, v])) }))}
      />
      <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-2">
        The analysis continues through the nine research questions below.
      </p>
    </Section>
  );
}
