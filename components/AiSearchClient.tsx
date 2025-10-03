'use client';

import { useEffect, useState } from 'react';
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchBar } from '@/components/SearchBar';

export function AiSearchClient() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Listing[]>([]);
  const [insight, setInsight] = useState<string>('برای شروع، یک توصیف بنویسید یا کلیدواژه‌ای انتخاب کنید.');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // بارگذاری اولیه با نتایج پیش‌فرض
    async function loadInitial() {
      const response = await fetch('/api/ai/suggest');
      const json = await response.json();
      setResults(json?.data?.results ?? []);
      setInsight(json?.data?.insight ?? 'پیشنهادهای آغازین نئومسکن برای شروع کاوش.');
    }
    loadInitial();
  }, []);

  async function runSearch() {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      const json = await response.json();
      setResults(json?.data?.results ?? []);
      setInsight(json?.data?.insight ?? '');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-neo">
        <p className="text-sm text-muted">
          نئو با استفاده از فیلترهای هوشمند، برچسب‌ها و بودجه شما را تحلیل می‌کند و نتایج را رتبه‌بندی می‌نماید. پرسش خود را به زبان طبیعی وارد کنید.
        </p>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={runSearch}
            placeholder="مثال: ویلای ساحلی با ۴ خواب و بودجه ۱٫۳ میلیون"
          />
          <Button onClick={runSearch} disabled={loading} className="px-6">
            {loading ? 'در حال تحلیل...' : 'جست‌وجوی نئو'}
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-primary-100 bg-primary-50/70 p-6 text-right text-sm text-primary-700">
        {insight}
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {results.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>
      {results.length === 0 && !loading ? (
        <div className="rounded-3xl border border-dashed border-primary-200 bg-white p-10 text-center text-sm text-muted">
          نتیجه‌ای یافت نشد. پرسش را تغییر دهید یا بازه بودجه را اصلاح کنید.
        </div>
      ) : null}
    </div>
  );
}
