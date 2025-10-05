'use client';

import { FormEvent, useState, useEffect, useRef } from 'react';
import { Search, X, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  instantSearch?: boolean;
  suggestions?: string[];
  recentSearches?: string[];
}

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'suggestion';
}

export function SearchBar({ 
  value, 
  onChange, 
  placeholder, 
  onSubmit,
  instantSearch = false,
  suggestions = [],
  recentSearches = []
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Debounced instant search
  useEffect(() => {
    if (!instantSearch) return;

    const timer = setTimeout(() => {
      if (value.trim()) {
        onSubmit?.();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value, instantSearch, onSubmit]);

  const allSuggestions: SearchSuggestion[] = [
    ...recentSearches.map((search, index) => ({
      id: `recent-${index}`,
      text: search,
      type: 'recent' as const
    })),
    ...suggestions.map((suggestion, index) => ({
      id: `suggestion-${index}`,
      text: suggestion,
      type: 'suggestion' as const
    }))
  ];

  const filteredSuggestions = allSuggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(value.toLowerCase())
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
    setShowSuggestions(false);
  }

  function handleSuggestionClick(suggestion: string) {
    onChange(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!showSuggestions) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          event.preventDefault();
          handleSuggestionClick(filteredSuggestions[selectedIndex].text);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  }

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-200 focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-100 hover:border-slate-300"
      >
        <Search className="h-4 w-4 text-primary-500 flex-shrink-0" />
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            setShowSuggestions(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            // Delay hiding suggestions to allow clicks
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-dark placeholder:text-slate-400 focus:outline-none font-body"
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="p-1 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="پاک کردن جست‌وجو"
          >
            <X className="h-4 w-4 text-slate-400" />
          </button>
        )}
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.text)}
              className={cn(
                'w-full px-4 py-3 text-right text-sm transition-colors flex items-center gap-3',
                'hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl',
                selectedIndex === index && 'bg-primary-50 text-primary-600'
              )}
            >
              {suggestion.type === 'recent' ? (
                <Clock className="h-4 w-4 text-slate-400 flex-shrink-0" />
              ) : (
                <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
              )}
              <span className="font-body">{suggestion.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
