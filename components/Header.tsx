'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
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
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      // Add page transition effect
      document.body.style.opacity = '0.8';
      document.body.style.transform = 'scale(0.98)';
      document.body.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transform = 'scale(1)';
        }, 100);
      }, 150);
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b border-slate-200/60 backdrop-blur transition-all duration-300 supports-[backdrop-filter]:bg-white/70",
      isScrolled 
        ? "bg-white/95 shadow-lg shadow-slate-200/20" 
        : "bg-white/90"
    )}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col text-right">
            <span className="text-lg font-lalezar text-dark transition-colors group-hover:text-primary-600">نئومسکن</span>
            <span className="text-xs font-medium tracking-[0.3em] text-muted">INSPIRE</span>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white shadow-neo transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/25 group-hover:scale-105">
            NM
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className={cn(
                'relative text-sm font-lalezar font-medium transition-all duration-300 group',
                isActive(link.href) ? 'text-primary-600' : 'text-muted hover:text-dark'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{link.label}</span>
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 animate-pulse"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
