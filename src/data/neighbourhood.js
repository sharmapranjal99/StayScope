// Q2 — Source: notebook cells 25 (table), 26 (chart), 27 (interpretation).
export const neighbourhoodListings = [
  { group: 'Manhattan', listingCount: 43558 },
  { group: 'Brooklyn', listingCount: 41631 },
  { group: 'Queens', listingCount: 13197 },
  { group: 'Bronx', listingCount: 2694 },
  { group: 'Staten Island', listingCount: 949 },
];
export const neighbourhoodChart = {
  title: 'Number of Listings by Neighbourhood Group',
  xLabel: 'Neighbourhood Group',
  yLabel: 'Number of Listings',
  cells: [25, 26],
};
export const neighbourhoodInterpretation = [
  'The dataset contains five neighbourhood groups: Manhattan, Brooklyn, Queens, Bronx, and Staten Island. The frequency table and bar chart above show their listing counts. **Manhattan has the highest listing count**, narrowly ahead of Brooklyn. Counts are based on records with a non-missing neighbourhood group.',
];
