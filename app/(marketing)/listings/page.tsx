import { ListingsClient } from '@/components/ListingsClient';
import { fetchListings } from '@/lib/mockApi';

export default async function ListingsPage() {
  const listings = await fetchListings();

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
<<<<<<< HEAD
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Our collection</p>
          <h1 className="text-3xl font-semibold text-dark">Explore Inspire Maskan residences</h1>
          <p className="max-w-3xl text-sm text-muted">
            Discover NeoMaskan&apos;s curated library of residences. Every listing blends architectural storytelling with measurable performance indicators.
          </p>
        </div>
        <ListingsClient listings={listings} />
=======
        <div className="space-y-4 text-right">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">کلکسیون نئومسکن</p>
          <h1 className="text-3xl font-semibold text-dark">واحدهای Inspire Maskan را کشف کنید</h1>
          <p className="max-w-3xl text-sm text-muted">
            هر ملک با روایت معماری، امتیاز انرژی و بینش داده‌محور ارائه می‌شود تا انتخابی آگاهانه داشته باشید.
          </p>
        </div>
        <ListingsClient initialListings={listings} />
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
      </div>
    </div>
  );
}
