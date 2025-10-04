'use client';

import { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Listing } from '@/types/listing';
import { Button } from '@/ui/Button';

interface SmartSearchProps {
  onResults: (results: Listing[]) => void;
  onInsight?: (insight: string) => void;
  onLoadingChange?: (loading: boolean) => void;
}

export function SmartSearch({ onResults, onInsight, onLoadingChange }: SmartSearchProps) {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const placeholder = useMemo(() => {
    const suggestions = [
      'آپارتمان لوکس ساحلی با ۴ خواب',
      'خانه دوبلکس نزدیک مرکز فرهنگی',
      'واحد هوشمند با بودجه ۸۰۰ هزار'
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  }, []);

  async function interpret() {
    setLoading(true);
    onLoadingChange?.(true);
    try {
      const response = await fetch('/api/ai/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      const json = await response.json();
      const aiInsight: string = json?.data?.insight ?? '';
      const results: Listing[] = json?.data?.results ?? [];
      setInsight(aiInsight);
      onInsight?.(aiInsight);
      onResults(results);
    } finally {
      setLoading(false);
      onLoadingChange?.(false);
    }
  }

  return (
    <div className="rounded-3xl border border-primary-100 bg-white/90 p-6 shadow-neo">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
        <Sparkles className="h-4 w-4" />
        <span className="font-lalezar">جست‌وجوی هوشمند نئو</span>
      </div>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded-full border border-slate-200 bg-white py-3 px-4 text-sm text-dark focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
        <Button type="button" onClick={interpret} className="px-6 font-lalezar" disabled={loading}>
          {loading ? 'در حال تحلیل...' : 'تحلیل و پیشنهاد'}
        </Button>
      </div>
      {insight ? <p className="mt-4 text-sm font-lalezar text-primary-600">{insight}</p> : null}
    </div>
  );
}
