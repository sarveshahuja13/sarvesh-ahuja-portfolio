"use client";

import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, CornerDownLeft, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import ReactMarkdown from 'react-markdown';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useChatbot } from './chatbot-provider';

export function Chatbot() {
  const {
    isOpen,
    setIsOpen,
    showGreeting,
    setShowGreeting,
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChatbot();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowGreeting(false);
  };

  return (
    <>
      <div className="chatbot-container">
        {showGreeting && (
           <div className="absolute bottom-20 right-0 mb-2">
              <div className="bg-background border border-border/50 shadow-lg rounded-lg p-3 max-w-[220px] text-sm text-foreground animate-in fade-in-50 slide-in-from-bottom-2">
                <p>Hi there! Have questions about my projects or skills? Ask my AI assistant!</p>
                <button 
                  onClick={() => setShowGreeting(false)}
                  className="absolute -top-2 -right-2 h-5 w-5 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                  aria-label="Dismiss"
                >
                  <X size={12} />
                </button>
              </div>
              <div className="absolute bottom-[-8px] right-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-background" />
           </div>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="chatbot-border-glow animate-bounce">
                <Button
                  className="h-16 w-16 rounded-full shadow-lg bg-background hover:bg-background/80 text-foreground"
                  size="icon"
                  onClick={handleOpenChat}
                  aria-label="Open chat"
                >
                  <Bot className="h-8 w-8 text-primary" />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" className="mb-2">
              <p>Chat with my AI assistant</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl w-full h-full sm:h-[80vh] sm:max-h-[80vh] flex flex-col p-0 sm:rounded-lg">
          <DialogHeader className="p-4 border-b shrink-0">
            <DialogTitle className="font-headline text-primary">Chat with my AI Assistant</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      'flex items-start gap-3',
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {m.role === 'assistant' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                        <AvatarFallback><Bot size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'max-w-[85%] rounded-lg p-3 text-sm',
                        m.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      )}
                    >
                      {m.role === 'assistant' ? (
                        <ReactMarkdown
                         className="streaming-text"
                         components={{
                           p: ({ node, ...props }) => <p className="text-foreground" {...props} />,
                           li: ({ node, ...props }) => <li className="text-foreground" {...props} />,
                         }}
                        >{m.content}</ReactMarkdown>
                      ) : (
                        m.content
                      )}
                    </div>
                     {m.role === 'user' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                        <AvatarFallback><User size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                 {isLoading && messages.length > 0 && messages[messages.length-1].role !== 'user' && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-8 w-8 border shrink-0">
                            <AvatarFallback><Bot size={18} /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3 text-sm w-[85%]">
                           <ReactMarkdown className="prose-sm prose-p:text-foreground prose-li:text-foreground streaming-text">
                             {messages[messages.length - 1].content}
                           </ReactMarkdown>
                        </div>
                    </div>
                 )}
                 {isLoading && messages.length > 0 && messages[messages.length-1].role === 'user' && (
                     <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-8 w-8 border shrink-0">
                            <AvatarFallback><Bot size={18} /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3 text-sm">
                            <div className="flex items-center justify-center space-x-1">
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                 )}
              </div>
            </ScrollArea>
          </div>
          <div className="border-t p-4 shrink-0">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about my skills, projects..."
                className="pr-12"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                disabled={isLoading || !input.trim()}
              >
                <CornerDownLeft className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
