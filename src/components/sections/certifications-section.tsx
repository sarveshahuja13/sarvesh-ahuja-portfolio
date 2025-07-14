import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/lib/data';

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Certifications & Training
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-3">
            My commitment to continuous learning and professional development.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map(cert => (
            <Card key={cert.id} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-accent/10">
              <CardHeader className="pb-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-4 ring-2 ring-accent/20">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="font-headline text-base leading-snug text-foreground">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground/80">{cert.issuer}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
