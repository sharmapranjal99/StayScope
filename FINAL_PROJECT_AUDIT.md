# Final Project Audit — StayScope · Airbnb Hotel Booking Analysis

**Audit date:** 2026-11-06 · **Mode:** read-only. No project file was changed during this audit except this report. The notebook was not executed, and the dataset was only read.

---

## 1. Summary

| Area | Status |
|---|---|
| Numerical accuracy (website ↔ dataset ↔ notebook) | ✅ **0 mismatches** across 239 automated checks |
| Analytical claims and interpretations | ✅ every claim holds against the data, and no outdated or contradictory statements remain |
| Branding consistency (notebook ↔ website) | ✅ identical palette and category mappings; no legacy colours |
| Production build | ✅ succeeds with no errors or warnings |
| Charts, responsiveness, console | ✅ all 10 charts render; no horizontal overflow at 390/768/1440 px; 0 console messages |
| Navigation | ⚠️ works, but the **active-link highlight is one section behind after clicking a link** (see R1) |
| Documentation | ⚠️ six outdated sentences across two reports (see R7) |
| Submission files | ⚠️ two notebook copies exist and one has stale outputs; the Desktop dataset is open in Excel (see R2, R3) |

**Overall:** the analysis itself is ready for submission. The remaining items are a minor UI bug, wording precision and housekeeping. None of them affects any number or finding.

---

## 2. Project structure identified

