import React from 'react';
import { motion } from 'framer-motion';
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
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Contact Information
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'starsetconsulting@gmail.com',
    link: 'mailto:contact@starset.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9110886128',
    link: 'tel:+919110886128',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'GNJERBI Foundation Incubation Centre',
    link: 'https://maps.app.goo.gl/HAzTkQZNT995LKuS8',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Monday - Friday: 9:00 AM - 5:00 PM',
    link: null,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch('https://formspree.io/f/xzzzyaep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFormSubmitted(true); // Trigger the Thank You message
        toast({
          title: 'Message Sent!',
          description: 'Your message has been successfully submitted.',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'There was an issue submitting the form. Please try again later.',
      });
    }
  };

  // Render Thank You message if the form is successfully submitted
  if (formSubmitted) {
    return (
      <div className="min-h-screen pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your message has been successfully submitted. We will get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message, and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below, and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
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
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
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
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
