'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '@/ui/Button';
import { Menu, X } from 'lucide-react';
import { ChatbotToggle } from '@/components/chatbot/ChatbotToggle';

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/about', label: 'درباره نئومسکن' },
  { href: '/listings', label: 'فهرست واحدها' },
  { href: '/ai-search', label: 'جست‌وجوی هوشمند' },
  { href: '/contact', label: 'تماس' },
  { href: '/dashboard', label: 'داشبورد' }
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <span className="text-lg font-lalezar text-dark">نئومسکن</span>
            <span className="text-xs font-medium tracking-[0.3em] text-muted">INSPIRE</span>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white shadow-neo">
            NM
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-lalezar font-medium transition-colors',
                isActive(link.href) ? 'text-primary-600' : 'text-muted hover:text-dark'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="shadow-neo font-lalezar">
            <Link href="/listings?cta=book-tour">رزرو بازدید</Link>
          </Button>
          <ChatbotToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ChatbotToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 p-2 text-slate-600 shadow-sm"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-base font-lalezar font-semibold',
                  isActive(link.href) ? 'text-primary-600' : 'text-dark'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full justify-center shadow-neo font-lalezar">
              <Link href="/listings?cta=book-tour" onClick={() => setMobileOpen(false)}>
                رزرو بازدید
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
