'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'نمای کلی' },
  { href: '/dashboard/settings', label: 'تنظیمات' }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-slate-900/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:flex-row">
        <aside className="w-full lg:w-64">
          <nav className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-primary-100">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    active
                      ? 'block rounded-2xl bg-white/20 px-4 py-3 text-white shadow-neo'
                      : 'block rounded-2xl px-4 py-3 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
