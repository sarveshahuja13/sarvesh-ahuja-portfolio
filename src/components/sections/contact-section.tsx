'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, AlertTriangle, CheckCircle } from 'lucide-react';
import { Label } from '../ui/label';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 futuristic-bg">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed mt-3">
              Have a question, a project idea, or just want to connect?
            </CardDescription>
          </CardHeader>
          <CardContent>
            {status === 'success' ? (
              <div className="text-center p-8 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle className="mx-auto h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-green-300">Message Sent!</h3>
                <p className="text-green-400/80 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required className="bg-input/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-input/50" />
                </div>

                <div className="space-y-2">
                   <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[150px] bg-input/50" />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertTriangle className="h-5 w-5" />
                    <p>Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={status === 'submitting'} 
                  className="w-full bg-gradient-to-r from-accent to-primary text-accent-foreground font-bold text-lg py-6 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