| Item | Location | Role |
|---|---|---|
| Notebook (final working copy) | `StayScope\Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` | Fully executed: one top-to-bottom run (execution counts 105–130), 0 errors, Airbnb-styled figures |
| Notebook (second copy) | `Downloads\Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` | Same code, cell for cell, but **stored outputs are from an older run** (blue figures) |
| Dataset (pristine) | `StayScope\1776250134-P4-Airbnb Hotel Booking Analysis.xlsx` | Original bytes (17,294,696 B, 2026-08-28) |
| Dataset (Desktop) | `Desktop\1776250134-P4-Airbnb Hotel Booking Analysis.xlsx` | Re-saved in Excel on 2026-11-05 23:25 and currently open in Excel. **Cell content is identical** to the original (all 102,599 × 26 cells compared) |
| Website | `StayScope\` (React 18.3.1 · Vite 6.4.5 · Tailwind 4.3.4 · Recharts 2.15.4 · Lucide 0.460.0) | Frontend only, with 15 data modules in `src\data\` |
| Docs | `README.md`, `VERIFICATION_REPORT.md`, `BRANDING_REPORT.md`, `AUDIT_REPORT.md` | |
| Not part of the project | `Downloads\airbnb_hotel_booking_analysis.ipynb` | Original pre-correction notebook, kept for reference only |

---

## 3. Checks performed

### 3.1 Numerical consistency
| Check | Method | Result |
|---|---|---|
| Website data ↔ source dataset | Re-ran the notebook's own cleaning and analysis code on the Excel file and compared every value in `src\data\*.js`: all 9 questions, both `info()` tables, cleaning stats, scatter points and regression lines | ✅ **161 / 161** |
| Website data ↔ notebook's executed outputs | Parsed the stored HTML tables and printed output of the executed StayScope notebook (cells 21, 25, 29, 32, 35, 39, 44, 48, 52, 53) and compared values and category order | ✅ **52 / 52** |
| Interpretation and conclusion claims ↔ data | Checked every directional claim programmatically (list below) | ✅ **26 / 26** (includes text-sync checks) |
| Dataset integrity | Compared the original and the re-saved Desktop file cell by cell | ✅ identical values |

Claims verified against the data: Q1 Entire home/apt most common, Private room second · Q2 Manhattan highest, Brooklyn second · Q3 Queens highest, Manhattan lowest · Q4 r ≈ 0 (−0.0037) · Q5 host-ID count equals listing count for every top-10 name · Q6 verified mean > unconfirmed mean · Q7 r > 0.999 · Q8 Hotel room highest in Brooklyn, Manhattan and Queens; no hotel rooms in Bronx or Staten Island · Q9 weak positive (0.17463).

### 3.2 Notebook ↔ website consistency, all nine questions

| Q | Table | Chart (type, order, colours) | Statistic | Interpretation text |
|---|---|---|---|---|
| 1 Room types | ✅ | ✅ bar, value-count order, room-type colours | — | ✅ identical meaning |
| 2 Listings by group | ✅ Manhattan 43,558 · Brooklyn 41,631 | ✅ | — | ✅ "Manhattan has the highest" (synced) |
| 3 Avg price | ✅ 630.217031 … 622.647187 | ✅ ylim = max × 1.15 | — | ✅ "Queens highest, Manhattan lowest" (synced) |
| 4 Construction year | — | ✅ line, 20 years | ✅ r = −0.0037, n = 101,601 | ✅ |
| 5 Top hosts | ✅ 10 rows, three numeric columns | ✅ | — | ✅ corrected limitation (synced) |
| 6 Verification | ✅ 3.285675 / 3.272033 | ✅ bar (ylim 0–4) + box plot | — | ✅ |
| 7 Price vs fee | — | ✅ regplot, all 101,572 obs | ✅ r = 0.999991 | ✅ |
| 8 Review rate | ✅ 18 rows | ✅ grouped bar, seaborn x/hue order | — | ✅ |
| 9 Availability | — | ✅ regplot, 98,135 valid obs | ✅ r = 0.17463 | ✅ |

On the website, every chart and its table render from the **same data array**, so they cannot disagree.

### 3.3 Data cleaning and methodology (notebook code compared with its descriptions)
| Topic | Finding |
|---|---|
| Duplicates | ✅ 541 removed (`drop_duplicates`); 0 remain |
| Unused columns | ✅ `house_rules` and `license` dropped as described |
| Type conversion | ✅ matches the description (numeric price and fee, string IDs, datetime, Int64 year) |
| Spelling fixes | ✅ `brookln` and `manhatan` (1 row each) fixed, and both are now documented |
| Missing values | ✅ no global row drop; each analysis drops missing values only in its own columns, exactly as stated |
| `availability 365` outliers | ✅ 3,633 out-of-range values counted; excluded **only** in Q9, as stated |
| `minimum nights` outliers | ⚠️ cell 12 says invalid values are **"flagged"**, but the code only **counts and reports** them (13 ≤ 0, 35 > 365). No question uses this column, so no result is affected (R4) |
| Price / service fee | ✅ ranges 50–1,200 and 10–240; no outlier treatment needed or claimed |
| Undocumented anomaly | ⚠️ `last review` contains a future date (**2058-06-16**, visible in `describe()`) that is not listed among the data-quality issues. The column is not used in any question (R5) |

### 3.4 Outdated, contradictory or unsupported content
- ✅ No occurrence of "Brooklyn has the highest", "Staten Island has the lowest" or "grouped by host ID" in the notebook markdown or website data.
- ✅ No fabricated metrics: every number on the site traces to the dataset or the notebook.
- ⚠️ Q8 asks *"What is the average review rate number for listings…"* but the Q8 answer never states the overall average. The value exists in the summary statistics (mean **3.278733**), so the question is only partly answered in its own section (R6).
- ⚠️ Two website captions are imprecise (R8).

### 3.5 Branding
| Check | Result |
|---|---|
| CSS variables vs notebook `AIRBNB_*` constants | ✅ identical: #FF5A5F, #00A699, #FC642D, #484848, #767676 |
| `ROOM_TYPE_COLORS`, `NEIGHBOURHOOD_COLORS`, `VERIFICATION_COLORS` | ✅ notebook cell 3 = `src\charts\palette.js` |
| Colours in website source | ✅ only the brand colours plus neutral and soft tints; no legacy blue or navy |
| Notebook figures (StayScope copy) | ✅ all 10 contain brand colours and 0 % legacy blue |
| Logo | ✅ byte-identical to the provided file; 330 × 103 aspect ratio preserved in all 3 placements (measured ratio 3.203–3.204) |

### 3.6 Website build and functionality
| Check | Result |
|---|---|
| `npm run build` | ✅ success, no warnings (JS 162 kB + Recharts 550 kB, 157 kB gzipped) |
| Charts render with data | ✅ 7 Recharts + 3 custom SVG = 10/10; scatter points 1,151 and 6,272 |
| Horizontal overflow at 390 / 768 / 1440 px | ✅ none |
| In-page links | ✅ 55 links, 0 broken |
| Mobile menu | ✅ opens, lists all 7 sections, closes after a tap and scrolls to the target |
| Active highlight while scrolling | ✅ correct at every section, desktop and mobile |
| Active highlight after **clicking** a link | ❌ one section behind (R1) |
| Tooltips | ✅ e.g. Q1 hover shows "Entire home/apt · Number of Listings 53,429" |
| Browser console | ✅ 0 errors, 0 warnings, 0 messages (real-time DevTools session) |

### 3.7 Documentation
- ✅ `README.md` is accurate: stack versions match the installed packages, and the structure and links are current.
- ✅ `AUDIT_REPORT.md` is accurate.
- ⚠️ `VERIFICATION_REPORT.md` and `BRANDING_REPORT.md` contain 6 outdated sentences from before the UI cleanup (R7).

---

## 4. Issues already resolved (during this project)

1. Q2 interpretation and conclusion wrongly said Brooklyn leads → corrected to Manhattan (verified on the dataset).
2. Q3 interpretation wrongly said Staten Island is lowest → corrected to Manhattan.
3. Unsupported "group by host ID" conclusion → replaced; the Q5 limitation now explains that display names merge hosts and host IDs are effectively unique per listing.
4. `manhatan` correction undocumented → now documented in cells 10 and 12.
5. Styling not present in the user's working notebook copy → applied; copies are in sync.
6. Separate themed notebook → removed at the user's request.
7. Technical and notebook references visible on the website → removed.
8. Legacy blue theme → replaced by the Airbnb palette in the notebook and website.
9. Mobile overflow (tables, box plot, grids) and the Q3 y-axis tick glitch → fixed.

---

## 5. Remaining issues (proposed fixes — awaiting approval, nothing applied)

| # | Severity | Issue | Proposed fix |
|---|---|---|---|
| **R1** | Medium (UI) | After clicking a navbar or sidebar link, the highlight shows the **previous** section (e.g. click Q8 → Q7 highlighted). Cause: `html { scroll-padding-top: 5rem }` **plus** section `scroll-mt-*` margins land targets at 160/176 px, beyond the highlight thresholds (96/160 px). The landing gap below the navbar is also larger than intended. | Remove the duplicate offset (keep either the global scroll padding or the per-section margins) so targets land about 80–96 px from the top; re-test every link |
| **R2** | Medium (submission) | Two notebook copies with identical code; the **Downloads** copy still stores the old blue figures | Submit the **StayScope** copy. Optionally delete the Downloads copy, or re-run it yourself |
| **R3** | Low (submission) | The Desktop dataset is open in Excel and was re-saved (values unchanged, metadata changed) | Close Excel **without saving**; submit the pristine copy in `StayScope\` |
| **R4** | Low (wording) | Cell 12 / website: "Flag invalid `minimum nights` values" while the code only counts them | Change the wording to "Count and report…" (notebook cell 12 + `src\data\cleaning.js`) |
| **R5** | Low (documentation) | Future `last review` date (2058-06-16) not listed as a data-quality issue | Add one bullet to cell 10 and the website's issues list (the column is unused in the analysis) |
| **R6** | Low (completeness) | Q8 does not state the overall average review rate it asks for | Add one sentence citing the existing summary-statistics value (3.278733) to the Q8 interpretation, in the notebook and website |
| **R7** | Low (docs) | Outdated sentences: VERIFICATION_REPORT lines 49 ("printed output reproduced verbatim"), 70 ("each one is labelled on the website"), 84 ("each chart footnote says so"), 90 ("the table caption says so"); BRANDING_REPORT lines 36 ("not re-executed") and 47 ("printed-output panels") | Update the six sentences to describe the current site |
| **R8** | Low (captions) | Q6 caption says whiskers "extend to 1.5× the interquartile range" (they extend to the furthest data point *within* 1.5× IQR, here 1 and 5). Q7 caption "Each point is a listing" (points are unique price/fee combinations: 1,151 points for 101,572 listings) | Reword both captions precisely |
| R9 | Info | EDA intro says "numeric columns" but `describe()` also includes the `last review` date column | Optional: "numeric and date columns" |

---

## 6. Final submission readiness

| Criterion | Ready? |
|---|---|
| All 9 research questions answered consistently in notebook and website | ✅ |
| All numbers verified against the dataset and executed notebook | ✅ |
| No contradictory, outdated or fabricated findings | ✅ (R6 is a completeness gap, not an error) |
| Notebook executes without errors (StayScope copy, existing run) | ✅ |
| Website builds and runs without console errors | ✅ |
| Branding consistent across notebook and website | ✅ |
| Navigation highlight behaviour | ⚠️ R1 |
| Clean set of submission files and up-to-date docs | ⚠️ R2, R3, R7 |

**Verdict:** **Ready for submission from an analytical standpoint.** Fixing R1 and R7 and choosing the files per R2–R3 would make it fully polished; R4–R6 and R8–R9 are optional precision improvements. All of these are small, isolated changes, and none of them alters any value or chart.
