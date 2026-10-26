export const COMPANY = {
  name: 'RK Logistics Solution Private Limited',
  shortName: 'RK Logistics',
  logoUrl: `${import.meta.env.BASE_URL}Image_49299C7B-6993-469A-A624-09C34908F6DE.jpeg`,
  phone: '+91 9654563516',
  phoneTel: '+919654563516',
  whatsapp: '919811262999',
  whatsappDisplay: '+91 9811262999',
  email: 'info@rklogisticssolution.com',
  address: '517A, Karhera, Mohan Nagar, Ghaziabad (U.P)',
  hubAddress:
    'Plot D-3, F-Block, Khasra No. 44, Pillar Number 634, Near Vardan Eye Hospital, Ghaziabad, Uttar Pradesh – 201001, India.',
  registeredOfficeCity: 'Ghaziabad',
  trackDocketUrl: 'https://arr.erp.logibrisk.com/bookingtracking',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Core Logistics Services', href: '#services' },
  { label: 'Regional Coverage', href: '#coverage' },
  { label: 'Freight Enquiry', href: '#enquiry' },
  { label: 'Contact Us', href: '#contact' },
];

// Candidate coverage locations — verified city coordinates only.
// These are presented as candidate service points, not as a confirmed
// active network. Marked as registered office / regional for clarity.
export type CoveragePoint = {
  city: string;
  lat: number;
  lng: number;
  type: 'registered' | 'regional';
  note?: string;
};

export const WESTERN_UP_LOCATIONS: CoveragePoint[] = [
  { city: 'Ghaziabad', lat: 28.6692, lng: 77.4538, type: 'registered', note: 'Registered office' },
  { city: 'Noida', lat: 28.5355, lng: 77.391 },
  { city: 'Greater Noida', lat: 28.496, lng: 77.536 },
  { city: 'Hapur', lat: 28.7167, lng: 77.7833 },
  { city: 'Pilkhuwa', lat: 28.7167, lng: 77.65 },
  { city: 'Meerut', lat: 28.9845, lng: 77.7064 },
  { city: 'Modinagar', lat: 28.8296, lng: 77.6266 },
  { city: 'Muradnagar', lat: 28.7811, lng: 77.4978 },
  { city: 'Baghpat', lat: 28.9468, lng: 77.223 },
  { city: 'Baraut', lat: 29.096, lng: 77.263 },
  { city: 'Bulandshahr', lat: 28.4042, lng: 77.858 },
  { city: 'Khurja', lat: 28.2535, lng: 77.855 },
  { city: 'Aligarh', lat: 27.8974, lng: 78.088 },
  { city: 'Hathras', lat: 27.6022, lng: 78.0523 },
  { city: 'Mathura', lat: 27.4924, lng: 77.6737 },
  { city: 'Agra', lat: 27.1767, lng: 78.0081 },
  { city: 'Firozabad', lat: 27.1591, lng: 78.3958 },
  { city: 'Etah', lat: 27.6333, lng: 78.65 },
  { city: 'Kasganj', lat: 27.8167, lng: 78.65 },
  { city: 'Moradabad', lat: 28.8386, lng: 78.7733 },
  { city: 'Amroha', lat: 28.9039, lng: 78.4647 },
  { city: 'Sambhal', lat: 28.5833, lng: 78.5667 },
  { city: 'Rampur', lat: 28.8167, lng: 79.0333 },
  { city: 'Bareilly', lat: 28.367, lng: 79.4304 },
  { city: 'Bijnor', lat: 29.3823, lng: 78.1356 },
  { city: 'Muzaffarnagar', lat: 29.4727, lng: 77.7085 },
  { city: 'Shamli', lat: 29.4504, lng: 77.312 },
  { city: 'Saharanpur', lat: 29.9695, lng: 77.5531 },
  { city: 'Deoband', lat: 29.6957, lng: 77.6751 },
  { city: 'Najibabad', lat: 29.6118, lng: 78.3428 },
].map((l) => ({ ...l, type: l.type === 'registered' ? 'registered' : 'regional' })) as CoveragePoint[];

export const UTTARAKHAND_LOCATIONS: CoveragePoint[] = [
  { city: 'Dehradun', lat: 30.3165, lng: 78.0322, type: 'regional', note: 'Key regional corridor endpoint' },
  { city: 'Haridwar', lat: 29.9457, lng: 78.1642, type: 'regional' },
  { city: 'Roorkee', lat: 29.8543, lng: 77.888, type: 'regional' },
  { city: 'Rishikesh', lat: 30.0869, lng: 78.2676, type: 'regional' },
  { city: 'Vikasnagar', lat: 30.9343, lng: 77.7566, type: 'regional' },
  { city: 'Doiwala', lat: 30.1761, lng: 78.1283, type: 'regional' },
  { city: 'Kashipur', lat: 29.2116, lng: 78.9569, type: 'regional' },
  { city: 'Rudrapur', lat: 28.9902, lng: 79.4139, type: 'regional' },
  { city: 'Haldwani', lat: 29.2183, lng: 79.5286, type: 'regional' },
  { city: 'Ramnagar', lat: 29.3979, lng: 78.9217, type: 'regional' },
  { city: 'Kotdwar', lat: 29.7495, lng: 78.5247, type: 'regional' },
];

// Route strip locations — stationary labels, truck animates left to right.
export const ROUTE_STOPS = [
  'Ghaziabad',
  'Meerut',
  'Muzaffarnagar',
  'Saharanpur',
  'Roorkee',
  'Haridwar',
  'Dehradun',
];

// Truck / hero image (premium nighttime long-trailer truck).
export const HERO_TRUCK_IMAGE =
  'https://images.pexels.com/photos/11053643/pexels-photo-11053643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const FTL_TRUCK_IMAGE =
  'https://images.pexels.com/photos/11053640/pexels-photo-11053640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const PTL_CARGO_IMAGE =
  'https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const B2B_IMAGE =
  'https://images.pexels.com/photos/4487382/pexels-photo-4487382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const DISPATCH_IMAGE =
  'https://images.pexels.com/photos/10834810/pexels-photo-10834810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const REGIONAL_FREIGHT_IMAGE =
  'https://images.pexels.com/photos/29057946/pexels-photo-29057946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const VEHICLE_OPTIONS = [
  'Part Load (PTL)',
  'Full Truck Load (FTL)',
  '14 ft truck',
  '17 ft truck',
  '19 ft truck',
  '22 ft truck',
  '24 ft truck',
  '32 ft multi-axle / long-trailer truck',
  'Other / Not Sure',
];
