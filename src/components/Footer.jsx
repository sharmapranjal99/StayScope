import { brandName, projectTitle } from '../data/overview.js';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-plane">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <img src="./airbnb-logo.webp" alt="Airbnb" width="330" height="103" className="h-7 w-auto" />
            <span aria-hidden className="h-6 w-px bg-line-2" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold text-ink">{brandName}</span>
              <span className="text-xs text-muted">{projectTitle}</span>
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-right">
            An exploratory analysis of New York City Airbnb listings: pricing, hosts, reviews and availability.
          </p>
        </div>
        <p className="mt-6 border-t border-line pt-4 text-[11px] leading-relaxed text-muted">
          {brandName} is an independent data-analysis project based on Airbnb Open Data. It is not affiliated with, sponsored by or endorsed
          by Airbnb, Inc. The Airbnb name and logo are trademarks of Airbnb, Inc.
        </p>
      </div>
    </footer>
  );
}
