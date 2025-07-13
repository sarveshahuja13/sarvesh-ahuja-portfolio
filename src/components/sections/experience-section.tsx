import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/lib/data';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-2">
            My professional journey in the world of data and AI.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8 grid md:grid-cols-2 md:gap-8 items-start">
              <div className={cn(
                'md:text-right',
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              )}>
                <p className="text-sm text-muted-foreground font-medium">{exp.date}</p>
              </div>
              <div className={cn(
                'relative md:col-start-2',
                index % 2 === 0 ? 'md:order-2' : 'md:order-1 md:col-start-1 md:text-right'
              )}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                </div>
                <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className='flex items-start gap-3'>
                      <div className='mt-1.5 hidden md:block'>
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
