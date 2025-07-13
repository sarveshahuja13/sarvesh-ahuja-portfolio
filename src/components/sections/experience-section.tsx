import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-2">
            My professional journey and key contributions.
          </p>
        </div>
        
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 flex items-start">
              <div className="absolute -left-[1.35rem] mt-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-8 ring-background">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-4 w-4 text-primary" />
                </div>
              </div>

              <div className="pl-12 w-full">
                <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div>
                            <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                            <CardDescription className="font-medium">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">{exp.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.projects?.map((project, projIndex) => (
                      <div key={projIndex} className={projIndex > 0 ? 'mt-4 border-t pt-4' : ''}>
                        <h4 className='font-headline font-semibold text-primary'>{project.name}</h4>
                        <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 text-sm">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {exp.description && (
                        <div className="mt-4 border-t pt-4">
                            <h4 className='font-headline font-semibold text-primary'>Key Responsibilities</h4>
                            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                {exp.description.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
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
