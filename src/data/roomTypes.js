// Q1 — Source: notebook cells 21 (table), 22 (chart), 23 (interpretation).
export const roomTypes = [
  { roomType: 'Entire home/apt', listingCount: 53429 },
  { roomType: 'Private room', listingCount: 46306 },
  { roomType: 'Shared room', listingCount: 2208 },
  { roomType: 'Hotel room', listingCount: 115 },
];
export const roomTypesChart = {
  title: 'Distribution of Airbnb Room Types',
  xLabel: 'Room Type',
  yLabel: 'Number of Listings',
  cells: [21, 22],
};
export const roomTypesInterpretation = [
  'The dataset contains four room types: Entire home/apt, Private room, Shared room, Hotel room.',
  '**Entire home/apt** is the most common category, followed by **Private room**. The exact counts are displayed in the frequency table and bar chart above. Counts are calculated from all deduplicated listings with a recorded room type.',
];
