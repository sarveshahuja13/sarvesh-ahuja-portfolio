import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center futuristic-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-pulse">
              Sarvesh Ahuja
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
              AI & Data Engineer
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p>
                I build intelligent systems where data, creativity, and engineering converge. Passionate about Agentic AI, scalable cloud architecture, and solving complex problems with elegant code.
              </p>
            </div>
             <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <Button asChild className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold shadow-lg shadow-primary/20 transform hover:scale-105 transition-transform duration-300">
                <a href="#projects">
                  View My Work
                </a>
              </Button>
               <div className="flex space-x-2">
                <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110">
                  <Link href="https://github.com/sarveshahuja13" aria-label="GitHub" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110">
                  <Link href="https://www.linkedin.com/in/sarvesh-ahuja-ai-engineer" aria-label="LinkedIn" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110">
                  <Link href="https://x.com/sarveshahuja13" aria-label="Twitter" target="_blank">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110">
                  <Link href="mailto:sarvesh.ahuja13@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-full">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
              src="/profile.webp"
              alt="Sarvesh Ahuja"
              width={320}
              height={320}
              className="rounded-full object-cover aspect-square shadow-2xl shadow-primary/10 border-4 border-background/50 z-10"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
       <a href="#focus" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 text-foreground/50"/>
      </a>
    </section>
  );
}
