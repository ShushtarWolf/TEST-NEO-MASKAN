import { ListingsClient } from '@/components/ListingsClient';
import { fetchListings } from '@/lib/mockApi';

export default async function ListingsPage() {
  const listings = await fetchListings();

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="space-y-4 text-right">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">کلکسیون نئومسکن</p>
          <h1 className="text-3xl font-semibold text-dark">واحدهای Inspire Maskan را کشف کنید</h1>
          <p className="max-w-3xl text-sm text-muted">
            هر ملک با روایت معماری، امتیاز انرژی و بینش داده‌محور ارائه می‌شود تا انتخابی آگاهانه داشته باشید.
          </p>
        </div>
        <ListingsClient initialListings={listings} />
      </div>
    </div>
  );
}
