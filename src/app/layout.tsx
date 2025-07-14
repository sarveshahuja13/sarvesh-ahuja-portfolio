import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Chatbot } from '@/components/chatbot';
import { ChatbotProvider } from '@/components/chatbot-provider';

export const metadata: Metadata = {
  title: 'Sarvesh Ahuja - AI & Data Engineer',
  description: 'Portfolio of Sarvesh Ahuja, a skilled AI and Data Engineer specializing in building intelligent systems and data-driven solutions.',
  keywords: ['AI Engineer', 'Data Engineer', 'Machine Learning', 'Data Science', 'Portfolio', 'Sarvesh Ahuja'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground')} suppressHydrationWarning>
        <ChatbotProvider>
          {children}
          <Chatbot />
        </ChatbotProvider>
        <Toaster />
      </body>
    </html>
  );
}
