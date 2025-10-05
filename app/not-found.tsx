import Link from 'next/link';
import { Button } from '@/ui/Button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Visual */}
        <div className="relative">
          <div className="text-8xl font-display font-bold text-primary-600/20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-display-lg text-dark font-display">
            صفحه مورد نظر یافت نشد
          </h1>
          <p className="text-body-lg text-muted font-body leading-relaxed">
            متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا منتقل شده است.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              بازگشت به خانه
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="gap-2">
            <Link href="/listings">
              <Search className="w-4 h-4" />
              مشاهده فهرست واحدها
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-body-sm text-muted font-body mb-4">
            یا می‌توانید از این صفحات دیدن کنید:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/about" 
              className="text-primary-600 hover:text-primary-700 transition-colors font-body"
            >
              درباره نئومسکن
            </Link>
            <Link 
              href="/contact" 
              className="text-primary-600 hover:text-primary-700 transition-colors font-body"
            >
              تماس با ما
            </Link>
            <Link 
              href="/ai-search" 
              className="text-primary-600 hover:text-primary-700 transition-colors font-body"
            >
              جست‌وجوی هوشمند
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}