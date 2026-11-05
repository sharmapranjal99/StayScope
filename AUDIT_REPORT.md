# Analytical Accuracy Audit — StayScope

**Scope:** Q2, Q3 and Q5, plus a consistency pass over all nine questions. Every check below was run against the source dataset (`1776250134-P4-Airbnb Hotel Booking Analysis.xlsx`) using the notebook's own cleaning code, and against the executed outputs of `Airbnb_Hotel_Booking_Analysis_Corrected.ipynb`.

**No numbers, tables, charts, chart types, calculations, colours or website design were changed.** All corrections are to written text: the notebook's markdown and the website's interpretation strings.

## Findings

### Q2 — Neighbourhood group with the most listings
- **Data:** Manhattan **43,558**, Brooklyn **41,631**, a gap of 1,927. Manhattan also leads in the raw file (43,792 vs 41,842) and after deduplication alone, so no cleaning step changes the order.
- **Cause of the error:** the original notebook dropped every row with any missing value. Under that approach Brooklyn led (34,780 vs 34,735), and the "Brooklyn" sentence was carried over when the corrected notebook began keeping those rows.
- **Status:** the table and chart were already correct. The interpretation (cell 27) and the conclusion bullet (cell 55) were wrong. **Both are corrected.**

### Q3 — Average price by neighbourhood group
- **Data:** Queens $630.22 (highest), Bronx $627.76, Brooklyn $626.50, Staten Island $623.99, **Manhattan $622.65 (lowest)**.
- **Cause:** this is stale text from the original notebook, where Staten Island was lowest under the drop-all-missing approach.
- **Status:** the table and chart were correct. The interpretation (cell 30) is **corrected to "Manhattan has the lowest"**. The "Queens has the highest" statement was already correct.

### Q5 — Top hosts
- **Methodology (cell 35, unchanged):** rows with a host name and a `calculated host listings count` are grouped by **host display name**. The ranking value is the **maximum** listing count recorded under each name; repeated values are not summed. The top 10 are sorted by that value, with ties broken by number of listings.
- **Why host IDs can't be used:** the cleaned data has **102,057 distinct host IDs for 102,058 listings**, and only one ID is shared by two listings. Host IDs are effectively unique to each listing, so grouping by them cannot reveal hosts with multiple listings. This is why "host IDs" equals "listings" for every top-10 name.
- **Why display names are imperfect:** they merge different hosts. For example, "Karen" has 10 different listing-count values across 435 listings, and "Eugene" has 5. Each bar therefore shows the largest count recorded under a name, not one host's total.
- **Decision:** the methodology is **retained**. The dataset has no reliable host identifier, so changing it is not justified.
- **Corrections:** the limitation (cell 37) now states this accurately. The unsupported conclusion bullet ("Host rankings are more reliable when hosts are grouped by host ID…") is replaced with an accurate description of the method.

### Additional inconsistency found
- The cleaning code fixes **both** `brookln` → Brooklyn and `manhatan` → Manhattan; each misspelling appears in exactly 1 row of the source file. The problems list (cell 10) and the cleaning steps (cell 12) mentioned only `brookln`. **Both now mention both.**

## Corrections made

| Location | Before | After |
|---|---|---|
| Notebook cell 10 | "The value `brookln` is a spelling inconsistency" | "The values `brookln` and `manhatan` are spelling inconsistencies" |
| Notebook cell 12 | "Standardize `brookln` as `Brooklyn`." | "…and `manhatan` as `Manhattan`." |
| Notebook cell 27 / website Q2 | "**Brooklyn has the highest listing count**, narrowly ahead of Manhattan" | "**Manhattan has the highest listing count**, narrowly ahead of Brooklyn" |
| Notebook cell 30 / website Q3 | "while Staten Island has the lowest" | "while Manhattan has the lowest" |
| Notebook cell 37 / website Q5 limitation | "A single name may represent multiple host IDs…" | Explains that display names merge hosts, each bar is the maximum recorded under a name, and host IDs are effectively unique per listing |
| Notebook cell 55 / website Key Findings | "Brooklyn has the highest number of listings…" | "Manhattan has the highest number of listings…, narrowly ahead of Brooklyn." |
| Notebook cell 55 / website Key Findings | "Host rankings are more reliable when hosts are grouped by host ID…" | "The top-host ranking is based on host display names…; host IDs are effectively unique to each listing…" |
| Website Limitations (Q5) | Same outdated wording | Same accurate description as cell 37 |
| Website Data & Cleaning | Problems/steps mentioned only `brookln` | Mention `brookln` and `manhatan` |
| Website Q2 and Q3 | "Note" boxes flagging the contradictions | Removed, because the interpretations themselves are now correct |

**Notebook files:** the identical corrections were applied to both copies with matching code: `Downloads\Airbnb_Hotel_Booking_Analysis_Corrected.ipynb` and `StayScope\Airbnb_Hotel_Booking_Analysis_Corrected.ipynb`. Only markdown cells 10, 12, 27, 30, 37 and 55 changed. All code cells and stored outputs are untouched, so no re-run is needed for these fixes.

## Validation

| Check | Result |
|---|---|
| Website data vs fresh re-run on the source dataset | ✅ 161 / 161 |
| Website data vs the notebook's latest executed outputs (all 9 questions: tables, correlations, counts, ordering) | ✅ 52 / 52 |
| Interpretation and conclusion claims vs data (Q1 most common, Q2 highest, Q3 highest/lowest, Q4 ≈ 0, Q5 IDs = listings, Q6 verified higher, Q7 ≈ 1, Q8 hotel highest in Brooklyn/Manhattan/Queens, Q9 weak positive) | ✅ all hold |
| Notebook markdown = website interpretation text (Q2, Q3, Q5) | ✅ identical |
| Stale claims remaining (notebook or website) | ✅ none |
| Tables match charts | ✅ each chart and its table render from the same data array |
| `npm run build` | ✅ succeeds |

**Other questions (Q1, Q4, Q6–Q9):** each interpretation was checked against the data and is correct, so they were not changed.
