import Link from 'next/link';
import { Button } from '@/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 bg-slate-50 px-6 text-center">
      <span className="rounded-full bg-primary-100 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-primary-600">
        نئومسکن
      </span>
      <h1 className="text-3xl font-semibold text-dark">صفحه مورد نظر پیدا نشد.</h1>
      <p className="max-w-xl text-sm text-muted">
        به نظر می‌رسد این مسیر هنوز در جهان Inspire Maskan ساخته نشده است. از مسیرهای زیر برای ادامه تجربه استفاده کنید.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">بازگشت به خانه</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/listings">مشاهده واحدها</Link>
        </Button>
      </div>
    </div>
  );
}
