'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ThemeSwitcher } from './theme-switcher';

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

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/5',
        hasScrolled ? 'bg-[#030014]/80 backdrop-blur-md border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 group">
          <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300">
            <Code2 className="h-6 w-6 text-cyan-400" />
          </div>
          <span className="font-headline text-xl font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors uppercase">
            Sarvesh<span className="text-cyan-400">.AI</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "relative text-sm font-mono font-medium tracking-wider text-gray-400 hover:text-cyan-400 transition-all duration-300 uppercase",
                  "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full",
                  activeSection === href && 'text-cyan-400 after:w-full text-shadow-sm'
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#030014]/95 backdrop-blur-xl border-l border-cyan-500/20">
                <SheetHeader>
                  <SheetTitle className="text-left text-cyan-400 font-headline tracking-widest uppercase border-b border-white/10 pb-4">System Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <a
                        href={href}
                        className={cn(
                          "text-lg font-mono text-gray-400 transition-all hover:text-cyan-400 hover:pl-4 border-l-2 border-transparent hover:border-cyan-400 pl-0 uppercase",
                          activeSection === href && 'text-cyan-400 border-cyan-400 pl-4 bg-cyan-500/5 py-1 pr-2'
                        )}
                      >
                        <span className="text-cyan-500/50 mr-2">{'>'}</span> {label}
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
