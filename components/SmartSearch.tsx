'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Listing } from '@/data/listings';
import { Button } from '@/ui/Button';

const keywordToTag: Record<string, string> = {
  luxury: 'luxury',
  family: 'family',
  waterfront: 'waterfront',
  city: 'city',
  innovation: 'city',
  garden: 'garden',
  duplex: 'duplex',
  culture: 'culture'
};

function interpretQuery(query: string) {
  const normalized = query.toLowerCase();
  const tags = Object.entries(keywordToTag)
    .filter(([keyword]) => normalized.includes(keyword))
    .map(([, tag]) => tag);

  const bedroomsMatch = normalized.match(/(\d+)\s*(bed|bedroom)/);
  const budgetMatch = normalized.match(/aed\s?(\d+[\d,]*)|\b(\d{3,})k\b/);

  const bedrooms = bedroomsMatch ? Number.parseInt(bedroomsMatch[1], 10) : undefined;
  const budget = budgetMatch
    ? Number.parseInt(budgetMatch[1]?.replace(/,/g, '') ?? budgetMatch[0].replace(/k/i, '000'), 10) *
      (budgetMatch[0].toLowerCase().includes('k') ? 1000 : 1)
    : undefined;

  return {
    tags,
    bedrooms,
    budget
  };
}

interface SmartSearchProps {
  listings: Listing[];
  onResults: (results: Listing[]) => void;
}

export function SmartSearch({ listings, onResults }: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);

  const placeholder = useMemo(() => {
    const suggestions = [
      'Waterfront family home with 4 bedrooms',
      'Luxury duplex near cultural district',
      'AED 800k smart home with garden'
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  }, []);

  function handleSearch() {
    const { tags, bedrooms, budget } = interpretQuery(query);

    const filtered = listings.filter((listing) => {
      const matchesTags = tags.length === 0 || tags.some((tag) => listing.tags.includes(tag));
      const matchesBedrooms = !bedrooms || listing.bedrooms >= bedrooms;
      const matchesBudget = !budget || listing.price <= budget;
      return matchesTags && matchesBedrooms && matchesBudget;
    });

    setInsight(
      filtered.length > 0
        ? `Neo matched ${filtered.length} residences with ${bedrooms ? `${bedrooms}+ bedrooms` : 'versatile layouts'}${
            tags.length ? ` highlighting ${tags.join(', ')}` : ''
          }${budget ? ` under AED ${budget.toLocaleString()}` : ''}.`
        : 'No perfect matches yet. Try adjusting your vibe or budget and Neo will expand the search radius.'
    );
    onResults(filtered);
  }

  return (
    <div className="rounded-3xl border border-primary-100 bg-white/80 p-6 shadow-neo">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
        Neo smart search
      </p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-dark focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
        <Button type="button" onClick={handleSearch} className="px-6">
          Interpret &amp; filter
        </Button>
      </div>
      {insight ? <p className="mt-4 text-sm text-primary-600">{insight}</p> : null}
    </div>
  );
}
