import React from 'react';
import { Code, Bot, Music, Cpu, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { Badge } from '../ui/badge';

const projectIcons = [Bot, Cpu, Music, Plane];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Personal Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            A selection of personal projects that demonstrate my skills and passion.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => {
             const Icon = projectIcons[index % projectIcons.length] || Code;
             return(
            <Card key={project.id} className="flex flex-col shadow-lg border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ring-2 ring-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl text-foreground/90">{project.title}</CardTitle>
                    <CardDescription className="mt-1 text-muted-foreground">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0 flex flex-col justify-between">
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm mb-4">
                    {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground/80">{tag}</Badge>
                  ))}
                 </div>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
