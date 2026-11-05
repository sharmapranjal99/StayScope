// Q9 — Source: notebook cell 52 (regression plot + printed n), cell 53 (correlation), cell 54 (interpretation).
export { availabilityPoints, availabilityLine } from './availabilityPoints.js';

export const availabilityStats = {
  validListings: '98,135', // "Valid listings used: 98,135"
  pearson: '0.17463', // "Pearson correlation: 0.17463"
};
export const availabilityChart = {
  title: 'Host Listing Count vs Valid Annual Availability',
  xLabel: 'Calculated Host Listings Count',
  yLabel: 'Availability (Days)',
  cells: [52, 53],
};
export const availabilityInterpretation = [
  'The Pearson correlation coefficient is calculated using only listings with non-missing host listing counts and valid availability values between 0 and 365 days. The result indicates a weak positive linear relationship. Therefore, the data provides only limited evidence that hosts with more calculated listings maintain higher annual availability. Correlation does not imply causation.',
];
