// Top-level page section with eyebrow + display heading.
export default function Section({ id, eyebrow, title, intro, children, tone = 'white' }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line ${tone === 'plane' ? 'bg-plane' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-coral">{eyebrow}</p>}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.1rem]">{title}</h2>
          {intro && <p className="mt-4 text-[15.5px] leading-relaxed text-ink-2">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
