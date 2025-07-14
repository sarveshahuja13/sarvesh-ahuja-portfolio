import React from 'react';
import { Music, Mountain, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const hobbies = [
  { id: 1, name: 'Indian Classical Flute', description: '8+ years of learning, merging discipline with creativity.', icon: <Music className="h-7 w-7 text-primary" /> },
  { id: 2, name: 'Rock Climbing', description: 'Problem-solving and strength, outdoors.', icon: <Mountain className="h-7 w-7 text-primary" /> },
  { id: 3, name: 'Calisthenics', description: 'Engineering bodyweight strength, currently mastering the front lever.', icon: <Dumbbell className="h-7 w-7 text-primary" /> },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Beyond the Code
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            Passions that fuel my creativity and discipline.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map(hobby => (
            <Card key={hobby.id} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-accent/10">
              <CardHeader className="pb-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 ring-2 ring-primary/20">
                  {hobby.icon}
                </div>
                <CardTitle className="font-headline text-lg text-foreground">{hobby.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
