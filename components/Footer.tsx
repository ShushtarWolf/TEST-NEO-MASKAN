import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';

const footerNav = [
  {
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
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
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
            نئومسکن سفر میان کشف تا روز اسباب‌کشی را یکپارچه می‌کند و چشم‌انداز Inspire Maskan را به تجربه‌ای دیجیتال و قابل لمس بدل می‌سازد.
          </p>
        </div>

        {footerNav.map((section) => (
          <div key={section.title} className="space-y-4 text-right">
            <h3 className="text-sm font-semibold tracking-wide text-dark/70">{section.title}</h3>
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

        <div className="space-y-4 text-right">
          <h3 className="text-sm font-semibold tracking-wide text-dark/70">خبرنامه نئومسکن</h3>
          <p className="text-sm text-muted">
            برای دریافت روایت‌های بازار و اطلاع از عرضه‌های تازه، ایمیل خود را ثبت کنید.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-slate-200/70 bg-white/70 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} استودیو نئومسکن. الهام گرفته از Inspire Maskan.</p>
          <div className="flex gap-4">
            <Link href="#privacy">حریم خصوصی</Link>
            <Link href="#terms">قوانین</Link>
            <Link href="#accessibility">دسترسی‌پذیری</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
