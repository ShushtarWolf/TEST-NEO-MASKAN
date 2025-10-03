import { listings, type Listing } from '@/data/listings';

type WaitOptions = {
  min?: number;
  max?: number;
};

function wait({ min = 200, max = 600 }: WaitOptions = {}) {
  const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export async function fetchListings(): Promise<Listing[]> {
  await wait();
  return listings;
}

export async function fetchListingById(id: string): Promise<Listing | undefined> {
  await wait();
  return listings.find((listing) => listing.id === id);
}

type DashboardSummary = {
  savedCount: number;
  scheduledTours: number;
  aiInsights: string[];
  trendingTags: string[];
};

export async function fetchDashboardSummary(): Promise<DashboardSummary> {
  await wait();
  return {
    savedCount: 8,
    scheduledTours: 3,
    aiInsights: [
      'Energy optimized homes deliver 18% lower annual cost this season.',
      'Waterfront demand is surging 12% week-over-week — consider activating alerts.',
      'Hybrid work-ready layouts convert 23% faster in Innovation Corridor.'
    ],
    trendingTags: ['Luxury', 'Family Focus', 'Waterfront', 'Co-Working']
  };
}

export type UserProfile = {
  id: string;
  name: string;
  role: 'buyer' | 'investor' | 'agent';
  avatar: string;
  preferences: string[];
};

export async function fetchUserProfile(): Promise<UserProfile> {
  await wait();
  return {
    id: 'neo-01',
    name: 'Layla Ameen',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
    preferences: ['Waterfront serenity', 'Walkability > 80', 'Smart climate control']
  };
}
