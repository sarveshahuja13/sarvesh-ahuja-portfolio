import React from 'react';
import { BrainCircuit, Database, Server, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { focusAreas } from '@/lib/data';

const icons = [BrainCircuit, Database, Server, Settings];

export function FocusSection() {
  return (
    <section id="focus" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Current Focus Areas
          </h2>
           <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            The technologies and concepts I'm passionate about exploring and building with.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-4 ring-2 ring-accent/20">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-base leading-snug text-foreground">{area}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
