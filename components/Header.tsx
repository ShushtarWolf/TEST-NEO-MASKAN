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
      "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300",
      isScrolled 
        ? "shadow-sm" 
        : "shadow-none"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-600 text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-all duration-200">
            NM
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-gray-900 transition-colors group-hover:text-primary-600">نئومسکن</span>
            <span className="text-xs font-accent tracking-wider text-gray-500">INSPIRE</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className={cn(
                'relative px-4 py-2 text-sm font-body font-medium rounded-xl transition-all duration-200',
                isActive(link.href) 
                  ? 'bg-primary-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button asChild className="btn-modern-primary font-body">
            <Link href="/listings?cta=book-tour">رزرو بازدید</Link>
          </Button>
          <ChatbotToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ChatbotToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 text-base font-body font-medium rounded-xl transition-colors',
                  isActive(link.href) 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full justify-center mt-2 btn-modern-primary font-body">
              <Link href="/listings?cta=book-tour" onClick={() => setMobileOpen(false)}>
                رزرو بازدید
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
