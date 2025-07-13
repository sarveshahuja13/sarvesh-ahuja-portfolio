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
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Education
          </h2>
        </div>
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className='text-center'>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{education.degree}</CardTitle>
                <CardDescription className='text-lg text-muted-foreground'>{education.institution}</CardDescription>
                <p className="text-sm text-muted-foreground">{education.duration} | CGPA: {education.cgpa}</p>
            </CardHeader>
            <CardContent className="text-center">
                <p className='font-semibold mb-2'>Key Skills:</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {education.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
