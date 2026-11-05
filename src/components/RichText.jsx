// Renders the notebook's lightweight markdown: **bold** and `code`.
export default function RichText({ text, className = '' }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return (
    <span className={className}>
      {parts.map((p, i) => {
        if (p.startsWith('**')) return <strong key={i} className="font-semibold text-ink">{p.slice(2, -2)}</strong>;
        if (p.startsWith('`')) return <code key={i} className="inline">{p.slice(1, -1)}</code>;
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}
