'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto border-border/50 shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed mt-3">
              Have a question, a project idea, or just want to connect?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              {/* This form is submitted via standard HTML action, not AJAX. */}
              <form
                name="contact"
                method="POST"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* This hidden input is required for Netlify Forms to work correctly with Next.js */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit"
                  disabled={form.formState.isSubmitting} 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {form.formState.isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}