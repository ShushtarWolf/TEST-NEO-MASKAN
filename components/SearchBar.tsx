'use client';

import { FormEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
}

export function SearchBar({ value, onChange, placeholder, onSubmit }: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-100"
    >
      <Search className="h-4 w-4 text-primary-500" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-dark placeholder:text-slate-400 focus:outline-none"
      />
    </form>
  );
}
