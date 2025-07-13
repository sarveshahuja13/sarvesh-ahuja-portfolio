import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            My professional journey and key contributions.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-4 h-full w-0.5 bg-border -z-10"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 pl-12 relative">
               <div className="absolute -left-0.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 ring-8 ring-background">
                    <Briefcase className="h-4 w-4 text-accent" />
                </div>
              </div>

              <div className="w-full">
                <Card className="shadow-sm border-border/50">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                            <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                            <CardDescription className="font-medium mt-1">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="w-fit font-normal text-sm mt-1 sm:mt-0">{exp.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.projects?.map((project, projIndex) => (
                      <div key={projIndex} className={projIndex > 0 ? 'mt-4 border-t pt-4' : ''}>
                        <h4 className="font-semibold text-primary">{project.name}</h4>
                        <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 text-sm">
                          {project.description.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
