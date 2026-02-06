import type { Metadata } from 'next';
import { JetBrains_Mono, Rajdhani } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ChatbotProvider } from '@/components/chatbot-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Chatbot } from '@/components/chatbot';
import { AttractorBackground } from '@/components/AttractorBackground';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
});

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
      <body className={cn(
        'font-sans antialiased bg-background text-foreground selection:bg-white/20 selection:text-white',
        jetbrainsMono.variable,
        rajdhani.variable
      )} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ChatbotProvider>
            <AttractorBackground />
            {children}
            <Chatbot />
          </ChatbotProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
