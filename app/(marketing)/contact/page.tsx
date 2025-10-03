<<<<<<< HEAD
import { Button } from '@/ui/Button';

const contactReasons = ['Schedule a private tour', 'Investment partnership', 'Media & collaborations', 'Product feedback'];
=======
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/ui/Button';

const contactReasons = ['رزرو بازدید خصوصی', 'شراکت سرمایه‌گذاری', 'رسانه و همکاری', 'بازخورد محصول'];
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-10 px-6">
<<<<<<< HEAD
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Neo concierge</p>
          <h1 className="text-3xl font-semibold text-dark">Connect with the NeoMaskan studio</h1>
          <p className="text-sm text-muted">
            Our advisors align Inspire Maskan&apos;s hospitality principles with your personal timeline. Share how we can co-create your living story.
=======
        <div className="space-y-4 text-right">
          <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'تماس' }]} />
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">کانسیِرج نئو</p>
          <h1 className="text-3xl font-semibold text-dark">با استودیوی نئومسکن در ارتباط باشید</h1>
          <p className="text-sm text-muted">
            مشاوران ما اصول مهمان‌نوازی Inspire Maskan را با برنامه زمانی شما هماهنگ می‌کنند. بگویید چگونه می‌توانیم تجربه سکونت آینده شما را طراحی کنیم.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </p>
        </div>
        <form className="space-y-6 rounded-3xl border border-primary-100 bg-white p-10 shadow-neo">
          <div className="grid gap-6 md:grid-cols-2">
<<<<<<< HEAD
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Full name</span>
=======
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">نام و نام خانوادگی</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
<<<<<<< HEAD
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Email</span>
=======
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">ایمیل</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
<<<<<<< HEAD
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Phone</span>
=======
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">شماره تماس</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              <input
                type="tel"
                name="phone"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
<<<<<<< HEAD
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Preferred date</span>
=======
            <label className="space-y-2 text-sm text-right">
              <span className="font-semibold text-dark">تاریخ پیشنهادی</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
              <input
                type="date"
                name="date"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
          </div>
          <div className="space-y-3">
<<<<<<< HEAD
            <p className="text-sm font-semibold text-dark">I&apos;m reaching out about</p>
            <div className="flex flex-wrap gap-3">
              {contactReasons.map((reason) => (
                <label key={reason} className="flex items-center space-x-2 rounded-full border border-slate-200 px-4 py-2 text-sm">
=======
            <p className="text-sm font-semibold text-dark">هدف شما از ارتباط</p>
            <div className="flex flex-wrap gap-3">
              {contactReasons.map((reason) => (
                <label key={reason} className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm">
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
                  <input type="checkbox" name="reason" value={reason} className="rounded-full border-primary-300 text-primary-600 focus:ring-primary-200" />
                  <span>{reason}</span>
                </label>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-dark">Message</span>
=======
          <label className="space-y-2 text-sm text-right">
            <span className="font-semibold text-dark">پیام شما</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </label>
          <Button type="submit" className="w-full justify-center shadow-neo">
<<<<<<< HEAD
            Submit request
          </Button>
          <p className="text-xs text-muted">
            By submitting, you agree to NeoMaskan&apos;s concierge terms and will receive a curated follow-up within 24 hours.
=======
            ثبت درخواست
          </Button>
          <p className="text-xs text-muted">
            با ارسال این فرم، با شرایط کانسیِرج نئومسکن موافقت می‌کنید و طی ۲۴ ساعت پاسخ متناسب دریافت خواهید کرد.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
          </p>
        </form>
      </div>
    </div>
  );
}
