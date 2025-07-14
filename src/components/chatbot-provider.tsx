"use client";

import { useChat, type UseChatHelpers } from 'ai/react';
import React, { createContext, useContext, useState } from 'react';

type ChatbotContextType = UseChatHelpers & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showGreeting: boolean;
  setShowGreeting: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatbotContext = createContext<ChatbotContextType | null>(null);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  
  const chatHelpers = useChat({
    api: '/api/chat',
    onFinish: () => {
      // Optional: any action after a message is received
    },
  });

  const value = {
    ...chatHelpers,
    isOpen,
    setIsOpen,
    showGreeting,
    setShowGreeting,
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
