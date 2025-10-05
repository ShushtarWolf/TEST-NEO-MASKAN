import { ListingsClient } from '@/components/ListingsClient';
import { fetchListings } from '@/lib/mockApi';

export default async function ListingsPage() {
  const listings = await fetchListings();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <p className="text-body-sm text-gray-500 font-body mb-2">کلکسیون نئومسکن</p>
          <h1 className="text-display-lg text-gray-900 font-display mb-4">واحدهای Inspire Maskan را کشف کنید</h1>
          <p className="text-body-lg text-gray-600 font-body max-w-3xl">
            هر ملک با روایت معماری، امتیاز انرژی و بینش داده‌محور ارائه می‌شود تا انتخابی آگاهانه داشته باشید.
          </p>
        </div>
        <ListingsClient initialListings={listings} />
      </div>
    </div>
  );
}
