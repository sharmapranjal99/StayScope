// Q7 — Source: notebook cell 44 (printed stats), cell 45 (regression plot), cell 46 (interpretation).
export { priceFeePoints, priceFeeLine } from './priceServiceFeePoints.js';

export const priceFeeStats = {
  pearson: '0.999991', // "Pearson correlation: 0.999991"
  listingsUsed: '101,572', // "Listings used: 101,572"
};
export const priceFeeChart = {
  title: 'A Regression Plot Showing the Correlation Between the Price of a Listing and Its Service Fee.',
  xLabel: 'Price ($)',
  yLabel: 'Service Fee ($)',
  cells: [44, 45],
};
export const priceFeeInterpretation = [
  'The Pearson correlation coefficient indicates an **almost perfect positive linear association** between listing price and service fee. The regression plot shows that higher listing prices are associated with higher service fees. This is an association, not evidence that one variable causes the other. The unusually strong relationship may reflect how the service fee is determined or recorded in the source dataset.',
];
