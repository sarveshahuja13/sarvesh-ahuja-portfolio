import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
            <Image
              src="/profile.webp"
              alt="Sarvesh Ahuja"
              width={160}
              height={160}
              className="rounded-full object-cover aspect-square shadow-lg border-4 border-background"
              data-ai-hint="professional portrait"
              priority
            />
            <div>
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Sarvesh Ahuja
              </h1>
              <h2 className="text-xl font-medium text-muted-foreground mt-1">
                Software Developer
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start space-x-2">
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://github.com/sarveshahuja13" aria-label="GitHub" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://www.linkedin.com/in/sarvesh-ahuja-ai-engineer" aria-label="LinkedIn" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://x.com/sarveshahuja13" aria-label="Twitter" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="mailto:sarvesh.ahuja13@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
            <h3 className="font-headline text-2xl font-semibold text-primary">About Me</h3>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p>
                Hi, I’m Sarvesh Ahuja — a software developer passionate about solving complex problems through code and design. With a strong foundation in AI, data engineering, and backend systems, I work at the intersection of innovation and execution.
              </p>
              <p>
                Currently, I’m working at Sun Life (SLGS), Bangalore, contributing to the design and deployment of scalable data platforms and backend pipelines using AWS services. I’m particularly interested in the evolving space of Agentic AI, and I’m actively exploring how Generative AI tools and frameworks can be applied in real-world production systems.
              </p>
              <p>
                I thrive on learning, building, and optimizing — whether it’s through developing robust data pipelines, deploying intelligent chatbots, or architecting cost-efficient cloud solutions. My approach combines practical engineering with a curiosity for the future of AI and cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
