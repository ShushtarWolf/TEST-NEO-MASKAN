export type Listing = {
  id: string;
  title: string;
  location: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  highlights: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  featured?: boolean;
  tags: string[];
  energyScore: number;
  walkScore: number;
};

export const listings: Listing[] = [
  {
    id: 'aurora-lofts',
    title: 'Aurora Lofts Skyline',
    location: 'Downtown NeoCity',
    price: 980000,
    area: 145,
    bedrooms: 3,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Penthouse terrace', 'Sky lounge access', 'Energy grid ready'],
    description:
      'Experience panoramic city views with dual-aspect living spaces, responsive lighting, and a wellness lounge curated for the Inspire Maskan lifestyle.',
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    },
    featured: true,
    tags: ['luxury', 'family', 'city'],
    energyScore: 92,
    walkScore: 89
  },
  {
    id: 'solis-residence',
    title: 'Solis Residence Parkfront',
    location: 'Greenline District',
    price: 720000,
    area: 165,
    bedrooms: 4,
    bathrooms: 3,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Community co-working loft', 'Biophilic atrium', 'Near metro hub'],
    description:
      'Flooded with natural light, Solis Residence balances family living with hybrid work pods, plus AI-assisted climate control for effortless comfort.',
    coordinates: {
      lat: 25.1193,
      lng: 55.3773
    },
    tags: ['family', 'garden'],
    energyScore: 87,
    walkScore: 76
  },
  {
    id: 'tidal-villas',
    title: 'Tidal Villas Waterfront',
    location: 'Harbor Promenade',
    price: 1350000,
    area: 210,
    bedrooms: 5,
    bathrooms: 4,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Private marina dock', 'Solar roofing', 'Immersive cinema suite'],
    description:
      'Elevated waterfront villas featuring private marina access, immersive media suites, and spa-inspired bathrooms set within lush promenades.',
    coordinates: {
      lat: 25.1925,
      lng: 55.2462
    },
    tags: ['luxury', 'waterfront'],
    energyScore: 95,
    walkScore: 72
  },
  {
    id: 'cobalt-haven',
    title: 'Cobalt Haven Residences',
    location: 'Innovation Corridor',
    price: 560000,
    area: 125,
    bedrooms: 2,
    bathrooms: 2,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Proximity to tech park', 'Shared rooftop farm', 'Smart home package'],
    description:
      'Compact yet elevated residences designed for innovators with modular interiors, smart glass facades, and rooftop farming experiences.',
    coordinates: {
      lat: 25.0954,
      lng: 55.1614
    },
    tags: ['investment', 'city'],
    energyScore: 90,
    walkScore: 82
  },
  {
    id: 'zenith-heights',
    title: 'Zenith Heights Duplex',
    location: 'Cultural Quarter',
    price: 840000,
    area: 180,
    bedrooms: 3,
    bathrooms: 3,
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Dual-level terrace', 'Art studio nook', 'Direct theatre access'],
    description:
      'A duplex sanctuary that blends cultural vibrancy with serene interiors, featuring artisan finishes and dedicated creative studios.',
    coordinates: {
      lat: 25.1288,
      lng: 55.2744
    },
    tags: ['duplex', 'culture'],
    energyScore: 88,
    walkScore: 91
  }
];
