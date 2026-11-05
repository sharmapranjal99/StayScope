// Category-to-colour mappings — identical to the dictionaries defined in cell 3 of
// Airbnb_Hotel_Booking_Analysis_Corrected.ipynb, so every website chart matches
// its notebook counterpart.

export const BRAND = {
  coral: 'var(--airbnb-coral)',
  teal: 'var(--airbnb-teal)',
  orange: 'var(--airbnb-orange)',
  dark: 'var(--airbnb-dark)',
  gray: 'var(--airbnb-gray)',
};

export const ROOM_TYPE_COLORS = {
  'Entire home/apt': BRAND.coral,
  'Private room': BRAND.teal,
  'Shared room': BRAND.orange,
  'Hotel room': BRAND.dark,
};

export const NEIGHBOURHOOD_COLORS = {
  Manhattan: BRAND.coral,
  Brooklyn: BRAND.teal,
  Queens: BRAND.orange,
  Bronx: BRAND.dark,
  'Staten Island': BRAND.gray,
};

export const VERIFICATION_COLORS = {
  verified: BRAND.teal,
  unconfirmed: BRAND.coral,
};
