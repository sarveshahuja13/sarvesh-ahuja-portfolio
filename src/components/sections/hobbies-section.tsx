import React from 'react';
import { BookOpen, Camera, Plane, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const hobbies = [
  { id: 1, name: 'Reading Sci-Fi', icon: <BookOpen className="h-8 w-8 text-primary" /> },
  { id: 2, name: 'Photography', icon: <Camera className="h-8 w-8 text-primary" /> },
  { id: 3, name: 'Traveling', icon: <Plane className="h-8 w-8 text-primary" /> },
  { id: 4, name: 'Fitness', icon: <Dumbbell className="h-8 w-8 text-primary" /> },
];

export function HobbiesSection() {
  return (
    <section id="hobbies" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Beyond the Keyboard
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-2">
            A few things I enjoy doing in my free time.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map(hobby => (
            <Card key={hobby.id} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {hobby.icon}
                </div>
                <CardTitle className="font-headline text-lg">{hobby.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
