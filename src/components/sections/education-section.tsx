import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = {
    degree: 'B.Tech in Computer Science (AI & ML Specialization)',
    institution: 'SRM IST, Chennai',
    duration: '2020 – 2024',
    cgpa: '9.00',
    skills: ['Algorithms', 'NLP', 'Computer Vision', 'OS', 'DBMS', 'Networking'],
}

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Education
          </h2>
        </div>
        <Card className="max-w-3xl mx-auto shadow-sm border-border/50">
            <CardHeader className='text-center'>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-2xl">{education.degree}</CardTitle>
                <CardDescription className='text-lg text-muted-foreground mt-1'>{education.institution}</CardDescription>
                <p className="text-sm text-muted-foreground">{education.duration} | CGPA: {education.cgpa}</p>
            </CardHeader>
            <CardContent className="text-center pt-4">
                <p className='font-semibold mb-3 text-sm'>Key Coursework:</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {education.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
