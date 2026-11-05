// Source: notebook cells 4, 6, 7, 16 (executed outputs).

export const sourceFile = '1776250134-P4-Airbnb Hotel Booking Analysis.xlsx';

// Cell 4 output: "Original shape: (102599, 26)"
export const originalShape = { rows: 102599, columns: 26 };
// Cell 13 output: "Shape after duplicate and unused-column removal: (102058, 24)"
export const cleanedShape = { rows: 102058, columns: 24 };

// Cell 7 — df.info() on the raw data. RangeIndex: 102599 entries. memory usage: 20.4+ MB
export const rawInfo = {
  entries: 102599,
  memory: '20.4+ MB',
  dtypesSummary: 'datetime64[ns](1), float64(12), int64(2), object(11)',
  columns: [
    ['id', 102599, 'int64'],
    ['NAME', 102329, 'object'],
    ['host id', 102599, 'int64'],
    ['host_identity_verified', 102310, 'object'],
    ['host name', 102191, 'object'],
    ['neighbourhood group', 102570, 'object'],
    ['neighbourhood', 102583, 'object'],
    ['lat', 102591, 'float64'],
    ['long', 102591, 'float64'],
    ['country', 102067, 'object'],
    ['country code', 102468, 'object'],
    ['instant_bookable', 102494, 'float64'],
    ['cancellation_policy', 102523, 'object'],
    ['room type', 102599, 'object'],
    ['Construction year', 102385, 'float64'],
    ['price', 102352, 'float64'],
    ['service fee', 102326, 'float64'],
    ['minimum nights', 102190, 'float64'],
    ['number of reviews', 102416, 'float64'],
    ['last review', 86706, 'datetime64[ns]'],
    ['reviews per month', 86720, 'float64'],
    ['review rate number', 102273, 'float64'],
    ['calculated host listings count', 102280, 'float64'],
    ['availability 365', 102151, 'float64'],
    ['house_rules', 47756, 'object'],
    ['license', 2, 'object'],
  ].map(([name, nonNull, dtype]) => ({ name, nonNull, dtype })),
};

// Cell 16 — df.info() after cleaning. Index: 102058 entries. memory usage: 19.8+ MB
export const cleanInfo = {
  entries: 102058,
  memory: '19.8+ MB',
  dtypesSummary: 'Float64(2), Int64(1), datetime64[ns](1), float64(9), object(8), string(3)',
  columns: [
    ['id', 102058, 'string'],
    ['NAME', 101788, 'object'],
    ['host id', 102058, 'string'],
    ['host_identity_verified', 101769, 'object'],
    ['host name', 101652, 'object'],
    ['neighbourhood group', 102029, 'string'],
    ['neighbourhood', 102042, 'object'],
    ['lat', 102050, 'float64'],
    ['long', 102050, 'float64'],
    ['country', 101526, 'object'],
    ['country code', 101927, 'object'],
    ['instant_bookable', 101953, 'float64'],
    ['cancellation_policy', 101982, 'object'],
    ['room type', 102058, 'object'],
    ['Construction year', 101844, 'Int64'],
    ['price_$', 101811, 'Float64'],
    ['service_fee_$', 101785, 'Float64'],
    ['minimum nights', 101658, 'float64'],
    ['number of reviews', 101875, 'float64'],
    ['last review', 86226, 'datetime64[ns]'],
    ['reviews per month', 86240, 'float64'],
    ['review rate number', 101739, 'float64'],
    ['calculated host listings count', 101739, 'float64'],
    ['availability 365', 101610, 'float64'],
  ].map(([name, nonNull, dtype]) => ({ name, nonNull, dtype })),
};

// Cell 6 — df.head() (full HTML output of the notebook; long text was truncated with "..." by pandas).
export const headColumns = [
  'id', 'NAME', 'host id', 'host_identity_verified', 'host name', 'neighbourhood group', 'neighbourhood',
  'lat', 'long', 'country', 'country code', 'instant_bookable', 'cancellation_policy', 'room type',
  'Construction year', 'price', 'service fee', 'minimum nights', 'number of reviews', 'last review',
  'reviews per month', 'review rate number', 'calculated host listings count', 'availability 365',
  'house_rules', 'license',
];
export const headRows = [
  [1001254, 'Clean & quiet apt home by the park', 80014485718, 'unconfirmed', 'Madaline', 'Brooklyn', 'Kensington', 40.64749, -73.97237, 'United States', 'US', '0.0', 'strict', 'Private room', '2020.0', '966.0', '193.0', '10.0', '9.0', '2021-10-19', '0.21', '4.0', '6.0', '286.0', "Clean up and treat the home the way you'd like...", 'NaN'],
  [1002102, 'Skylit Midtown Castle', 52335172823, 'verified', 'Jenna', 'Manhattan', 'Midtown', 40.75362, -73.98377, 'United States', 'US', '0.0', 'moderate', 'Entire home/apt', '2007.0', '142.0', '28.0', '30.0', '45.0', '2022-05-21', '0.38', '4.0', '2.0', '228.0', 'Pet friendly but please confirm with me if the...', 'NaN'],
  [1002403, 'THE VILLAGE OF HARLEM....NEW YORK !', 78829239556, 'NaN', 'Elise', 'Manhattan', 'Harlem', 40.80902, -73.9419, 'United States', 'US', '1.0', 'flexible', 'Private room', '2005.0', '620.0', '124.0', '3.0', '0.0', 'NaT', 'NaN', '5.0', '1.0', '352.0', 'I encourage you to use my kitchen, cooking and...', 'NaN'],
  [1002755, 'NaN', 85098326012, 'unconfirmed', 'Garry', 'Brooklyn', 'Clinton Hill', 40.68514, -73.95976, 'United States', 'US', '1.0', 'moderate', 'Entire home/apt', '2005.0', '368.0', '74.0', '30.0', '270.0', '2019-07-05', '4.64', '4.0', '1.0', '322.0', 'NaN', 'NaN'],
  [1003689, 'Entire Apt: Spacious Studio/Loft by central park', 92037596077, 'verified', 'Lyndon', 'Manhattan', 'East Harlem', 40.79851, -73.94399, 'United States', 'US', '0.0', 'moderate', 'Entire home/apt', '2009.0', '204.0', '41.0', '10.0', '9.0', '2018-11-19', '0.1', '3.0', '1.0', '289.0', 'Please no smoking in the house, porch or on th...', 'NaN'],
];
