import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
            My professional journey and past experiences.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8 grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
              <div className={cn(
                'md:text-right',
                index % 2 === 0 ? 'md:order-1' : 'md:order-3'
              )}>
                 <p className="font-headline text-lg font-semibold">{exp.role}</p>
                 <p className="text-muted-foreground">{exp.company}</p>
                 <p className="text-sm text-muted-foreground font-medium mt-1">{exp.date}</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block md:order-2">
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              </div>
              <div className={cn(
                'relative mt-4 md:mt-0',
                index % 2 === 0 ? 'md:order-3' : 'md:order-1'
              )}>
                
                <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    {exp.projects?.map((project, projIndex) => (
                        <div key={projIndex} className={projIndex > 0 ? 'mt-4' : ''}>
                          <h4 className='font-headline font-semibold'>{project.name}</h4>
                          <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                              {project.details.map((detail, detailIndex) => (
                                  <li key={detailIndex}>{detail}</li>
                              ))}
                          </ul>
                        </div>
                    ))}
                    {exp.description && (
                         <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                            {exp.description.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    )}
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
