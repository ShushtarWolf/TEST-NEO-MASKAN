import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchListingById, fetchListings } from '@/lib/mockApi';
import { Button } from '@/ui/Button';
import { getRecommendations } from '@/utils/recommender';

interface PropertyDetailPageProps {
  params: { id: string };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const listing = await fetchListingById(params.id);

  if (!listing) {
    notFound();
  }

  const siblings = await fetchListings();
  const recommendations = getRecommendations(siblings, {
    budget: listing.price,
    bedrooms: listing.bedrooms,
    focusTags: listing.tags
  }).filter((item) => item.id !== listing.id);

  return (
    <div className="bg-white">
      <div className="relative h-[480px] w-full">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-12 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-100">
            {listing.location}
          </p>
          <h1 className="mt-2 text-4xl font-semibold">{listing.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-primary-50">
            <span>{listing.bedrooms} Bedrooms</span>
            <span>{listing.bathrooms} Bathrooms</span>
            <span>{listing.area} m² Interior</span>
            <span>Energy {listing.energyScore}</span>
            <span>Walk {listing.walkScore}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button className="shadow-neo">Schedule a tour</Button>
            <Button asChild variant="secondary" className="bg-white/10 text-white backdrop-blur">
              <Link href="/contact">Talk to an advisor</Link>
            </Button>
            <span className="text-lg font-semibold text-white/90">AED {(listing.price / 1000).toLocaleString()}K</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        <section className="grid gap-10 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-dark">Property narrative</h2>
            <p className="text-sm leading-relaxed text-muted">{listing.description}</p>
            <div className="grid gap-4 rounded-3xl border border-primary-100 bg-primary-50/60 p-6 text-sm text-primary-700">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Highlights
              </p>
              <ul className="space-y-3">
                {listing.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start space-x-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Location intelligence</p>
              <p className="mt-4 text-sm text-muted">
                Coordinates · {listing.coordinates.lat.toFixed(3)}, {listing.coordinates.lng.toFixed(3)}
              </p>
              <p className="mt-3 text-sm text-muted">
                Integrated with NeoMaskan mobility partners. Commute times and neighborhood ambience plug in here for live experiences.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Advisor concierge</p>
              <p className="mt-3 text-sm text-muted">
                Share this listing with our concierge team to receive tailored financial pathways and move-in rituals.
              </p>
              <Button asChild className="mt-4 w-full justify-center">
                <Link href={`/contact?subject=${listing.title.replace(/\s+/g, '%20')}`}>Request callback</Link>
              </Button>
            </div>
          </aside>
        </section>

        {recommendations.length > 0 ? (
          <section>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                  Neo suggests
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-dark">Complementary residences</h2>
              </div>
              <Button asChild variant="secondary">
                <Link href="/listings">View all</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {recommendations.map((related) => (
                <div key={related.id} className="h-full">
                  <Link href={`/listings/${related.id}`}>
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-neo">
                      <div className="relative h-48 w-full">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="space-y-2 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary-500">{related.location}</p>
                        <h3 className="text-base font-semibold text-dark">{related.title}</h3>
                        <p className="text-xs text-muted">AED {(related.price / 1000).toLocaleString()}K</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
