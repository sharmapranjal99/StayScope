// Source: notebook cell 55 (Conclusion) — verbatim. Limitations are collected from statements
// made in the notebook itself (cell numbers referenced for traceability).

export const conclusionIntro =
  'This project explored the New York City Airbnb listings dataset through data cleaning, exploratory data analysis, descriptive statistics, and visualizations. The analysis examined room-type distribution, neighbourhood-group listings and prices, construction year, host listing counts, host verification, service fees, review rates, and annual availability.';

export const keyFindings = [
  { q: 'q1', text: 'Entire home/apt is the most common room type in the dataset.' },
  { q: 'q2', text: 'Manhattan has the highest number of listings among the five neighbourhood groups, narrowly ahead of Brooklyn.' },
  { q: 'q3', text: 'Queens has the highest mean listing price among the neighbourhood groups.' },
  { q: 'q4', text: 'Construction year has almost no linear correlation with listing price in this dataset.' },
  {
    q: 'q5',
    text: 'The top-host ranking is based on host display names, which are not unique identifiers; host IDs are effectively unique to each listing, so the ranking reflects displayed host names rather than individual host accounts.',
  },
  { q: 'q6', text: 'Verified and unconfirmed hosts have very similar average review rates.' },
  { q: 'q7', text: 'Listing price and service fee have an almost perfect positive correlation.' },
  { q: 'q8', text: 'Review-rate averages vary by neighbourhood group and room type; small group sizes should be considered.' },
  { q: 'q9', text: 'Host listing count has only a weak positive relationship with valid annual availability.' },
];

export const conclusionClosing =
  'The analysis is descriptive and based on the available dataset. It does not establish causal relationships, and missing values or data-quality limitations may affect individual comparisons.';

export const furtherWork =
  'Further work could include investigating pricing drivers with regression models, studying review text through sentiment analysis, and developing predictive models for listing prices or availability. Any predictive model should use a carefully validated dataset and an appropriate train/test evaluation strategy.';

export const limitations = [
  { area: 'Scope', text: 'The analysis is descriptive and based on the available dataset. It does not establish causal relationships, and missing values or data-quality limitations may affect individual comparisons.', cell: 55 },
  { area: 'Data quality', text: '`availability 365` contains values outside its valid range of 0–365, including negative values. `minimum nights` contains non-positive and unusually large values.', cell: 10 },
  { area: 'Missing values', text: 'Rows with missing values are preserved; each analysis excludes missing values only from the columns it uses.', cell: 12 },
  { area: 'Average prices (Q3)', text: 'These are arithmetic means, so unusually high or low listing prices can influence the results.', cell: 30 },
  { area: 'Construction year (Q4)', text: 'This correlation does not rule out non-linear patterns or other factors influencing price.', cell: 33 },
  { area: 'Host names (Q5)', text: 'Host display names are not unique identifiers, and host IDs are effectively unique to each listing, so neither identifies individual host accounts. The top-host ranking is a ranking by displayed host name.', cell: 37 },
  { area: 'Verification (Q6)', text: 'The difference is small and descriptive only: it does not establish that identity verification causes better reviews.', cell: 42 },
  { area: 'Service fee (Q7)', text: 'This is an association, not evidence that one variable causes the other. The unusually strong relationship may reflect how the service fee is determined or recorded in the source dataset.', cell: 46 },
  { area: 'Review rates (Q8)', text: 'The number of hotel-room observations is small in some groups, so these averages should be interpreted cautiously.', cell: 50 },
  { area: 'Availability (Q9)', text: 'Correlation does not imply causation.', cell: 54 },
];
