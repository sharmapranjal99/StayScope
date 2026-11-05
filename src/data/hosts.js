// Q5 — Source: notebook cell 35 (table + chart), cell 37 (interpretation + limitation).
export const topHosts = [
  { hostName: 'Blueground', calculatedHostListingsCount: 332.0, hostIdsInDataset: 312, listingsInDataset: 312 },
  { hostName: 'Sonder (NYC)', calculatedHostListingsCount: 327.0, hostIdsInDataset: 516, listingsInDataset: 516 },
  { hostName: 'Eugene', calculatedHostListingsCount: 218.0, hostIdsInDataset: 80, listingsInDataset: 80 },
  { hostName: 'Karen', calculatedHostListingsCount: 208.0, hostIdsInDataset: 435, listingsInDataset: 435 },
  { hostName: 'Jeniffer', calculatedHostListingsCount: 186.0, hostIdsInDataset: 267, listingsInDataset: 267 },
  { hostName: 'Soya', calculatedHostListingsCount: 171.0, hostIdsInDataset: 65, listingsInDataset: 65 },
  { hostName: 'Kaz', calculatedHostListingsCount: 161.0, hostIdsInDataset: 116, listingsInDataset: 116 },
  { hostName: 'Hiroki', calculatedHostListingsCount: 152.0, hostIdsInDataset: 118, listingsInDataset: 118 },
  { hostName: 'Momoyo', calculatedHostListingsCount: 126.0, hostIdsInDataset: 66, listingsInDataset: 66 },
  { hostName: 'Shogo', calculatedHostListingsCount: 125.0, hostIdsInDataset: 50, listingsInDataset: 50 },
];
export const topHostsChart = {
  title: 'Top 10 Host Names by Calculated Host Listing Count',
  xLabel: 'Host Display Name',
  yLabel: 'Calculated Host Listings Count',
  cells: [35],
};
export const topHostsIntro = 'From the numerous hosts in the dataset, we will see the 10 hosts with the highest calculated host count.';
export const topHostsInterpretation = [
  'The table and bar chart rank host display names using the `calculated host listings count` field. Since this value is repeated across listing rows, the maximum value per display name is used rather than summing repeated values. The table also reports the number of distinct host IDs and listings associated with each display name in this dataset.',
];
export const topHostsLimitation =
  'Host display names are not unique identifiers. A single display name can belong to several different hosts, so each bar shows the highest `calculated host listings count` recorded under that name, not a combined total for everyone using it. Host IDs cannot be used to group listings by host either: in this dataset they are effectively unique to each listing, which is why the host-ID and listing counts in the table are identical. This is therefore a ranking by displayed host name, not a definitive ranking of individual host accounts.';
