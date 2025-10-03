import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';

const footerNav = [
  {
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
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
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
          </p>
        </div>

        {footerNav.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/70">
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
          <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/70">Stay in sync</h3>
          <p className="text-sm text-muted">
            Subscribe to curated market narratives and new release alerts from the NeoMaskan studio team.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-slate-200/70 bg-white/70 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} NeoMaskan Studio. Inspired by Inspire Maskan.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#privacy">Privacy</Link>
            <Link href="#terms">Terms</Link>
            <Link href="#accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
