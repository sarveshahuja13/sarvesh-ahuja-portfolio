'use client';

import React, { useRef } from 'react';
import DecryptedText from '@/components/DecryptedText';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Professional Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            My professional journey and key contributions.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-4 h-full w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent -z-10"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 pl-12 relative">
              <div className="absolute -left-0.5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-8 ring-background border border-white/20">
                  <Briefcase className="h-3 w-3 text-white" />
                </div>
              </div>

              <div className="w-full h-full">
                <Card className="h-full shadow-lg border-white/5 bg-white/5 backdrop-blur-md hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="font-headline text-xl text-white">
                          <DecryptedText
                            text={exp.role}
                            speed={50}
                            maxIterations={20}
                            className="font-bold tracking-wide"
                            encryptedClassName="text-zinc-600"
                            animateOn="hover"
                            sequential
                          />
                        </CardTitle>
                        <CardDescription className="font-medium mt-1 text-muted-foreground">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit font-mono text-xs mt-1 sm:mt-0 border-white/10 text-zinc-400 bg-black/20">{exp.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.projects?.map((project, projIndex) => (
                      <div key={projIndex} className={projIndex > 0 ? 'mt-4 border-t border-border/50 pt-4' : ''}>
                        <h4 className="font-semibold text-white tracking-wide">{project.name}</h4>
                        <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 text-sm">
                          {project.description.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {exp.skills && (
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-white/10 bg-white/5 text-zinc-300 text-[10px] hover:bg-white/20 hover:text-white transition-colors cursor-default">
                              {skill}
                            </Badge>
                          ))}
                        </div>
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
