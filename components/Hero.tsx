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
        <div className="flex-1 space-y-8 text-right">
          <span className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-xs tracking-[0.3em]">
            INSPIRE MASKAN
          </span>
          <h1 className="text-4xl font-lalezar font-semibold leading-tight md:text-5xl">
            نئومسکن؛ درگاه هوشمند برای زیست آینده‌نگر.
          </h1>
          <p className="max-w-xl text-base font-lalezar text-primary-100">
            مجموعه‌ای گزیده از واحدهای الهام‌بخش با تحلیل هوش مصنوعی، روایت‌های محله‌ای و خدمات کانسیِرج؛ همه در یک تجربه دیجیتال راست‌به‌چپ.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row-reverse sm:justify-start">
            <Button asChild className="shadow-neo font-lalezar">
              <Link href="/listings">مشاهده واحدها</Link>
            </Button>
            <Button asChild variant="secondary" className="border-white/30 bg-white/10 text-white backdrop-blur font-lalezar">
              <Link href="/dashboard">ورود به داشبورد</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-neo backdrop-blur">
            <div className="rounded-[2rem] bg-white/90 p-6 text-right text-dark">
              <p className="text-xs font-lalezar font-semibold tracking-[0.2em] text-primary-500">پیش‌نمایش ویژه</p>
              <p className="mt-4 text-lg font-semibold">Aurora Lofts Skyline</p>
              <p className="mt-2 text-sm font-lalezar text-muted">
                پنت‌هاوسی با طراحی بیوفیلیک، نورپردازی تطبیقی و لانج اختصاصی برای تجربه الهام‌گرفته از Inspire Maskan.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold text-primary-600">۳</p>
                  <p className="font-lalezar text-muted">خواب</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۱۴۵ متر</p>
                  <p className="font-lalezar text-muted">زیربنا</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۹۲</p>
                  <p className="font-lalezar text-muted">امتیاز انرژی</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600">۹۸۰٬۰۰۰ درهم</p>
                  <p className="font-lalezar text-muted">سرمایه‌گذاری</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
