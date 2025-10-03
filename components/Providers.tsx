'use client';

import { SWRConfig } from 'swr';
import { ReactNode } from 'react';
import { ChatbotProvider } from '@/context/ChatbotContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        revalidateOnFocus: false
      }}
    >
      <ChatbotProvider>{children}</ChatbotProvider>
    </SWRConfig>
  );
}
