import React from 'react';
import { Music, Mountain, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const hobbies = [
  { id: 1, name: 'Indian Classical Flute', description: '8+ years of learning', icon: <Music className="h-7 w-7 text-accent" /> },
  { id: 2, name: 'Rock Climbing', description: 'And outdoor exploration', icon: <Mountain className="h-7 w-7 text-accent" /> },
  { id: 3, name: 'Calisthenics', description: 'Mastering the front lever', icon: <Dumbbell className="h-7 w-7 text-accent" /> },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Hobbies & Interests
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            A few things I enjoy doing in my free time.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map(hobby => (
            <Card key={hobby.id} className="text-center shadow-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                  {hobby.icon}
                </div>
                <CardTitle className="font-headline text-lg">{hobby.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
