'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/ui/Button';

export type FilterValues = {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  tags: string[];
};

interface FilterSidebarProps {
  availableTags: string[];
  onApply: (filters: FilterValues) => void;
}

export function FilterSidebar({ availableTags, onApply }: FilterSidebarProps) {
  const [bedrooms, setBedrooms] = useState<number | undefined>();
  const [minPrice, setMinPrice] = useState(400000);
  const [maxPrice, setMaxPrice] = useState(1500000);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (minPrice > maxPrice) {
      setMaxPrice(minPrice);
    }
  }, [minPrice, maxPrice]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  }

  function applyFilters() {
    onApply({
      minPrice,
      maxPrice,
      bedrooms,
      tags: selectedTags
    });
  }

  return (
    <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm w-full" dir="rtl">
      <div>
        <h3 className="text-sm font-semibold text-dark">بودجه تقریبی (درهم)</h3>
        <div className="mt-4 space-y-3 text-xs text-muted">
          <div className="flex items-center gap-3">
            <label className="w-16 text-right">کمینه</label>
            <input
              type="range"
              min={200000}
              max={2000000}
              step={50000}
              value={minPrice}
              onChange={(event) => setMinPrice(Number(event.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary-100"
            />
            <span className="w-20 text-left">{minPrice.toLocaleString('fa-IR')}</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="w-16 text-right">بیشینه</label>
            <input
              type="range"
              min={minPrice}
              max={2500000}
              step={50000}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary-100"
            />
            <span className="w-20 text-left">{maxPrice.toLocaleString('fa-IR')}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-dark">حداقل تعداد خواب</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {[2, 3, 4, 5].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBedrooms(option)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                bedrooms === option
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
              }`}
            >
              {option} خواب
            </button>
          ))}
          <button
            type="button"
            onClick={() => setBedrooms(undefined)}
            className="text-xs text-muted underline"
          >
            بدون فیلتر
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-dark">برچسب‌ها</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                selectedTags.includes(tag)
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-dark hover:bg-slate-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={applyFilters} className="w-full">
        اعمال فیلترها
      </Button>
    </aside>
  );
}
