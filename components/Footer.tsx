import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';

const footerNav = [
  {
<<<<<<< HEAD
    title: 'Explore',
    links: [
      { href: '/listings', label: 'Property listings' },
      { href: '/dashboard', label: 'Client dashboard' },
      { href: '/contact', label: 'Contact advisors' }
    ]
  },
  {
    title: 'Company',
    links: [
      { href: '#story', label: 'Our story' },
      { href: '#careers', label: 'Careers' },
      { href: '#press', label: 'Press' }
=======
    title: 'کاوش',
    links: [
      { href: '/listings', label: 'فهرست واحدها' },
      { href: '/dashboard', label: 'داشبورد مشتریان' },
      { href: '/contact', label: 'ارتباط با مشاوران' }
    ]
  },
  {
    title: 'نئومسکن',
    links: [
      { href: '#story', label: 'داستان برند' },
      { href: '#careers', label: 'فرصت‌های همکاری' },
      { href: '#press', label: 'رسانه و اخبار' }
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
<<<<<<< HEAD
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white shadow-neo">
              NM
            </span>
            <div>
              <p className="text-lg font-semibold text-dark">NeoMaskan</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Inspire Living</p>
            </div>
          </div>
          <p className="text-sm text-muted">
            Crafting seamless journeys between discovery and move-in day. NeoMaskan transforms Inspire Maskan&apos;s vision into a
            living, breathing digital product.
=======
        <div className="space-y-4 text-right">
          <div className="flex items-center justify-end gap-3">
            <div className="text-right">
              <p className="text-lg font-semibold text-dark">نئومسکن</p>
              <p className="text-xs tracking-[0.3em] text-muted">INSPIRE</p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white shadow-neo">
              NM
            </span>
          </div>
          <p className="text-sm text-muted">
            نئومسکن سفر میان کشف تا روز اسباب‌کشی را یکپارچه می‌کند و چشم‌انداز Inspire Maskan را به تجربه‌ای دیجیتال و قابل لمس
            بدل می‌سازد.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </p>
        </div>

        {footerNav.map((section) => (
<<<<<<< HEAD
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/70">
=======
          <div key={section.title} className="space-y-4 text-right">
            <h3 className="text-sm font-semibold tracking-wide text-dark/70">
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              {section.title}
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
<<<<<<< HEAD
          <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/70">Stay in sync</h3>
          <p className="text-sm text-muted">
            Subscribe to curated market narratives and new release alerts from the NeoMaskan studio team.
=======
          <h3 className="text-sm font-semibold tracking-wide text-dark/70">خبرنامه نئومسکن</h3>
          <p className="text-sm text-muted">
            برای دریافت روایت‌های بازار و اطلاع از عرضه‌های تازه، ایمیل خود را ثبت کنید.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-slate-200/70 bg-white/70 py-6">
<<<<<<< HEAD
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} NeoMaskan Studio. Inspired by Inspire Maskan.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#privacy">Privacy</Link>
            <Link href="#terms">Terms</Link>
            <Link href="#accessibility">Accessibility</Link>
=======
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} استودیو نئومسکن. الهام گرفته از Inspire Maskan.</p>
          <div className="flex gap-4">
            <Link href="#privacy">حریم خصوصی</Link>
            <Link href="#terms">قوانین</Link>
            <Link href="#accessibility">دسترسی‌پذیری</Link>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </div>
        </div>
      </div>
    </footer>
  );
}
