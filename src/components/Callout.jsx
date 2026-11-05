import { BookOpenText, Info, ShieldAlert } from 'lucide-react';
import RichText from './RichText.jsx';

const VARIANTS = {
  interpretation: {
    icon: BookOpenText,
    label: 'What this shows',
    box: 'border-teal/20 bg-teal-soft/60',
    iconCls: 'text-teal',
  },
  note: {
    icon: Info,
    label: 'Note',
    box: 'border-orange/30 bg-orange-soft',
    iconCls: 'text-orange',
  },
  limitation: {
    icon: ShieldAlert,
    label: 'Limitation',
    box: 'border-line-2 bg-plane',
    iconCls: 'text-ink-2',
  },
  info: {
    icon: Info,
    label: 'Note',
    box: 'border-coral/20 bg-coral-soft/60',
    iconCls: 'text-coral',
  },
};

export default function Callout({ variant = 'interpretation', title, paragraphs = [], children }) {
  const v = VARIANTS[variant];
  const Icon = v.icon;
  return (
    <div className={`rounded-xl border px-4 py-4 sm:px-5 ${v.box}`}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${v.iconCls}`} aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-2">{title ?? v.label}</span>
      </div>
      <div className="space-y-2 text-[15px] leading-relaxed text-ink-2">
        {paragraphs.map((p, i) => (
          <p key={i}><RichText text={p} /></p>
        ))}
        {children}
      </div>
    </div>
  );
}
