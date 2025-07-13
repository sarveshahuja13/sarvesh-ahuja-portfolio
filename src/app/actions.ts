'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid data' };
  }

  // Simulate sending an email or saving to a database
  console.log('New contact form submission:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, you would handle potential errors here.
  // For this example, we'll always return success.
  return { success: true };
}
