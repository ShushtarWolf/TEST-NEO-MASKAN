import Link from 'next/link';
import { Button } from '@/ui/Button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-primary-400/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 pb-24 pt-24 lg:flex-row lg:items-center">
<<<<<<< HEAD
        <div className="flex-1 space-y-8">
          <p className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.3em]">
            Inspire Maskan Collection
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            NeoMaskan, your immersive gateway to intelligent living spaces.
          </h1>
          <p className="max-w-xl text-base text-primary-100">
            Navigate curated residences, AI-guided recommendations, and signature experiences that honor the Inspire Maskan design language across every interaction.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="shadow-neo">
              <Link href="/listings">Browse residences</Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/30 bg-white/10 text-white backdrop-blur">
              <Link href="/dashboard">Enter client dashboard</Link>
=======
        <div className="flex-1 space-y-8 text-right">
          <span className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-xs tracking-[0.3em]">
            INSPIRE MASKAN
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            نئومسکن؛ درگاه هوشمند برای زیست آینده‌نگر.
          </h1>
          <p className="max-w-xl text-base text-primary-100">
            مجموعه‌ای گزیده از واحدهای الهام‌بخش با تحلیل هوش مصنوعی، روایت‌های محله‌ای و خدمات کانسیِرج؛ همه در یک تجربه دیجیتال راست‌به‌چپ.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row-reverse sm:justify-start">
            <Button asChild className="shadow-neo">
              <Link href="/listings">مشاهده واحدها</Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/30 bg-white/10 text-white backdrop-blur">
              <Link href="/dashboard">ورود به داشبورد</Link>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-neo backdrop-blur">
<<<<<<< HEAD
            <div className="rounded-[2rem] bg-white/90 p-6 text-dark">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Signature preview
              </p>
              <p className="mt-4 text-lg font-semibold">Aurora Lofts Skyline</p>
              <p className="mt-2 text-sm text-muted">
                Skyline penthouse curated with biophilic design, adaptive lighting, and concierge lounge.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-primary-600">3</p>
                  <p className="text-muted">Bedrooms</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">145 m²</p>
                  <p className="text-muted">Interior</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">92</p>
                  <p className="text-muted">Energy score</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">AED 980K</p>
                  <p className="text-muted">Investment</p>
=======
            <div className="rounded-[2rem] bg-white/90 p-6 text-right text-dark">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary-500">پیش‌نمایش ویژه</p>
              <p className="mt-4 text-lg font-semibold">Aurora Lofts Skyline</p>
              <p className="mt-2 text-sm text-muted">
                پنت‌هاوسی با طراحی بیوفیلیک، نورپردازی تطبیقی و لانج اختصاصی برای تجربه الهام‌گرفته از Inspire Maskan.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-primary-600">۳</p>
                  <p className="text-muted">خواب</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۱۴۵ متر</p>
                  <p className="text-muted">زیربنا</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۹۲</p>
                  <p className="text-muted">امتیاز انرژی</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۹۸۰٬۰۰۰ درهم</p>
                  <p className="text-muted">سرمایه‌گذاری</p>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
