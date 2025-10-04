import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { PropertyCard } from '@/components/PropertyCard';
import { fetchListings } from '@/lib/mockApi';
import { getRecommendations } from '@/utils/recommender';
import { Button } from '@/ui/Button';

export default async function HomePage() {
  const listings = await fetchListings();
  const recommendations = getRecommendations(listings, {
    budget: 950000,
    bedrooms: 3,
    focusTags: ['خانوادگی', 'لوکس']
  });

  return (
    <div className="space-y-16 pb-24">
      <Hero />
      <Stats />

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="text-right">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">انتخاب هوشمند</p>
            <h2 className="mt-2 text-2xl font-semibold text-dark">پیشنهادهای شخصی نئو</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              براساس بودجه و سبک زندگی خانواده شما، این واحدها بالاترین امتیاز انرژی و دسترسی را از موتور توصیه‌گر نئومسکن دریافت کرده‌اند.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/dashboard">به‌روزرسانی ترجیحات</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {recommendations.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} highlight />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-right">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">سفر امضاشده</p>
            <h2 className="text-3xl font-semibold text-dark">از کشف تا سکونت؛ هماهنگ و یکپارچه.</h2>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <span className="font-semibold text-primary-600">۰۱ · کشف:</span> کاوش دسته‌بندی‌های انتخابی و روایت‌های عمیق هر ملک.
              </li>
              <li>
                <span className="font-semibold text-primary-600">۰۲ · تصمیم:</span> مقایسه امتیاز انرژی و پیاده‌روی، مشاهده نقشه‌ها و بهره‌مندی از تحلیل هوش مصنوعی.
              </li>
              <li>
                <span className="font-semibold text-primary-600">۰۳ · همراهی:</span> رزرو تورهای حضوری یا مجازی، اتصال به مشاوران و مدیریت مراحل در داشبورد.
              </li>
            </ul>
            <div className="flex flex-wrap justify-end gap-3">
              <Button asChild>
                <Link href="/listings">مشاهده همه واحدها</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">هماهنگی با مشاور</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-right">
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-neo">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">گزارش لحظه‌ای</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>لیلا برای بازدید عصرگاهی ویلای ساحلی تایدال رزرو کرد.</li>
                <li>Aurora Lofts امروز ۱۲ بازدیدکننده جدید جذب کرد.</li>
                <li>نئو، کوبالت هیون را به سه کاربر علاقه‌مند به کار هیبریدی پیشنهاد داد.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-primary-50 p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">بینش کانسیِرج هوش مصنوعی</p>
              <p className="mt-3 text-base text-primary-700">
                «واحدهای ساحلی با امتیاز انرژی بالای ۹۰ در نئو سیتی این ماه ۱۸٪ سریع‌تر معامله می‌شوند. علاقه‌مندی‌ها را ذخیره کنید تا اعلان‌های زودهنگام دریافت کنید.»
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
