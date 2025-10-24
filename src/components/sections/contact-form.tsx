
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  projectType: z.string().nonempty({ message: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "7bff244b-11e9-43da-814c-af569e6f1ea8",
          name: values.name,
          email: values.email,
          company: values.company,
          projectType: values.projectType,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        // You can handle submission errors here, e.g., show a toast notification.
        console.error("Form submission error:", result);
      }
    } catch (error) {
      // You can handle network errors here.
      console.error("An error occurred:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-card/30 backdrop-blur-sm border border-border/20 p-8 md:p-12 rounded-xl shadow-2xl shadow-primary/5">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center justify-center h-full min-h-[400px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6"
            >
              <Check className="w-12 h-12" />
            </motion.div>
            <h3 className="text-2xl font-headline font-bold">Message Received!</h3>
            <p className="mt-4 text-muted-foreground max-w-sm">
              The theorem is being solved. I'll be in touch soon!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder=" " {...field} className="peer pt-6" />
                            <FormLabel className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary">Name</FormLabel>
                          </div>
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
                        <FormControl>
                           <div className="relative">
                            <Input placeholder=" " {...field} className="peer pt-6" />
                            <FormLabel className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary">Email</FormLabel>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                           <div className="relative">
                            <Input placeholder=" " {...field} className="peer pt-6" />
                            <FormLabel className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary">Company (Optional)</FormLabel>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-auto py-2">
                              <div className="flex flex-col items-start">
                                <span className="text-xs text-muted-foreground">Project Type</span>
                                <SelectValue placeholder="Select a type" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="web-dev">Web Development</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                            <Textarea placeholder=" " {...field} className="peer pt-6 min-h-[120px]" />
                             <FormLabel className="absolute top-5 -translate-y-1/2 left-3 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-primary">Message</FormLabel>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col items-center">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto px-12 py-6 text-lg">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        "Transmit Request"
                      )}
                    </Button>
                     <p className="text-xs text-muted-foreground mt-4 text-center">
                        Your data is encrypted and secure. This is just the first step in a confidential, collaborative process.
                    </p>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
