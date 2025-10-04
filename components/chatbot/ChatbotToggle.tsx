'use client';

import { Bot } from 'lucide-react';
import { Button } from '@/ui/Button';
import { useChatbot } from '@/context/ChatbotContext';

export function ChatbotToggle() {
  const { isOpen, toggle } = useChatbot();
  return (
    <Button
      type="button"
      variant="secondary"
      onClick={toggle}
      className="gap-2 shadow-sm"
    >
      <Bot className="h-4 w-4" />
      <span>{isOpen ? 'بستن نئو' : 'گفتگو با نئو'}</span>
    </Button>
  );
}
