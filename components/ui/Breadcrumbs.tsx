'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, Home } from 'lucide-react';
import { cn } from '@/utils/cn';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from pathname if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'خانه', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = getLabelFromSegment(segment, pathSegments, index);
      
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  const getLabelFromSegment = (segment: string, segments: string[], index: number): string => {
    // Handle dynamic routes
    if (segment.startsWith('[') && segment.endsWith(']')) {
      return 'جزئیات';
    }

    // Handle known segments
    const segmentLabels: Record<string, string> = {
      'about': 'درباره نئومسکن',
      'listings': 'فهرست واحدها',
      'ai-search': 'جست‌وجوی هوشمند',
      'contact': 'تماس',
      'dashboard': 'داشبورد',
      'settings': 'تنظیمات',
      'login': 'ورود',
      'register': 'ثبت‌نام'
    };

    return segmentLabels[segment] || segment;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav 
      className={cn(
        'flex items-center space-x-2 space-x-reverse text-sm',
        className
      )}
      aria-label="مسیر ناوبری"
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const isFirst = index === 0;

        return (
          <div key={item.href} className="flex items-center space-x-2 space-x-reverse">
            {isFirst && (
              <Home className="h-4 w-4 text-muted" aria-hidden="true" />
            )}
            
            {isLast ? (
              <span 
                className="text-dark font-medium font-body"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-muted hover:text-primary-600 transition-colors font-body"
              >
                {item.label}
              </Link>
            )}

            {!isLast && (
              <ChevronLeft 
                className="h-4 w-4 text-muted flex-shrink-0" 
                aria-hidden="true" 
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
