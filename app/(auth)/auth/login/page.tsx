'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json?.error ?? 'ورود ناموفق بود');
      }
      setStatus('ورود با موفقیت انجام شد. توکن آزمایشی: ' + json.data.token);
    } catch (error: any) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-md space-y-6 px-6 text-right">
        <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'ورود' }]} />
        <h1 className="text-3xl font-semibold text-dark">ورود به نئومسکن</h1>
        <p className="text-sm text-muted">اطلاعات حساب آزمایشی را وارد کنید یا ایمیل خود را امتحان کنید. پاسخ از API ساختگی برگردانده می‌شود.</p>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-primary-100 bg-white p-8 shadow-neo">
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-dark">ایمیل</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-dark">رمز عبور</span>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </label>
          <Button type="submit" className="w-full justify-center shadow-neo" disabled={loading}>
            {loading ? 'در حال ورود...' : 'ورود'}
          </Button>
          {status ? <p className="text-xs text-primary-600">{status}</p> : null}
          <p className="text-xs text-muted">
            حساب ندارید؟ <Link href="/auth/register" className="text-primary-600">ثبت‌نام کنید</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
