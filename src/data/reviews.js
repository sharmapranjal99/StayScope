// Q8 — Source: notebook cell 48 (table), cell 49 (grouped bar chart), cell 50 (interpretation).
export const reviewRateTable = [
  ['Bronx', 'Entire home/apt', 3.346154, 1014],
  ['Bronx', 'Private room', 3.326873, 1548],
  ['Bronx', 'Shared room', 3.26087, 115],
  ['Brooklyn', 'Entire home/apt', 3.249963, 20419],
  ['Brooklyn', 'Hotel room', 3.857143, 7],
  ['Brooklyn', 'Private room', 3.263716, 20268],
  ['Brooklyn', 'Shared room', 3.334957, 821],
  ['Manhattan', 'Entire home/apt', 3.275869, 26248],
  ['Manhattan', 'Hotel room', 3.5, 100],
  ['Manhattan', 'Private room', 3.277431, 16177],
  ['Manhattan', 'Shared room', 3.254199, 893],
  ['Queens', 'Entire home/apt', 3.349306, 5113],
  ['Queens', 'Hotel room', 3.75, 8],
  ['Queens', 'Private room', 3.315584, 7681],
  ['Queens', 'Shared room', 3.369748, 357],
  ['Staten Island', 'Entire home/apt', 3.329087, 471],
  ['Staten Island', 'Private room', 3.477024, 457],
  ['Staten Island', 'Shared room', 3.533333, 15],
].map(([group, roomType, averageReviewRate, listingCount]) => ({ group, roomType, averageReviewRate, listingCount }));

// sns.barplot default ordering = order of first appearance in the data (verified against the dataset).
export const reviewXOrder = ['Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Bronx'];
export const reviewHueOrder = ['Private room', 'Entire home/apt', 'Shared room', 'Hotel room'];

export const reviewChart = {
  title: 'Average Review Rate by Room Type and Neighbourhood Group',
  xLabel: 'Neighbourhood Group',
  yLabel: 'Average Review Rate',
  legendTitle: 'room type',
  cells: [48, 49],
};
export const reviewInterpretation = [
  'The grouped results show that average review rates vary by both neighbourhood group and room type. Hotel-room listings have the highest average review rate among room types in Brooklyn, Manhattan, and Queens. However, the number of hotel-room observations is small in some groups, so these averages should be interpreted cautiously. The table reports the observation count alongside each average.',
];
