import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';
import { ChatbotPanel } from '@/components/chatbot/ChatbotPanel';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'NeoMaskan | Smart Real Estate Experiences',
  description:
    'NeoMaskan is the intelligent real estate hub offering curated listings, AI guidance, and seamless workflows inspired by the Inspire Maskan design.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-white text-dark',
          fontSans.variable,
          'flex flex-col'
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
