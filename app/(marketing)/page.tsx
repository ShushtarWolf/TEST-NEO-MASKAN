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
    focusTags: ['family', 'luxury']
  });

  return (
    <div className="space-y-16 pb-24">
      <Hero />
      <Stats />

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              Curated for you
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-dark">Smart recommendations</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              AI matched selections tuned to your desire for elevated family spaces with wellness amenities and effortless access to city energy.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Refine preferences</Link>
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
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              Signature flow
            </p>
            <h2 className="text-3xl font-semibold text-dark">From discovery to move-in, orchestrated.</h2>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <span className="font-semibold text-primary-600">01 · Discover:</span> Navigate curated categories and deep property stories.
              </li>
              <li>
                <span className="font-semibold text-primary-600">02 · Decide:</span> Compare energy and walkability scores, visualize floor plans, and align with AI narratives.
              </li>
              <li>
                <span className="font-semibold text-primary-600">03 · Delight:</span> Book hybrid tours, sync with advisors, and manage onboarding within the dashboard.
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/listings">Explore listings</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Meet an advisor</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-neo">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Live activity feed
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>Layla booked a twilight tour at Tidal Villas Waterfront.</li>
                <li>Aurora Lofts Skyline gained 12 new watchers today.</li>
                <li>Neo AI recommended Cobalt Haven to 3 hybrid workers.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                AI concierge insight
              </p>
              <p className="mt-3 text-base text-primary-700">
                “Waterfront residences with energy scores above 90 are trending 18% faster in NeoCity this month. Consider saving your favorites to receive early alerts.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
