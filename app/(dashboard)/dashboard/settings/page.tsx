import Link from 'next/link';
import { Button } from '@/ui/Button';

export default function SettingsPage() {
  return (
    <div className="bg-slate-50 py-16">
<<<<<<< HEAD
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Account preferences</p>
          <h1 className="text-3xl font-semibold text-dark">NeoMaskan settings</h1>
          <p className="text-sm text-muted">
            Configure notification rhythms and AI concierge sensitivity. Integrations with CRM and financial partners plug in here.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl border border-primary-100 bg-white p-8 shadow-neo">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-dark">AI concierge mode</p>
              <p className="text-xs text-muted">Set how proactive Neo should be with new recommendations.</p>
            </div>
            <Button variant="secondary" className="bg-primary-50 text-primary-600">
              Balanced
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-dark">Notification cadence</p>
              <p className="text-xs text-muted">Receive curated updates weekly, bi-weekly, or on demand.</p>
            </div>
            <Button variant="secondary" className="bg-primary-50 text-primary-600">
              Weekly pulse
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-dark">Integrations</p>
              <p className="text-xs text-muted">Connect financing partners and digital twin services.</p>
            </div>
            <Button asChild>
              <Link href="/contact">Request enablement</Link>
=======
      <div className="mx-auto max-w-4xl space-y-8 px-6 text-right">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary-500">تنظیمات حساب</p>
          <h1 className="text-3xl font-semibold text-dark">پیکربندی نئومسکن</h1>
          <p className="text-sm text-muted">
            ریتم اعلان‌ها و میزان فعال بودن دستیار نئو را مشخص کنید. اتصال به سامانه‌های مالی و CRM در اینجا قرار می‌گیرد.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl border border-primary-100 bg-white p-8 shadow-neo">
          <div className="flex items-center justify-between gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-dark">حالت دستیار هوشمند</p>
              <p className="text-xs text-muted">مشخص کنید نئو تا چه اندازه پیشنهادهای جدید را فعالانه ارسال کند.</p>
            </div>
            <Button variant="secondary" className="bg-primary-50 text-primary-600">
              تعادل هوشمند
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-dark">بازه اعلان‌ها</p>
              <p className="text-xs text-muted">دریافت گزارش‌ها به صورت هفتگی، دو هفتگی یا بر اساس درخواست.</p>
            </div>
            <Button variant="secondary" className="bg-primary-50 text-primary-600">
              نبض هفتگی
            </Button>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-dark">اتصال سرویس‌ها</p>
              <p className="text-xs text-muted">پلتفرم‌های تأمین مالی و سرویس دیجیتال تویین را متصل کنید.</p>
            </div>
            <Button asChild>
              <Link href="/contact">درخواست فعال‌سازی</Link>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
