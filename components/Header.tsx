'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '@/ui/Button';
import { Menu, X } from 'lucide-react';
import { ChatbotToggle } from '@/components/chatbot/ChatbotToggle';

const navLinks = [
<<<<<<< HEAD
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Listings' },
  { href: '/contact', label: 'Contact' },
  { href: '/dashboard', label: 'Dashboard' }
=======
  { href: '/', label: 'خانه' },
  { href: '/about', label: 'درباره نئومسکن' },
  { href: '/listings', label: 'فهرست واحدها' },
  { href: '/ai-search', label: 'جست‌وجوی هوشمند' },
  { href: '/contact', label: 'تماس' },
  { href: '/dashboard', label: 'داشبورد' }
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

<<<<<<< HEAD
  return (
    <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center space-x-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white shadow-neo">
            NM
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-dark">NeoMaskan</span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Inspire Living
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
=======
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
            <span className="text-lg font-semibold text-dark">نئومسکن</span>
            <span className="text-xs font-medium tracking-[0.3em] text-muted">INSPIRE</span>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white shadow-neo">
            NM
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
<<<<<<< HEAD
                pathname === link.href ? 'text-primary-600' : 'text-muted hover:text-dark'
=======
                isActive(link.href) ? 'text-primary-600' : 'text-muted hover:text-dark'
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="shadow-neo">
<<<<<<< HEAD
            <Link href="/listings?cta=book-tour">Book a tour</Link>
=======
            <Link href="/listings?cta=book-tour">رزرو بازدید</Link>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </Button>
          <ChatbotToggle />
        </nav>

<<<<<<< HEAD
        <div className="flex items-center space-x-2 md:hidden">
=======
        <div className="flex items-center gap-2 md:hidden">
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
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
<<<<<<< HEAD
          <div className="flex flex-col space-y-4 pt-4">
=======
          <div className="flex flex-col gap-4 pt-4">
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-base font-semibold',
<<<<<<< HEAD
                  pathname === link.href ? 'text-primary-600' : 'text-dark'
=======
                  isActive(link.href) ? 'text-primary-600' : 'text-dark'
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full justify-center shadow-neo">
              <Link href="/listings?cta=book-tour" onClick={() => setMobileOpen(false)}>
<<<<<<< HEAD
                Book a tour
=======
                رزرو بازدید
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
