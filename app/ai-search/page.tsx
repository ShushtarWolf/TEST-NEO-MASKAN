import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AiSearchClient } from '@/components/AiSearchClient';

export const metadata = {
  title: 'جست‌وجوی هوشمند نئو'
};

export default function AiSearchPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6 text-right">
        <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'جست‌وجوی هوشمند' }]} />
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-dark">جست‌وجوی هوشمند نئومسکن</h1>
          <p className="max-w-3xl text-sm text-muted">
            این موتور پیشنهاد، داده‌های ساختگی را تحلیل می‌کند و گزینه‌های مشابه را با وزن‌دهی به برچسب‌ها، امتیاز انرژی و بودجه اولویت‌بندی می‌کند.
          </p>
        </div>
        <AiSearchClient />
      </div>
    </div>
  );
}
