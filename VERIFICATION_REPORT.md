# Verification Report — Airbnb Hotel Booking Analysis website

**Source of truth:** `Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` (56 cells, executed outputs).
**Source dataset:** `1776250134-P4-Airbnb Hotel Booking Analysis.xlsx`.
Neither file was modified. Both were only read.

## How the values were verified

1. **Notebook outputs were extracted directly** from the `.ipynb` file: printed output, `text/plain` and the full `text/html` tables (the plain-text outputs are truncated by pandas, but the HTML outputs are complete). All 10 figures were extracted as PNGs.
2. **The notebook's own code was re-run** (cleaning cell 13 and every analysis cell, copied verbatim) against the Excel file. This was done in a scratch directory outside the project.
3. **Every printed notebook value matched the re-run exactly.** The re-run also supplied series that the notebook *plots but does not print* (listed below).
4. **An automated cross-check** compared the website's `src/data/*.js` modules with the re-run. Result: **161 checks, 0 mismatches.**

## Research questions implemented (9 of 9)

| # | Question (exact notebook wording, cell 1) | Section id |
|---|---|---|
| 1 | What are the different property types in the Dataset? | `#q1` |
| 2 | Which neighborhood group has the highest number of listings? | `#q2` |
| 3 | Which neighborhoods group have the highest average prices for Airbnb listings? | `#q3` |
| 4 | Is there a relationship between the construction year of property and price? | `#q4` |
| 5 | Who are the top 10 hosts by calculated host listing count? | `#q5` |
| 6 | Are hosts with verified identities more likely to receive positive reviews? | `#q6` |
| 7 | Is there a correlation between the price of a listing and its service fee? | `#q7` |
| 8 | What is the average review rate number (e.g., stars) for listings, and does it vary based on the neighborhood group and room type? | `#q8` |
| 9 | Are hosts with a higher calculated host listings count more likely to maintain higher availability throughout the year? | `#q9` |

## Notebook visualizations implemented (10 of 10)

Every chart was compared visually against the notebook's own figure during development. The visitor-facing site no longer shows notebook figures or cell references; see "Website presentation" below.

| Cell | Notebook title | Type | Website implementation |
|---|---|---|---|
| 22 | Distribution of Airbnb Room Types | bar | Recharts bar, same order, labels, 15° ticks |
| 26 | Number of Listings by Neighbourhood Group | bar | Recharts bar, 25° ticks |
| 29 | Average Airbnb Listing Price by Neighbourhood Group | bar | Recharts bar, `$x.xx` labels, ylim = max × 1.15 |
| 32 | Average Listing Price by Property Construction Year | line + markers | Recharts line with markers, auto-scaled y-axis, grid |
| 35 | Top 10 Host Names by Calculated Host Listing Count | bar | Recharts bar, 65° ticks |
| 40 | Average Review Rate by Host Verification Status | bar | Recharts bar, 2-decimal labels, ylim [0, 4] |
| 41 | Average Review Rate for Each Verification Status | box plot | Custom SVG (Recharts has no box plot) |
| 45 | A Regression Plot Showing the Correlation Between the Price of a Listing and Its Service Fee. | regplot | Custom SVG scatter + least-squares line |
| 49 | Average Review Rate by Room Type and Neighbourhood Group | grouped bar | Recharts grouped bar; seaborn x/hue order |
| 52 | Host Listing Count vs Valid Annual Availability | regplot (α 0.15) | Custom SVG scatter + least-squares line |

Titles, axis labels, category names and category order follow the notebook in every chart.

## Tables implemented

`df.head()` (cell 6), raw `df.info()` (cell 7), `df.duplicated().value_counts()` (cells 8 and 15), the `brookln` row (cell 9), the cleaning output (cell 13), cleaned `df.info()` (cell 16), `df.describe()` (cell 19), `property_types` (21), `hood_group` (25), `avg_price` (29), `hosts` (35), `review` (39), `ARRN` (48). Printed statistical output is reproduced verbatim from cells 4, 13, 32, 44, 52 and 53.

