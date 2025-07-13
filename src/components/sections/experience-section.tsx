import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { cn } from '@/lib/utils';

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
          {/* Vertical line for desktop */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={cn(
                "relative flex items-start mb-12",
                "md:grid md:grid-cols-2 md:gap-x-12",
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}
            >
              {/* Content Block */}
              <div className={cn(
                "w-full md:w-auto pl-8 md:pl-0",
                index % 2 === 0 ? "md:text-left" : "md:text-right"
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

              {/* Dot and Meta Info Block */}
              <div className={cn(
                "absolute top-0 left-0 w-full md:relative",
                index % 2 === 0 ? "md:order-first" : "md:order-last"
              )}>
                <div className="absolute left-0 top-1 -translate-x-1/2 md:left-1/2">
                   <div className="h-3 w-3 rounded-full bg-primary border-2 border-background"></div>
                </div>
                <div className={cn(
                  "pl-8 md:pl-0",
                  index % 2 === 0 ? "md:pl-[calc(50%+1.5rem)]" : "md:pr-[calc(50%+1.5rem)] md:text-right"
                )}>
                  <p className="font-headline text-lg font-semibold">{exp.role}</p>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">{exp.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
