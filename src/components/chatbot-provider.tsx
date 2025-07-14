"use client";

import { useChat, type UseChatHelpers } from 'ai/react';
import React, { createContext, useContext, useState, useEffect } from 'react';

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
    onError: (error) => {
      console.error("Chat error:", error);
    }
  });

  useEffect(() => {
    // Show greeting after 3 seconds, but only if the chat isn't already open
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);
  
  useEffect(() => {
    // Hide greeting if chat is opened
    if (isOpen) {
      setShowGreeting(false);
    }
  }, [isOpen]);

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
