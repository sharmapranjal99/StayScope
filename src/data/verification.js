// Q6 — Source: notebook cells 39 (table), 40 (bar chart), 41 (box plot), 42 (interpretation).
export const verificationReview = [
  { status: 'verified', mean: 3.285675, count: 50687 },
  { status: 'unconfirmed', mean: 3.272033, count: 50777 },
];
export const verificationBarChart = {
  title: 'Average Review Rate by Host Verification Status',
  xLabel: 'Host Verification Status',
  yLabel: 'Average Review Rate Number',
  yDomain: [0, 4], // plt.ylim([0, 4])
  cells: [40],
};
// Cell 41 box plot (sns.boxplot on df). The notebook does not print these values; they were
// reproduced from the source dataset using matplotlib's default box statistics (whis = 1.5).
// Category order = seaborn's order of appearance in the data. No points fall beyond the whiskers.
export const verificationBoxplot = [
  { status: 'unconfirmed', min: 1, q1: 2, median: 3, q3: 4, max: 5, n: 50777 },
  { status: 'verified', min: 1, q1: 2, median: 3, q3: 4, max: 5, n: 50687 },
];
export const verificationBoxChart = {
  title: 'Average Review Rate for Each Verification Status',
  xLabel: 'Host Verification Status',
  yLabel: 'Review Rate Number',
  cells: [41],
};
export const verificationInterpretation = [
  'The mean review-rate values for verified and unconfirmed hosts are very close. In this dataset, the verified group has a marginally higher average review rate. The difference is small and descriptive only: it does not establish that identity verification causes better reviews. The sample sizes are shown in the table and should be considered when interpreting the comparison.',
];
