/**
 * Responsive table. columns: [{ key, label, align?: 'left'|'right', format?: (v,row,i)=>node, mono?, strong?, wrap? }]
 */
export default function DataTable({ title, columns, rows, caption, dense = false }) {
  const pad = dense ? 'px-3 py-1.5' : 'px-4 py-2.5';
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {title && (
        <figcaption className="border-b border-line px-4 py-3 text-sm font-semibold text-ink">{title}</figcaption>
      )}
      <div className="scroll-x">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-plane">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className={`${pad} whitespace-nowrap border-b border-line text-[12px] font-semibold uppercase tracking-wide text-muted ${
                    c.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line last:border-0 hover:bg-plane/70">
                {columns.map((c) => {
                  const raw = row[c.key];
                  const val = c.format ? c.format(raw, row, i) : raw;
                  return (
                    <td
                      key={c.key}
                      className={`${pad} ${c.align === 'right' ? 'text-right tabular' : ''} ${
                        c.mono ? 'font-mono text-[12.5px]' : ''
                      } ${c.wrap ? '' : 'whitespace-nowrap'} ${c.strong ? 'font-medium text-ink' : 'text-ink-2'}`}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <p className="border-t border-line bg-plane/50 px-4 py-2 text-xs leading-relaxed text-muted">{caption}</p>}
    </figure>
  );
}
