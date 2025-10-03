'use client';

import { useMemo, useState } from 'react';
import { Listing } from '@/data/listings';
import { PropertyCard } from '@/components/PropertyCard';
import { SmartSearch } from '@/components/SmartSearch';

interface ListingsClientProps {
  listings: Listing[];
}

export function ListingsClient({ listings }: ListingsClientProps) {
  const [filtered, setFiltered] = useState(listings);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    listings.forEach((listing) => listing.tags.forEach((tag) => allTags.add(tag)));
    return Array.from(allTags);
  }, [listings]);

  function handleTagClick(tag: string) {
    if (activeTag === tag) {
      setActiveTag(null);
      setFiltered(listings);
      return;
    }
    setActiveTag(tag);
    setFiltered(listings.filter((listing) => listing.tags.includes(tag)));
  }

  return (
    <div className="space-y-12">
      <SmartSearch listings={listings} onResults={setFiltered} />
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => handleTagClick(tag)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTag === tag
                ? 'bg-primary-600 text-white shadow-neo'
                : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-primary-200 bg-primary-50/60 p-10 text-center">
          <p className="text-lg font-semibold text-primary-600">No matches found yet.</p>
          <p className="mt-2 text-sm text-primary-600/80">
            Adjust your filters or ask Neo for guidance to broaden the search radius.
          </p>
        </div>
      ) : null}
    </div>
  );
}
