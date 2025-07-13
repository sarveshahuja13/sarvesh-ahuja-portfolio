import React from 'react';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Selected Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            A selection of projects that demonstrate my skills and passion.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map(project => (
            <Card key={project.id} className="flex flex-col shadow-sm border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
