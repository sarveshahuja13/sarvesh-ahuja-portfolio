import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Chatbot } from '@/components/chatbot';
import { ChatbotProvider } from '@/components/chatbot-provider';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-sans antialiased bg-[#050505] text-white selection:bg-cyan-500/30')} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ChatbotProvider>
            {children}
            <Chatbot />
          </ChatbotProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
