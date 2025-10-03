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
<<<<<<< HEAD
  sendMessage: (message: string) => void;
=======
  loading: boolean;
  sendMessage: (message: string) => Promise<void>;
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
};

const ChatbotContext = createContext<ChatbotContextValue | undefined>(undefined);

<<<<<<< HEAD
const aiResponses = [
  {
    key: 'price',
    response:
      'Based on your budget focus, I recommend checking the Smart Picks section in the dashboard where listings are ranked by predicted ROI.'
  },
  {
    key: 'family',
    response:
      'Family-friendly options with parks and schools nearby are highlighted in the Lifestyle filters. I can pin a few neighborhoods for you if you tell me your preferred commute time.'
  },
  {
    key: 'luxury',
    response:
      'Luxury residences with concierge services are grouped under the Signature Series. You can book a virtual concierge tour from each property detail page.'
  }
];

function generateResponse(prompt: string) {
  const match = aiResponses.find((item) => prompt.toLowerCase().includes(item.key));
  if (match) {
    return match.response;
  }

  if (prompt.toLowerCase().includes('recommend')) {
    return 'I just refreshed your Smart Recommendations based on energy efficiency and market velocity. Explore the highlighted cards in the listings grid.';
  }

  return "I am here to assist with property discovery, scheduling tours, and neighborhood insights. Ask me about budget, lifestyle, or investment goals!";
}

=======
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
<<<<<<< HEAD
      content: 'Hi! I am Neo, your property discovery copilot. How can I personalize your search today?',
      createdAt: new Date()
    }
  ]);
=======
      content: 'سلام! من نئو هستم، همیار هوشمند نئومسکن. بگویید به دنبال چه فضایی هستید تا پیشنهاد بدهم.',
      createdAt: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid

  const value = useMemo<ChatbotContextValue>(() => ({
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
    messages,
<<<<<<< HEAD
    sendMessage: (message: string) => {
      const userMessage: Message = {
        id: `user-${Date.now()}`,
=======
    loading,
    sendMessage: async (message: string) => {
      const timestamp = Date.now();
      const userMessage: Message = {
        id: `user-${timestamp}`,
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
        sender: 'user',
        content: message,
        createdAt: new Date()
      };
<<<<<<< HEAD
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        content: generateResponse(message),
        createdAt: new Date()
      };
      setMessages((prev) => [...prev, userMessage, aiMessage]);
    }
  }), [isOpen, messages]);
=======
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
  }), [isOpen, loading, messages]);
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>;
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within ChatbotProvider');
  }
  return context;
}
