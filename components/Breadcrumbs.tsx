import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="ردیف مسیر" className="flex items-center gap-2 text-xs text-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="font-semibold text-primary-600 hover:text-primary-700">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-dark">{item.label}</span>
            )}
            {isLast ? null : <ChevronRight className="h-3 w-3 text-slate-300" />}
          </span>
        );
      })}
    </nav>
  );
}
