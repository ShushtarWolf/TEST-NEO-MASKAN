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
    <div className="bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-primary-500/40 via-primary-800/60 to-primary-900" />
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-right">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary-200">خوش آمدید</p>
            <h1 className="text-3xl font-semibold">{profile.name}، اتاق کنترل نئومسکن شما آماده است.</h1>
            <p className="text-sm text-primary-100/80">
              وضعیت واحدهای ذخیره‌شده، تورهای پیش‌رو و بینش‌های هوش مصنوعی بر اساس ترجیحات شما در اینجا نمایش داده می‌شود.
            </p>
            <div className="flex flex-wrap justify-end gap-4 text-sm">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-right">
                <p className="text-xs tracking-[0.2em] text-primary-200">خانه‌های ذخیره‌شده</p>
                <p className="mt-1 text-xl font-semibold">{summary.savedCount}</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-right">
                <p className="text-xs tracking-[0.2em] text-primary-200">تورهای برنامه‌ریزی‌شده</p>
                <p className="mt-1 text-xl font-semibold">{summary.scheduledTours}</p>
              </div>
            </div>
            <Button asChild className="bg-white text-primary-700 shadow-neo">
              <Link href="/listings">کشف واحدهای جدید</Link>
            </Button>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="text-sm tracking-[0.3em] text-primary-200">پرسونا</p>
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-xs text-primary-100/70">{roleLabel}</p>
                </div>
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={72}
                  height={72}
                  className="rounded-2xl object-cover"
                />
              </div>
              <p className="mt-6 text-xs tracking-[0.2em] text-primary-200">ترجیحات</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-100/90">
                {profile.preferences.map((preference) => (
                  <li key={preference}>• {preference}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
        <section className="grid gap-6 md:grid-cols-3">
          {summary.aiInsights.map((insight) => (
            <div key={insight} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-primary-100">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-200">بینش نئو</p>
              <p className="mt-3 leading-relaxed">{insight}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-right">
              <p className="text-xs font-semibold tracking-[0.3em] text-primary-200">فهرست منتخب</p>
              <h2 className="text-2xl font-semibold text-white">به جست‌وجو ادامه دهید</h2>
            </div>
            <Button asChild variant="secondary" className="border-white/40 bg-white/10 text-white">
              <Link href="/listings">مدیریت مجموعه</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {savedListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/10 p-8 text-primary-100">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-right">
              <p className="text-xs font-semibold tracking-[0.3em] text-primary-200">برچسب‌های پرطرفدار</p>
              <div className="mt-3 flex flex-wrap justify-end gap-3">
                {summary.trendingTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/30 px-4 py-2 text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button asChild className="bg-white text-primary-700">
                <Link href="/contact">رزرو جلسه کانسیِرج</Link>
              </Button>
              <Button asChild variant="secondary" className="border-white/40 bg-white/10 text-white">
                <Link href="/dashboard/settings">تنظیم ترجیحات</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
