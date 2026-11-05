import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import useActiveSection from './useActiveSection.js';
import { brandName, projectTitle } from '../data/overview.js';

export const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'data', label: 'Data & Cleaning' },
  { id: 'eda', label: 'EDA' },
  { id: 'questions', label: 'Research Questions' },
  { id: 'findings', label: 'Key Findings' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'conclusion', label: 'Conclusion' },
];

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id), 96);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 transition-shadow ${
        scrolled ? 'border-line shadow-[0_1px_0_rgba(0,0,0,0.03),0_6px_20px_-12px_rgba(0,0,0,0.15)]' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#overview" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)} aria-label={`${brandName} — ${projectTitle}`}>
          {/* Official Airbnb logo, original 330×103 aspect ratio preserved (height-driven, width auto) */}
          <img src="./airbnb-logo.webp" alt="Airbnb" width="330" height="103" className="h-7 w-auto shrink-0 sm:h-8" />
          <span aria-hidden className="h-6 w-px shrink-0 bg-line-2" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-[16px] font-bold tracking-tight text-ink">{brandName}</span>
            <span className="hidden truncate text-[11px] font-medium text-muted sm:block">{projectTitle}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors ${
                  active === item.id ? 'bg-coral-soft text-coral' : 'text-ink-2 hover:bg-plane hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:grid-cols-2 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active === item.id ? 'bg-coral-soft text-coral' : 'text-ink-2 hover:bg-plane'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
