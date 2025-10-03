<<<<<<< HEAD
# NeoMaskan Web Experience

A Next.js + Tailwind CSS implementation of the Inspire Maskan digital product, re-imagined for the NeoMaskan brand. The project recreates the multi-page experience including marketing, listings, property detail, contact, and dashboard flows, complete with AI-assisted search and concierge chatbot.

## Features

- 🌐 **Full site navigation** covering home, listings, property detail, contact, dashboard, and settings.
- 🎨 **NeoMaskan branding** with custom palette, typography, and storytelling aligned to the Inspire Maskan concept.
- 🧠 **AI-inspired tools** including a natural language smart search and Neo the AI property copilot chatbot.
- 📦 **Mock data layer** implemented via local asynchronous stubs simulating listings, dashboard insights, and user profile data.
- 📱 **Responsive layouts** mirroring the Figma rhythm with Tailwind components and utility classes.

## Getting started
=======
# NeoMaskan — Inspire Maskan RTL Web Experience

NeoMaskan بازآفرینی فارسی‌زبان طرح Inspire Maskan با استفاده از Next.js 14 (App Router)، Tailwind CSS و TypeScript است. تمام صفحات کلیدی شامل خانه، فهرست واحدها، جزئیات ملک، درباره، تماس، احراز هویت، داشبورد و جست‌وجوی هوشمند پیاده‌سازی شده‌اند. داده‌ها از طریق API‌های ساختگی (Route Handler) تأمین می‌شوند و تجربه به طور کامل راست‌به‌چپ با فونت وزیرمتن ارائه می‌گردد.

## ✨ قابلیت‌ها

- ✅ **ناوبری کامل**: صفحه اصلی، درباره، فهرست، جزئیات ملک، تماس، ورود، ثبت‌نام، داشبورد و تنظیمات در دسترس هستند.
- 🧠 **ویژگی‌های AI-lite**: صفحه «جست‌وجوی هوشمند» و دستیار شناور نئو از `/api/ai/suggest` برای رتبه‌بندی داده‌ها استفاده می‌کنند.
- 💬 **چت‌بات نئو**: پنل گفتگو از Route Handler هوشمند بهره می‌برد و در تمام صفحات قابل دسترس است.
- 📡 **APIهای ساختگی**: لیست‌ها، ورود، ثبت‌نام و پیشنهادهای AI از مسیرهای `app/api` و داده‌های JSON محلی تغذیه می‌شوند.
- 🧩 **کامپوننت‌های ماژولار**: Breadcrumbs، SearchBar، FilterSidebar، Modal و کارت‌های ملک در پوشه `components/` سامان‌دهی شده‌اند.
- 🌐 **RTL + فونت وزیرمتن**: زبان پیش‌فرض `fa-IR`، جهت راست‌به‌چپ و تایپوگرافی سازگار با مخاطب فارسی.

## 🚀 اجرا

پروژه با Bun یا npm قابل اجراست. پیشنهاد می‌شود از Bun استفاده شود:

```bash
bun install
bun dev
```

در صورت عدم دسترسی به Bun:
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid

```bash
npm install
npm run dev
```

<<<<<<< HEAD
Then open [http://localhost:3000](http://localhost:3000) to explore the experience.

> **Note:** The project uses local mock APIs. Swap the functions in `lib/mockApi.ts` with real data fetching when integrating a backend.

## Project structure

```
app/
  (marketing)/
    page.tsx              # Home
    listings/             # Listings index & detail
    contact/              # Contact flow
  (dashboard)/
    dashboard/page.tsx    # Client dashboard hub
    settings/page.tsx     # Account settings surface
components/               # UI components, chatbot, etc.
context/                  # React context for chatbot state
lib/                      # Mock API stubs
utils/                    # Utility helpers & AI recommendation logic
```

## Extending the experience

- Replace the placeholder AI logic in `utils/recommender.ts` with real machine learning ranking.
- Connect the chatbot to an API-driven LLM for richer conversational support.
- Populate dynamic maps and analytics cards with live telemetry.
- Harden form submissions by wiring them to server actions or external services.

## License

This project is provided for demonstration purposes.
=======
سپس در مرورگر به آدرس [http://localhost:3000](http://localhost:3000) مراجعه کنید.

## 📁 ساختار مهم پوشه‌ها

```
app/
  layout.tsx                # چیدمان اصلی با RTL و فونت وزیرمتن
  (marketing)/              # صفحات بازاریابی (خانه، درباره، فهرست، تماس و ...)
  (auth)/auth/              # صفحات ورود و ثبت‌نام
  (dashboard)/dashboard/    # داشبورد و تنظیمات با ناوبری جانبی
  ai-search/                # صفحه اختصاصی جست‌وجوی هوشمند
  api/                      # Route Handler های ساختگی
components/                 # اجزای UI، چت‌بات، فرم‌ها و ...
context/                    # Context مربوط به چت‌بات نئو
lib/                        # دسترسی به داده‌ها و شبیه‌سازی احراز هویت
data/                       # فایل‌های JSON داده‌های ساختگی
```

## 🛠 توسعه بعدی

- اتصال API‌های واقعی برای لیست املاک و احراز هویت.
- جایگزینی منطق پیشنهادی ساده با مدل‌های ML یا سرویس‌های جست‌وجوی برداری.
- اضافه کردن نقشه تعاملی و به‌روزرسانی‌های WebSocket برای داشبورد.
- اتصال فرم‌های تماس و احراز هویت به سرویس‌های واقعی (Email/SMS).

## 📄 مجوز

این پروژه صرفاً برای نمایش توانمندی و نمونه‌سازی ارائه شده است.
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
