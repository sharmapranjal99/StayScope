# Branding Report — StayScope × Airbnb visual identity

Only the visual styling changed in the notebook and the website. No dataset value, cleaning step, calculation, chart type, research question or interpretation changed.

## Palette (used everywhere)

| Role | Colour | Used for |
|---|---|---|
| Airbnb Coral | `#FF5A5F` | primary brand accent, primary buttons, active navigation, highlights, main chart series |
| Airbnb Teal | `#00A699` | secondary series, positive highlights, secondary buttons, interpretation callouts |
| Airbnb Orange | `#FC642D` | third series, "needs verification" highlights |
| Dark Gray | `#484848` | titles, headings, labels, primary text, regression line (Q7) |
| Medium Gray | `#767676` | secondary text, gridlines, tick labels, annotations |
| White | `#FFFFFF` | backgrounds |

### Category-to-colour mapping (identical in the notebook and the website)

| Categories | Mapping |
|---|---|
| Room type (Q1, Q8) | Entire home/apt → Coral · Private room → Teal · Shared room → Orange · Hotel room → Dark Gray |
| Neighbourhood group (Q2, Q3) | Manhattan → Coral · Brooklyn → Teal · Queens → Orange · Bronx → Dark Gray · Staten Island → Medium Gray |
| Host verification (Q6 bar + box plot) | verified → Teal · unconfirmed → Coral |
| Single-series charts | Q4 line → Coral · Q5 bars → Coral |
| Regression plots | Q7: Coral points, Dark Gray line · Q9: Teal points, Coral line |

## Notebook — `Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` (edited in place)

The styling is applied directly in the existing corrected notebook. No separate notebook is part of the project.

- **Cell 3 (imports)** now also defines `AIRBNB_COLORS`, the three mapping dictionaries above, and one reusable theme: `sns.set_theme(style="whitegrid")` plus `plt.rcParams`. The theme sets dark-gray titles and labels, medium-gray ticks and gridlines, a white background, consistent font sizes and frameless legends.
  - It also sets `pd.set_option("display.max_columns", None)`, a display-only option that keeps the 26-column `df.head()` and `brookln` tables showing every column.
- **Plotting cells changed (colour arguments only):** 22, 26, 29, 32, 35, 40, 41, 45, 49, 52.
  - Cell 41 passes `hue=` together with `palette=` to colour the box plot. This is seaborn 0.13's required form for a palette, and it is still the same box plot.
  - Cells 41 and 49 use `saturation=1` so the exact brand hex values are drawn.
- **Unchanged:** all 56 cells and their order, every markdown cell, all data-cleaning and statistics code, and every other code cell.
- **Not re-executed:** the notebook was saved with the new code only, so the user can run **Run All** themselves. The outputs stored in the file are still the previous run's until then.
- **Pre-check:** before saving, a full execution of this exact code (on a copy) completed with 0 errors and 10/10 figures. Every table and printed output was identical to the previous results.
- **Requirement:** seaborn ≥ 0.13 (for `linecolor=` and `legend=False` in the box plot).

## Website — `StayScope/`

- **Design system:** `src/styles/index.css` defines `--airbnb-coral`, `--airbnb-teal`, `--airbnb-orange`, `--airbnb-dark`, `--airbnb-gray` and `--airbnb-white`. All Tailwind colour tokens (`ink`, `muted`, `coral`, `teal`, `orange` and their soft tints) derive from these variables. `src/charts/palette.js` holds the category mappings, which mirror the notebook's cell 3.
- **Logo:** the provided file (`330px-Airbnb_Logo_Bélo.svg.webp`) was copied unchanged to `public/airbnb-logo.webp`. It is byte-identical in `dist/`. It appears in the navbar, the hero chip and the footer. Its height is fixed and its width is `auto`, so the original 330×103 aspect ratio is kept, with no stretching or cropping.
- **Hero:** the title is **StayScope** and the subtitle is **Airbnb Hotel Booking Analysis**, in coral. There is a coral primary button, a teal outline secondary button, and a single soft coral glow.
- **Navbar:** logo │ StayScope with the project subtitle. Active links use coral, and the mobile menu still works.
- **Charts:** all nine questions' charts use the mappings above.
- **Tables and cards:** light backgrounds, dark-gray headings, and coral highlight cards for the key correlation values. Printed-output panels are dark gray with white text.
- **Typography:** Inter for body text and Plus Jakarta Sans for headings. The serif headings were removed to match the hospitality feel.
- **Removed:** every blue or navy colour from the old theme. A source scan finds no remaining blue hex or rgba values. The favicon was recoloured to coral, orange and teal.
- **Footer:** shows the logo and keeps the project information. It also adds a short notice that StayScope is independent and not affiliated with Airbnb, Inc.

## Validation

| Check | Result |
|---|---|
| Notebook styling code executes with no errors | ✅ 0 errors, 10/10 figures (verified on a copy; saved file left un-executed) |
| Notebook numerical outputs preserved | ✅ all tables and printed outputs identical in the verification run |
| Website uses the exact provided logo | ✅ byte-identical file |
| Website charts match the notebook colour mapping | ✅ shared mapping (`palette.js` ↔ cell 3 of the corrected notebook) |
| All nine research questions intact | ✅ |
| Data checks against the source dataset | ✅ **161 / 161 pass**, 0 mismatches |
| `npm run build` | ✅ succeeds |
| Desktop (1440px), tablet (768px), mobile (390px) | ✅ rendered and reviewed |
| No old blue-dominant branding remains | ✅ |
