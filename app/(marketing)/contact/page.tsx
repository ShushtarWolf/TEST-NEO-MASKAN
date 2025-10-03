import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/ui/Button';

const contactReasons = ['رزرو بازدید خصوصی', 'شراکت سرمایه‌گذاری', 'رسانه و همکاری', 'بازخورد محصول'];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-10 px-6">
        <div className="space-y-4 text-right">
          <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'تماس' }]} />
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">کانسیِرج نئو</p>
          <h1 className="text-3xl font-semibold text-dark">با استودیوی نئومسکن در ارتباط باشید</h1>
          <p className="text-sm text-muted">
            مشاوران ما اصول مهمان‌نوازی Inspire Maskan را با برنامه زمانی شما هماهنگ می‌کنند. بگویید چگونه می‌توانیم تجربه سکونت آینده شما را طراحی کنیم.
          </p>
        </div>
        <form className="space-y-6 rounded-3xl border border-primary-100 bg-white p-10 shadow-neo">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">نام و نام خانوادگی</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">ایمیل</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">شماره تماس</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">تاریخ پیشنهادی</span>
              <input
                type="date"
                name="date"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-dark">هدف شما از ارتباط</p>
            <div className="flex flex-wrap gap-3">
              {contactReasons.map((reason) => (
                <label key={reason} className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm">
                  <input type="checkbox" name="reason" value={reason} className="rounded-full border-primary-300 text-primary-600 focus:ring-primary-200" />
                  <span>{reason}</span>
                </label>
              ))}
            </div>
          </div>
          <label className="space-y-2 text-sm text-right">
            <span className="font-semibold text-dark">پیام شما</span>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </label>
          <Button type="submit" className="w-full justify-center shadow-neo">
            ثبت درخواست
          </Button>
          <p className="text-xs text-muted">
            با ارسال این فرم، با شرایط کانسیِرج نئومسکن موافقت می‌کنید و طی ۲۴ ساعت پاسخ متناسب دریافت خواهید کرد.
          </p>
        </form>
      </div>
    </div>
  );
}
