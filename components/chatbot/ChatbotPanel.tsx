'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
<<<<<<< HEAD
=======
import { MessageCircle, X } from 'lucide-react';
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
import { Button } from '@/ui/Button';
import { useChatbot } from '@/context/ChatbotContext';

export function ChatbotPanel() {
<<<<<<< HEAD
  const { isOpen, messages, sendMessage } = useChatbot();
  const [input, setInput] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
=======
  const { isOpen, toggle, messages, sendMessage, loading } = useChatbot();
  const [input, setInput] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    await sendMessage(trimmed);
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
    setInput('');
  }

  return (
<<<<<<< HEAD
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="chatbot"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 w-full max-w-sm overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-neo"
        >
          <div className="bg-primary-600 px-5 py-4 text-white">
            <p className="text-sm font-semibold">Neo — AI Property Copilot</p>
            <p className="text-xs text-primary-100/80">
              Ask about neighborhoods, budget matches, or schedule automation.
            </p>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === 'user'
                    ? 'ml-auto max-w-[80%] rounded-2xl bg-primary-50 px-4 py-2 text-sm text-primary-700'
                    : 'mr-auto max-w-[85%] rounded-2xl bg-slate-100 px-4 py-2 text-sm text-dark'
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="border-t border-slate-100 px-5 py-4">
            <div className="flex items-center space-x-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
              <Button type="submit" className="rounded-full px-4 py-2 text-xs uppercase tracking-wide">
                Send
              </Button>
            </div>
          </form>
        </motion.div>
      ) : null}
    </AnimatePresence>
=======
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-40 flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-neo"
          >
            <div className="flex items-start justify-between gap-4 bg-primary-600 px-5 py-4 text-white">
              <div>
                <p className="text-sm font-semibold">نئو — همیار هوشمند نئومسکن</p>
                <p className="text-xs text-primary-100/80">درباره بودجه، سبک زندگی و زمان بازدید از من بپرسید.</p>
              </div>
              <button
                type="button"
                onClick={toggle}
                className="rounded-full bg-primary-500/60 p-1 text-primary-50 transition hover:bg-primary-500"
                aria-label="بستن پنجره گفتگو"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex max-h-80 flex-col space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.sender === 'user'
                      ? 'self-end rounded-2xl bg-primary-50 px-4 py-2 text-sm text-primary-700'
                      : 'self-start rounded-2xl bg-slate-100 px-4 py-2 text-sm text-dark'
                  }
                >
                  {message.content}
                </div>
              ))}
              {loading ? (
                <div className="self-start rounded-2xl bg-slate-100 px-4 py-2 text-xs text-muted">
                  نئو در حال تحلیل درخواست شماست...
                </div>
              ) : null}
            </div>
            <form onSubmit={onSubmit} className="border-t border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="سوال خود را بنویسید"
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                <Button type="submit" className="rounded-full px-4 py-2 text-xs tracking-wide" disabled={loading}>
                  ارسال
                </Button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="chatbot-toggle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-30"
          >
            <Button
              type="button"
              onClick={toggle}
              className="h-14 w-14 rounded-full p-0 text-white shadow-neo"
              aria-label="گفتگو با نئو"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
>>>>>>> origin/codex/create-next.js-project-from-figma-design-6f2bid
  );
}
