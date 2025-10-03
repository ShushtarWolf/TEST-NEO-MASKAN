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
<<<<<<< HEAD
      className="shadow-sm"
    >
      <Bot className="mr-2 h-4 w-4" />
      {isOpen ? 'Hide Neo' : 'Ask Neo' }
=======
      className="gap-2 shadow-sm"
    >
      <Bot className="h-4 w-4" />
      <span>{isOpen ? 'بستن نئو' : 'گفتگو با نئو'}</span>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
    </Button>
  );
}
