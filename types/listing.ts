export type Coordinates = {
  lat: number;
  lng: number;
};

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
  coordinates: Coordinates;
  featured?: boolean;
  tags: string[];
  energyScore: number;
  walkScore: number;
};
