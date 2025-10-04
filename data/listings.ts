import rawListings from './listings.json';
import type { Listing as ListingType } from '@/types/listing';

export type Listing = ListingType;

export const listings: Listing[] = rawListings as Listing[];
