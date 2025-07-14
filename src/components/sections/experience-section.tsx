import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            My professional journey and key contributions.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-4 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -z-10"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 pl-12 relative">
               <div className="absolute -left-0.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                    <Briefcase className="h-4 w-4 text-primary" />
                </div>
              </div>

              <div className="w-full">
                <Card className="shadow-lg border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                            <CardTitle className="font-headline text-xl text-foreground/90">{exp.role}</CardTitle>
                            <CardDescription className="font-medium mt-1 text-muted-foreground">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="w-fit font-normal text-sm mt-1 sm:mt-0 bg-secondary/50 text-secondary-foreground/80">{exp.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.projects?.map((project, projIndex) => (
                      <div key={projIndex} className={projIndex > 0 ? 'mt-4 border-t border-border/50 pt-4' : ''}>
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
