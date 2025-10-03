import { Listing } from '@/types/listing';
import { authenticateUser, getListingById, getListings, registerUser } from '@/lib/data';

function wait(min = 120, max = 420) {
  const duration = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export async function fetchListings(): Promise<Listing[]> {
  await wait();
  return getListings();
}

export async function fetchListingById(id: string): Promise<Listing | undefined> {
  await wait();
  return getListingById(id);
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
      'خانه‌های بهینه انرژی امسال ۱۸٪ کاهش هزینه دارند.',
      'تقاضای ساحلی ۱۲٪ رشد هفتگی داشته است — هشدارها را فعال کنید.',
      'چیدمان‌های مناسب کار هیبریدی ۲۳٪ سریع‌تر قرارداد می‌شوند.'
    ],
    trendingTags: ['لوکس', 'زندگی خانوادگی', 'ساحلی', 'همکاری']
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
