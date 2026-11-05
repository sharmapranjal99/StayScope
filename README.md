# StayScope — Airbnb Hotel Booking Analysis

A frontend-only interactive website, styled with the official Airbnb palette and logo, that presents the *Airbnb Hotel Booking Analysis* notebook (New York City Airbnb Open Data). It covers the dataset and cleaning steps, EDA, all nine research questions, key findings, limitations and the conclusion.

**Stack:** React 18 · Vite 6 · Tailwind CSS 4 · Recharts · Lucide React. It has no backend, no API calls and no database.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the build
```

## Structure

```
src/
  data/        verified values extracted from the notebook (one module per section)
  charts/      Recharts charts and custom SVG charts (box plot, regression scatter)
  components/  layout, tables, callouts, stat cards, navigation
  pages/       Home page and its sections
  styles/      Tailwind theme
```

Every value in `src/data/` cites its notebook cell in source comments. Branding details are in [BRANDING_REPORT.md](BRANDING_REPORT.md). See [VERIFICATION_REPORT.md](VERIFICATION_REPORT.md) for the full verification and [AUDIT_REPORT.md](AUDIT_REPORT.md) for the analytical accuracy audit.
