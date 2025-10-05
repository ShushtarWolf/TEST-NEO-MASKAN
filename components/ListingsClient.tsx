'use client';

import { useEffect, useMemo, useState } from 'react';
import { PropertyCard } from '@/components/PropertyCard';
import { SmartSearch } from '@/components/SmartSearch';
import { Listing } from '@/types/listing';
import { FilterSidebar, FilterValues } from '@/components/FilterSidebar';
import { SearchBar } from '@/components/SearchBar';
import { Button } from '@/ui/Button';
import { Modal } from '@/components/Modal';

interface ListingsClientProps {
  initialListings: Listing[];
}

export function ListingsClient({ initialListings }: ListingsClientProps) {
  const [displayed, setDisplayed] = useState<Listing[]>(initialListings);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<FilterValues | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [filterKey, setFilterKey] = useState(0);

  useEffect(() => {
    setDisplayed(initialListings);
  }, [initialListings]);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    initialListings.forEach((listing) => listing.tags.forEach((tag) => allTags.add(tag)));
    return Array.from(allTags);
  }, [initialListings]);

  async function fetchWithParams(searchParams: URLSearchParams) {
    setLoading(true);
    const queryString = searchParams.toString();
    const url = queryString ? `/api/listings?${queryString}` : '/api/listings';
    const response = await fetch(url, { cache: 'no-store' });
    const json = await response.json();
    setDisplayed(json?.data ?? []);
    setLoading(false);
  }

  function handleApply(filters: FilterValues) {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (filters.minPrice) params.set('minPrice', String(filters.minPrice));
    if (filters.maxPrice) params.set('maxPrice', String(filters.maxPrice));
    if (filters.bedrooms) params.set('bedrooms', String(filters.bedrooms));
    filters.tags.forEach((tag) => params.append('tag', tag));
    setActiveFilters(filters);
    setModalOpen(true);
    fetchWithParams(params);
  }

  function submitSearch() {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    fetchWithParams(params);
  }

  function resetAll() {
    setQuery('');
    setInsight(null);
    setDisplayed(initialListings);
    setLoading(false);
    setActiveFilters(null);
    setModalOpen(false);
    setFilterKey((prev) => prev + 1);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="خلاصه فیلترها"
        description="ترکیب جست‌وجو و فیلترهای اعمال‌شده روی داده‌های نئومسکن"
      >
        <ul className="space-y-2 font-lalezar">
          <li>عبارت جست‌وجو: {query || '—'}</li>
          <li>بودجه: {activeFilters?.minPrice?.toLocaleString('fa-IR') ?? 'حداقل نامشخص'} تا {activeFilters?.maxPrice?.toLocaleString('fa-IR') ?? 'حداکثر نامشخص'}</li>
          <li>حداقل خواب: {activeFilters?.bedrooms ?? 'بدون محدودیت'}</li>
          <li>برچسب‌ها: {activeFilters?.tags.length ? activeFilters.tags.join('، ') : 'انتخاب نشده'}</li>
        </ul>
      </Modal>
      <div className="order-2 lg:order-1">
        <FilterSidebar key={filterKey} availableTags={tags} onApply={handleApply} />
      </div>
      <div className="order-1 space-y-8 lg:order-2">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={submitSearch}
            placeholder="جست‌وجوی دستی در عنوان یا محله"
          />
          <Button variant="ghost" onClick={resetAll} className="self-end text-xs font-lalezar text-muted">
            پاک‌سازی فیلترها
          </Button>
        </div>
        <SmartSearch
          onResults={(results) => {
            setDisplayed(results);
          }}
          onInsight={setInsight}
          onLoadingChange={setLoading}
        />
        {insight ? <div className="rounded-2xl bg-primary-50 p-4 text-sm font-lalezar text-primary-700">{insight}</div> : null}
        {loading ? (
          <div className="rounded-3xl border border-dashed border-primary-200 bg-white p-10 text-center text-sm font-lalezar text-muted">
            در حال بارگذاری پیشنهادها...
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {displayed.map((listing, index) => (
              <PropertyCard 
                key={listing.id} 
                listing={listing} 
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              />
            ))}
          </div>
        )}
        {displayed.length === 0 && !loading ? (
          <div className="rounded-3xl border border-dashed border-primary-200 bg-primary-50/60 p-10 text-center">
            <p className="text-lg font-lalezar font-semibold text-primary-600">موردی یافت نشد.</p>
            <p className="mt-2 text-sm font-lalezar text-primary-600/80">شرایط را تغییر دهید یا از نئو کمک بخواهید.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
