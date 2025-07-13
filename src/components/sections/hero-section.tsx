import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-6 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Image
                  src="https://placehold.co/160x160.png"
                  alt="Sarvesh Ahuja"
                  width={160}
                  height={160}
                  className="mb-4 rounded-full"
                  data-ai-hint="professional portrait"
                />
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Sarvesh Ahuja
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground mt-1">
                  AI & Data Engineer
                </h2>
                <div className="mt-6 flex justify-center lg:justify-start space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:sarvesh.ahuja@example.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <h3 className="font-headline text-2xl font-semibold mb-4">About Me</h3>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
                  I am a passionate and results-driven AI and Data Engineer with a proven track record of designing, developing, and deploying robust machine learning models and data pipelines. My expertise lies in leveraging cutting-edge technologies to extract valuable insights from complex datasets and build intelligent systems that solve real-world problems. I am dedicated to clean code, scalable architecture, and continuous learning to stay at the forefront of the rapidly evolving AI landscape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
