
"use client";

import { useRef, useEffect, useState } from 'react';
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
import remarkGfm from 'remark-gfm';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useChatbot } from './chatbot-provider';
import { GridScan } from './GridScan';

const originalFace = "◕—◕";
const glitchFaces = ["●—●", "◕—◕", "●︶●", "●﹏●", "●~●", "○—○"];

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
  const [currentFace, setCurrentFace] = useState(originalFace);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchBot = () => {
      setIsGlitching(true);
      let count = 0;
      const glitchInterval = setInterval(() => {
        setCurrentFace(glitchFaces[Math.floor(Math.random() * glitchFaces.length)]);
        count++;
        if (count > 4) {
          clearInterval(glitchInterval);
          setCurrentFace(originalFace);
          setIsGlitching(false);
        }
      }, 80);
    };

    const autoGlitchInterval = setInterval(glitchBot, 6000);
    return () => clearInterval(autoGlitchInterval);
  }, []);

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
          <div className="absolute bottom-20 right-0 mb-2 w-[300px]">
            <div className="bg-background/80 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-lg p-3 animate-in fade-in-50 slide-in-from-bottom-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white">AI Assistant</span>
                <button
                  onClick={() => setShowGreeting(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X size={14} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Open the chat
                  setIsOpen(true);
                  setShowGreeting(false);
                  // If there is input, submit it to the main chat
                  if (input.trim()) {
                    // We need to wait for the dialog to open, but since state is shared, 
                    // we can just call handleSubmit. However, the dialog needs to be mounted.
                    // For now, we'll just open it with the text pre-filled.
                  }
                }}
                className="relative"
              >
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="pr-10 h-9 bg-background/50 border-input/50 focus:border-white focus:ring-white backdrop-blur-sm text-sm"
                  onFocus={() => {
                    // Optional: Open chat immediately on focus? 
                    // Or let them type here first. Let's let them type.
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-9 w-9 text-white hover:text-white hover:bg-transparent"
                  disabled={!input.trim()}
                >
                  <CornerDownLeft className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="chatbot-border-glow">
                <Button
                  className="h-16 w-16 rounded-full shadow-lg bg-background hover:bg-background/80 text-foreground flex items-center justify-center border border-white/10"
                  size="icon"
                  onClick={handleOpenChat}
                  aria-label="Open chat"
                >
                  <pre className={cn("text-white font-mono text-base leading-tight text-center", isGlitching && "glitch")}>
                    {currentFace}
                  </pre>
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
        <DialogContent className="sm:max-w-2xl w-full h-full sm:h-[80vh] sm:max-h-[80vh] flex flex-col p-0 sm:rounded-lg overflow-hidden border-none bg-background/95 backdrop-blur-sm">
          <div className="absolute inset-0 z-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1a1a1a"
              gridScale={0.1}
              scanColor="#ffffff"
              scanOpacity={0.2}
              enablePost
              bloomIntensity={0.6}
              chromaticAberration={0.002}
              noiseIntensity={0.01}
            />
          </div>
          <DialogHeader className="p-4 border-b shrink-0 relative z-10 bg-background/80 backdrop-blur-sm flex flex-row items-center justify-between">
            <DialogTitle className="font-headline text-primary">Chat with my AI Assistant</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          <div className="flex-1 overflow-hidden relative z-10">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={cn(
                      'flex w-full items-start gap-3',
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
                        'relative max-w-[85%] min-w-0 rounded-lg p-3 text-sm shadow-sm backdrop-blur-md overflow-hidden',
                        m.role === 'user'
                          ? 'bg-primary/90 text-primary-foreground'
                          : 'bg-muted/80'
                      )}
                    >
                      {m.role === 'assistant' ? (
                        <ReactMarkdown
                          className="prose prose-sm dark:prose-invert max-w-none break-words leading-normal"
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                            a: ({ node, ...props }) => <a className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer" {...props} />,
                            code: ({ node, className, children, ...props }: any) => {
                              const match = /language-(\w+)/.exec(className || '');
                              return match ? (
                                <pre className="bg-muted p-2 rounded-md overflow-x-auto my-2 text-xs">
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                </pre>
                              ) : (
                                <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono" {...props}>
                                  {children}
                                </code>
                              );
                            },
                            table: ({ node, ...props }) => <div className="overflow-x-auto my-2"><table className="min-w-full divide-y divide-border border rounded-md text-sm" {...props} /></div>,
                            thead: ({ node, ...props }) => <thead className="bg-muted/50" {...props} />,
                            tbody: ({ node, ...props }) => <tbody className="divide-y divide-border bg-background/50" {...props} />,
                            tr: ({ node, ...props }) => <tr className="hover:bg-muted/30 transition-colors" {...props} />,
                            th: ({ node, ...props }) => <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" {...props} />,
                            td: ({ node, ...props }) => <td className="px-3 py-2 whitespace-normal break-words" {...props} />,
                          }}
                        >{m.content}</ReactMarkdown>
                      ) : (
                        <div className="whitespace-pre-wrap break-all leading-normal">{m.content}</div>
                      )}
                    </div>
                    {m.role === 'user' && (
                      <Avatar className="h-8 w-8 border shrink-0">
                        <AvatarFallback><User size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                  <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-8 w-8 border shrink-0">
                      <AvatarFallback><Bot size={18} /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted/80 backdrop-blur-md rounded-lg p-3 text-sm shadow-sm">
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
          <div className="border-t p-4 shrink-0 relative z-10 bg-background/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about my skills, projects..."
                className="pr-12 bg-background/50 border-input/50 focus:border-primary focus:ring-primary backdrop-blur-sm"
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
