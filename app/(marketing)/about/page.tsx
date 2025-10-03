import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Stats } from '@/components/Stats';
import { Button } from '@/ui/Button';

export const metadata = {
  title: 'درباره نئومسکن'
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl space-y-6 px-6 text-right">
          <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'درباره نئومسکن' }]} />
          <h1 className="text-4xl font-semibold text-dark">روایت برند نئومسکن</h1>
          <p className="text-sm leading-relaxed text-muted">
            نئومسکن با الهام از Inspire Maskan شکل گرفت تا میان طراحی معماری و داده‌های بازار پلی یکپارچه بسازد. تیم ما متشکل از معماران، طراحان تجربه و تحلیلگران داده است که زیست آینده‌نگر را در خاورمیانه و فراتر از آن بازآفرینی می‌کنند.
          </p>
          <div className="rounded-3xl border border-primary-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-dark">ماموریت</h2>
            <p className="mt-3 text-sm text-muted">
              ارائه تجربه‌ای تمام‌دیجیتال برای کشف، انتخاب و سکونت در خانه‌هایی که با معیارهای انرژی، رفاه و فناوری هم‌سو هستند؛ همراه با پشتیبانی هوش مصنوعی و تیم کانسیِرج.
            </p>
          </div>
        </div>
      </div>

      <Stats />

      <div className="mx-auto max-w-5xl space-y-12 px-6 py-16 text-right">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-dark">ارزش‌های کلیدی</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[{
              title: 'شفافیت داده‌محور',
              description: 'تمام واحدها با امتیازهای انرژی، دسترسی و شاخص‌های بازار ارزیابی می‌شوند تا تصمیم‌گیری آسان باشد.'
            }, {
              title: 'تجربه فارسی‌زبان',
              description: 'رابط کاربری راست‌به‌چپ، فونت وزیرمتن و روایت محلی برای مخاطبان منطقه‌ای.'
            }, {
              title: 'همکاری انسان و هوش',
              description: 'دستیار نئو در کنار مشاوران حرفه‌ای عمل می‌کند تا تجربه‌ای انسانی و مقیاس‌پذیر بسازد.'
            }].map((value) => (
              <div key={value.title} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
                <h3 className="text-lg font-semibold text-dark">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-primary-100 bg-primary-50/70 p-8">
          <h2 className="text-2xl font-semibold text-primary-700">آینده نئومسکن</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-700">
            در فاز بعدی، اتصال مستقیم به سامانه‌های ثبت قرارداد، واقعیت افزوده برای چیدمان و هوش مصنوعی چندزبانه برنامه‌ریزی شده است. ما به دنبال شریکان فنی و سرمایه‌گذاران هم‌راستا برای توسعه این مسیر هستیم.
          </p>
          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <Button asChild>
              <a href="mailto:studio@neomaskan.com">همکاری با ما</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/contact">تماس با تیم</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
