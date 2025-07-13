import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Chatbot } from '@/components/chatbot';

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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
