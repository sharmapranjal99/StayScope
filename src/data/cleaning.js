// Source: notebook cells 8, 9, 10, 12, 13, 15.

// Cell 8 — df.duplicated().value_counts() on raw data
export const duplicatesBefore = { False: 102058, True: 541 };
// Cell 15 — after drop_duplicates()
export const duplicatesAfter = { False: 102058 };

// Cell 9 — spelling inconsistency
export const brooklnRow = {
  note: "Neighbourhood group was 'brookln' instead of 'Brooklyn'",
  index: 13,
  id: 1008516,
  name: 'Lovely Room 1, Garden, Best Area, Legal rental',
};

// Cell 10 — Problems Identified within the Data (verbatim)
export const problems = [
  '541 duplicate records.',
  '`house_rules` and `license` contain substantial missing information and are not used in the nine research questions.',
  'Missing values occur in several columns, particularly `last review` and `reviews per month`.',
  'Some columns require explicit type conversion, including identifiers, price, service fee, and construction year.',
  'The values `brookln` and `manhatan` are spelling inconsistencies in `neighbourhood group`.',
  '`availability 365` contains values outside its valid range of 0–365, including negative values.',
  '`minimum nights` contains non-positive and unusually large values.',
];
export const importantNote =
  'In this dataset, `price` and `service fee` are already stored as plain numbers, without dollar signs or commas. They are still converted to numbers defensively, so formatted values such as "$1,200" would also be handled correctly.';

// Cell 12 — Steps to be Taken for Data Cleaning (verbatim)
export const steps = [
  'Remove duplicate records.',
  'Drop `house_rules` and `license` because they are not used in this analysis and contain extensive missing information.',
  'Convert `price` and `service fee` to numeric values safely.',
  'Rename the columns to `price_$` and `service_fee_$`.',
  'Convert identifiers to string types, parse `last review` as a date, and convert `Construction year` to a nullable integer.',
  'Standardize `brookln` as `Brooklyn` and `manhatan` as `Manhattan`.',
  'Preserve rows with missing values in fields not needed for a particular question. Each analysis will exclude missing values only from the columns it uses.',
  'For the availability analysis, use only values in the valid range of 0–365. Do not remove otherwise useful listings from the entire dataset just because availability is invalid.',
  'Flag invalid `minimum nights` values rather than silently deleting otherwise useful records.',
];

// Cell 13 — transformations performed in code (comments in the cell)
export const transformations = [
  { step: '1', label: 'Remove duplicate records', detail: '541 exact duplicate rows removed' },
  { step: '2', label: 'Drop unused columns with extensive missing data', detail: 'house_rules and license' },
  { step: '3', label: 'Convert price and service fee safely to numeric', detail: 'Currency symbols and commas removed; values converted to numbers' },
  { step: '4', label: 'Rename price-related columns', detail: 'price → price_$, service fee → service_fee_$' },
  { step: '5', label: 'Convert identifiers and date/year fields', detail: 'IDs as text, last review as a date, construction year as a whole number' },
  { step: '6', label: 'Standardize neighbourhood-group spelling and whitespace', detail: '“brookln” → Brooklyn, “manhatan” → Manhattan' },
];

// Cell 13 — printed output (verbatim)
export const cleaningOutput = [
  'Cleaning completed.',
  'Shape after duplicate and unused-column removal: (102058, 24)',
  'Duplicate rows remaining: 0',
  'Missing values are retained where they are not required for a specific analysis.',
  'Availability values outside 0-365: 3633',
  'Minimum nights <= 0: 13',
  'Minimum nights > 365: 35',
];

export const cleaningStats = {
  duplicatesRemoved: 541,
  duplicatesRemaining: 0,
  availabilityOutsideRange: 3633,
  minNightsNonPositive: 13,
  minNightsOver365: 35,
};
