<<<<<<< HEAD
import { listings, type Listing } from '@/data/listings';

type WaitOptions = {
  min?: number;
  max?: number;
};

function wait({ min = 200, max = 600 }: WaitOptions = {}) {
=======
import { Listing } from '@/types/listing';
import { authenticateUser, getListingById, getListings, registerUser } from '@/lib/data';

function wait(min = 120, max = 420) {
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
  const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export async function fetchListings(): Promise<Listing[]> {
  await wait();
<<<<<<< HEAD
  return listings;
=======
  return getListings();
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
}

export async function fetchListingById(id: string): Promise<Listing | undefined> {
  await wait();
<<<<<<< HEAD
  return listings.find((listing) => listing.id === id);
=======
  return getListingById(id);
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
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
<<<<<<< HEAD
      'Energy optimized homes deliver 18% lower annual cost this season.',
      'Waterfront demand is surging 12% week-over-week — consider activating alerts.',
      'Hybrid work-ready layouts convert 23% faster in Innovation Corridor.'
    ],
    trendingTags: ['Luxury', 'Family Focus', 'Waterfront', 'Co-Working']
=======
      'خانه‌های بهینه انرژی امسال ۱۸٪ کاهش هزینه دارند.',
      'تقاضای ساحلی ۱۲٪ رشد هفتگی داشته است — هشدارها را فعال کنید.',
      'چیدمان‌های مناسب کار هیبریدی ۲۳٪ سریع‌تر قرارداد می‌شوند.'
    ],
    trendingTags: ['لوکس', 'زندگی خانوادگی', 'ساحلی', 'همکاری']
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
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
<<<<<<< HEAD
    name: 'Layla Ameen',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
    preferences: ['Waterfront serenity', 'Walkability > 80', 'Smart climate control']
  };
}
=======
    name: 'لیلا امین',
    role: 'buyer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
    preferences: ['مناظر ساحلی آرام', 'دسترسی پیاده‌روی بالای ۸۰', 'کنترل اقلیم هوشمند']
  };
}

export async function mockLogin(email: string, password: string) {
  await wait();
  const user = await authenticateUser(email, password);
  if (!user) {
    return null;
  }
  return {
    ...user,
    token: Buffer.from(`${user.id}:${Date.now()}`).toString('base64')
  };
}

export async function mockRegister(name: string, email: string, password: string) {
  await wait();
  return registerUser(name, email, password);
}
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
