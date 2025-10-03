import type { Metadata } from 'next';
<<<<<<< HEAD
import { Plus_Jakarta_Sans } from 'next/font/google';
=======
import { Vazirmatn } from 'next/font/google';
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
import './globals.css';
import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';
import { ChatbotPanel } from '@/components/chatbot/ChatbotPanel';

<<<<<<< HEAD
const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'NeoMaskan | Smart Real Estate Experiences',
  description:
    'NeoMaskan is the intelligent real estate hub offering curated listings, AI guidance, and seamless workflows inspired by the Inspire Maskan design.'
=======
const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn'
});

export const metadata: Metadata = {
  title: 'نئومسکن | تجربه‌های هوشمند ملک',
  description:
    'نئومسکن سکوی الهام‌بخش معاملات ملک است؛ با هویت Inspire Maskan، داده‌های دقیق، و راهنمایی هوش مصنوعی برای کشف خانه ایده‌آل.'
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-white text-dark',
          fontSans.variable,
          'flex flex-col'
=======
    <html lang="fa" dir="rtl" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-white text-dark',
          vazirmatn.variable,
          'flex flex-col font-sans'
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatbotPanel />
        </Providers>
      </body>
    </html>
  );
}
