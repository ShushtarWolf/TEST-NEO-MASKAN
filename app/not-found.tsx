import Link from 'next/link';
import { Button } from '@/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 bg-slate-50 px-6 text-center">
<<<<<<< HEAD
      <span className="rounded-full bg-primary-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
        NeoMaskan
      </span>
      <h1 className="text-3xl font-semibold text-dark">The page you are looking for floated away.</h1>
      <p className="max-w-xl text-sm text-muted">
        Neo couldn&apos;t locate that experience in the Inspire Maskan universe. Let&apos;s bring you back to curated living.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/listings">Browse residences</Link>
=======
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
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
        </Button>
      </div>
    </div>
  );
}
