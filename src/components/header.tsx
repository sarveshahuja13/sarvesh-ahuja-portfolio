'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ThemeSwitcher } from './theme-switcher';
import CardNav from './CardNav';
import { useChatbot } from './chatbot-provider';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#hobbies', label: 'Interests' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { setIsOpen } = useChatbot();

  useEffect(() => {
    // Use IntersectionObserver for more accurate section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px', // Active zone is between 20% and 65% from top
        threshold: 0,
      }
    );

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/5',
        hasScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 group">
          <div className="p-1 rounded bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="font-headline text-xl font-bold tracking-widest text-white group-hover:text-white transition-colors uppercase">
            Sarvesh<span className="text-zinc-400">.AI</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <CardNav
              items={navLinks}
              activeItem={activeSection}
            />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Open Chat</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-left text-white font-headline tracking-widest uppercase border-b border-white/10 pb-4">System Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <a
                        href={href}
                        className={cn(
                          "text-lg font-mono text-gray-400 transition-all hover:text-white hover:pl-4 border-l-2 border-transparent hover:border-white pl-0 uppercase",
                          activeSection === href && 'text-white border-white pl-4 bg-white/5 py-1 pr-2'
                        )}
                      >
                        <span className="text-zinc-500 mr-2">{'>'}</span> {label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
