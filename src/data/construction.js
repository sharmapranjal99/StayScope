// Q4 — Source: notebook cell 32 (chart + printed stats), cell 33 (interpretation).
// The per-year averages plotted in cell 32 are not printed in the notebook; they were
// reproduced by re-running cell 32's code on the source dataset (see constructionSeries.js).
export { constructionSeries } from './constructionSeries.js';

export const constructionStats = {
  pearson: '-0.0037', // "Pearson correlation (construction year vs price): -0.0037"
  listingsUsed: '101,601', // "Listings used for correlation: 101,601"
};
export const constructionChart = {
  title: 'Average Listing Price by Property Construction Year',
  xLabel: 'Construction Year',
  yLabel: 'Average Listing Price ($)',
  cells: [32],
};
export const constructionInterpretation = [
  'The line chart shows how average listing price varies by construction year. The pattern fluctuates rather than following a consistent downward trend. The Pearson correlation printed below the chart is approximately zero, indicating **almost no linear relationship** between construction year and price in this dataset. This correlation does not rule out non-linear patterns or other factors influencing price.',
];
