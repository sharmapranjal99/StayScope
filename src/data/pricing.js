// Q3 — Source: notebook cell 29 (table + chart), cell 30 (interpretation).
export const avgPriceByGroup = [
  { group: 'Queens', averagePrice: 630.217031, listingCount: 13164 },
  { group: 'Bronx', averagePrice: 627.764793, listingCount: 2687 },
  { group: 'Brooklyn', averagePrice: 626.500843, listingCount: 41538 },
  { group: 'Staten Island', averagePrice: 623.990486, listingCount: 946 },
  { group: 'Manhattan', averagePrice: 622.647187, listingCount: 43448 },
];
export const avgPriceChart = {
  title: 'Average Airbnb Listing Price by Neighbourhood Group',
  xLabel: 'Neighbourhood Group',
  yLabel: 'Average Listing Price ($)',
  // plt.ylim(0, max(average_price) * 1.15)
  yMax: 630.217031 * 1.15,
  cells: [29],
};
export const avgPriceInterpretation = [
  'The table and chart above compare the mean listing price across neighbourhood groups. **Queens has the highest average price** in this dataset, while Manhattan has the lowest. These are arithmetic means, so unusually high or low listing prices can influence the results. The number of valid price observations in each group should be considered when interpreting the comparison.',
];