## Numerical values verified (selection; all were checked)

| Item | Value | Cell |
|---|---|---|
| Original shape / cleaned shape | (102599, 26) / (102058, 24) | 4 / 13 |
| Duplicate rows | 541 | 8 |
| Availability outside 0–365 · min nights ≤ 0 · > 365 | 3,633 · 13 · 35 | 13 |
| Room types | 53,429 / 46,306 / 2,208 / 115 | 21 |
| Neighbourhood groups | Manhattan 43,558 · Brooklyn 41,631 · Queens 13,197 · Bronx 2,694 · Staten Island 949 | 25 |
| Avg price | Queens 630.217031 … Manhattan 622.647187 | 29 |
| Construction year vs price | r = −0.0037, n = 101,601 | 32 |
| Top host | Blueground 332.0 (312 IDs, 312 listings) … Shogo 125.0 | 35 |
| Review rate by verification | verified 3.285675 (50,687) · unconfirmed 3.272033 (50,777) | 39 |
| Price vs service fee | r = 0.999991, n = 101,572 | 44 |
| Review rate by group × room type | 18 rows, e.g. Brooklyn/Hotel room 3.857143 (n = 7) | 48 |
| Host listings vs availability | r = 0.17463, n = 98,135 | 52–53 |

## Values plotted by the notebook but not printed (reproduced from the dataset)

These were produced by re-running the exact notebook cell on the source dataset. Each one is labelled on the website.

- **Cell 32:** the 20 per-year mean prices (2003–2022) behind the line chart.
- **Cell 41:** box-plot statistics. Both groups have Q1 = 2, median = 3, Q3 = 4 and whiskers from 1 to 5, with no outliers.
- **Cells 45 and 52:** all scatter observations, stored as unique (x, y, count) coordinates. There are 1,151 and 6,272 of them, and their counts sum to 101,572 and 98,135. Overlap opacity is composited as matplotlib stacks it: `1 − (1 − α)^count`, with α = 0.8 (seaborn's default) and α = 0.15 (as set in the notebook).
- **Cells 45 and 52:** the endpoints of the least-squares regression lines.
- **Cell 49:** seaborn's x order (Brooklyn, Manhattan, Queens, Staten Island, Bronx) and hue order (Private room, Entire home/apt, Shared room, Hotel room).

## Discrepancies inside the notebook — resolved

Three interpretation statements contradicted the notebook's own outputs: Q2 "Brooklyn highest", Q3 "Staten Island lowest", and the conclusion's "group by host ID". All three were corrected in the notebook and on the website after a dataset audit; see **AUDIT_REPORT.md**. No numerical value changed.

## Known rendering differences (no data differences)

- The seaborn regplot 95% bootstrap confidence bands are **not drawn**. Seaborn's bootstrap resampling is random and cannot be reproduced exactly. The band is visually negligible at n ≈ 100k, and each chart footnote says so.
- Colours follow the Airbnb palette now applied in `Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` itself (see BRANDING_REPORT.md). A full execution of that styled code reproduced every table and printed output unchanged.

## Website presentation

The public site shows no notebook, cell or verification references. Traceability lives in this report and in the source comments of `src/data/*.js`, which still cite each notebook cell. The tables were relabelled in plain language, such as "Listings" instead of `listing_count`. All values are unchanged: **161/161 data checks pass**.
- `df.describe()` is displayed transposed (one row per column) for readability, with the values unchanged. The table caption says so.
- The "Missing" column in the `df.info()` tables equals entries minus non-null count. These are the same figures as the notebook, and they were verified against the dataset.

## Build and responsive testing

- `npm run build` completes with no errors.
- Rendered in headless Chrome at desktop (1440px), tablet (768px) and mobile (390px) widths. Overflow issues found during testing were fixed and re-checked.
- Frontend only: React, Vite, Tailwind CSS, Recharts and Lucide React. There is no backend, no API calls and no database. All data is in static `src/data/*.js` modules.
