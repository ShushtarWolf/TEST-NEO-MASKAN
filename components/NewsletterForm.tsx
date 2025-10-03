'use client';

import { useState } from 'react';
import { Button } from '@/ui/Button';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex overflow-hidden rounded-full border border-slate-200 focus-within:ring-2 focus-within:ring-primary-200">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
<<<<<<< HEAD
          placeholder="Enter your email"
          className="w-full rounded-full border-0 px-4 py-2.5 text-sm text-dark placeholder:text-slate-400 focus:ring-0"
        />
        <Button type="submit" className="rounded-none rounded-r-full">
          Join
=======
          placeholder="ایمیل خود را وارد کنید"
          className="w-full rounded-full border-0 px-4 py-2.5 text-sm text-dark placeholder:text-slate-400 focus:ring-0"
        />
        <Button type="submit" className="rounded-none rounded-l-full">
          عضویت
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
        </Button>
      </div>
      {submitted ? (
        <p className="text-xs font-medium text-primary-600">
<<<<<<< HEAD
          Welcome aboard! You&apos;ll receive our next briefing shortly.
=======
          سپاس! به‌زودی جدیدترین خبرنامه برای شما ارسال می‌شود.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
        </p>
      ) : null}
    </form>
  );
}
