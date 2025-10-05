import Image from 'next/image';
import Link from 'next/link';
import { fetchDashboardSummary, fetchListings, fetchUserProfile } from '@/lib/mockApi';
import { Button } from '@/ui/Button';
import { PropertyCard } from '@/components/PropertyCard';

export default async function DashboardPage() {
  const [summary, listings, profile] = await Promise.all([
    fetchDashboardSummary(),
    fetchListings(),
    fetchUserProfile()
  ]);

  const savedListings = listings.slice(0, 3);
  const roleLabel =
    profile.role === 'buyer' ? 'خریدار' : profile.role === 'investor' ? 'سرمایه‌گذار' : 'مشاور';

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Welcome Section */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-display-lg text-gray-900 font-display mb-2">
            خوش آمدید، {profile.name}
          </h1>
          <p className="text-body-lg text-gray-600 font-body">
            اتاق کنترل نئومسکن شما آماده است
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-gray-600 font-body">تورهای برنامه‌ریزی شده</p>
                <p className="text-display-sm text-gray-900 font-display">{summary.scheduledTours}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-xl">📅</span>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-gray-600 font-body">خانه‌های ذخیره شده</p>
                <p className="text-display-sm text-gray-900 font-display">{summary.savedCount}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-xl">❤️</span>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-gray-600 font-body">پیشنهادهای فعال</p>
                <p className="text-display-sm text-gray-900 font-display">7</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-yellow-600 text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Profile & Preferences */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={60}
                  height={60}
                  className="rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-body-lg text-gray-900 font-body font-semibold">{profile.name}</h3>
                  <p className="text-body-sm text-gray-600 font-body">{roleLabel}</p>
                  <div className="mt-2">
                    <span className="status-active">فعال</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-body-sm text-gray-900 font-body font-medium mb-3">ترجیحات شما</h4>
                <ul className="space-y-2">
                  {profile.preferences.map((preference, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-body-sm text-gray-600 font-body">{preference}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h4 className="text-body-lg text-gray-900 font-body font-semibold mb-4">دسترسی سریع</h4>
              <div className="space-y-3">
                <Button asChild className="w-full btn-modern-secondary justify-start">
                  <Link href="/listings">
                    <span className="mr-3">🔍</span>
                    جست‌وجوی جدید
                  </Link>
                </Button>
                <Button asChild className="w-full btn-modern-secondary justify-start">
                  <Link href="/dashboard/settings">
                    <span className="mr-3">⚙️</span>
                    تنظیمات
                  </Link>
                </Button>
                <Button asChild className="w-full btn-modern-secondary justify-start">
                  <Link href="/contact">
                    <span className="mr-3">💬</span>
                    تماس با مشاور
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Insights */}
            <div>
              <h2 className="text-display-sm text-gray-900 font-display mb-6">بینش‌های نئو</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {summary.aiInsights.map((insight, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 text-sm">🤖</span>
                      </div>
                      <div>
                        <p className="text-body-sm text-gray-900 font-body font-medium mb-2">نئو توصیه می‌کند</p>
                        <p className="text-body-sm text-gray-600 font-body leading-relaxed">{insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Properties */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-display-sm text-gray-900 font-display">واحدهای ذخیره شده</h2>
                <Button asChild className="btn-modern-secondary">
                  <Link href="/listings">مشاهده همه</Link>
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {savedListings.map((listing) => (
                  <PropertyCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>

            {/* Trending Tags */}
            <div className="card p-6">
              <h3 className="text-body-lg text-gray-900 font-body font-semibold mb-4">برچسب‌های پرطرفدار</h3>
              <div className="flex flex-wrap gap-3">
                {summary.trendingTags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-body-sm font-body hover:bg-gray-200 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}