import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';
import { ChatbotPanel } from '@/components/chatbot/ChatbotPanel';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn'
});

export const metadata: Metadata = {
  title: 'نئومسکن | تجربه‌های هوشمند ملک',
  description:
    'نئومسکن سکوی الهام‌بخش معاملات ملک است؛ با هویت Inspire Maskan، داده‌های دقیق، و راهنمایی هوش مصنوعی برای کشف خانه ایده‌آل.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-white text-dark',
          vazirmatn.variable,
          'flex flex-col font-sans'
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
