'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
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
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'border-b border-border/50 bg-background/80 backdrop-blur-sm' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#about" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Code2 className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">Sarvesh Ahuja</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Button asChild variant="ghost" key={href} className={cn(
              "text-muted-foreground transition-colors hover:text-primary",
              activeSection === href && 'text-primary font-semibold bg-secondary'
            )}>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
            {/* Mobile menu can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
