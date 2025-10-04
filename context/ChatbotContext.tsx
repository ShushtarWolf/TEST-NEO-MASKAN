'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  createdAt: Date;
};

type ChatbotContextValue = {
  isOpen: boolean;
  toggle: () => void;
  messages: Message[];
  loading: boolean;
  sendMessage: (message: string) => Promise<void>;
};

const ChatbotContext = createContext<ChatbotContextValue | undefined>(undefined);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      content: 'سلام! من نئو هستم، همیار هوشمند نئومسکن. بگویید به دنبال چه فضایی هستید تا پیشنهاد بدهم.',
      createdAt: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);

  const value = useMemo<ChatbotContextValue>(
    () => ({
      isOpen,
      toggle: () => setIsOpen((prev) => !prev),
      messages,
      loading,
      sendMessage: async (message: string) => {
        const timestamp = Date.now();
        const userMessage: Message = {
          id: `user-${timestamp}`,
          sender: 'user',
          content: message,
          createdAt: new Date()
        };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);
        try {
          const response = await fetch('/api/ai/suggest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: message })
          });
          if (!response.ok) {
            throw new Error('خطای سرور');
          }
          const json = await response.json();
          const insight: string = json?.data?.insight ?? 'پیشنهاد جدیدی ثبت شد.';
          const aiMessage: Message = {
            id: `ai-${timestamp}`,
            sender: 'ai',
            content: insight,
            createdAt: new Date()
          };
          setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
          const fallback: Message = {
            id: `ai-error-${timestamp}`,
            sender: 'ai',
            content: 'متاسفم، ارتباط با سرویس پیشنهاددهی برقرار نشد. لطفاً دوباره امتحان کنید.',
            createdAt: new Date()
          };
          setMessages((prev) => [...prev, fallback]);
        } finally {
          setLoading(false);
        }
      }
    }),
    [isOpen, loading, messages]
  );

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>;
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within ChatbotProvider');
  }
  return context;
}
