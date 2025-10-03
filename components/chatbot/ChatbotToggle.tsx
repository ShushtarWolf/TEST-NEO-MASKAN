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
      className="shadow-sm"
    >
      <Bot className="mr-2 h-4 w-4" />
      {isOpen ? 'Hide Neo' : 'Ask Neo' }
    </Button>
  );
}
