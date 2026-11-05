import { CheckCircle2, CircleAlert } from 'lucide-react';
import Section from '../../components/Section.jsx';
import DataTable from '../../components/DataTable.jsx';
import Callout from '../../components/Callout.jsx';
import RichText from '../../components/RichText.jsx';
import StatCard from '../../components/StatCard.jsx';
import { dataWranglingIntro } from '../../data/overview.js';
import { cleanInfo, cleanedShape, headColumns, headRows, rawInfo } from '../../data/dataset.js';
import {
  brooklnRow, cleaningStats, duplicatesAfter, duplicatesBefore, importantNote, problems, steps, transformations,
} from '../../data/cleaning.js';

const fmt = (n) => n.toLocaleString('en-US');

function Sub({ title, desc, children }) {
  return (
    <div className="mt-16 first:mt-0">
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      {desc ? <p className="mb-5 mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-2">{desc}</p> : <div className="mb-4" />}
      {children}
    </div>
  );
}

function infoColumns(entries) {
  return [
    { key: 'idx', label: '#', align: 'right', format: (_, __, i) => i },
    { key: 'name', label: 'Column', mono: true, strong: true },
    { key: 'nonNull', label: 'Non-null', align: 'right', format: (v) => fmt(v) },
    {
      key: 'missing', label: 'Missing', align: 'right', format: (_, r) => {
        const m = entries - r.nonNull;
        return <span className={m > 0 ? 'font-semibold text-ink' : 'text-muted'}>{fmt(m)}</span>;
      },
    },
    { key: 'dtype', label: 'Type', mono: true },
  ];
}

export default function DataSection() {
  return (
    <Section id="data" eyebrow="Data preparation" title="Dataset & Data Cleaning" intro={dataWranglingIntro} tone="plane">
      <Sub title="A first look at the data" desc="The first five listings in the raw dataset.">
        <DataTable
          title="Sample listings"
          dense
          columns={[{ key: 'row', label: '', align: 'right' }, ...headColumns.map((c, i) => ({ key: i, label: c }))]}
          rows={headRows.map((r, i) => ({ row: i, ...Object.fromEntries(r.map((v, j) => [j, String(v)])) }))}
          caption={`${headRows.length} rows × ${headColumns.length} columns. Scroll horizontally to see every column.`}
        />
      </Sub>

      <Sub
        title="Columns & missing values"
        desc={`Non-null counts, missing values and data types for each of the ${rawInfo.columns.length} columns in the raw dataset.`}
      >
        <DataTable
          title={`Raw dataset · ${fmt(rawInfo.entries)} rows · ${rawInfo.columns.length} columns`}
          dense
          columns={infoColumns(rawInfo.entries)}
          rows={rawInfo.columns}
        />
      </Sub>

      <Sub title="Data-quality issues" desc="The initial inspection identified the following data-quality issues:">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <ul className="space-y-2.5 rounded-xl border border-line bg-white p-5">
            {problems.map((p) => (
              <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2">
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                <RichText text={p} />
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <DataTable
              title="Duplicate records"
              dense
              columns={[{ key: 'k', label: 'Record', strong: true }, { key: 'v', label: 'Rows', align: 'right', format: fmt }]}
              rows={[
                { k: 'Unique', v: duplicatesBefore.False },
                { k: 'Duplicate', v: duplicatesBefore.True },
              ]}
            />
            <DataTable
              title="Spelling inconsistency: “brookln” instead of “Brooklyn”"
              dense
              columns={[
                { key: 'id', label: 'Listing ID', mono: true },
                { key: 'name', label: 'Name' },
                { key: 'group', label: 'Neighbourhood group', mono: true },
              ]}
              rows={[{ ...brooklnRow, group: 'brookln' }]}
            />
          </div>
        </div>
        <div className="mt-6">
          <Callout variant="info" title="Price fields" paragraphs={[importantNote]} />
        </div>
      </Sub>

      <Sub title="How the data was cleaned">
        <ol className="grid gap-3 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-[14.5px] leading-relaxed text-ink-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-soft font-mono text-xs font-medium text-teal">{i + 1}</span>
              <RichText text={s} />
            </li>
          ))}
        </ol>
      </Sub>

      <Sub title="Transformations applied">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          {transformations.map((t) => (
            <div key={t.step} className="grid gap-1 border-b border-line px-4 py-3 last:border-0 sm:grid-cols-[2rem_1fr_1.2fr] sm:items-center sm:gap-4">
              <span className="font-mono text-xs text-muted">{t.step}.</span>
              <span className="text-[14.5px] font-medium text-ink">{t.label}</span>
              <span className="text-[14px] text-ink-2">{t.detail}</span>
            </div>
          ))}
        </div>
      </Sub>

      <Sub title="Cleaning results" desc="Missing values are retained where they are not required for a specific analysis.">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          <StatCard label="Rows after cleaning" value={fmt(cleanedShape.rows)} sub={`${cleanedShape.columns} columns`} accent />
          <StatCard label="Duplicates remaining" value={fmt(cleaningStats.duplicatesRemaining)} />
          <StatCard label="Availability outside 0–365" value={fmt(cleaningStats.availabilityOutsideRange)} />
          <StatCard label="Minimum nights ≤ 0" value={fmt(cleaningStats.minNightsNonPositive)} />
          <StatCard label="Minimum nights > 365" value={fmt(cleaningStats.minNightsOver365)} />
        </div>
      </Sub>

      <Sub title="Cleaned dataset" desc="Non-null counts, missing values and data types after cleaning.">
        <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg border border-teal/20 bg-teal-soft px-3 py-2 text-sm text-ink-2">
          <CheckCircle2 className="h-4 w-4 text-teal" aria-hidden />
          No duplicate rows remain · <span className="font-semibold text-ink tabular">{fmt(duplicatesAfter.False)}</span> unique rows
        </div>
        <DataTable
          title={`Cleaned dataset · ${fmt(cleanInfo.entries)} rows · ${cleanInfo.columns.length} columns`}
          dense
          columns={infoColumns(cleanInfo.entries)}
          rows={cleanInfo.columns}
        />
      </Sub>
    </Section>
  );
}
